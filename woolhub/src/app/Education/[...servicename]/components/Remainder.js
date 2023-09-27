"use client"
import {
    Button,
    Dialog,
    DialogHeader,
    DialogBody,
    DialogFooter,
    Input,
    Textarea
} from "@material-tailwind/react";
import { Datepicker } from "flowbite-react";
import { useState } from "react";

const Remainder = () => {
    const [open, setOpen] = useState(false);
    // Datepicker(datepickerEl,{

    // })

    const handleOpen = () => setOpen(!open);
    return (
        <>
            <button className={`bg-primary px-8 py-2 rounded-lg text-white hover:scale-95 hover:bg-[#0089ff] duration-75 font-extralight`} onClick={handleOpen}>
                Set Reminder
            </button>
            <Dialog
                open={open}
                size={"lg"}
                handler={handleOpen}
                >
                <DialogHeader className="text-lg sm:text-2xl">Let's set remainder for vaccine of particular sheep</DialogHeader>
                <DialogBody divider className="flex flex-col justify-center items-center mx-0 overflow-y-scroll sm:flex-row">

                    <div className="sm:w-1/2 px-5 py-2">
                        The key to more success is to have a lot of pillows. Put it this way,
                        it took me twenty five years to get these plants, twenty five years of
                        blood sweat and tears, and I&apos;m never giving up, I&apos;m just
                        getting started. I&apos;m up to something. Fan luv.
                    </div>
                    <div className="sm:w-1/2 px-5 w-full flex flex-col gap-5">
                        <h3>
                            Enter some Details :
                        </h3>
                        <Input type="email" label="Email" />
                        <Input type="email" label="Sheep name or ID" />
                        <Textarea className="" type="text" label="Vaccine Name or Description?" />
                    </div>
                </DialogBody>
                <DialogBody>
                </DialogBody>
                <DialogFooter>
                    <Button
                        variant="text"
                        color="blue"
                        onClick={handleOpen}
                        className="mr-1"
                    >
                        <span>Cancel</span>
                    </Button>
                    <Button
                        variant="gradient"
                        color="blue"
                        onClick={handleOpen}
                    >
                        <span>Confirm</span>
                    </Button>
                </DialogFooter>
            </Dialog>
        </>
    )
}

export default Remainder