import React from 'react'

const Contact = () => {
  return (
    <div>
      <div className="flex flex-row mx-6 justify-center items-center">
        <div className="h-[40rem] w-[40rem] bg-[#3296F6]"></div>
        <div className="h-[40rem] w-[40rem] bg-slate-300">
          <div className="max-w-[31.8rem] mx-auto flex flex-col items-center pt-4 pb-12">
            <h1 className="text-5xl text-center font-bold ">Contact Us</h1>
            <p className=" text-center font-light px-3">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
              consectetur justo quis
            </p>
            <div className="w-full flex flex-col gap-8 px-8 mt-[4.37rem]">
              <div className="w-full flex rounded-3xl py-[0.855rem] pl-8 bg-[#F2F1F1]">
                <input
                  className="flex-grow border-none bg-transparent text-base font-light outline-none outline-offset-2"
                  type="text"
                  placeholder="Your full name"
                />
              </div>

              <div className="w-full flex rounded-3xl py-[0.855rem] pl-8 bg-[#F2F1F1]">
                <input
                  className="flex-grow border-none bg-transparent text-base font-light outline-offset-2 outline-none"
                  type="text"
                  placeholder="Your email address"
                />
              </div>
              <textarea
                name=""
                id=""
                class="resize-none p-[2rem] h-[10rem] font-light outline-none bg-[#F2F1F1] rounded-2xl w-full"
                placeholder="Write a note about your request"
              ></textarea>
              <button className="flex w-1/2 justify-center items-center text-white border text-base outline-none outline-offset-2 cursor-pointer bg-[#3296f6] p-2 ml-24 rounded-2xl">
                Send
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-blue-100 h-[20rem] flex flex-col gap-y-4  justify-center items-center mt-4">
        <h1 className="mb-6 text-3xl font-bold">Get in Touch</h1>
        <div className="flex flex-row gap-40 justify-between items-center">
          <div className="flex gap-1 flex-col">
            <div className="h-12 w-12 rounded-full bg-[#3296f6] justify-center items-center flex ml-20">
              <img
                src="../../../images/email.svg"
                className="h-4 w-4 "
                alt="emailimage"
              />
            </div>
            <p class="max-w-[14rem]">webfalainitative@gmail.com</p>
          </div>
          <div class="flex flex-col gap-2 items-center">
            <div className="h-12 w-12 rounded-full bg-[#3296f6] justify-center items-center flex">
              <img
                src="../../../images/call.svg"
                className="h-4 w-4"
                alt="callimage"
              />
            </div>
            <p>+234 906-777-4136</p>
          </div>

          <div className="">
            <div class="flex gap-2 flex-col">
              <div className="h-12 w-12 rounded-full bg-[#3296f6] justify-center items-center flex ml-40">
                <img
                  src="../../../images/map.svg"
                  className="h-4 w-4"
                  alt="mapimage"
                />
              </div>
              <p>2 Shalom Street, University Road, Ilorin, Kwara State.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;