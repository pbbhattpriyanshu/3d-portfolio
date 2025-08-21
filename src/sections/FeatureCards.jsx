import { abilities } from "../constants/index";

const FeatureCards = () => (
  <div className="w-full padding-x-lg">
    <div className="mx-auto grid grid-cols-1 md:grid-cols-3 gap-1 md:gap-5">
      {abilities.map(({ imgPath, title, desc }) => (
        <div
          key={title}
          className="border border-red-500 bg-black rounded-xl p-8 flex flex-col gap-4"
        >
          <div className="size-14 flex items-center justify-center rounded-full">
            <img src={imgPath} alt={title} />
          </div>
          <h3 className="text-white text-2xl font-semibold mt-2">{title}</h3>
          <p className="text-white text-lg">{desc}</p>
        </div>
      ))}
    </div>
  </div>
);

export default FeatureCards;