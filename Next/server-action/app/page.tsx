// import fs from 'fs/promises'
import { handleForm } from "@/action/form";

export default function Home() {

  // const handleForm = async (e: FormData)=>{
  //   'use server'
  //   console.log(e.get('name') , e.get('age'))
  //   await fs.appendFile('detail.txt',`my name is ${e.get('name')} of age ${e.get('age')}\r\n`)
  // }

  return (
    <div className="flex h-screen justify-center items-center">
      <div className="bg-gray-500 inset-shadow-[2px_2px_15px_5px_blue] px-10 py-4 rounded-3xl">
        <form action={handleForm}>
          <div className="m-4">
            <div>
              <label htmlFor="name" className="text-xl font-bold">
                Name :
              </label>
            </div>
            <div>
              <input type="text" id="name" name="name" className="border-2" />
            </div>
          </div>
          <div className="m-4">
            <div>
              <label htmlFor="age" className="text-xl font-bold">
                Age :
              </label>
            </div>
            <div>
              <input type="number" id="age" name="age" className="border-2" />
            </div>
          </div>
          <div className="flex justify-center">
            <button className="m-4 border-2 px-2 py-1 rounded-3xl cursor-pointer">Submit</button>
          </div>
        </form>
      </div>
    </div>
  );
}
