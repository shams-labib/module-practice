import React from "react";

const AuthLayout = ({ children }) => {
  return (
    <div className="flex min-h-screen gap-5">
      <div className="flex-2 ">{children}</div>
      <div className="flex-1 bg-sky-600 flex justify-center items-center p-5">
        <h1 className="text-4xl font-semibold">
          Welcome for Authentication
        </h1>{" "}
      </div>
    </div>
  );
};

export default AuthLayout;
