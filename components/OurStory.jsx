import Image from "next/image";

import { ourStoryParas } from "@/constants";
import Button from "./ui/Button";

const OurStory = () => {
  return (
    <section id="about-us" className="max-lg:my-16 lg:px-10 lg:py-8">
      <h2 className="heading2 text-center">
        Stay Ahead!
        <br />
        Launch Your Next Project with Stackkaroo
      </h2>
      
      <div className="bg-white-gradient px-5 py-8 md:p-10 lg:rounded-2xl mt-4 lg:mt-8">
        <div className="flex lg:flex-row flex-col-reverse">
          <div className="lg:w-1/2 w-full">
            <h3 className="text-2xl text-bright-blue max-lg:text-center font-semibold">Our Story</h3>

            {ourStoryParas.map((para) => (
              <p key={para.id} className="body-text max-md:text-center mt-4">
                {para.content}
              </p>
            ))}

            <div className="flex justify-center lg:justify-start mt-8">
              <Button
                iconUrl="/assets/icons/vector.svg"
                name="Get Estimated Project Cost"
              />
            </div>
          </div>
          <div className="lg:w-1/2 w-full flex justify-center items-center">
            <Image
              src="/assets/images/ourstory-illustration.png"
              alt="illustration"
              height={240}
              width={375}
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurStory;
