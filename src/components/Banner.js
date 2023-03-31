import React from "react";

function Banner() {
  return (
    <section className="bg-gray-900 text-white">
      <div className="mx-auto max-w-screen-xl px-4 py-32 lg:flex lg:h-screen lg:items-center">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 bg-clip-text text-3xl font-extrabold text-transparent sm:text-5xl">
            Welcom to VeriScan.
            <span className="sm:block text-2xl my-5">
              {" "}
              Ensuring the authenticity of your documents{" "}
            </span>
          </h1>

          <p className="mx-auto mt-4 max-w-xl sm:text-xl sm:leading-relaxed">
            VeriScan is the trusted solution for verifying the authenticity of
            your important documents. With our fast, easy, and reliable service,
            you can rest assured that your documents are legitimate and secure.
            Our advanced scanning technology and expert team ensure that every
            document is thoroughly checked and validated, giving you the peace
            of mind you deserve.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Banner;
