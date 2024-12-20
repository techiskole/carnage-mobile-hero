import heroImg from "../assets/hero.webp";

export const Hero = () => {
  return (
    <div className="relative">
      <img src={heroImg} />
      <button className="absolute bottom-[47%] left-1/2 bg-white uppercase rounded-full text-[14px] be-vietnam-pro-bold py-[10px] px-4 transform -translate-x-1/2">
        Shop the new Collection
      </button>
    </div>
  );
};
