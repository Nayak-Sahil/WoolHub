import React, { useState } from 'react'
import{
    Accordion,
    AccordionHeader,
    AccordionBody,
} from "@material-tailwind/react";

const AccordionComponent = ({openAccordion,handleOpenAccordion}) => {
  return (
    <>
      <Accordion open={openAccordion === 1} icon={<Icon id={1} open={openAccordion} />}>
        <AccordionHeader onClick={() => handleOpenAccordion(1)}>What is the purpose of the app-based solution for the wool sector in India?</AccordionHeader>
        <AccordionBody>
        The app-based solution aims to modernize and enhance the wool sector in India by providing a range of features to support wool producers, from accessing market information to improving their production and marketing skills.
        </AccordionBody>
      </Accordion>
      <Accordion open={openAccordion === 2} icon={<Icon id={2} open={openAccordion} />}>
        <AccordionHeader onClick={() => handleOpenAccordion(2)}>
        How does the wool trading platform work?
        </AccordionHeader>
        <AccordionBody>
        The wool trading platform allows wool producers to directly buy and sell wool to and from other farmers or buyers within the app, simplifying the trading process.
        </AccordionBody>
      </Accordion>
      <Accordion open={openAccordion === 3} icon={<Icon id={3} open={openAccordion} />}>
        <AccordionHeader onClick={() => handleOpenAccordion(3)}>
        Can wool producers sell their wool online using the app?
        </AccordionHeader>
        <AccordionBody>
        Yes, the app provides an online wool marketplace where wool producers can list and sell their wool directly to interested buyers, expanding their market reach.
        </AccordionBody>
      </Accordion>
      <Accordion open={openAccordion === 4} icon={<Icon id={4} open={openAccordion} />}>
        <AccordionHeader onClick={() => handleOpenAccordion(4)}>
        Is the app free to use for wool producers and artisans?
        </AccordionHeader>
        <AccordionBody>
        The app may offer a free basic version with limited features, but there may be premium or subscription-based options that provide access to advanced features and resources.
        </AccordionBody>
      </Accordion>
      <Accordion open={openAccordion === 5} icon={<Icon id={5} open={openAccordion} />}>
        <AccordionHeader onClick={() => handleOpenAccordion(5)}>
        What is wool tracking, and how does the app facilitate it?
        </AccordionHeader>
        <AccordionBody>
        Wool tracking allows users to monitor the entire journey of their wool, from farm to market. The app provides tools to record production data and track the transportation of wool, ensuring transparency and traceability.
        </AccordionBody>
      </Accordion>
    </>
  )
}

export default AccordionComponent


function Icon({ id, open }) {
  return (
      <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={2}
          stroke="currentColor"
          className={`${id === open ? "rotate-180" : ""} h-5 w-5 transition-transform`}
      >
          <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
      </svg>
  );
}