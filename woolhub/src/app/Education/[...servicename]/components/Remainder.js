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
import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";


const Calendar = () => {
    const [startDate, setStartDate] = useState(new Date());
    return (
        <DatePicker
        selected={startDate}
        onChange={(date) => setStartDate(date)}
        inline
        />
    );
}

const Remainder = () => {
    const [open, setOpen] = useState(false);
    const [selectedDate, setSelectedDate] = useState(new Date());

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
                <DialogBody divider className="flex flex-col justify-center items-center mx-0 overflow-y-scroll sm:flex-row no-scrollbar">

                    <div className="sm:w-1/2 px-5 py-2 flex align-center justify-center">
                        <Calendar/>
                    </div>
                    <div className="sm:w-1/2 px-5 w-full flex flex-col gap-5">
                        <h3>
                            Enter some Details :
                        </h3>
                        <input type="text" class="py-3 px-4 block w-full border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400" placeholder="Email" />
                        <input type="text" class="py-3 px-4 block w-full border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400" placeholder="Sheep Vaccination Name" />
                        <textarea class="py-3 px-4 block w-full border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 resize-none" rows="7" placeholder="Write down description"></textarea>
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