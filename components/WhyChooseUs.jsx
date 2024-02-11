import Image from "next/image";

import { qualities } from "@/constants";

const WhyChooseUs = () => {
  return (
    <section id="work" className="px-10 py-8 text-center">
      <h2 className="heading2">Why Choose Us?</h2>
      <p className="subheading my-4 md:mx-10">
        We excel with reliability, innovation and customer-centric approach for
        our quality products. Our dedicated team ensures that the solutions
        provided are dependable and long-term
      </p>

      <div className="block md:flex md:justify-center gap-4 md:gap-x-10 flex-wrap my-10">
        {qualities.map((qual) => (
          <div key={qual.id} className="flex justify-start md:justify-between items-center md:gap-4 border-2 border-white rounded-full my-2 shadow-blue bg-blue-gradient md:rounded-2xl pr-4">
            <Image
              src={qual.icon}
              width={40}
              height={40}
              className="object-contain bg-white p-1 m-2 rounded-full md:rounded-lg w-[40px] md:w-[60px]"
            />

            <p className="heading3 my-3">{qual.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WhyChooseUs;
