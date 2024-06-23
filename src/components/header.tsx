import Image from "next/image";
export default function HeaderComp() {
  return (
    <div className="header">
      <div className="intro flex items-center flex-col-reverse lg:flex-row justify-between w-[90%] m-auto">
        <div className="intro_text  flex flex-col justify-between">
          <div className="title text-white  mt-[1rem]">
            <h1 className="text-[3rem] xl:text-[4rem] 2xl:text-[5rem] font-bold">
              Nafiz Mahmud
            </h1>
            <p className="text-[2rem] xl:text-[3rem] 2xl:text-[4rem]">
              Web Dev
            </p>
          </div>
          <div className="exp">
            <h1 className="text-[1.8rem] xl:text-[2rem] 2xl:text-[3rem] text-white font-bold">
              3+ years of experience.
            </h1>
            <div className="email text-[1.5rem] xl:text-[1.8rem] 2xl:text-[2.2rem] text-blue-600">
              nafizmahmud102@gmail.com
            </div>
          </div>
          <button className="hire_button lg:mt-[1rem] xl:mt-[2rem] 2xl:mt-[3rem]  w-max text-[1.3rem] xl:text-[1.5rem] 2xl:text[1.8rem] animate-pulse text-green-400 font-bold px-[1rem] py-[.5rem]">
            Hire Me {">"}
          </button>
        </div>
        <div className="intro_img h-[22rem] w-[24rem] lg:h-[25rem] lg:w-[30rem] 2xl:h-[30rem] 2xl:w-[35rem]">
          <Image src="/portrait.png" alt="My Profile Picture." fill={true} />
        </div>
      </div>
    </div>
  );
}
