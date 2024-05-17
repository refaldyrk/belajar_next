import {Card, Label, Textarea, TextInput} from "flowbite-react";
import {BsFillTelephoneFill} from "react-icons/bs";
import {MdEmail} from "react-icons/md";
import React from "react";

export default function Email() {
    return (
        <>
            <div className="p-10">
                <div className="grid grid-cols-1">
                    <Card>
                        <h5 className="mb-2 text-xl font-medium text-gray-600 dark:text-gray-400">Send Message</h5>
                        <div className="grid md:grid-cols-2 md:gap-4 sm:grid-cols-1">
                            <div>
                                <div className="max-w-md">
                                    <div className="mb-2 block">
                                        <Label htmlFor="base" value="Email"/>
                                    </div>
                                    <TextInput width="w-full" id="base" type="text" sizing="md"
                                               placeholder="user@email.com"/>
                                </div>
                                <div className="grid grid-cols-1">
                                    <div className="max-w-md">
                                        <div className="mb-2 block">
                                            <Label htmlFor="base" value="Message"/>
                                        </div>
                                        <Textarea id="comment" placeholder="Leave a message..." required rows={10}/>
                                    </div>
                                </div>
                            </div>
                            <div className="sm:mt-16 md:mt-0">
                                <h3 className="mb-2 text-xl font-medium text-gray-600 dark:text-gray-400">Contact</h3>
                                <div className="grid grid-rows-2 grid-flow-col gap-4">
                                    <div className="flex space-x-3 items-center decoration-gray-500">
                                        <BsFillTelephoneFill color="gray"/>
                                        <p className="text-base font-normal leading-tight text-gray-500 dark:text-gray-400">+62
                                            8888 8888 8888</p>
                                    </div>
                                    <div className="flex space-x-3 items-center decoration-gray-500">
                                        <MdEmail color="gray"/>
                                        <p className="text-base font-normal leading-tight text-gray-500 dark:text-gray-400">user@email.com</p>
                                    </div>
                                </div>
                                <div className="grid grid-rows-2 grid-flow-col gap-3 mt-5">
                                    <div className="flex space-x-3 items-center decoration-gray-500">
                                        <p className="text-base font-normal leading-tight text-gray-500 dark:text-gray-400">
                                            Alamat: <br/><br/>l. Raya Pasar Minggu No. 19, Pejaten Barat, Pasar
                                            Minggu, Jakarta
                                            Selatan 12510
                                            Telp : (021) 79194075
                                            Fax : (021) 7980655, 7949770
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Card>
                </div>
            </div>
        </>
    )
}