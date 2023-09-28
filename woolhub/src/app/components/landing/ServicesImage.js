"use client"
import React from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";
import Image from 'next/image'

export default function ServicesImage({type, img, align}) {
    useEffect(() => {
        AOS.init();
    }, []);
    return (
        <Image data-aos={(align == "row-reverse") ? "fade-right" : "fade-left"} data-aos-duration="1000" className="m-auto object-cover object-center rounded" alt="Market Analysis" src={img} width={(type != "Market") ? 400 : 500} height={(type != "Market") ? 400 : 500} />
    )
}
