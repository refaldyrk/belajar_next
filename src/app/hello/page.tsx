import NavigationBar from "@/app/_component/navbar";
import React from "react";

export default function Hello() {
    return (
        <>
            <NavigationBar />
            <div>
                <h1 className="text-3xl font-bold underline">Hello, Next.js!</h1>
            </div>
        </>
    );
}