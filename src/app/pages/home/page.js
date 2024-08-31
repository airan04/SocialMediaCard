import Image from "next/image";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="flex flex-col items-center justify-center h-screen">
        <div className="flex flex-col p-20 border-3 bg-zinc-900 rounded-lg ">
          <div className="flex flex-col justify-center items-center">
            <Image
              src="/assets/images/avatar-jessica.jpeg"
              width={100}
              height={100}
              className="rounded-full mb-10"
              // alt="Picture of the author"
            />
            <h1 className="text-2xl mb-2 font-bold">Jessica Randall</h1>
            <h4 className="text-sm font-semibold text-green-400">
              London, United Kingdom
            </h4>
          </div>
          <div className="m-4">
            <h4>"Front-end developer and avid reader"</h4>
          </div>
          <div className="flex flex-col">
            <button className="flex justify-center items-center m-2 p-4 rounded-lg bg-zinc-800 font-semibold hover:bg-green-400 hover:text-black">
              Github
            </button>
            <button
              className="flex justify-center items-center m-2 p-4 rounded-lg bg-zinc-800 font-semibold hover:bg-green-400 hover:text-black"
              style={{ hover: { backgroundColor: "#a3e635" } }}
            >
              Frontend Mentor
            </button>
            <button className="flex justify-center items-center m-2 p-4 rounded-lg bg-zinc-800 font-semibold hover:bg-green-400 hover:text-black">
              Linkedin
            </button>
            <button className="flex justify-center items-center m-2 p-4 rounded-lg bg-zinc-800 font-semibold hover:bg-green-400 hover:text-black">
              Twitter
            </button>
            <button className="flex justify-center items-center m-2 p-4 rounded-lg bg-zinc-800 font-semibold hover:bg-green-400 hover:text-black">
              Instagram
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
