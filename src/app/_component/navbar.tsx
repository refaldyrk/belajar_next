'use client'
import {Button, DarkThemeToggle, Flowbite, Navbar} from "flowbite-react";
import Link from "next/link";
import {useEffect, useState} from "react";
import ModalSimple from "@/app/_component/modal_simple";

const routes = [
    {
        name: 'Home',
        path: '/'
    },
    {
        name: 'About',
        path: '/hello'
    }
];

function renderTabComponent(path: string) {
    var tabComponent = routes.map(route =>
        // eslint-disable-next-line react/jsx-key
        <Navbar.Link key={route.name} href={route.path} {...(path === route.path ? {active: true} : {active: false})}>
            {route.name}
        </Navbar.Link>
    )

    return (
        <>
            {tabComponent}
        </>
    )
}

export default function NavigationBar() {
    const [isSticky, setIsSticky] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const offset = window.scrollY;
            if (offset > 0) {
                setIsSticky(true);
            } else {
                setIsSticky(false);
            }
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    const [openModal, setOpenModal] = useState(false);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('')
    return (
        <>
            <Navbar fluid className={isSticky ? "sticky top-0 bg-white z-50 shadow-md" : ""}>
                <Navbar.Brand href="https://flowbite-react.com">
                    <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">Next</span>
                </Navbar.Brand>

                <div className="sm:flex md:order-2 md:gap-3 md:items-center">
                    <Navbar.Collapse>
                        {renderTabComponent(window.location.pathname)}
                    </Navbar.Collapse>
                    <DarkThemeToggle />
                    <Button outline gradientDuoTone="greenToBlue" onClick={() => { setOpenModal(true) }}> {/* Open modal on button click */}
                        Login
                    </Button>
                    <Navbar.Toggle />
                </div>

            </Navbar>
            <ModalSimple open={openModal} setOpenModal={setOpenModal}  email={email} setEmail={setEmail} password={password} setPassword={setPassword}/> {/* Pass setOpenModal function to child component */}
        </>
    )
}

