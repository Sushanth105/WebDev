import { useState , useEffect } from 'react'

function App() {
  const [data, setdata] = useState([])

  const fetchData = async ()=>{
    let a = await fetch("https://jsonplaceholder.typicode.com/posts");
    let data = await a.json();
    setdata(data);  
    console.log(data);
  }

  useEffect(() => {
    fetchData()
  }, [])
  

  return (
    <div className=" flex justify-center">
      {data.map((data)=>{
        return <div key={data.id} className=' shrink-0 border-2 m-3 w-100 h-50'>
          <div className=' my-2'>Title : {data.title}</div>
          <div className='my-2'>Body : {data.body}</div>
        </div>
      })}
    </div>
  )
}

export default App
