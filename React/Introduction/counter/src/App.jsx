import { useState , useEffect , useRef} from "react"
import NavBar from './components/Nav'
import Footer from "./components/Footer";
import ReactImage from './assets/react.svg'


function App() {
  const [count, setCount] = useState(0);
  const ini = useRef(count);
  const ref = useRef();

  useEffect(() => {
    if(ini.current !== count ){
      // alert("Count is changed");
      ref.current.style.borderColor = "red";
      ini.current = count
    }
  }, [count]); // if i use [] the alert will only shows when it is 1st rendered and if we dont use anything then it will execute every render

  const Decrease = () => {
    if (count == 0) {
      alert("You can't Decrease the value less then 0")
    }
    else {
      setCount(count - 1)
    }
  }
  return (
    <div>
      <NavBar logo={ReactImage}/>
      <div className=" flex items-center justify-center h-[90vh]">
        <div ref={ref} className="App w-fit border-4 p-15 sm:p-20 border-purple-500">
          <div className="counter mx-auto mb-10 w-fit font-bold text-5xl">{count}</div>
          <button className=" border-2 border-purple-500 hover:scale-105 active:border-white m-1 rounded-xl p-1.5 cursor-pointer" onClick={Decrease}>Decrease</button>
          <button className=" border-2 border-purple-500 hover:scale-105 active:border-white m-1 rounded-xl p-1.5 cursor-pointer" onClick={() => { setCount(0) }}>Reset</button>
          <button className=" border-2 border-purple-500 hover:scale-105 active:border-white m-1 rounded-xl p-1.5 cursor-pointer" onClick={() => { setCount(count + 1) }}>Increase</button>
        </div>
      </div>
      <Footer/>
    </div>
  );
}

export default App
