import Image from "next/image";
import Fade from "react-reveal/Fade";

const Banner = () => {
  return (
    <div className=" flex sm:block relative h-[400px] sm:h-[700px] lg:h-[750px] xl:[800px] 2xl:h-[850px] -mt-24">
      <Image
        src="https://links.papareact.com/0fm"
        layout="fill"
        objectFit="cover"
      />
      <div className="">
        <Fade bottom>
          <div className="absolute top-1/2 w-full text-center">
            <p className="text-sm sm:text-4xl font-bold text-red-500">
              Not sure where to go? Perfect.
            </p>
            <button className="text-purple-500 bg-white px-10 py-4 shadow-md rounded-full font-bold my-3 hover:shadow-xl active:scale-90 transition duration-150">
              I'm flexible
            </button>
          </div>
        </Fade>
      </div>
    </div>
  );
};

export default Banner;
