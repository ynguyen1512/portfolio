import Image from "next/image";
import antDesignLogo from "/public/ant-design.svg";
import cssLogo from "/public/css-logo.svg";
import dockerLogo from "/public/docker.png";
import htmlLogo from "/public/html-logo.png";
import javascriptLogo from "/public/js-logo.png";
import nextJSLogo from "/public/nextjs.png";
import nginx from "/public/nginx-logo.png";
import reactLogo from "/public/react-logo.webp";
import reduxLogo from "/public/redux-logo.png";
import tailwindLogo from "/public/tailwind.jpeg";
import typescriptLogo from "/public/typescript-logo.png";
import viteLogo from "/public/vite.png";
import wordpressLogo from "/public/wordpress.png";
const TechStack = () => {
  return (
    <section id="skills" className="skills py-20">
      <div>
        <div data-aos="fade-up">
          <h1 className="relative text-5xl text-center">Tech Stacks</h1>
          <div className="flex justify-center mt-2">
            <div className="relative w-3 h-3 border border-black rounded-full before:absolute before:h-0.5 before:top-1 before:bg-black before:w-16 before:right-5 after:absolute after:h-0.5 after:top-1 after:bg-black after:w-16 after:left-5"></div>
          </div>
        </div>

        {/* Test Infinity */}
        <div className="w-full inline-flex flex-nowrap mt-12">
          <ul className="flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-infinite-scroll">
            <li>
              <Image src={htmlLogo} alt="HTML" className="w-20 h-20" />
            </li>
            <li>
              <Image src={cssLogo} alt="CSS" className="w-20 h-20" />
            </li>
            <li>
              <Image src={reactLogo} alt="React" className="w-20 h-20" />
            </li>
            <li>
              <Image src={reduxLogo} alt="Redux" className="w-20 h-20" />
            </li>
            <li>
              <Image
                src={typescriptLogo}
                alt="Typescript"
                className="w-20 h-20"
              />
            </li>
            <li>
              <Image
                src={nginx}
                alt="Typescript"
                className="w-48 h-20 object-cover"
              />
            </li>
            <li>
              <Image
                src={javascriptLogo}
                alt="Typescript"
                className="w-20 h-20 object-cover rounded-md"
              />
            </li>
            <li>
              <Image
                src={tailwindLogo}
                alt="Typescript"
                className="w-20 h-20 object-cover rounded-md"
              />
            </li>
            <li>
              <Image
                src={dockerLogo}
                alt="Typescript"
                className="w-24 h-20 object-cover rounded-md"
              />
            </li>
            <li>
              <Image
                src={viteLogo}
                alt="Typescript"
                className="w-24 h-20 object-cover rounded-md"
              />
            </li>
            <li>
              <Image
                src={antDesignLogo}
                alt="Typescript"
                className="w-24 h-20 object-cover rounded-md"
              />
            </li>
            <li>
              <Image
                src={wordpressLogo}
                alt="Typescript"
                className="w-24 h-20 object-cover rounded-md"
              />
            </li>
            <li>
              <Image
                src={nextJSLogo}
                alt="Typescript"
                className="w-36 h-20 object-cover rounded-md"
              />
            </li>
          </ul>
          <ul
            className="flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-infinite-scroll"
            aria-hidden="true"
          >
            <li>
              <Image src={htmlLogo} alt="HTML" className="w-20 h-20" />
            </li>
            <li>
              <Image src={cssLogo} alt="CSS" className="w-20 h-20" />
            </li>
            <li>
              <Image src={reactLogo} alt="React" className="w-20 h-20" />
            </li>
            <li>
              <Image src={reduxLogo} alt="Redux" className="w-20 h-20" />
            </li>
            <li>
              <Image
                src={typescriptLogo}
                alt="Typescript"
                className="w-20 h-20"
              />
            </li>
            <li>
              <Image
                src={nginx}
                alt="Typescript"
                className="w-48 h-20 object-cover"
              />
            </li>
            <li>
              <Image
                src={javascriptLogo}
                alt="Typescript"
                className="w-20 h-20 object-cover rounded-md"
              />
            </li>
            <li>
              <Image
                src={tailwindLogo}
                alt="Typescript"
                className="w-20 h-20 object-cover rounded-md"
              />
            </li>
            <li>
              <Image
                src={dockerLogo}
                alt="Typescript"
                className="w-24 h-20 object-cover rounded-md"
              />
            </li>
            <li>
              <Image
                src={viteLogo}
                alt="Typescript"
                className="w-24 h-20 object-cover rounded-md"
              />
            </li>
            <li>
              <Image
                src={antDesignLogo}
                alt="Typescript"
                className="w-24 h-20 object-cover rounded-md"
              />
            </li>
            <li>
              <Image
                src={wordpressLogo}
                alt="Typescript"
                className="w-24 h-20 object-cover rounded-md"
              />
            </li>
            <li>
              <Image
                src={nextJSLogo}
                alt="Typescript"
                className="w-36 h-20 object-cover rounded-md"
              />
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default TechStack;
