"use client";
import Link from "next/link";
import { useInView } from "react-intersection-observer";
export default function ContactComp() {
  const { ref, inView } = useInView({
    threshold: 0.8,
    triggerOnce: true,
  });
  return (
    <div className="contact_section my-[3rem] text-white w-[90%] m-auto">
      <h1
        ref={ref}
        className={`${
          inView && "moveupSlowAnimate"
        } opacity-0 text-[2rem] md:text-[3rem] font-bold`}
      >
        Contact Me!
      </h1>
      <Link href="mailto:nafizmahmud102@gmail.com">
        <div
          style={{ animationDelay: ".2s" }}
          className={`${
            inView && "moveupSlowAnimate"
          } email text-blue-400 flex items-center  gap-[1rem] opacity-0 font-bold text-[1.5rem] md:text-[2rem]`}
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
      </Link>
      <div
        style={{ animationDelay: ".4s" }}
        className={`${
          inView && "moveupSlowAnimate"
        } phone opacity-0 flex items-center gap-[1rem] font-bold text-[1.5rem] md:text-[2rem]`}
      >
        <svg
          fill="currentColor"
          strokeWidth="0"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 16 16"
          height="1em"
          width="1em"
          style={{ overflow: "visible", marginTop: ".7rem" }}
        >
          <path d="M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.568 17.568 0 0 0 4.168 6.608 17.569 17.569 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.678.678 0 0 0-.58-.122l-2.19.547a1.745 1.745 0 0 1-1.657-.459L5.482 8.062a1.745 1.745 0 0 1-.46-1.657l.548-2.19a.678.678 0 0 0-.122-.58L3.654 1.328zM1.884.511a1.745 1.745 0 0 1 2.612.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z"></path>
        </svg>
        <p>(+88) 01703-876066</p>
      </div>
    </div>
  );
}
