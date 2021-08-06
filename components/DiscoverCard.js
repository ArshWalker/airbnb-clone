import Image from "next/image";
function DiscoverCard({ img, title, desc }) {
  return (
    <div className="cursor-pointer hover:scale-105 transform transition duration-300 ease-out">
      <div className="relative h-[340px] w-[340px]">
        <Image src={img} layout="fill" className="rounded-xl" />
      </div>
      <h3 className="text-xl mt-3 font-mono w-3/4">{title}</h3>
      <p className="text-md mt-3 font-mono w-3/4">{desc}</p>
    </div>
  );
}

export default DiscoverCard;
