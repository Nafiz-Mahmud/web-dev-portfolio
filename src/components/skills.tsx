"use client";
import { useInView } from "react-intersection-observer";
export default function SkillsComp() {
  const { ref, inView, entry } = useInView({
    threshold: 1,
    triggerOnce: true,
  });

  return (
    <div className="skills_section w-[90%] m-auto mt-[6rem]">
      <h1
        ref={ref}
        className={`skills_title text-[2rem] md:text-[3rem] text-center text-white font-bold ${
          inView && "moveRightAnimate"
        }`}
      >
        Skills
      </h1>
      <div className="skills flex items-center flex-wrap  gap-[1rem] md:gap-[2rem] xl:gap-[2.5rem] mt-[2rem]">
        <svg
          className={`html skill ${inView && "moveRightAnimate"}`}
          fill="currentColor"
          stroke-width="0"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 16 16"
          height="1em"
          width="1em"
          style={{ animationDelay: ".1s", overflow: "visible", color: "white" }}
        >
          <path
            fill="currentColor"
            d="M.946 0 2.23 14.4 7.992 16l5.777-1.602L15.055 0H.947zM12.26 4.71H5.502l.161 1.809H12.1l-.485 5.422-3.623 1.004-3.618-1.004-.247-2.774H5.9l.126 1.41 1.967.53.004-.001 1.968-.531.204-2.29H4.048l-.476-5.341h8.847l-.158 1.766z"
          ></path>
        </svg>
        <svg
          className={`css skill ${inView && "moveRightAnimate"}`}
          fill="currentColor"
          stroke-width="0"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 512 512"
          height="1em"
          width="1em"
          style={{ animationDelay: ".2s", overflow: "visible", color: "white" }}
        >
          <path d="m64 32 35 403.22L255.77 480 413 435.15 448 32Zm290.68 334.9L256.07 395l-98.46-28.24-6.75-77.76h48.26l3.43 39.56 53.59 15.16.13.28 53.47-14.85 5.64-64.15H203l-4-50h120.65l4.35-51H140l-4-49h240.58Z"></path>
        </svg>
        <svg
          className={`js skill ${inView && "moveRightAnimate"}`}
          fill="currentColor"
          stroke-width="0"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 448 512"
          height="1em"
          width="1em"
          style={{ animationDelay: ".3s", overflow: "visible", color: "white" }}
        >
          <path d="M400 32H48C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48zM243.8 381.4c0 43.6-25.6 63.5-62.9 63.5-33.7 0-53.2-17.4-63.2-38.5l34.3-20.7c6.6 11.7 12.6 21.6 27.1 21.6 13.8 0 22.6-5.4 22.6-26.5V237.7h42.1v143.7zm99.6 63.5c-39.1 0-64.4-18.6-76.7-43l34.3-19.8c9 14.7 20.8 25.6 41.5 25.6 17.4 0 28.6-8.7 28.6-20.8 0-14.4-11.4-19.5-30.7-28l-10.5-4.5c-30.4-12.9-50.5-29.2-50.5-63.5 0-31.6 24.1-55.6 61.6-55.6 26.8 0 46 9.3 59.8 33.7L368 290c-7.2-12.9-15-18-27.1-18-12.3 0-20.1 7.8-20.1 18 0 12.6 7.8 17.7 25.9 25.6l10.5 4.5c35.8 15.3 55.9 31 55.9 66.2 0 37.8-29.8 58.6-69.7 58.6z"></path>
        </svg>
        <svg
          className={`tailwind skill ${inView && "moveRightAnimate"}`}
          fill="currentColor"
          stroke-width="0"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          height="1em"
          width="1em"
          style={{ animationDelay: ".4s", overflow: "visible", color: "white" }}
        >
          <path d="M12.001 4.8c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624C13.666 10.618 15.027 12 18.001 12c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C16.337 6.182 14.976 4.8 12.001 4.8zm-6 7.2c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624 1.177 1.194 2.538 2.576 5.512 2.576 3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C10.337 13.382 8.976 12 6.001 12z"></path>
        </svg>
        <svg
          className={`html skill ${inView && "moveRightAnimate"}`}
          fill="currentColor"
          stroke-width="0"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 512 512"
          height="1em"
          width="1em"
          style={{ animationDelay: ".5s", overflow: "visible", color: "white" }}
        >
          <path d="M418.2 177.2c-5.4-1.8-10.8-3.5-16.2-5.1.9-3.7 1.7-7.4 2.5-11.1 12.3-59.6 4.2-107.5-23.1-123.3-26.3-15.1-69.2.6-112.6 38.4-4.3 3.7-8.5 7.6-12.5 11.5-2.7-2.6-5.5-5.2-8.3-7.7-45.5-40.4-91.1-57.4-118.4-41.5-26.2 15.2-34 60.3-23 116.7 1.1 5.6 2.3 11.1 3.7 16.7-6.4 1.8-12.7 3.8-18.6 5.9C38.3 196.2 0 225.4 0 255.6c0 31.2 40.8 62.5 96.3 81.5 4.5 1.5 9 3 13.6 4.3-1.5 6-2.8 11.9-4 18-10.5 55.5-2.3 99.5 23.9 114.6 27 15.6 72.4-.4 116.6-39.1 3.5-3.1 7-6.3 10.5-9.7 4.4 4.3 9 8.4 13.6 12.4 42.8 36.8 85.1 51.7 111.2 36.6 27-15.6 35.8-62.9 24.4-120.5-.9-4.4-1.9-8.9-3-13.5 3.2-.9 6.3-1.9 9.4-2.9 57.7-19.1 99.5-50 99.5-81.7 0-30.3-39.4-59.7-93.8-78.4zM282.9 92.3c37.2-32.4 71.9-45.1 87.7-36 16.9 9.7 23.4 48.9 12.8 100.4-.7 3.4-1.4 6.7-2.3 10-22.2-5-44.7-8.6-67.3-10.6-13-18.6-27.2-36.4-42.6-53.1 3.9-3.7 7.7-7.2 11.7-10.7zM167.2 307.5c5.1 8.7 10.3 17.4 15.8 25.9-15.6-1.7-31.1-4.2-46.4-7.5 4.4-14.4 9.9-29.3 16.3-44.5 4.6 8.8 9.3 17.5 14.3 26.1zm-30.3-120.3c14.4-3.2 29.7-5.8 45.6-7.8-5.3 8.3-10.5 16.8-15.4 25.4-4.9 8.5-9.7 17.2-14.2 26-6.3-14.9-11.6-29.5-16-43.6zm27.4 68.9c6.6-13.8 13.8-27.3 21.4-40.6s15.8-26.2 24.4-38.9c15-1.1 30.3-1.7 45.9-1.7s31 .6 45.9 1.7c8.5 12.6 16.6 25.5 24.3 38.7s14.9 26.7 21.7 40.4c-6.7 13.8-13.9 27.4-21.6 40.8-7.6 13.3-15.7 26.2-24.2 39-14.9 1.1-30.4 1.6-46.1 1.6s-30.9-.5-45.6-1.4c-8.7-12.7-16.9-25.7-24.6-39s-14.8-26.8-21.5-40.6zm180.6 51.2c5.1-8.8 9.9-17.7 14.6-26.7 6.4 14.5 12 29.2 16.9 44.3-15.5 3.5-31.2 6.2-47 8 5.4-8.4 10.5-17 15.5-25.6zm14.4-76.5c-4.7-8.8-9.5-17.6-14.5-26.2-4.9-8.5-10-16.9-15.3-25.2 16.1 2 31.5 4.7 45.9 8-4.6 14.8-10 29.2-16.1 43.4zM256.2 118.3c10.5 11.4 20.4 23.4 29.6 35.8-19.8-.9-39.7-.9-59.5 0 9.8-12.9 19.9-24.9 29.9-35.8zM140.2 57c16.8-9.8 54.1 4.2 93.4 39 2.5 2.2 5 4.6 7.6 7-15.5 16.7-29.8 34.5-42.9 53.1-22.6 2-45 5.5-67.2 10.4-1.3-5.1-2.4-10.3-3.5-15.5-9.4-48.4-3.2-84.9 12.6-94zm-24.5 263.6c-4.2-1.2-8.3-2.5-12.4-3.9-21.3-6.7-45.5-17.3-63-31.2-10.1-7-16.9-17.8-18.8-29.9 0-18.3 31.6-41.7 77.2-57.6 5.7-2 11.5-3.8 17.3-5.5 6.8 21.7 15 43 24.5 63.6-9.6 20.9-17.9 42.5-24.8 64.5zm116.6 98c-16.5 15.1-35.6 27.1-56.4 35.3-11.1 5.3-23.9 5.8-35.3 1.3-15.9-9.2-22.5-44.5-13.5-92 1.1-5.6 2.3-11.2 3.7-16.7 22.4 4.8 45 8.1 67.9 9.8 13.2 18.7 27.7 36.6 43.2 53.4-3.2 3.1-6.4 6.1-9.6 8.9zm24.5-24.3c-10.2-11-20.4-23.2-30.3-36.3 9.6.4 19.5.6 29.5.6 10.3 0 20.4-.2 30.4-.7-9.2 12.7-19.1 24.8-29.6 36.4zm130.7 30c-.9 12.2-6.9 23.6-16.5 31.3-15.9 9.2-49.8-2.8-86.4-34.2-4.2-3.6-8.4-7.5-12.7-11.5 15.3-16.9 29.4-34.8 42.2-53.6 22.9-1.9 45.7-5.4 68.2-10.5 1 4.1 1.9 8.2 2.7 12.2 4.9 21.6 5.7 44.1 2.5 66.3zm18.2-107.5c-2.8.9-5.6 1.8-8.5 2.6-7-21.8-15.6-43.1-25.5-63.8 9.6-20.4 17.7-41.4 24.5-62.9 5.2 1.5 10.2 3.1 15 4.7 46.6 16 79.3 39.8 79.3 58 0 19.6-34.9 44.9-84.8 61.4zm-149.7-15c25.3 0 45.8-20.5 45.8-45.8s-20.5-45.8-45.8-45.8c-25.3 0-45.8 20.5-45.8 45.8s20.5 45.8 45.8 45.8z"></path>
        </svg>
        <svg
          className={`express skill ${inView && "moveRightAnimate"}`}
          fill="currentColor"
          stroke-width="0"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          height="1em"
          width="1em"
          style={{ animationDelay: ".6s", overflow: "visible", color: "white" }}
        >
          <path d="M24 18.588a1.529 1.529 0 0 1-1.895-.72l-3.45-4.771-.5-.667-4.003 5.444a1.466 1.466 0 0 1-1.802.708l5.158-6.92-4.798-6.251a1.595 1.595 0 0 1 1.9.666l3.576 4.83 3.596-4.81a1.435 1.435 0 0 1 1.788-.668L21.708 7.9l-2.522 3.283a.666.666 0 0 0 0 .994l4.804 6.412zM.002 11.576l.42-2.075c1.154-4.103 5.858-5.81 9.094-3.27 1.895 1.489 2.368 3.597 2.275 5.973H1.116C.943 16.447 4.005 19.009 7.92 17.7a4.078 4.078 0 0 0 2.582-2.876c.207-.666.548-.78 1.174-.588a5.417 5.417 0 0 1-2.589 3.957 6.272 6.272 0 0 1-7.306-.933 6.575 6.575 0 0 1-1.64-3.858c0-.235-.08-.455-.134-.666A88.33 88.33 0 0 1 0 11.577zm1.127-.286h9.654c-.06-3.076-2.001-5.258-4.59-5.278-2.882-.04-4.944 2.094-5.071 5.264z"></path>
        </svg>
        <svg
          className={`mongodb skill ${inView && "moveRightAnimate"}`}
          fill="currentColor"
          stroke-width="0"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          height="1em"
          width="1em"
          style={{ animationDelay: ".7s", overflow: "visible", color: "white" }}
        >
          <path d="M17.193 9.555c-1.264-5.58-4.252-7.414-4.573-8.115-.28-.394-.53-.954-.735-1.44-.036.495-.055.685-.523 1.184-.723.566-4.438 3.682-4.74 10.02-.282 5.912 4.27 9.435 4.888 9.884l.07.05A73.49 73.49 0 0 1 11.91 24h.481a28.48 28.48 0 0 1 .51-3.07c.417-.296.604-.463.85-.693a11.342 11.342 0 0 0 3.639-8.464c.01-.814-.103-1.662-.197-2.218zm-5.336 8.195s0-8.291.275-8.29c.213 0 .49 10.695.49 10.695-.381-.045-.765-1.76-.765-2.405z"></path>
        </svg>
        <svg
          className={`mysql skill ${inView && "moveRightAnimate"}`}
          fill="currentColor"
          stroke-width="0"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          height="1em"
          width="1em"
          style={{ animationDelay: ".8s", overflow: "visible", color: "white" }}
        >
          <path d="M16.405 5.501c-.115 0-.193.014-.274.033v.013h.014c.054.104.146.18.214.273.054.107.1.214.154.32l.014-.015c.094-.066.14-.172.14-.333-.04-.047-.046-.094-.08-.14-.04-.067-.126-.1-.18-.153zM5.77 18.695h-.927a50.854 50.854 0 0 0-.27-4.41h-.008l-1.41 4.41H2.45l-1.4-4.41h-.01a72.892 72.892 0 0 0-.195 4.41H0c.055-1.966.192-3.81.41-5.53h1.15l1.335 4.064h.008l1.347-4.064h1.095c.242 2.015.384 3.86.428 5.53zm4.017-4.08c-.378 2.045-.876 3.533-1.492 4.46-.482.716-1.01 1.073-1.583 1.073-.153 0-.34-.046-.566-.138v-.494c.11.017.24.026.386.026.268 0 .483-.075.647-.222.197-.18.295-.382.295-.605 0-.155-.077-.47-.23-.944L6.23 14.615h.91l.727 2.36c.164.536.233.91.205 1.123.4-1.064.678-2.227.835-3.483zm12.325 4.08h-2.63v-5.53h.885v4.85h1.745zm-3.32.135-1.016-.5c.09-.076.177-.158.255-.25.433-.506.648-1.258.648-2.253 0-1.83-.718-2.746-2.155-2.746-.704 0-1.254.232-1.65.697-.43.508-.646 1.256-.646 2.245 0 .972.19 1.686.574 2.14.35.41.877.615 1.583.615.264 0 .506-.033.725-.098l1.325.772.36-.622zM15.5 17.588c-.225-.36-.337-.94-.337-1.736 0-1.393.424-2.09 1.27-2.09.443 0 .77.167.977.5.224.362.336.936.336 1.723 0 1.404-.424 2.108-1.27 2.108-.445 0-.77-.167-.978-.5zm-1.658-.425c0 .47-.172.856-.516 1.156-.344.3-.803.45-1.384.45-.543 0-1.064-.172-1.573-.515l.237-.476c.438.22.833.328 1.19.328.332 0 .593-.073.783-.22a.754.754 0 0 0 .3-.615c0-.33-.23-.61-.648-.845-.388-.213-1.163-.657-1.163-.657-.422-.307-.632-.636-.632-1.177 0-.45.157-.81.47-1.085.315-.278.72-.415 1.22-.415.512 0 .98.136 1.4.41l-.213.476a2.726 2.726 0 0 0-1.064-.23c-.283 0-.502.068-.654.206a.685.685 0 0 0-.248.524c0 .328.234.61.666.85.393.215 1.187.67 1.187.67.433.305.648.63.648 1.168zm9.382-5.852c-.535-.014-.95.04-1.297.188-.1.04-.26.04-.274.167.055.053.063.14.11.214.08.134.218.313.346.407.14.11.28.216.427.31.26.16.555.255.81.416.145.094.293.213.44.313.073.05.12.14.214.172v-.02c-.046-.06-.06-.147-.105-.214-.067-.067-.134-.127-.2-.193a3.223 3.223 0 0 0-.695-.675c-.214-.146-.682-.35-.77-.595l-.013-.014c.146-.013.32-.066.46-.106.227-.06.435-.047.67-.106.106-.027.213-.06.32-.094v-.06c-.12-.12-.21-.283-.334-.395a8.867 8.867 0 0 0-1.104-.823c-.21-.134-.476-.22-.697-.334-.08-.04-.214-.06-.26-.127-.12-.146-.19-.34-.275-.514a17.69 17.69 0 0 1-.547-1.163c-.12-.262-.193-.523-.34-.763-.69-1.137-1.437-1.826-2.586-2.5-.247-.14-.543-.2-.856-.274-.167-.008-.334-.02-.5-.027-.11-.047-.216-.174-.31-.235-.38-.24-1.364-.76-1.644-.072-.18.434.267.862.422 1.082.115.153.26.328.34.5.047.116.06.235.107.356.106.294.207.622.347.897.073.14.153.287.247.413.054.073.146.107.167.227-.094.136-.1.334-.154.5-.24.757-.146 1.693.194 2.25.107.166.362.534.703.393.3-.12.234-.5.32-.835.02-.08.007-.133.048-.187v.015c.094.188.188.367.274.555.206.328.566.668.867.895.16.12.287.328.487.402v-.02h-.015c-.043-.058-.1-.086-.154-.133a3.445 3.445 0 0 1-.35-.4 8.76 8.76 0 0 1-.747-1.218c-.11-.21-.202-.436-.29-.643-.04-.08-.04-.2-.107-.24-.1.146-.247.273-.32.453-.127.288-.14.642-.188 1.01-.027.007-.014 0-.027.014-.214-.052-.287-.274-.367-.46-.2-.475-.233-1.238-.06-1.785.047-.14.247-.582.167-.716-.042-.127-.174-.2-.247-.303a2.478 2.478 0 0 1-.24-.427c-.16-.374-.24-.788-.414-1.162-.08-.173-.22-.354-.334-.513-.127-.18-.267-.307-.368-.52-.033-.073-.08-.194-.027-.274.014-.054.042-.075.094-.09.088-.072.335.022.422.062.247.1.455.194.662.334.094.066.195.193.315.226h.14c.214.047.455.014.655.073.355.114.675.28.962.46a5.953 5.953 0 0 1 2.085 2.286c.08.154.115.295.188.455.14.33.313.663.455.982.14.315.275.636.476.897.1.14.502.213.682.286.133.06.34.115.46.188.23.14.454.3.67.454.11.076.443.243.463.378z"></path>
        </svg>
        <svg
          className={`postgresql skill ${inView && "moveRightAnimate"}`}
          fill="currentColor"
          stroke-width="0"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          height="1em"
          width="1em"
          style={{ animationDelay: ".9s", overflow: "visible", color: "white" }}
        >
          <path d="M23.56 14.723a.527.527 0 0 0-.057-.12c-.139-.262-.477-.341-1.007-.231-1.654.34-2.294.13-2.526-.02 1.342-2.048 2.445-4.522 3.041-6.83.272-1.05.798-3.523.122-4.73a1.564 1.564 0 0 0-.15-.236C21.692.91 19.8.025 17.51.001c-1.495-.016-2.77.346-3.116.479a9.449 9.449 0 0 0-.516-.082 8.044 8.044 0 0 0-1.312-.127c-1.182-.019-2.203.264-3.05.84C8.66.79 4.729-.534 2.296 1.19.935 2.153.309 3.873.43 6.304c.041.818.507 3.334 1.243 5.744.46 1.506.938 2.702 1.433 3.582.553.994 1.126 1.593 1.714 1.79.448.148 1.133.143 1.858-.729a55.982 55.982 0 0 1 1.945-2.206c.435.235.906.362 1.39.377a.057.057 0 0 0 0 .004 11.031 11.031 0 0 0-.247.305c-.339.43-.41.52-1.5.745-.31.064-1.134.233-1.146.811a.591.591 0 0 0 .091.327c.227.423.922.61 1.015.633 1.335.333 2.505.092 3.372-.679-.017 2.231.077 4.418.345 5.088.221.553.762 1.904 2.47 1.904.25 0 .526-.03.829-.094 1.782-.382 2.556-1.17 2.855-2.906.15-.87.402-2.875.539-4.101.017-.07.036-.12.057-.136 0 0 .07-.048.427.03a.367.367 0 0 0 .044.007l.254.022.015.001c.847.039 1.911-.142 2.531-.43.644-.3 1.806-1.033 1.595-1.67zM2.37 11.876c-.744-2.435-1.178-4.885-1.212-5.571-.109-2.172.417-3.683 1.562-4.493 1.837-1.299 4.84-.54 6.108-.13l-.01.01C6.795 3.734 6.843 7.226 6.85 7.44c0 .082.006.199.016.36.034.586.1 1.68-.074 2.918-.16 1.15.194 2.276.973 3.089.08.084.165.163.252.237-.347.371-1.1 1.193-1.903 2.158-.568.682-.96.551-1.088.508-.392-.13-.813-.587-1.239-1.322-.48-.839-.963-2.032-1.415-3.512zm6.007 5.088a1.626 1.626 0 0 1-.432-.178c.089-.039.237-.09.483-.14 1.284-.265 1.482-.451 1.915-1 .099-.127.211-.27.367-.443a.355.355 0 0 0 .074-.13c.17-.151.272-.11.436-.042.156.065.308.26.37.475.03.102.062.295-.045.445-.904 1.266-2.222 1.25-3.168 1.013zm2.094-3.988-.052.14c-.133.357-.257.689-.334 1.004-.667-.002-1.317-.288-1.81-.803-.628-.655-.913-1.566-.783-2.5.183-1.308.116-2.447.08-3.059l-.013-.22c.296-.262 1.666-.996 2.643-.772.446.102.718.406.83.928.585 2.704.078 3.83-.33 4.736a8.784 8.784 0 0 0-.23.546zm7.364 4.572c-.017.177-.036.376-.062.596l-.146.438a.355.355 0 0 0-.018.108c-.006.475-.054.649-.115.87-.064.229-.135.488-.18 1.057-.11 1.414-.878 2.227-2.417 2.556-1.515.325-1.784-.496-2.02-1.221a6.582 6.582 0 0 0-.078-.227c-.215-.586-.19-1.412-.157-2.555.016-.561-.025-1.901-.33-2.646.004-.293.01-.591.019-.892a.353.353 0 0 0-.016-.113 1.493 1.493 0 0 0-.044-.208c-.122-.428-.42-.786-.78-.935-.142-.059-.403-.167-.717-.087.067-.276.183-.587.309-.925l.053-.142c.06-.16.134-.325.213-.5.426-.948 1.01-2.246.376-5.178-.237-1.098-1.03-1.634-2.232-1.51-.72.075-1.38.366-1.709.532a5.672 5.672 0 0 0-.196.104c.092-1.106.439-3.174 1.736-4.482a4.03 4.03 0 0 1 .303-.276.353.353 0 0 0 .145-.064c.752-.57 1.695-.85 2.802-.833.41.007.802.034 1.174.081 1.94.355 3.244 1.447 4.036 2.383.814.962 1.255 1.931 1.431 2.454-1.323-.134-2.223.127-2.68.78-.992 1.418.544 4.172 1.282 5.496.135.242.252.452.289.54.24.583.551.972.778 1.256.07.087.138.171.189.245-.4.116-1.12.383-1.055 1.717-.013.156-.043.447-.084.815-.046.208-.07.46-.1.766zm.89-1.621c-.04-.832.27-.919.597-1.01a2.857 2.857 0 0 0 .135-.041 1.202 1.202 0 0 0 .134.103c.57.376 1.583.421 3.007.134-.202.177-.519.4-.953.601-.41.19-1.096.333-1.747.364-.72.034-1.086-.08-1.173-.151zm.57-9.271c-.006.35-.054.669-.105 1.001-.055.358-.112.728-.127 1.177-.014.436.04.89.093 1.33.107.887.216 1.8-.207 2.701a3.527 3.527 0 0 1-.188-.385 7.57 7.57 0 0 0-.325-.617c-.616-1.104-2.057-3.69-1.32-4.744.38-.543 1.342-.566 2.179-.463zm.228 7.013a12.376 12.376 0 0 0-.085-.107l-.035-.044c.726-1.2.584-2.387.457-3.439-.052-.432-.1-.84-.088-1.222.013-.407.066-.755.118-1.092.064-.415.13-.844.111-1.35a.559.559 0 0 0 .012-.19c-.046-.486-.6-1.938-1.73-3.253a7.803 7.803 0 0 0-2.688-2.04A9.251 9.251 0 0 1 17.62.746c2.052.046 3.675.814 4.824 2.283a.908.908 0 0 1 .067.1c.723 1.356-.276 6.275-2.987 10.54zm-8.816-6.116c-.025.18-.31.423-.621.423a.582.582 0 0 1-.081-.006.797.797 0 0 1-.506-.315c-.046-.06-.12-.178-.106-.285a.223.223 0 0 1 .093-.149c.118-.089.352-.122.61-.086.316.044.642.193.61.418zm7.93-.411c.011.08-.049.2-.153.31a.722.722 0 0 1-.408.223.546.546 0 0 1-.075.005c-.293 0-.541-.234-.56-.371-.024-.177.264-.31.56-.352.298-.042.612.009.636.185z"></path>
        </svg>
        <svg
          className={`firebase skill ${inView && "moveRightAnimate"}`}
          fill="currentColor"
          stroke-width="0"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          height="1em"
          width="1em"
          style={{ animationDelay: "1s", overflow: "visible", color: "white" }}
        >
          <path d="M3.89 15.672 6.255.461A.542.542 0 0 1 7.27.288l2.543 4.771zm16.794 3.692-2.25-14a.54.54 0 0 0-.919-.295L3.316 19.365l7.856 4.427a1.621 1.621 0 0 0 1.588 0zM14.3 7.147l-1.82-3.482a.542.542 0 0 0-.96 0L3.53 17.984z"></path>
        </svg>
        <svg
          className={`supabase skill ${inView && "moveRightAnimate"}`}
          fill="currentColor"
          stroke-width="0"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          height="1em"
          width="1em"
          style={{
            animationDelay: "1.1s",
            overflow: "visible",
            color: "white",
          }}
        >
          <path d="M11.9 1.036c-.015-.986-1.26-1.41-1.874-.637L.764 12.05C-.33 13.427.65 15.455 2.409 15.455h9.579l.113 7.51c.014.985 1.259 1.408 1.873.636l9.262-11.653c1.093-1.375.113-3.403-1.645-3.403h-9.642z"></path>
        </svg>
      </div>
    </div>
  );
}