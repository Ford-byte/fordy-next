import Code from "@/public/svg/code";
import Web from "@/public/svg/web";
import Computer from "@/public/svg/computer";

export default function Services() {
  return (
    <div className="container mx-auto p-6 h-fit">
      <p className="font-crispy text-4xl">Services</p>
      <div className="grid grid-cols-1 lg:grid-cols-3 my-12 gap-4 h-[fit]">
        <div className="w-full shadow-lg rounded-lg bg-[#6c6ce5] flex flex-col justify-center items-center text-white text-center gap-2 py-2">
          <Web />
          <span className="text-lg font-crispy px-4 leading-[100%]">
            Frontend Development
          </span>
          <span className="text-md px-4 py-2">
            Front-end development builds a website's visual and interactive
            elements using HTML, CSS, and JavaScript for a responsive,
            user-friendly experience.
          </span>
        </div>
        <div className="w-full  shadow-lg rounded-lg bg-[#f8d74c] flex flex-col justify-center items-center text-gray-700 text-center gap-2 py-2">
          <Code />
          <span className="text-lg font-crispy px-6 leading-[100%]">
            Backend Development
          </span>
          <span className="text-md px-4 py-2">
            Back-end development focuses on server-side logic, databases, and
            APIs to power the functionality of websites and applications behind
            the scenes.
          </span>
        </div>
        <div className="w-full  shadow-lg rounded-lg bg-[#f04a60] flex flex-col justify-center items-center text-white text-center gap-2 py-2">
          <Computer />
          <span className="text-lg font-crispy px-4 leading-[100%]">
            ON-page seo
          </span>
          <span className="text-md px-4 py-2">
            On-page SEO involves optimizing individual web pages—including
            content, HTML tags, and internal links—to improve search engine
            rankings and drive relevant traffic.
          </span>
        </div>
      </div>
    </div>
  );
}
