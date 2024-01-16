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
  return (
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