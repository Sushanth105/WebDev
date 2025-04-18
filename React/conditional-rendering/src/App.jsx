import { useState } from 'react'

function App() {
  const [isExist, setIsExist] = useState(false);
  const [cards, setCards] = useState([
    {title : "title1",
    discription : "discription1"},
    {title : "title2",
    discription : "discription2"},
    {title : "title3",
    discription : "discription3"}
  ])

  const Todo = (card)=>{
    return(
      <div className=' m-3 p-3 border-2 w-fit'>
          <div>Title : {card.title}</div>
          <div>Discription : {card.discription}</div>
      </div>
    )
  }

  return (
    <>
      <div className=' min-h-15'>{isExist && <h1 className=' text-5xl'>Turned on</h1>}</div>
      <button className=' border-2 m-3 p-2 cursor-pointer font-bold' onClick={()=>{ setIsExist(!isExist)}}>{isExist ? "OFF" : "ON"}</button>
      {cards.map((card)=>{
        return <Todo title={card.title} discription={card.discription} />
      })}
    </>
  )
}

export default App
