import Image from "next/image";
import React from "react";
import notFoundGif from "@/assets/not-found.gif";

const NotFound: React.FC = () => {
  return (
    <section className="flex items-center justify-center min-h-screen bg-white px-4 md:px-0">
      <div className="text-center">
        <div className="relative h-64 md:h-96">
          <Image
            src={notFoundGif}
            alt="Not Found"
            layout="fill"
            objectFit="cover"
            className="absolute inset-0"
          />
        </div>

        <div className="mt-[-30px] md:mt-[-50px] relative z-10">
          <h3 className="text-2xl md:text-4xl font-bold mt-4 text-black">
            Look like <span className="text-thOrange">Mr. Tech</span> lost the
            location.
          </h3>
          <p className="mt-2 text-sm md:text-base text-black">
            The page you are looking for is not available!
          </p>
        </div>
      </div>
    </section>
  );
};

export default NotFound;
