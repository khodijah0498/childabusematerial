import { useEffect, useState } from 'react';
import Blogcollection from '../../components/organisms/Blogcollection';

const Blog = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [error, setError] = useState(null)
  const [response, setResponse] = useState(null)

  const handleNewsletter = async (e) => {
    e.preventDefault()
    let body = {name, email}
    const res = await fetch("https://webjs-nine.vercel.app/newsletter/subscribe", {
      method: 'POST',
      body: JSON.stringify(body),
      headers: {
        'Content-Type': 'application/json'
      }
    });

    const responses = await res.json()

    if(!res.ok) setError(responses.error)
    if(res.ok){
      setError(null)
      setEmail('')
      setName('')
      setResponse(responses.message)
    }

  }

  useEffect(() => {
    const timer = setTimeout(() => {
      setError(null)
    }, 3000);
    return () => clearTimeout(timer);
  }, error);

  useEffect(() => {
    const timer = setTimeout(() => {
      setResponse(null);
    }, 3000);
    return () => clearTimeout(timer);
  }, response);


  return (
    <div className="  flex flex-row pl-8 pr-8 gap-6 ">
      <div className="w-full">
        <div className="w-full h-[15rem] bg-[#3296F6] flex justify-center items-center flex-col gap-2">
          <h1 className="text-7xl text-white">Zerab Report Blog</h1>
          <span className="text-blue-100">
            ...checking operation and regulation
          </span>
        </div>

        <Blogcollection />
        <div className="flex flex-row justify-center items-center bg-blue-50 mb-48 mt-16 w-full h-[20rem] rounded-2xl p-9  ">
          <div className="bg-white w-3/4 h-[15rem] flex flex-col  rounded-2xl p-12">
            {error && (
              <p className="text-red-700 mb-2 rounded-md border border-red-700 p-2 w-full bg-red-200 text-sm capitalize text-center">
                {error}
              </p>
            )}
            {response && (
              <p className="text-green-700 mb-2 rounded-md border border-green-700 p-2 w-full bg-green-200 text-sm capitalize text-center">
                {response}
              </p>
            )}
            <div className="flex justify-start flex-col items-start">
              <h1 className="text-lg">Subcribe to blog</h1>
              <p className=" text-xs mb-8 text-gray-600">
                Get our blog on driven growth to curb Child sexual abuse
                Materials!
              </p>
            </div>
            <form onSubmit={handleNewsletter} className="flex flex-row gap-12 ">
              <div className="w-1/2 flex rounded-3xl py-[0.855rem] pl-8  border border-[#3296F6]">
                <input
                  className="flex-grow border-none bg-transparent text-base font-light outline-none outline-offset-2"
                  type="text"
                  placeholder="Enter your fullname"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>

              <div className="w-1/2 flex rounded-3xl py-[0.855rem] pl-8 border border-[#3296F6]">
                <input
                  className="flex-grow border-none bg-transparent text-base font-light outline-none outline-offset-2"
                  type="text"
                  placeholder="Enter your email address"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <button className="flex w-1/4 justify-center text-white rounded-[1.25rem] border text-base outline-none outline-offset-2 cursor-pointer bg-[#3296F6]  py-[1.3rem] border-none">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Blog