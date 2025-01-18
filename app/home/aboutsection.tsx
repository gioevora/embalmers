"use client";
import { Button, Image } from "@heroui/react";
import React from "react";

const AboutSection = () => {
  return (
    <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-12 bg-cover bg-center">
      <div className="inline-block text-center justify-center">
        <div className="grid grid-cols-2 gap-4 items-center bg-white bg-opacity-80 p-4 rounded-lg">
          <div className="col-span-2 md:col-span-1">
            <Image
              isBlurred
              isZoomed
              alt="HeroUI hero Image"
              className="w-full bg-cover"
              src="https://i.ibb.co/1KF0Kg3/photo-2025-01-18-12-05-29.jpg"
            />
          </div>
          <div className="col-span-2 md:col-span-1 text-start text-md text-default-700">
            <p>
              An embalmer is responsible for preserving, sanitizing, and
              preparing the deceased individual for viewing, funeral services,
              or transportation. Their work allows families to view their loved
              ones during wakes or memorial services in a dignified and
              respectful manner. It also requires technical knowledge,
              precision, and compassion. Moreover, embalmers not only ensure the
              physical preparation of the deceased but also support families by
              providing comfort through their expertise. Yet, their profession
              is often misunderstood and feared. This platform aims to educate,
              inform, and break the stigma surrounding the noble work embalmers
              do.
            </p>

            <Button className="mt-6" color="primary">
              Discover More
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
