'use client'

export default function Home() {
  const data ={
    name : "Sushanth",
    age : 19
  }

  const handleSend = async ()=>{
    const respose = await fetch('/api/add' , {
      method : 'POST',
      headers : { 'Content-Type' : 'application/json' },
      body : JSON.stringify(data)
    }) 
    if(!respose.ok){
      console.log('sending the data to the backend is failed')
    }
    const res = await respose.json()
    console.log(res)
  }


  return (
    <div>
      <h1 className="text-xl" >sending data to backend</h1>
      <button className="border-1 px-1 cursor-pointer" onClick={handleSend}>ok</button>
    </div>
  );
}
