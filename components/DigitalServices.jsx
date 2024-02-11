import Image from "next/image";

import { digitalServices } from "@/constants";

const DigitalServices = () => {
  return (
    <section id="services" className="px-10 py-8 text-center">
      <h2 className="heading2">Stackkaroo&apos;s Digital Services</h2>
      <p className="subheading my-4 md:mx-10">
        We excel with reliability, innovation and customer-centric approach for
        our quality products. Our dedicated team ensures that the solutions
        provided are dependable and long-term
      </p>

      <div className="flex lg:flex-wrap p-3 lg:justify-center gap-10 my-10 max-lg:overflow-x-auto">
        {digitalServices.map((service) => (
          <article
            key={service.id}
            className="bg-border-gradient p-[1px] rounded-2xl lg:w-[350px] h-[350px]  max-lg:min-w-[300px]"
          >
            <div className="bg-white w-full h-full rounded-2xl p-8 relative flex flex-col justify-between">
              <div>
                <div className="flex justify-around items-center">
                  <Image
                    src={service.icon}
                    width={50}
                    height={50}
                    alt="icon"
                    className="object-contain"
                  />
                  <h3 className="heading3">{service.name}</h3>
                </div>

                <p className="subheading mt-4">{service.text}</p>
              </div>

              <div className="flex justify-center lg:justify-start">
                <Image
                  src="/assets/icons/right-arrow.svg"
                  width={30}
                  height={30}
                  alt="right-arrow"
                />
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default DigitalServices;
