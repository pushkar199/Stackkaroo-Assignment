import Image from "next/image";
import { seoServices } from "@/constants";

const SeoServices = () => {
  return (
    <section id="team" className="max-lg:my-16 lg:px-10 lg:py-8">
      <div className="bg-white-gradient p-10 lg:rounded-2xl mt-4 lg:mt-8">
        
        <h2 className="heading2 text-center">SEO Services</h2>

        <ul className="my-8 lg:flex lg:flex-wrap lg:justify-between">
          {seoServices.map((service) => (
            <li key={service.id} className="lg:max-w-[45%]">
              <div className="lg:flex gap-3 lg:items-start mt-8">
                <Image
                  src="/assets/icons/check.svg"
                  width={25}
                  height={25}
                  alt="checkbox"
                  className="hidden lg:inline"
                />
                <h3 className="heading3 max-lg:text-center">{service.name}</h3>
              </div>
              <p className="subheading max-lg:text-center mt-2">{service.text}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default SeoServices;
