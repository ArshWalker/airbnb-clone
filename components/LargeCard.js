import Image from "next/image";
function LargeCard({ img, title, description, buttonText }) {
  return (
    <section className="relative py-16 cursor-pointer">
      {/* img */}
      <div className="relative h-96 min-w-[300px]">
        <Image
          src={img}
          layout="fill"
          objectFit="cover"
          className="rounded-2xl"
        />
      </div>
      {/* text */}
      <div className="absolute top-28 left-7 md:top-32 md:left-12 font-serif">
        <h3 className="text-xl font-bold mb-3 w-64 lg:text-4xl">{title}</h3>
        <p>{description}</p>

        <button className="text-sm text-white bg-gray-900 px-4 py-2 rounded-lg mt-4 font-serif hover:bg-green-400 active:scale-90 transition duration-150">
          {buttonText}
        </button>
      </div>
    </section>
  );
}

export default LargeCard;
