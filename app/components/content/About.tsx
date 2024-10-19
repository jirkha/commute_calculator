import Image from "next/image";
import portrait from "@/app/images/portrait_jiri_vecko_cut.jpg";
import github from "@/app/images/Github.png";
import jiri_vecko from "@/app/images/jiri_vecko_logo_sm.jpeg";
import linkedIn from "@/app/images/LinkedIn.png";

function About() {
  return (
    <div className="flex flex-row justify-start md:justify-end space-x-4 p-2 pr-16  bg-white">
      <div className="flex flex-col">
        <h4 className="text-left md:text-left text-xl md:text-2xl font-bold text-black">
          Jiří Vecko
        </h4>

        <div className="flex flex-col md:flex-row ">
          <h6 className="text-left md:text-left text-md md:text-xl text-black">
            Full-Stack Developer
          </h6>
        </div>

        <div className="flex justify-center sm:justify-start space-x-4">
          <a
            href="https://www.jirivecko.cz"
            target="_blank"
            rel="noopener noreferrer"
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
          >
            <Image src={github} alt="GitHub Logo" width={80} />
          </a>
          <a
            href="https://www.linkedin.com/in/ji%C5%99%C3%AD-vecko-44579b127/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image src={linkedIn} alt="LinkedIn Logo" width={30} height={30} />
          </a>
        </div>
      </div>
      <div className="flex justify-center items-center">
        <Image src={portrait} width={130} height={130} alt="Portrait" />
      </div>
      {/* <p className="text-center md:text-left text-md">
          Mou největší motivací je touha učit se novým věcem. Proto jsem v roce
          2021 začal s programováním a neustále se posouvám vpřed.
        </p> */}
    </div>
  );
}

export default About;
