import Image from "next/image";
import portrait from "@/app/images/portrait_jiri_vecko_cut.jpg";
import github from "@/app/images/Github.png";
import jiri_vecko from "@/app/images/jiri_vecko_logo_sm.jpeg";
import linkedIn from "@/app/images/LinkedIn.png";

function About() {

  const techStack = [
    "React",
    "Next.js",
    "TypeScript",
    "Google API",
    "HTML",
    "Tailwind CSS",
  ];

  return (
    <section className="max-w-screen-lg mx-auto">
      <div
        className="
      flex flex-col sm:flex-row
      gap-x-2 gap-y-1 sm:gap-y-2 md:gap-x-4
      justify-center
      items-center
      p-1
      my-1
      shadow-md
      border-2 rounded-3xl border-black
      bg-calcl
      transition-colors duration-300 ease-in-out
      hover:bg-calcl/70
    "
      >
        <div
          className="
        h-full flex justify-center flex-col items-center
      "
        >
          <Image
            src={portrait}
            alt="Portrait"
            className="
          w-[180px] sm:w-[250px]
          h-auto sm:px-2 sm:py-1
        "
          />
        </div>

        <div className="w-full">
          <p
            className="
          text-lg lg:text-xl
          text-center
          tracking-tighter sm:tracking-tight md:tracking-normal
          sm:text-left font-bold
        "
          >
            Jiří Vecko
          </p>

          <div
            className="
          flex flex-col md:flex-row
          py-0 md:py-1
        "
          >
            <p
              className="
            text-base lg:text-lg
            text-center
            tracking-tighter sm:tracking-tight md:tracking-normal
            pb-1
            sm:text-left sm:pb-0
            pr-2
          "
            >
              Full-Stack Developer
            </p>

            <div
              className="
            flex flex-row
            justify-center sm:justify-start
            flex-wrap
            gap-x-2
            items-center
          "
            >
              <a
                href="https://www.jirivecko.cz"
                target="_blank"
                rel="noopener noreferrer"
                className="border-r border-gray-300 pr-2"
              >
                <Image
                  src={jiri_vecko}
                  alt="Jiří Vecko Logo"
                  width={30}
                  height={30}
                />
              </a>
              <a
                href="https://github.com/jirkha"
                target="_blank"
                rel="noopener noreferrer"
                className="border-r border-gray-300 pr-2"
              >
                <Image src={github} alt="GitHub Logo" height={30} />
              </a>
              <a
                href="https://www.linkedin.com/in/ji%C5%99%C3%AD-vecko-44579b127/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  src={linkedIn}
                  alt="LinkedIn Logo"
                  width={30}
                  height={30}
                />
              </a>
            </div>
          </div>

          <div
            className="
            flex flex-wrap
            gap-1
            justify-center
            mt-1
            sm:justify-start sm:mt-2
          "
          >
            {techStack.map((tech) => (
              <span
                key={tech}
                className="
                inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium
                bg-black text-white
              "
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
