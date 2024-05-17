import {useState} from "react";
import {Button, Checkbox, Label, Modal, TextInput} from "flowbite-react";

export default function ModalSimple(props: { open: boolean, setOpenModal: Function, email: string, setEmail: Function, password: string, setPassword: Function}) {
    function onCloseModal() {
        props.setOpenModal(false);
        props.setEmail('');
    }
    return (
        <>
            <Modal show={props.open} size="md" onClose={onCloseModal} popup>
                <Modal.Header />
                <Modal.Body>
                    <div className="space-y-6">
                        <h3 className="text-xl font-medium text-gray-900 dark:text-white">Sign in to our platform</h3>
                        <div>
                            <div className="mb-2 block">
                                <Label htmlFor="email" value="Your email" />
                            </div>
                            <TextInput
                                id="email"
                                placeholder="name@company.com"
                                value={props.email}
                                onChange={(event) => props.setEmail(event.target.value)}
                                required
                            />
                        </div>
                        <div>
                            <div className="mb-2 block">
                                <Label htmlFor="password" value="Your password" />
                            </div>
                            <TextInput
                                id="password"
                                type="password"
                                placeholder="******"
                                value={props.password}
                                onChange={event => props.setPassword(event.target.value)}
                                required
                            />
                        </div>
                        <div className="w-full flex flex-wrap items-start gap-2">
                            <Button>Sign In</Button>
                            <Button color="light">Sign Up</Button>
                        </div>
                    </div>
                </Modal.Body>
            </Modal>
        </>
    )
}
