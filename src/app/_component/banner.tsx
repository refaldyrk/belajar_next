import { useEffect, useState } from "react";
import { Banner } from "flowbite-react";
import { HiX } from "react-icons/hi";
import { BsInfo } from "react-icons/bs";

export default function BannerBottom() {
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

    return (
        <Banner className={`absolute bottom-0 left-0 right-0 z-50 ${isSticky ? 'sticky' : ''}`}>
            <div className="flex w-full justify-between border-t border-gray-200 bg-gray-50 p-4 dark:border-gray-600 dark:bg-gray-700" style={{ transition: "all 0.3s" }}>
                <div className="mx-auto flex items-center">
                    <p className="flex items-center text-sm font-normal text-gray-500 dark:text-gray-400">
                        <span className="mr-3 inline-flex h-6 w-6 items-center justify-center rounded-full bg-gray-200 p-1 dark:bg-gray-600">
                            <BsInfo className="h-4 w-4" />
                        </span>
                        <span className="[&_p]:inline">
                            New Product On Store&nbsp;
                        </span>
                    </p>
                </div>
                <Banner.CollapseButton color="gray" className="border-0 bg-transparent text-gray-500 dark:text-gray-400">
                    <HiX className="h-4 w-4" />
                </Banner.CollapseButton>
            </div>
        </Banner>
    );
}
