import Image from "next/image";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="flex flex-col items-center justify-center h-screen">
      <div className="flex flex-col p-4 border-3 bg-gray-600 rounded-lg">
        <div className="flex flex-col justify-center items-center">
          <Image src={"/assets/images/avatar-jessica.jpeg"} width={120} height={120} />
          <h1>Jessica Randall</h1>
          <h4>London, United Kingdom</h4>
        </div>
        <div className="mb-4">
          <h4>"Frontend developer and avid reader"</h4>
        </div>
        <div className="flex flex-col">
          <button className="flex justify-center items-center border-2 m-2 p-4 rounded-lg">Github</button>
          <button className="flex justify-center items-center border-2 m-2 p-4 rounded-lg">Frontend Mentor</button>
          <button className="flex justify-center items-center border-2 m-2 p-4 rounded-lg">Linkedin</button>
          <button className="flex justify-center items-center border-2 m-2 p-4 rounded-lg">Twitter</button>
          <button className="flex justify-center items-center border-2 m-2 p-4 rounded-lg">Instagram</button>
        </div>
      </div>
     </div>
    </div>
  );
}
