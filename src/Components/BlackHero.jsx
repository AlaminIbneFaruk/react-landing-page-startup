import React from "react";
import blackHeroImg from "/Social dashboard 1.png";
import coin from "/coin.png"
import cog from "/cog.png"
import pie from "/pie.png"
import Briefcase from "/Briefcase.png"
import Rise from "/Rise.png"
const BlackHero = () => {
  return (
    <div className="bg-[#353448] text-white">
      <section className="py-20">
        <div className="flex gap-8 items-center justify-center">
          <div className="w-40">
            <img src={coin} alt="" />
            <div className="border-0 border-t-2 border-amber-300 w-full py-4 my-8 px-px" >Budget Overview</div>
          </div>
          <div className="w-40">
            <img src={cog} alt="" />
            <div className="border-0 border-t-2 my-8 px-px w-full py-4" >Create & adjust</div>
          </div>
          <div className="w-40">
            <img src={pie} alt="" />
            <div className="border-0 border-t-2 my-8 px-px w-full py-4" >View Reports</div>
          </div>
          <div className="w-40">
            <img src={Briefcase} alt="" />
            <div className="border-0 border-t-2 my-8 px-px w-full py-4" >Optimize website</div>
          </div>
          <div className="w-40">
            <img src={Rise} alt="" />
            <div className="border-0 border-t-2 my-8 px-px w-full py-4" >Custom Dashboard</div>
          </div>
        </div>
      </section>
      <div className=" flex flex-col lg:flex-row items-start justify-center overflow-hidden">
        <div className="max-w-sm space-y-8 lg:ml-52">
          <h1 className="text-2xl md:text-3xl font-extrabold leading-snug">
            Introduce quality feature that boost your website rank & performance
          </h1>
          <p className="text-gray-300 leading-relaxed">
            Build an incredible workplace and grow your business with
            Gusto&apos;s all-in-one platform with amazing contents. Get your
            tests delivered at let home collect sample from the victory of the
            supplies design system.
          </p>
          <button className="btn bg-[#FBB03B] text-black border-none px-6 py-3 rounded-md hover:bg-[#ffb947] transition-all">
            More Details
          </button>
        </div>
        <div className="flex relative">
          <img
            src={blackHeroImg}
            alt="Dashboard Preview"
            className="w-full border border-gray-700"
          />
        </div>
      </div>
    </div>
  );
};

export default BlackHero;
