import React from 'react'

const Footer = () => {
  return (
    <div className="min-h-[400px] text-white flex flex-col py-[55px] bg-[#3296F6] ">
      <div className="flex flex-row justify-between items-start w-full h-full max-w-[1400px] px-[40px] ">
        <div>
          <div className="flex flex-col mb-[55px]">
            <a
              href="/contact"
              className="max-w-[100%] inline-block underline  tracking-normal"
            >
              <h2 className="mt-0 mb-[30px] text-[40px] font-medium">
                Get in Touch
              </h2>
            </a>
            <div className="gap-x-[8px] flex">
              <a href="#" className="rounded-full hover:bg-[#FFCC00]">
                <img
                  src="https://uploads-ssl.webflow.com/625987022462a68af79fb069/6478dc17b16d547f1b1ce667_Instagram%20logo.svg"
                  alt=""
                  className="h-[50px] w-[50px]"
                />
              </a>
              <a href="#" className="rounded-full hover:bg-[#FFCC00]">
                <img
                  src="https://uploads-ssl.webflow.com/625987022462a68af79fb069/6478dc20562913d1dd652a18_Linkedin%20Logo.svg"
                  loading="lazy"
                  alt=""
                  className="h-[50px] w-[50px]"
                />
              </a>
              <a
                aria-label="Phone Link"
                href="tel:+2349067774136"
                className="rounded-full hover:bg-[#FFCC00]"
              >
                <img
                  src="https://uploads-ssl.webflow.com/625987022462a68af79fb069/6478e1cc2029fd0500eb1eaf_Phone.svg"
                  loading="lazy"
                  alt=""
                  className="h-[50px] w-[50px]"
                />
              </a>
              <a
                aria-label="Mail Link"
                href="mailto:webfalainitative@gmail.com"
                className="rounded-full hover:bg-[#FFCC00]"
              >
                <img
                  src="https://uploads-ssl.webflow.com/625987022462a68af79fb069/6478e1cc486a065d26af14a1_mail.svg"
                  loading="lazy"
                  alt=""
                  className="h-[50px] w-[50px]"
                />
              </a>
            </div>
          </div>
          <div className="">
            <img
              src="../../../../images/ZERAB REPORT WHITE.png"
              className="w-[19rem] h-[10rem] mt-[-6rem] ml-[-4rem]"
              alt=""
            />
            <p className="text-sm mt-[-2rem]">
              G.R.A, Ilorin, Kwara, Nigeria. <br /> servicing Internationally.
            </p>
          </div>
        </div>
        <div className="flex flex-col items-start mt-20">
          <p className="text-[#ffffffbf] font-ligt mb-[24px]">Navigation</p>
          <a
            href="/"
            className="text-white border-b-[#ffffffbf] mb-[16px] border-b-[1px]"
          >
            Home
          </a>
          <a
            href="/blog"
            className="text-white border-b-[#ffffffbf] mb-[16px] border-b-[1px]"
          >
            Blog
          </a>
          <a
            href="/about"
            className="text-white border-b-[#ffffffbf] mb-[16px] border-b-[1px]"
          >
            About us
          </a>
          <a
            href="/contact"
            className="text-white border-b-[#ffffffbf] mb-[16px] border-b-[1px]"
          >
            Contact Us
          </a>
        </div>
        <div className="flex flex-col items-start mt-20">
          <p className="text-[#ffffffbf] font-light mb-[24px]">Services</p>
          <div className="text-[#ffffffbf] mb-[16px]">Online Safety</div>
          <div className="text-[#ffffffbf] mb-[16px]">Child abuse Material</div>
          <div className="text-[#ffffffbf] mb-[16px]">
            Sexual Violence against Children
          </div>
          <div className="text-[#ffffffbf] mb-[16px]">
            Online Sexual abuse Material
          </div>
        </div>
      </div>
      <div className="flex flex-col justify-start items-start pt-[18px] px-[40px] ">
        <div className="w-full h-[0.3px] bg-[#ffffffbf] mb-[10px]"></div>
        <div className="tracking-normal">
          © <span className="">2023</span> Zerab. All rights reserved.
        </div>
      </div>
    </div>
  );
}

export default Footer