import bannerimg from "../../../assets/images/Vector.png";
import myimg from "../../../assets/images/me (2).jpg";
import { Typewriter } from "react-simple-typewriter";

const Banner = () => {
  return (
    <div
      style={{
        backgroundImage: `url(${bannerimg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
      className="relative px-20 py-20"
    >
      <div className="relative flex max-w-[1300px] gap-5 mx-auto items-center">
        <div className="w-1/2">
          <h1 className="text-6xl lobster">
            Nice To Meet You <br /> I'am{" "}
            <span className="border-b-4 border-sky-800 text-sky-950">
              <Typewriter
                words={[" Raihana Ferdousi", " A MERN Stack Developer"]}
                loop={5}
                cursor
                cursorStyle="_"
                typeSpeed={70}
                deleteSpeed={50}
                delaySpeed={1000}
              />
            </span>
          </h1>
          

          <p className="w-[400px] mt-8 text-lg ">
            I am a passionate front-end developer, dedicated to crafting engaging and user-friendly web experiences.
          </p>

          {/* Styled Button */}
          <button className="btn border-b-4 border-sky-950 mt-4">
            Contact Me
          </button>
        </div>
        <div className="w-1/2">
          <img className="w-[500px] rounded-xl shadow-lg" src={myimg} alt="Raihana Ferdousi" />
        </div>
      </div>
    </div>
  );
};

export default Banner;
