import { useState } from 'react'

function App() {
  const [Name, setName] = useState("Sushanth");
  const [form, setForm] = useState({ email: "", phone: "" })

  const handleName = (e) => {
    setName(e.target.value);
  };

  const handleForm = (e) => {
    setForm({...form, [e.target.name] : e.target.value})
  };

  return (
    <>
      <div className="input">
        <div className="name">
          <label htmlFor="Name">Name : </label>
          <input type="text" className=' border-2 m-2 p-2' name="Name" id='Name' value={Name} onChange={handleName} />
        </div>
        <div className="email">
          <label htmlFor="Email">Email : </label>
          <input type="email" className=' border-2 m-2 p-2' name="email" value={form.email}  id='Email' onChange={handleForm} />
        </div>
        <div className="phone">
          <label htmlFor="Phone">Phone : </label>
          <input type="tel" className=' border-2 m-2 p-2' name="phone" value={form.phone}  id='Phone' onChange={handleForm} />
        </div>
      </div>
      <div className="output">
        <div>The Name : {Name}</div>
        <div>The Email : {form.email}</div>
        <div>The Phone : {form.phone}</div>
      </div>
    </>
  )
}

export default App
