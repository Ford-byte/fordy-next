import Image from "next/image";

export default function About() {
  return (
    <div className="h-[500px] bg-white w-full text-black py-12">
      <div className="mx-auto container flex flex-col gap-12">
        <p className="font-crispy text-4xl">About Me</p>
        <div>
          <div className="flex gap-6">
            <Image
              src={`/avatar-2.svg`}
              width={50}
              height={50}
              className="size-[200px] rounded-full "
              alt="avatar"
            />
            <div className="relative message w-full shadow-lg rounded-2xl p-4 grid grid-cols-2">
              <div className="text-gray-500 font-mono px-2">
                <p>
                  I'm Clifford, a web developer from the Philippines. With 2
                  years of experience, I specialize in using Content Management
                  System and Next.js for my projects. Let's build something
                  awesome together!
                </p>
                <button className="py-3 px-6 bg-[#454360] text-white rounded-full mt-4 hover:bg-[#776bff] transition-colors duration-300 cursor-pointer">
                  <a href="/resume.pdf" download="resume.pdf">
                    Download Resume
                  </a>
                </button>
              </div>
              <div className="font-crispy text-gray-700 flex flex-col gap-6">
                <div className="w-full">
                  <div className="flex justify-between ">
                    <span className="">Next Js</span>
                    <span>90%</span>
                  </div>
                  <div className="relative w-full h-[10px] bg-gray-500 rounded-lg">
                    <div className="absolute top-0 left-0 h-[10px] w-[90%] bg-red-500 rounded-lg"></div>
                  </div>
                </div>
                <div className="w-full">
                  <div className="flex justify-between ">
                    <span className="">Node Js</span>
                    <span>75%</span>
                  </div>
                  <div className="relative w-full h-[10px] bg-gray-500 rounded-lg">
                    <div className="absolute top-0 left-0 h-[10px] w-[75%] bg-yellow-500 rounded-lg"></div>
                  </div>
                </div>
                <div className="w-full">
                  <div className="flex justify-between ">
                    <span className="">On-page SEO</span>
                    <span>89%</span>
                  </div>
                  <div className="relative w-full h-[10px] bg-gray-500 rounded-lg">
                    <div className="absolute top-0 left-0 h-[10px] w-[89%] bg-blue-700 rounded-lg"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
