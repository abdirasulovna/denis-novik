import React from "react";
import Denis from "../assets/denis.png";
import Denis2 from "../assets/denis2.png";
import Burger from "../assets/burger.svg";
// import "./index.css";

const Adaptive = () => {
  const styles = {
    width: "100%",
  };
  const styled = {
    gap: "15rem",
  };

  return (
    <div>
      <header className=" sm: m-auto  w-2/4 ">
        <nav className="sm:block hidden">
          <ul className=" flex items-center justify-between py-5 text-lg   ">
            <a href="/" className="text-[#828282] active:text-[#070707]">
              Home
            </a>
            <a href="/" className="text-[#828282] active:text-[#070707]">
              About me
            </a>
            <a href="/" className="text-[#828282] active:text-[#070707]">
              Skills
            </a>
            <a href="/" className="text-[#828282] active:text-[#070707]">
              Portfolio
            </a>
            <a href="/" className="text-[#828282] active:text-[#070707]">
              Contacts
            </a>
          </ul>
        </nav>
        <hr
          className="   border-solid  border-b-2 sm:block hidden "
          style={styles}
        />

        <div
          className="flex flex-col sm:flex-row items-center sm:items-end py-3 sm:py-0 mt-7"
          style={styled}
        >
          <div className="sm:hidden flex justify-end  mb-[50px] ">
            <img src={Burger} />
          </div>
          <h1 className="font-bold text-[#070707] text-2xl sm:text-4xl">
            Denis <br /> Novik
          </h1>
          <p className="text-[13px] text-[#070707] sm:text-[15px]">
            UX | UI designer <br /> 24 years old, Minsk
          </p>
          <p className="text-[#828282] text-[14px] rotate-90 hidden sm:block">
            RU<span className="text-[#070707]">|ENG</span>
          </p>
        </div>
        <img src={Denis} className="sm:flex hidden mt-10" />
        <img src={Denis2} className="sm:hidden flex p-0 " />
      </header>
      <main className="bg-[#F6F6F6] mt-10">
        <div className=" m-auto w-4/5 flex justify-center flex-col">
          <h4 className="font-bold text-[34px] text-center pb-[20px] pt-[50px]">
            About me
          </h4>
          <p className="text-[18px]  text-[#070707] text-center text-center pb-[20px]">
            Hi, I'm Denis – UX/UI designer from Minsk. <br /> I'm interested in
            design and everything connected with it.
          </p>
          <p className="text-[18px]  text-[#070707] text-center pb-[20px]">
            I'm studying at courses "Web and mobile design <br />
            interfaces" in IT-Academy.
          </p>
          <p className="text-[18px] text-[#070707] text-center pb-[50px]">
            Ready to implement excellent projects <br />
            with wonderful people.
          </p>
        </div>
      </main>
    </div>
  );
};

export default Adaptive;
