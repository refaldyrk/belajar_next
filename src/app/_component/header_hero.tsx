import {Button} from "flowbite-react";
import React, {useState} from "react";
import ModalSimple from "@/app/_component/modal_simple";

export default function HeaderHero() {
    const [openModal, setOpenModal] = useState(false);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('')
    return (
        <>
            <div className="mb-5">
                <h1 className="text-5xl font-extrabold tracking-tight text-gray-900 dark:text-white">Welcome, Buddy</h1>
            </div>
            <div className="mb-5">
                <h4 className=" font-medium text-gray-900 dark:text-white sm:text-4xl">Lorem ipsum dolor sit amet
                    consectetur <br/>adipisicing elit</h4>
            </div>
            <div className="flex gap-2">
                <Button onClick={() => { setOpenModal(true) }} color="dark">Login Now</Button>
            </div>

            <ModalSimple open={openModal} setOpenModal={setOpenModal}  email={email} setEmail={setEmail} password={password} setPassword={setPassword}/> {/* Pass setOpenModal function to child component */}
        </>
    )
}