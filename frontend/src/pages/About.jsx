import React from "react";
import Title from "../components/Title";
import { assets } from "../assets/assets";
import NewsletterBox from "../components/NewsletterBox";
import { motion } from "framer-motion";

export default function About() {
  return (
    <div>
      <div className="text-2xl text-center pt-8 border-t">
        <Title text1={"ABOUT"} text2={"US"} />
      </div>
      <div
      
        className="my-10 flex flex-col md:flex-row gap-16"
      >
        <img
          className="w-full md:max-w-[450px]"
          src={assets.about_img}
          alt=""
        />
        < motion.div
          initial={{ opacity: 0, x: 200 }}
        transition={{ duration: 1 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        className="flex flex-col justify-center gap-6 md:w-2/4 text-gray-600">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem
            veritatis nisi expedita, aliquid excepturi harum voluptas totam
            suscipit facilis reprehenderit laudantium, in molestias, asperiores
            dolore! Fuga at explicabo amet? Explicabo.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos commodi
            a harum officiis maxime, vel fuga magnam expedita blanditiis sunt
            illo non, facilis ipsam molestiae eveniet odit. Necessitatibus, odio
            harum?
          </p>
          <b className="text-gray-800">Our Mission</b>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam et
            vero, reprehenderit eveniet fuga excepturi molestias, cumque dicta
            atque accusamus inventore veniam qui. Dolorum, corporis? A iure
            nobis quod nisi.
          </p>
        </motion.div>
      </div>
      <div className="text-4xl py-4">
        <Title text1={"WHY"} text2={"CHOOSE US"} />
      </div>
      <div className="flex flex-col md:flex-row text-sm mb-20">
        <div className="border px-10 md:px-16 py-5 sm:py-10 flex flex-col gap-5">
          <b>Quality Assurance:</b>
          <p className="text-gray-700">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni
            nulla, fugiat rem iste illo consequatur reprehenderit sit eum
            blanditi
          </p>
        </div>
        <div className="border px-10 md:px-16 py-5 sm:py-10 flex flex-col gap-5">
          <b>Convenience:</b>
          <p className="text-gray-700">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque,
            harum inventore eligendi deserunt magnam, dolorum corporis nostrum
            quo aliquam minus
          </p>
        </div>
        <div className="border px-10 md:px-16 py-5 sm:py-10 flex flex-col gap-5">
          <b>Exceptional Customer Services:</b>
          <p className="text-gray-700">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae
            possimus pariatur quasi, quas enim eveniet iste ipsam ipsum
            similique repellat explicabo
          </p>
        </div>
      </div>
      <NewsletterBox />
    </div>
  );
}
