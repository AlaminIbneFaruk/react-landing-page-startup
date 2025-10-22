import React from "react";
import firstImg from "/Group 86.png";
import SecImg from "/Group 87.png";
const InstantReply = () => {
  return (
    <div>
      <div className="">
        <div className="hero max-w-5xl mx-auto min-h-screen">
          <div className="hero-content flex-col lg:flex-row-reverse ">
            <div className="lg:w-6/12 relative">
              <img
                src={firstImg}
                className=" rounded-lg relative z-10 top-0"
              />
              <img
                src={SecImg}
                className=" rounded-lg absolute top-0 -left-25"
              />
            </div>
            <div className="flex flex-col justify-center ml-0 lg:ml-16 space-y-6">
              <h1 className="text-2xl lg:text-4xl font-bold lg:mr-20 leading-relaxed">
                Built in one app to make instant reply with in lowest minutes
              </h1>
              <p className="py-6 lg:text-base text-sm">
                Get your tests delivered at let home collect sample from the
                victory of the managments that supplies best design system
                guidelines ever.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="flex">
                  <img
                    width="28"
                    height="28"
                    src="https://img.icons8.com/color/48/checked--v1.png"
                    alt="checked--v1"
                  />{" "}
                  <span>Medical and vision</span>
                </div>
                <div className="flex">
                  <img
                    width="28"
                    height="28"
                    src="https://img.icons8.com/color/48/checked--v1.png"
                    alt="checked--v1"
                  />{" "}
                  <span>Life insurance</span>
                </div>
                <div className="flex">
                  <img
                    width="28"
                    height="28"
                    src="https://img.icons8.com/color/48/checked--v1.png"
                    alt="checked--v1"
                  />{" "}
                  <span>400(k) savings</span>
                </div>
                <div className="flex">
                  <img
                    width="28"
                    height="28"
                    src="https://img.icons8.com/color/48/checked--v1.png"
                    alt="checked--v1"
                  />{" "}
                  <span>HSAs and FSAs</span>
                </div>
                <div className="flex">
                  <img
                    width="28"
                    height="28"
                    src="https://img.icons8.com/color/48/checked--v1.png"
                    alt="checked--v1"
                  />{" "}
                  <span>Commuter benefits</span>
                </div>
                <div className="flex">
                  <img
                    width="28"
                    height="28"
                    src="https://img.icons8.com/color/48/checked--v1.png"
                    alt="checked--v1"
                  />{" "}
                  <span>529 college savings</span>
                </div>
              </div>
              <a className="text-[#3183FF] max-w-fit flex">
                Explore More 
                <img width="24" height="24" src="https://img.icons8.com/color/48/sort-right--v1.png" alt="sort-right--v1"/>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InstantReply;
