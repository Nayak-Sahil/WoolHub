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
import AccordionComponent from "./AccordionComponent";

export default function MessageDialog({ handleOpen, open }) {
    const [openAccordion, setOpenAccordion] = useState(0);
    const [isAccordion, setIsAccordion] = useState(true);

    const handleOpenAccordion = (value) => setOpenAccordion(openAccordion === value ? 0 : value);
    return (
        <>
            <Dialog open={open} handler={handleOpen} dismiss={{ outsidePress: ((onClick) => { setIsAccordion(true); handleOpen(); handleOpenAccordion() }) }}>
                <div className="flex items-center justify-between">
                    <DialogHeader>Most Ask FAQs :</DialogHeader>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="mr-3 h-5 w-5"
                        onClick={handleOpen}
                    >
                        <path
                            fillRule="evenodd"
                            d="M5.47 5.47a.75.75 0 011.06 0L12 10.94l5.47-5.47a.75.75 0 111.06 1.06L13.06 12l5.47 5.47a.75.75 0 11-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 01-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 010-1.06z"
                            clipRule="evenodd"
                        />
                    </svg>
                </div>
                <DialogBody divider>
                    <div className="grid gap-6">
                        {
                            isAccordion ?
                                <AccordionComponent openAccordion={openAccordion} handleOpenAccordion={handleOpenAccordion} />
                                :
                                <>
                                    <Input type="email" label="Email" />
                                    <Textarea type="text" label="Question?" />
                                </>
                        }
                    </div>
                </DialogBody>
                <DialogFooter className="space-x-2">
                    <Button variant="outlined" color="blue" onClick={() => { setIsAccordion(true); handleOpenAccordion(); handleOpen() }}>
                        close
                    </Button>
                    {
                        isAccordion ?
                            <Button variant="gradient" color="blue" onClick={() => setIsAccordion(false)}>
                                Other Que?
                            </Button>
                            :
                            <Button variant="gradient" color="blue" onClick={()=>{
                                console.log("Try to send question")
                                setIsAccordion(true);
                                handleOpenAccordion();
                                handleOpen();
                            }}>
                                Send Question
                            </Button>
                    }
                </DialogFooter>
            </Dialog>
        </>
    );
}