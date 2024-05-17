import HeaderHero from "@/app/_component/header_hero";
import React from "react";

export default function Hero() {
    return (
        <>
            <div className="grid md:grid-cols-2 gap-2">
                <div className="flex-1 md:p-10 p-5 w-full items-center justify-center md:mt-2.5">
                    <HeaderHero/>
                </div>
                <div className="flex-1 md:p-10 p-5 w-full radius-2xl">
                    <div className="relative w-full h-64">
                        <div className="absolute inset-0 bg-gray-800 opacity-50 rounded-lg"></div>
                        <img
                            src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
                            alt="Gambar Anda"
                            className="absolute inset-0 w-full h-full object-cover rounded-lg"
                        />
                    </div>
                </div>
            </div>
        </>
    )
}