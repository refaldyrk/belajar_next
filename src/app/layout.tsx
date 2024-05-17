import {Metadata} from "next";
import "./globals.css"
import React from "react";

export const metadata: Metadata = {
    title: 'Belajar Next',
    description: 'Belajar Next.js',
}

export default function RootLayout(
    {
        children
    }: {
    children: React.ReactNode
    }
) {
    return (
        <html lang="en">
            <body className="dark:bg-gray-900">{children}</body>
        </html>
    );
}