import Image from "next/image";
function TryDeployCard({ img, title, description, buttonText }) {
  return (
    <section className="relative py-16 cursor-pointer">
      {/* img */}
      <div className="relative h-[28rem] min-w-[300px]">
        <Image
          src={img}
          layout="fill"
          objectFit="cover"
          className="rounded-2xl w-3/4"
        />
      </div>
      {/* text */}
      <div className="absolute top-28 left-7 md:top-44 md:left-12 font-serif text-white">
        <h3 className="text-xl font-bold mb-3 w-64 lg:text-4xl">{title}</h3>
        <p className="break-normal whitespace-pre-line w-3/4 text-lg">
          {description}
        </p>

        <button className="text-md font-bold text-black bg-white px-5 py-4 rounded-lg mt-4 font-serif hover:bg-green-400 active:scale-90 transition duration-150">
          {buttonText}
        </button>
      </div>
    </section>
  );
}

export default TryDeployCard;
