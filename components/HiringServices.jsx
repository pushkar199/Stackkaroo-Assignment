import { hiringServices } from "@/constants";
import Image from "next/image";

const HiringServices = () => {
  return (
    <section id="contact-us" className="px-10 py-8 text-center">
      <h2 className="heading2">
        Stackkaroo&apos; s Talent Hiring and Job Placement Services{" "}
      </h2>

      <p className="subheading my-4 md:mx-10">
        We are a talent searching platform that redesigns how companies hire
        talents. It is a cost-effective solution for industries. We also provide
        global job opportunities with good salaries, support, and professional
        development.
      </p>

      <div className="flex lg:flex-wrap p-3 lg:justify-center gap-10 my-10 max-lg:overflow-x-auto">
        {hiringServices.map((service) => (
          <article
            key={service.id}
            className="bg-white p-8 rounded-2xl lg:w-[350px] h-[350px]  max-lg:min-w-[300px] flex flex-col items-center border-gray-1 border-1 shadow-gray"
          >
            <Image
              src={service.icon}
              width={50}
              height={50}
              alt="icon"
              className="object-contain"
            />
            <h3 className="heading3">{service.name}</h3>

            <p className="subheading mt-4">{service.text}</p>
          </article>
        ))}
      </div>
    </section>
  );
};

export default HiringServices;
