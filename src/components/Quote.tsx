"use client";
import { useInView } from "react-intersection-observer";
export default function Quote() {
  const { ref, inView, entry } = useInView({
    threshold: 0.5,
    triggerOnce: true,
  });
  return (
    <div
      ref={ref}
      className={`${
        inView && "moveupQuote"
      } quote border-[0.1rem] border-solid border-[wheat] border-dashed mt-[6rem] text-center text-white  py-[3rem]`}
    >
      <h1
        style={{ animationDelay: ".2s" }}
        className={`${
          inView && "moveupQuote"
        } opacity-0 title text-[1rem] md:text-[1.5rem]  xl:text-[2.2rem] px-[1rem] mb-[1rem]`}
      >
        {`"`}The beauty of programming lies in it{`'`}s ability to transform
        imagination into reality.{`"`}
      </h1>
      <p
        style={{ animationDelay: ".4s" }}
        className={`${
          inView && "moveupQuote"
        } author opacity-0 text-[1.2rem] md:text-[1.8rem] xl:text-[2.2rem] font-bold`}
      >
        -ChatGPT
      </p>
    </div>
  );
}
