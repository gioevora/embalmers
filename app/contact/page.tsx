"use client";
import { Button, Card, CardBody, Input, Link, Textarea } from "@heroui/react";
import React from "react";
import {
  FaFacebookF,
  FaFacebookMessenger,
  FaPhone,
  FaTelegram,
  FaViber,
  FaWhatsapp,
} from "react-icons/fa6";
import { MdEmail } from "react-icons/md";

import { title } from "@/components/primitives";

const ContactSection = () => {
  return (
    <div className="w-full">
      <h1 className={title()}>Contact Us</h1>

      {/* Contact Section Description */}
      <p className="text-lg text-gray-700 mb-8 ">
        We would love to hear from you! Please fill out the form below and we
        will get back to you as soon as possible.
      </p>

      <div className="w-full grid grid-cols-3 justify-between gap-8 py-8">
        {/* Google Map Section */}
        <div className="col-span-3 order-2 md:order-1 md:col-span-2 max-w-full">
          <Card className="relative overflow-visible w-full">
            <CardBody>
              <iframe
                allowFullScreen
                className="w-full"
                height="450"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7811.110573346462!2d121.15413722909844!3d13.388872876411778!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33bceed6e29309c7%3A0x963e2dc010195599!2sMindoro%20State%20University%2C%20Calapan%20City%20Campus!5e1!3m2!1sen!2sph!4v1737362942478!5m2!1sen!2sph"
                style={{ border: 0 }}
                title="Google Maps Embed"
              />
            </CardBody>

            <div className="md:absolute bottom-8 md:left-0 md:transform space-y-2 z-10">
              {/* Sales Card */}
              <Card className="max-w-sm shadow-lg">
                <CardBody>
                  <div className="flex items-center gap-4">
                    <div className="bg-violet-300 p-3 rounded-md">
                      <FaPhone className="text-violet-600" size={24} />
                    </div>
                    <div>
                      <p className="text-default-500">Phone</p>
                      <p className="font-bold">
                        <Link
                          className="text-md md:text-lg"
                          href="tel:09651983796"
                        >
                          09065524625
                        </Link>
                      </p>
                    </div>
                  </div>
                </CardBody>
              </Card>

              {/* Email Card */}
              <Card className="max-w-sm shadow-lg">
                <CardBody>
                  <div className="flex items-center gap-4">
                    <div className="bg-violet-300 p-3 rounded-md">
                      <MdEmail className="text-violet-600" size={24} />
                    </div>
                    <div>
                      <p className="text-default-500">Email</p>
                      <p className="font-bold">
                        <Link
                          className="text-md md:text-lg"
                          href="mailto:abic.gabmercado@gmail.com"
                        >
                          embalmersunmasked@gmail.com
                        </Link>
                      </p>
                    </div>
                  </div>
                </CardBody>
              </Card>
            </div>
          </Card>

          <div className="py-12">
            <h1 className="font-bold">Reach out us on:</h1>
            <div className="flex gap-4 py-4">
              <div className="bg-primary-300 p-2 rounded-md">
                <FaFacebookMessenger className="text-primary-600" size={24} />
              </div>

              <div className="bg-primary-300 p-2 rounded-md">
                <FaFacebookF className="text-primary-600" size={24} />
              </div>

              <div className="bg-primary-300 p-2 rounded-md">
                <FaTelegram className="text-primary-600" size={24} />
              </div>

              <div className="bg-primary-300 p-2 rounded-md">
                <FaWhatsapp className="text-primary-600" size={24} />
              </div>

              <div className="bg-primary-300 p-2 rounded-md">
                <FaViber className="text-primary-600" size={24} />
              </div>
            </div>
          </div>
        </div>

        {/* Form Section */}
        <div className="col-span-3 order-1 md:order-2 md:col-span-1 min-w-lg w-full text-start text-md text-default-700">
          <Card className="relative overflow-visible w-full py-6">
            <CardBody>
              <div className="flex flex-col gap-4">
                <Input label="Full Name" type="text" />
                <Input label="Email" type="email" />
                <Textarea
                  className="max-w-full"
                  label="Description"
                  placeholder="Enter your description"
                />

                {/* Submit Button */}
                <Button className="w-full" color="primary">
                  Submit
                </Button>

                {/* Note about Submission */}
                <p className="text-sm text-gray-500 mt-2">
                  Note: Your information will be submitted securely. We will get
                  back to you as soon as possible.
                </p>
              </div>
            </CardBody>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;
