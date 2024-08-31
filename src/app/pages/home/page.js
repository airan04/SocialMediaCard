import Image from "next/image";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="flex flex-col items-center justify-center h-screen">
      <div className="flex flex-col p-20 border-3 bg-zinc-900 rounded-lg ">
        <div className="flex flex-col justify-center items-center">
          <Image src={"/assets/images/avatar-jessica.jpeg"} width={120} height={120} />
          <h1 className="text-2xl mb-2 font-bold">Jessica Randall</h1>
          <h4 className="text-sm font-semibold text-green-400">London, United Kingdom</h4>
        </div>
        <div className="m-4">
          <h4>"Frontend developer and avid reader"</h4>
        </div>
        <div className="flex flex-col">
          <button className="flex justify-center items-center m-2 p-4 rounded-lg bg-zinc-800 font-semibold hover:bg-green">Github</button>
          <button className="flex justify-center items-center m-2 p-4 rounded-lg bg-zinc-800 font-semibold">Frontend Mentor</button>
          <button className="flex justify-center items-center m-2 p-4 rounded-lg bg-zinc-800 font-semibold">Linkedin</button>
          <button className="flex justify-center items-center m-2 p-4 rounded-lg bg-zinc-800 font-semibold">Twitter</button>
          <button className="flex justify-center items-center m-2 p-4 rounded-lg bg-zinc-800 font-semibold">Instagram</button>
        </div>
      </div>
     </div>
    </div>
  );
}
