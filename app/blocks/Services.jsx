import Code from "@/public/svg/code";
import Web from "@/public/svg/web";
import Computer from "@/public/svg/computer";

export default function Services() {
  return (
    <div className="container mx-auto p-6 h-fit">
      <p className="font-crispy text-4xl">Services</p>
      <div className="grid grid-cols-1 lg:grid-cols-3 my-12 gap-4">
        <div className="w-full h-[250px]  shadow-lg rounded-lg bg-[#6c6ce5] flex flex-col justify-center items-center text-white text-center gap-2">
          <Web />
          <span className="text-lg font-crispy px-4 leading-[100%]">
            Frontend Development
          </span>
          <span className="text-mdpx-4">
            Lorem ipsum dolor sit amet consectetuer adipiscing elit aenean
            commodo ligula eget
          </span>
        </div>
        <div className="w-full h-[250px]  shadow-lg rounded-lg bg-[#f8d74c] flex flex-col justify-center items-center text-gray-700 text-center gap-2">
          <Code />
          <span className="text-lg font-crispy px-6 leading-[100%]">
            Backend Development
          </span>
          <span className="text-mdpx-4">
            Lorem ipsum dolor sit amet consectetuer adipiscing elit aenean
            commodo ligula eget
          </span>
        </div>
        <div className="w-full h-[250px]  shadow-lg rounded-lg bg-[#f04a60] flex flex-col justify-center items-center text-white text-center gap-2">
          <Computer />
          <span className="text-lg font-crispy px-4 leading-[100%]">
            ON-page seo
          </span>
          <span className="text-mdpx-4">
            Lorem ipsum dolor sit amet consectetuer adipiscing elit aenean
            commodo ligula eget
          </span>
        </div>
      </div>
    </div>
  );
}
