import React from "react";

function Images({ a, b, c, d, e, title }) {
  return (
    <div className="mt-[80px]">
      <h1 className="text-[30px] text-center text-pink-400 font-extrabold">
        {title}
      </h1>
      <div className="">
        <img className="inline-block" src={a} alt="" />
        <img className="inline-block" src={b} alt="" />
        <img className="inline-block" src={c} alt="" />
        <img className="inline-block" src={d} alt="" />
        <img className="inline-block" src={e} alt="" />
      </div>
    </div>
  );
}

export default Images;
