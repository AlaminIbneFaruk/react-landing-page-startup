import React from "react";

const SupportCards = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto py-24">
      <div className="card bg-base-100 shadow-sm hover:bg-slate-100 hover:scale-105 transition-all delay-200 duration-400 ease-in-out">
        <div className="card-body flex-row gap-4">
          <div>
            <button className="btn rounded-xl btn-square bg-[#FFC059] p-4 btn-xl">
              <img width="24" height="24" src="https://img.icons8.com/puffy-filled/32/person-male.png" alt="person-male"/>
            </button>
          </div>
          <div className="space-y-2">
            <h2 className="text-xl font-bold">Do you need help support</h2>
            <p className="leading-relaxed max-w-xs">
              Get your website ads tests delivered at let collect sample from the victory of the update managments services.
            </p>
          </div>
          <div className="card-actions">
            <button className="btn btn-ghost btn-square">
              <img src="https://img.icons8.com/material-outlined/24/right.png" alt="" className="max-w-20 h-auto" />
            </button>
          </div>
        </div>
      </div>
      <div className="card bg-base-100 shadow-sm hover:bg-slate-100 hover:scale-105 transition-all delay-200 duration-400 ease-in-out">
        <div className="card-body flex-row gap-4">
          <div>
            <button className="btn rounded-xl btn-square bg-[#FFC059] p-4 btn-xl">
              <img width="24" height="24" src="https://img.icons8.com/puffy-filled/32/person-male.png" alt="person-male"/>
            </button>
          </div>
          <div className="space-y-2">
            <h2 className="text-xl font-bold">Do you need help support</h2>
            <p className="leading-relaxed max-w-xs">
              Get your website ads tests delivered at let collect sample from the victory of the update managments services.
            </p>
          </div>
          <div className="card-actions">
            <button className="btn btn-ghost btn-square">
              <img src="https://img.icons8.com/material-outlined/24/right.png" alt="" className="max-w-20 h-auto" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SupportCards;
