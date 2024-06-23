"use client";
import { useInView } from "react-intersection-observer";
import Link from "next/link";
import Image from "next/image";
import projectOne from "../../public/site_one.png";
import projectTwo from "../../public/site_two.png";
import projectThree from "../../public/site_three.png";

export default function ProjectsComp() {
  const { ref, inView } = useInView({
    threshold: 1,
    triggerOnce: true,
  });
  const projects = [
    {
      id: 1,
      title: "Mind Zen",
      image: projectOne,
      link: "https://mind-zen.vercel.app/",
    },
    {
      id: 2,
      title: "Manreka",
      image: projectTwo,
      link: "https://manreka-accounting-solid-tailwind-frontend.vercel.app/",
    },
    {
      id: 3,
      title: "Wellhall",
      image: projectThree,
      link: "https://wellhall-resort-next-tailwind.vercel.app/",
    },
  ];
  return (
    <div className="projects_section  mt-[4rem]">
      <h1
        ref={ref}
        className={`${
          inView && "moveupSlowAnimate"
        } text-[2rem] md:text-[3rem] opacity-0 font-bold text-white text-center`}
      >
        Top Projects
      </h1>
      <div
        className="projects grid grid-cols-[repeat(auto-fit,minmax(21rem,1fr))] gap-[2.5rem]
 w-[90%] m-auto mt-[3rem] "
      >
        {projects.map((project, index) => (
          <div
            className={`${
              inView && "moveupSlowAnimate"
            } project   opacity-0 relative`}
            key={project.id}
            style={{ animationDelay: `${index * 0.2}s` }}
          >
            <div className="hover:translate-y-[-1rem] transition-all duration-300 hover:opacity-60">
              <Link
                href={project.link}
                style={{ borderRadius: "50%" }}
                className="hyperLink cursor-pointer flex items-center justify-center text-[1.5rem] right-[-5%] top-[-10%] p-[0.25rem] h-[3rem] w-[3rem] text-white absolute z-10"
              >
                <svg
                  fill="currentColor"
                  stroke-width="0"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  height="1em"
                  width="1em"
                  style={{ overflow: "visible", color: "white" }}
                >
                  <path d="m13 3 3.293 3.293-7 7 1.414 1.414 7-7L21 11V3z"></path>
                  <path d="M19 19H5V5h7l-2-2H5c-1.103 0-2 .897-2 2v14c0 1.103.897 2 2 2h14c1.103 0 2-.897 2-2v-5l-2-2v7z"></path>
                </svg>
              </Link>
              <div
                className="project_info  rounded-md overflow-hidden cursor-pointer"
                style={{ boxShadow: ".1rem .1rem .5rem lightgray" }}
              >
                <div className="project_image h-[10rem] w-auto relative">
                  <Image src={project.image} alt={project.title} fill={true} />
                </div>
                <h1 className="title text-[1.5rem] font-bold text-white text-center py-[.5rem]">
                  {project.title}
                </h1>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
