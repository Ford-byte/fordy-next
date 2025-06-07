export default function Page() {
  return (
    <div className="p-4 lg:p-12 bg-white text-black">
      <h2 className="font-crispy text-4xl text-gray-700">About</h2>
      <p className="py-6 flex flex-col gap-y-4">
        <span>
          Hello, I'm <b className="">Clifford Jay Iyac</b>, a web developer
          based in the Philippines. I specialize in building visually engaging,
          standards-compliant websites with a strong focus on on-page SEO and
          modern web development practices.
        </span>
        <span>
          My approach to development emphasizes adherence to web standards,
          including on-page optimization, search engine submissions (Google and
          Bing), sitemap integration, schema markup, and performance
          enhancements for rapid load times—primarily leveraging frameworks like
          Next.js.
        </span>
        <span>
          I view every project as an opportunity for growth and continuous
          improvement. I believe in the value of perseverance, self-confidence,
          and never missing a chance to evolve.
        </span>
      </p>
      <div className="flex gap-6">
        <div className="w-[50px] lg:w-[60px]">
          <div className="relative flex items-center w-full h-full">
            <div className="line bg-yellow-500 w-full h-[5px] relative flex items-center justify-center"></div>
            <span className="button absolute right-0 size-[15px] lg:size-[25px] rounded-full bg-yellow-500"></span>
          </div>
        </div>
        <h3 className="font-crispy text-gray-700 text-lg lg:text-2xl">
          KNOW MORE ABOUT ME
        </h3>
      </div>
      <div className="py-6">
        I am currently working as a Frontend Developer at
        <a
          href="https://github.com/agile-web-works"
          className="text-red-500 underline pl-2 font-[600]"
        >
          Agile Web Works
        </a>
        . I am just my degree in Bachelor of Science in Information Technology
        at
        <a
          href="https://www.facebook.com/p/Cordova-Public-College-100057398090439/"
          className="text-red-500 underline pl-2 font-[600]"
        >
          Cordova Public College
        </a>
        .
      </div>
      <div className="flex gap-6">
        <div className="w-[50px] lg:w-[60px]">
          <div className="relative flex items-center w-full h-full">
            <div className="line bg-blue-700 w-full h-[5px] relative flex items-center justify-center"></div>
            <span className="button absolute right-0 size-[15px] lg:size-[25px] rounded-full bg-blue-700"></span>
          </div>
        </div>
        <h3 className="font-crispy text-gray-700 text-lg lg:text-2xl capitalize">
          How did I get hooked on Web Development?
        </h3>
      </div>

      <p className="py-6">
        In Nov 2015, I started my journey in web development. I halted my
        studies to grab the opportunity to work as a web developer. I started as
        an intern and worked my way up and became a team lead. But before I got
        my position, I have faced a lot of challenges and struggles. With zero
        knowledge in real world projects. I have to learn everything from
        scratch. blue blueI undergo rigorous training and self-study to be able
        to cope up with the demands of the job.
      </p>

      <div className="flex gap-6">
        <div className="w-[50px] lg:w-[60px]">
          <div className="relative flex items-center w-full h-full">
            <div className="line bg-red-700 w-full h-[5px] relative flex items-center justify-center"></div>
            <span className="button absolute right-0 size-[15px] lg:size-[25px] rounded-full bg-red-700"></span>
          </div>
        </div>
        <h3 className="font-crispy text-gray-700 text-lg lg:text-2xl capitalize">
          How's my Skills?
        </h3>
      </div>
      <p className="py-6">
        In Nov 2015, I started my journey in web development. I halted my
        studies to grab the opportunity to work as a web developer. I started as
        an intern and worked my way up and became a team lead. But before I got
        my position, I have faced a lot of challenges and struggles. With zero
        knowledge in real world projects. I have to learn everything from
        scratch. blue blueI undergo rigorous training and self-study to be able
        to cope up with the demands of the job.
      </p>
    </div>
  );
}
