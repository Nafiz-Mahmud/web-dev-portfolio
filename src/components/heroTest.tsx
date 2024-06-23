import Image from "next/image";
export default function Hero() {
  return (
    <div className="hero">
      <div className="tab_mobile flex lg:hidden items-center flex-col  gap-[2rem] justify-between w-[90%] m-auto ">
        <div className="intro_img h-[20rem] w-[25rem]  sm:h-[30rem] sm:w-[35rem] relative ">
          <Image src="/portrait.png" alt="My Profile Picture." fill={true} />
        </div>
        <div className="intro_text text-white flex flex-col items-start gap-[3rem] justify-between">
          <div>
            <h1 className="text-[3rem] sm:text-[4.5rem] font-bold">
              Nafiz Mahmud
            </h1>
            <p className="text-[2rem] sm:text-[3rem]">Web Dev (M)</p>
          </div>
          <div>
            <h1 className="text-[1rem] sm:text-[1.5rem]">
              3+ years of experience.
            </h1>
            <div className="text-[1rem] sm:text-[1.5rem]">
              <div className="email flex items-center  gap-[1rem] font-bold text-[1rem] md:text-[1.5rem]">
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
          </div>
          <button className="hire_button text-[1.5rem] px-[3rem] py-[.5rem] font-bold  w-max">
            Hire Me {">"}
          </button>
        </div>
      </div>

      <div className="desktop hidden lg:flex  gap-[2rem] justify-between w-[90%] m-auto">
        <div className="intro_text  text-white flex flex-col justify-between">
          <div>
            <h1 className="text-[3.5rem] font-bold">Nafiz Mahmud</h1>
            <p className="text-[3rem]">Web Dev (D)</p>
          </div>
          <div>
            <h1 className="text-[1.5rem]">3+ years of experience.</h1>
            <div className="email flex items-center  gap-[1rem] font-bold text-[1rem] md:text-[1.5rem]">
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
          <button className="hire_button animate-pulse shadow-[inset_0.2rem_0.2rem_0.5rem_skyblue,0.2rem_0.2rem_0.5rem_blue] rounded-[5rem]  text-[1.5rem] duration-300 px-[1.5rem] hover:px-[2rem] py-[.5rem] font-bold w-max">
            Hire Me {">"}
          </button>
        </div>
        <div className="intro_img relative overflow-hidden border-b-[0.1rem] border-b-[blue] border-solid h-[25rem] w-[28rem] xl:h-[30rem] xl:w-[33rem] relative ">
          <Image src="/portrait.png" alt="My Profile Picture." fill={true} />
        </div>
      </div>
    </div>
  );
}
