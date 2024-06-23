"use client";
import Link from "next/link";
import Image from "next/image";
import { useInView } from "react-intersection-observer";
export default function HeroMobile() {
  const { ref, inView } = useInView({
    threshold: 1,
    triggerOnce: true,
  });
  return (
    <div className="tab_mobile flex lg:hidden items-center flex-col  gap-[2rem] justify-between w-[90%] m-auto ">
      <div
        style={{ animationDelay: ".8s" }}
        className="intro_img opacity-0 opec h-[20rem] w-[25rem]  sm:h-[30rem] sm:w-[35rem] relative "
      >
        <Image src="/portrait.png" alt="My Profile Picture." fill={true} />
      </div>
      <div
        ref={ref}
        className="intro_text text-white flex flex-col items-start gap-[3rem] justify-between"
      >
        <div>
          <div className="main_hero_title overflow-hidden">
            <h1
              className={`${
                inView && "moveupAnimate"
              } text-[3rem] opacity-0  sm:text-[4.5rem] font-bold`}
            >
              Nafiz Mahmud
            </h1>
          </div>
          <div className="main_hero_subtitle overflow-hidden">
            <p
              className={`${
                inView && "moveupAnimate"
              } opacity-0 text-[2rem] sm:text-[3rem]`}
            >
              Web Dev
            </p>
          </div>
        </div>
        <div>
          <div className="main_hero_exp overflow-hidden">
            <h1
              className={`${
                inView && "moveupAnimate"
              } opacity-0 text-[1rem] sm:text-[1.5rem]`}
            >
              3+ years of experience.
            </h1>
          </div>
          <Link href="mailto:nafizmahmud102@gmail.com" target="_blank">
            <div className="text-[1rem] sm:text-[1.5rem] overflow-hidden">
              <div
                className={`${
                  inView && "moveupAnimate"
                } email text-blue-400 opacity-0 flex items-center  gap-[1rem] font-bold text-[1rem] md:text-[1.5rem]`}
              >
                <svg
                  fill="currentColor"
                  strokeWidth="0"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 1024 1024"
                  height="1em"
                  width="1em"
                  style={{ overflow: "visible", marginTop: ".7rem" }}
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
        <div className="main_hire_btn py-[1rem] pr-[.5rem]  overflow-hidden animate-pulse">
          <Link
            href="https://www.upwork.com/freelancers/~01a9ab19cba2c9d6c6"
            target="_blank"
          >
            <button
              className={`${
                inView && "moveupAnimate"
              }}   text-[1.5rem] px-[3rem] py-[.5rem] shadow-[inset_0.2rem_0.2rem_0.5rem_skyblue,0.2rem_0.2rem_0.5rem_blue] rounded-[5rem] font-bold  w-max`}
            >
              Hire Me {">"}
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
