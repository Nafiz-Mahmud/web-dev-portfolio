"use client";
import { useInView } from "react-intersection-observer";
export default function FaqComp() {
  const { ref, inView } = useInView({
    threshold: 0.8,
    triggerOnce: true,
  });
  return (
    <div className="faq_section w-[90%] m-auto mt-[4rem] text-white">
      <h1
        ref={ref}
        className={`${
          inView && "moveupSlowAnimate"
        } opacity-0 text-[2rem] md:text-[3rem] font-bold`}
      >
        FAQ
      </h1>
      <div className="questions mt-[.5rem]">
        <details
          style={{ animationDelay: ".2s" }}
          className={`${inView && "moveupSlowAnimate"} opacity-0`}
        >
          <summary className="text-yellow-500 py-[1rem] text-[1.2rem] sm:text-[1.5rem] md:text-[2rem] cursor-pointer">
            Will my website be developed to be responsive?
          </summary>
          <p className="text-[1rem] sm:text-[1.2rem] md:text-[1.5rem] py-[.5rem] ml-[2rem]">
            Absolutely! Ensuring a seamless user experience across all devices
            is a top priority in our web development process. We understand the
            importance of responsive web design in todays mobile-driven world. I
            will employ the latest industry standards and techniques to create a
            website that adapts beautifully to various screen sizes, from
            desktops and laptops to tablets and smartphones.Rest assured, your
            website will be responsive that not only meets your expectations but
            also provides an exceptional user experience for your audience.
          </p>
        </details>
        <details
          style={{ animationDelay: ".4s" }}
          className={`${inView && "moveupSlowAnimate"} opacity-0`}
        >
          <summary className="text-yellow-500 py-[1rem] text-[1.2rem] sm:text-[1.5rem] md:text-[2rem] cursor-pointer">
            What is the anticipated timeline for the development of the website?
          </summary>
          <p className="text-[1rem] sm:text-[1.2rem] md:text-[1.5rem] py-[.5rem] ml-[2rem]">
            The timeline for website development can vary depending on several
            factors, such as the complexity of the project, the availability of
            resources, and the specific requirements. It is essential to
            thoroughly analyze the project scope and conduct a feasibility study
            to provide an accurate estimate of the time required for website
            development. That being said, a typical website should be developed
            between 1-2 weeks.
          </p>
        </details>
        <details
          style={{ animationDelay: ".6s" }}
          className={`${inView && "moveupSlowAnimate"} opacity-0`}
        >
          <summary className="text-yellow-500 py-[1rem] text-[1.2rem] sm:text-[1.5rem] md:text-[2rem] cursor-pointer">
            What would be the estimated cost for the development of my website?
          </summary>
          <p className="text-[1rem] py-[.5rem] sm:text-[1.2rem] md:text-[1.5rem] ml-[2rem]">
            The cost of developing a website can vary significantly depending on
            various factors, including the complexity of the project, the
            desired features and functionalities, the level of customization,
            and the expertise of the development team. To provide an accurate
            cost estimate for your specific website, it would be necessary to
            analyze your requirements and specifications in detail. Provide your
            specific requirements and budget so that we can engage in a thorough
            discussion and reach a mutually agreed-upon conclusion.
          </p>
        </details>
      </div>
    </div>
  );
}
