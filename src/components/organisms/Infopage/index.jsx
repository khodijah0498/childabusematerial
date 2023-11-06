import React from 'react';
import Form from '../../molecules/Form';
import "./InfopageStyles.css"

const Infopage = () => {
  return (
    <div className="p-[4rem] flex flex-col items-center justify-center bg-[#C5E2F5]">
      <div className="mb-[2rem]">
        <h1 className="text-[3rem] text-[#0a0a0a] font-normal leading-6">
          Report child sexual abuse materials
        </h1>
      </div>
      <div className="text-[1.125rem] pb-[1.875rem]">
        <p className="mb-[1rem] leading-[1.6rem]">
          Your report make a difference make a difference is a fight to stop the
          sexual abuse of a students
        </p>
      </div>
      <div>
        <span className="text-[#fff] text-[1rem] bg-[#3296F6] p-[0.5rem] mb-8">
          Note: Your report must refer to material with 'actual' children not
          animation or drawings
        </span>
      </div>
      <Form />
      <div className="mt-8 w-1/2">
        <h2 className="text-2xl mb-9">YOU SHOULD REPORT THAT</h2>
        <p className='mb-8'>
          If you have come across images or videos with children and young
          people under the age of 18 that meet just one of the criteria below,
          then you should report the material:
        </p>
        <ul className='flex flex-col gap-4 pl-4'>
          <li>
            Material featuring children engaged in sexual activity with an adult
            and/or other children
          </li>
          <li>Material where the focus is on a child's genitals</li>
          <li>
            Material with children who appear fully or partially undressed
          </li>
          <li>Links to websites with child sexual abuse material</li>
        </ul>
        <p className='mt-6'>
          We would be happy to receive your report, even if you are in doubt as
          to whether the image or video fits one of the criteria above. Our
          experts can assess whether the material you report is illegal.
        </p>
      </div>
    </div>
  );
}

export default Infopage;