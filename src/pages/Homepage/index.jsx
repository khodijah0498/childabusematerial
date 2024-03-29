import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  return (
    <div className="  mt-10">
      <div className="f w-[full] h-[600px] items-center bg-fixed bg-[url(../../../images/therapy.jpeg)]   bg-no-repeat bg-center bg-cover">
        <div className=" w-[100%] h-[100%] items-center bg-[#3296F6] bg-opacity-60">
          <div className=" justify-between mr-[7rem]">
            <h1
              className=" text-4xl items-center justify-center
              max-w-20 m-[180px] ml-20 font-bold leading-tight text-center text-white "
            >
              Defenders of Innocence: Unsung Champions Fighting Misinformation
            </h1>
          </div>
        </div>
      </div>

      <div
        className="flex flex-col gap-12 p-[4rem] justify-between  mr-16 ml-16 mt-16">
      <div className="flex flex-row justify-between mr-16 ml-0">
        <div className="relative">
          <img
            src="../../../images/SEXUAL_ABUSE-transformed.jpg"
            alt="Your Image"
            className="w-[90%] h-full object-cover"
          />
          <div className="absolute inset-0 bg-[#3296F6] opacity-50 w-[90%] h-full"></div>
        </div>
        <div className="flex flex-col justify-between mr-[7rem]">
          <h1 className="text-left text-4xl max-w-lg font-bold leading-tight text-[#3296F6]">
            Defenders of Innocence: Unsung Champions Fighting Misinformation
          </h1>
          <p className="max-w-sm ">
            Within our community of heroes, you'll find the unsung warriors who
            have made it their life's mission to battle child sexual abuse
            misinformation. Their relentless efforts, education campaigns, and
            unyielding commitment are our greatest defense against this threat,
            ensuring that our children grow up in a safer, more informed world.
          </p>
          <button
            className="bg-[#3296F6] text-center text-white p-4 rounded-2xl max-w-[9rem]"
            onClick={() => navigate("/info")}
          >
            Make a Report
          </button>
        </div>
      </div>
      <div className="w-full  p-[4rem] bg-[#3296F6]">
        <div className="flex flex-col justify-between mr-[7rem] gap-6">
          <h1 className="text-left text-4xl max-w-lg font-bold leading-tight text-[#FFFFFF]">
            Defenders of Innocence: Unsung Champions Fighting Misinformation
          </h1>
          <p className="max-w-sm text-[#FFFFFF]">
            Within our community of heroes, you'll find the unsung warriors who
            have made it their life's mission to battle child sexual abuse
            misinformation. Their relentless efforts, education campaigns, and
            unyielding commitment are our greatest defense against this threat,
            ensuring that our children grow up in a safer, more informed world.
          </p>
          <button
            className="bg-[#0b579e] text-center text-white p-4 rounded-2xl max-w-[9rem]"
            onClick={() => navigate("/info")}
          >
            Make a Report
          </button>
        </div>
      </div>
      <div className=" mt-8 mr-16 ml-16">
        <div className=" flex flex-row gap-4 ">
          <div className="border border-gray-200 border-t-green-300 border-t-4 p-8 flex flex-row gap-8">
            <span className="text-green-300 text-5xl font-bold mr-6">
              375,230
            </span>
            <span className="text-3xl font-normal">
              Reports accessed by our Team
            </span>
          </div>
          <div className=" border border-gray-200 border-t-4 border-t-blue-300 p-8 flex flex-row gap-8 w-2/4">
            <span className="text-blue-300 text-5xl font-bold ">255,580</span>
            <span className="text-3xl font-normal ">
              Reports confirmed to show child sexual abuse
            </span>
          </div>
        </div>
        <div className=" flex flex-row gap-4 mt-6 ">
          <div className="border border-gray-200 border-t-orange-300 border-t-4 p-8 flex flex-row gap-8">
            <span className="text-orange-300 text-5xl font-bold mr-6">
              375,230
            </span>
            <span className="text-3xl font-normal">
              Reports accessed by our Team
            </span>
          </div>
          <div className=" border border-gray-200 border-t-4 border-t-green-300 p-8 flex flex-row w-2/4">
            <div className=" flex items-center justify-center h-16 w-16 mr-6 border-green-300 border-8 rounded-full">
              <span className=" text-sm font-bold ">170%</span>
            </div>
            <span className="text-3xl font-normal">
              Reports confirmed to show child sexual abuse
            </span>
          </div>
        </div>
      </div>
      <div className="p-8">
        <h1 className="text-4xl font-bold">OUR PARTNERS</h1>
      </div>
    </div>
    </div>
  );
};

export default Home;
