import React from "react";

const Title = ({ children }) => {
  return (
    <div className="bg-linear-60 from-sky-200 to-sky-400 px-5 py-3">
      <h1 className="text-4xl text-black ">{children}</h1>
    </div>
  );
};

export default Title;
