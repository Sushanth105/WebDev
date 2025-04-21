import { useState } from 'react'
import { useForm } from 'react-hook-form'

function App() {

  const {
    register,           // to register inputs
    handleSubmit,       // to handle form submit
    watch,              // to watch specific input values
    reset,              // to reset the form
    setValue,           // to manually set value
    getValues,          // to get current values
    formState: { 
      errors,           // validation errors
      isSubmitting,     // true while submitting
      isValid           // true if form is valid
    }
  } = useForm();

  const onSubmit = (data)=>{
    console.log(data);
  }
  

  return (
    <>
      <div className=''>
        <form onSubmit={handleSubmit(onSubmit)} >
        <div>
          <label htmlFor="username">UserName : </label>
          <input type="text" {...register("username", { required : "username is required", maxLength : {value : 8 , message : "You reached max length"},minLength : {value : 3 ,message : "Enter atleast 3 char"}})} />
          {errors.username && <p>{errors.username.message}</p>}
        </div>
        <div>
          <input type="submit"/>
        </div>
        </form>
      </div>
    </>
  )
}

export default App
