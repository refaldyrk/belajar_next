'use client'
import NavigationBar from "@/app/_component/navbar";
import React from "react";
import Hero from "@/app/_component/hero";
import BannerBottom from "@/app/_component/banner";
import PricingPage from "@/app/_component/pricing";
import {Card, Footer, Label, Textarea, TextInput} from "flowbite-react";
import {BsFillTelephoneFill, BsTelephone} from "react-icons/bs";
import {MdEmail, MdOutlineEmail} from "react-icons/md";
import Email from "@/app/_component/email";

export default function Page() {

    return (
        <>
            <div>
                <NavigationBar/>
            </div>
            <div>
                <Hero/>
            </div>
            <div>
                <PricingPage/>
            </div>
            <div className="container">
                <Email/>
            </div>
            <div>
                <BannerBottom/>
            </div>
            <div>
                <Footer container>
                    <Footer.Copyright href="#" by="Next" year={new Date().getUTCFullYear()}/>
                    <Footer.LinkGroup>
                        <Footer.Link href="#">Pricing</Footer.Link>
                        <Footer.Link href="#">Contact</Footer.Link>
                    </Footer.LinkGroup>
                </Footer>
            </div>
        </>
    );
}