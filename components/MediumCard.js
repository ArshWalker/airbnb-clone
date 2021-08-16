import Image from "next/image";
function MediumCard({ img, title }) {
  return (
    <div className=" cursor-pointer hover:scale-105 transform transition duration-300 ease-out">
      <div className="relative h-[280px] w-[280px]">
        <Image src={img} layout="fill" className="rounded-xl" />
      </div>
      <h3 className="text-xl mt-3 font-mono">{title}</h3>
    </div>
  );
}

export default MediumCard;
