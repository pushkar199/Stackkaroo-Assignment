import { heroParas, services } from "@/constants";
import Image from "next/image";
import Button from "./ui/Button";

const Hero = () => {
  return (
    <section className="lg:px-10 lg:py-8">
      <div className="bg-white-gradient px-5 py-8 md:p-10 lg:rounded-2xl">
        <div className="flex lg:flex-row flex-col-reverse">
          <div className="lg:w-1/2 w-full">
            <h1 className="heading1 max-md:text-center">
              Diversifying the Designs of Digital World
            </h1>

            {heroParas.map((para) => (
              <p key={para.id} className="body-text max-md:text-center mt-4">
                {para.content}
              </p>
            ))}

            <div className="flex justify-center lg:justify-start mt-8">
              <Button iconUrl="/assets/icons/call.svg" name="Book a Call" />
            </div>
          </div>

          <div className="lg:w-1/2 w-full flex justify-center items-center">
            <Image
              src="/assets/images/hero-illustration.png"
              alt="illustration"
              height={270}
              width={300}
              className="object-cover"
            />
          </div>
        </div>
      </div>

      <div className="my-10 mx-5 font-semibold text-center ">
        In the realm of digital solutions, we offer expertise in
        <div className="flex flex-wrap justify-center gap-x-4 gap-y-2 my-2">
          {services.map((service) => (
            <button
              key={service.id}
              className="bg-white border-2 border-bright-blue text-bright-blue text-semibold rounded-full px-3 py-1"
            >
              {service.name}
            </button>
          ))}
        </div>
        showcasing our proficiency across various facets of the digital platform
      </div>
    </section>
  );
};

export default Hero;
