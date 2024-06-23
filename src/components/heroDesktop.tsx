import Image from "next/image";
import Link from "next/link";
export default function HeroDesktop() {
  return (
    <div className="desktop hidden lg:flex  gap-[2rem] justify-between w-[90%] m-auto">
      <div className="intro_text   text-white flex flex-col justify-between">
        <div>
          <div className="main_title overflow-hidden">
            <h1
              style={{ animationDelay: ".4s" }}
              className="text-[3rem] xl:text-[4rem] font-bold opacity-0 moveupAnimate"
            >
              Nafiz Mahmud
            </h1>
          </div>
          <div className="main_subtitle overflow-hidden">
            <p
              style={{ animationDelay: ".6s" }}
              className="text-[2.5rem] xl:text-[3rem] opacity-0 moveupAnimate"
            >
              Web Dev
            </p>
          </div>
        </div>
        <div>
          <div className="exp overflow-hidden">
            <h1
              style={{ animationDelay: ".8s" }}
              className="text-[1.5rem] opacity-0 moveupAnimate"
            >
              3+ years of experience.
            </h1>
          </div>
          <Link href="mailto:nafizmahmud102@gmail.com" target="_blank">
            <div className="main_email overflow-hidden">
              <div
                style={{ animationDelay: "1s" }}
                className="email text-blue-400 flex items-center opacity-0 moveupAnimate  gap-[1rem] font-bold text-[1rem] md:text-[1.5rem]"
              >
                <svg
                  fill="currentColor"
                  strokeWidth="0"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 1024 1024"
                  height="1em"
                  width="1em"
                  style={{ overflow: "visible", marginTop: ".5rem" }}
                >
                  <path
                    fill="currentColor"
                    fill-opacity="0.09"
                    d="M477.5 536.3 135.9 270.7l-27.5-21.4 27.6 21.5V792h752V270.8L546.2 536.3a55.99 55.99 0 0 1-68.7 0z"
                  ></path>
                  <path
                    fill="currentColor"
                    fill-opacity="0.09"
                    d="m876.3 198.8 39.3 50.5-27.6 21.5 27.7-21.5-39.3-50.5z"
                  ></path>
                  <path d="M928 160H96c-17.7 0-32 14.3-32 32v640c0 17.7 14.3 32 32 32h832c17.7 0 32-14.3 32-32V192c0-17.7-14.3-32-32-32zm-94.5 72.1L512 482 190.5 232.1h643zm54.5 38.7V792H136V270.8l-27.6-21.5 27.5 21.4 341.6 265.6a55.99 55.99 0 0 0 68.7 0L888 270.8l27.6-21.5-39.3-50.5h.1l39.3 50.5-27.7 21.5z"></path>
                </svg>
                <p>nafizmahmud102@gmail.com</p>
              </div>
            </div>
          </Link>
        </div>

        <div className="main_hire_button animate-pulse overflow-hidden">
          <Link href="https://www.upwork.com/freelancers/~01a9ab19cba2c9d6c6">
            <button
              style={{ animationDelay: "1.2s" }}
              className="hire_button opacity-0 moveupAnimate shadow-[inset_0.2rem_0.2rem_0.5rem_skyblue,0.2rem_0.2rem_0.5rem_blue] rounded-[5rem]  text-[1.5rem] duration-300 mb-[.5rem] px-[1.5rem] hover:px-[2rem] py-[.5rem] font-bold w-max"
            >
              Hire Me {">"}
            </button>
          </Link>
        </div>
      </div>
      <div
        style={{ animationDelay: "1.8s" }}
        className="intro_img  relative overflow-hidden border-b-[0.1rem] border-b-[blue] border-solid h-[25rem] w-[28rem] xl:h-[30rem] xl:w-[33rem] relative "
      >
        <Image src="/portrait.png" alt="My Profile Picture." fill={true} />
      </div>
    </div>
  );
}
