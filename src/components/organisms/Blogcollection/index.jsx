import { useState } from 'react';
import { useEffect } from 'react';
import Collection from '../Collection';

const datam = [
  {
    title: "",
    data: [
      {
        img: "../../../../images/SAFETY-transformed.jpg",
        des: "Online Safety",
      },
      {
        img: "../../../../images/lady abuse.jpg",
        des: "Child abuse Material",
      },
      {
        img: "../../../../images/SEXUAL_ABUSE-transformed.jpg",
        des: "Sexual violence against Children",
      },

      {
        img: "../../../../images/online sexual abuse material.jpg",
        des: "Online Sexual abuse Material",
      },
    ],
  },
];


const Blogcollection = () => {

  const [data, setData] = useState(null)

  const getBlog = async () => {
    const res = await fetch("https://webjs-nine.vercel.app/blog/get");
    const response = await res.json();
    if (!res.ok) console.log("See error", response.error);
    if (res.ok) {
      setData(response.data)
      console.log('another loop')
      console.log(data)
    }
  };

  useEffect(() => {
    getBlog();
  }, [data == null]);

  return (
    // <div>
    //   {data ? data.map((blog, i) => (
    //       <div key={i}>
    //         <img src={blog.image} alt="" />
    //         <h2>{blog.title}</h2>
    //         <p>{blog.body}</p>
    //       </div>
    //     )) : <h2 className='text-center text-2xl text-gray-400'>No Blog Yet</h2>}
    // </div>

    <div>
      {datam.map((data, index) => (
        <section className="mt-16" key={index}>
          <h1>{data.title}</h1>
          <div className="grid [grid-template-columns:repeat(auto-fit,minmax(15rem,1fr))]  gap-8  mt-6 ">
            {data.data.map(({ img, des }, i) => (
              <Collection key={i} img={img} des={des} />
            ))}
          </div>
        </section>
      ))}
    </div>
  );
}

export default Blogcollection