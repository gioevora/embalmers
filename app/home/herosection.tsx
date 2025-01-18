'use client';
import { title, subtitle } from "@/components/primitives";
import { Button } from "@heroui/react";
import React from 'react';

const HeroSection = () => {
    return (
        <section
            className="flex items-center justify-center gap-4 py-8 md:py-10 bg-cover bg-center h-auto rounded-lg relative"
            style={{
                backgroundImage: "url('https://i.ibb.co/2Y1vj15/photo-2025-01-18-12-05-31.jpg')",
                backgroundSize: "cover",
                backgroundPosition: "center",
            }}
        >
            <div className="bg-black absolute top-0 left-0 inset-0 opacity-45 rounded-lg"></div>
            <div className="text-center bg-opacity-50 p-6 rounded-lg max-w-3xl py-24 z-10">
                <span className={title({ class: "text-secondary font-bold" })}>
                    EMBALMERS’&nbsp; UNMASKED
                </span>
                <br />
                <span className="text-light font-semibold text-3xl">
                    THE TRUTH BEHIND THEIR PROFESSION
                </span>
                <div className={subtitle({ class: "mt-4 italic text-light" })}>
                    “Though society whispers of what they don’t know, embalmers bring light where the dark feelings grow. With respect for the fallen and love for their art, they shatter the stigma and heal every heart”
                </div>
                <Button className="mt-4" color="primary">
                    Learn More
                </Button>
            </div>
        </section>
    );
};

export default HeroSection;
