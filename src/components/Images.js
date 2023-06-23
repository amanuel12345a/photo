import React from "react";

function Images({ a, b, c, d, e, title }) {
  return (
    <div className="mt-[80px] mb-[-80px]">
      <h1 className="text-[30px] text-center text-pink-400 font-extrabold">
        {title}
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
        <div>
        <img  className="object-cover h-[100%]" src={a} alt="" />
        </div>
        <div>
        <img className="object-cover h-[100%]" src={b} alt="" />
        </div>
        <div>
        <img className="object-cover h-[100%]" src={c} alt="" />
        </div>
        <div>
        <img className="object-cover h-[100%]" src={d} alt="" />
        </div>
        <div>
        <img className="h-[100%]" src={e} alt="" />
        </div>
        
      </div>
    </div>
  );
}

export default Images;