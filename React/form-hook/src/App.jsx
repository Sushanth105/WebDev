import { useState } from 'react'
import { useForm } from 'react-hook-form'

function App() {

  const {
    register,           // to register inputs
    handleSubmit,       // to handle form submit
    watch,              // to watch specific input values
    reset,             // to reset the form
    setValue,           // to manually set value
    getValues,          // to get current values
    formState: {
      errors,           // validation errors
      isSubmitting,     // true while submitting
      isValid           // true if form is valid
    }
  } = useForm({criteriaMode: 'all'});

  const delay = ()=>{
    return new Promise((resolve, reject) => {
      setTimeout(()=>{
        resolve();
        console.log("Wait for 5 sec");
      },5000)
    })
  }

  const onSubmit = async (data) => {
    await delay()
    console.log(data);
    reset();
  }


  return (
    <>
      <div className='flex h-[100vh] justify-center items-center'>
        <form className=' border-2 p-10 rounded-3xl' onSubmit={handleSubmit(onSubmit)} >
          <div className='text-center font-bold text-4xl mb-5'>Registration Form</div>
          <div className="flex-col justify-center text-[20px] mb-3 text-center text-red-600">
            {errors.username && <div>{errors.username.message}</div> }
            {errors.password && <div>{errors.password.message}</div> }
            {isSubmitting && <div className='text-white font-bold'>Loading...</div>}
          </div>
          <div className='m-2'>
            <label className='text-2xl' htmlFor="username">UserName : </label>
            <input className='border-1 outline-0 rounded-2xl pl-1' id='username' type="text" {...register("username", { required: "username is required", maxLength: { value: 8, message: "You reached max length" }, minLength: { value: 3, message: "Enter atleast 3 char" } })} />
          </div>
          <div className='m-2'>
            <label className='text-2xl' htmlFor="password">Password : </label>
            <input className='border-1 outline-0 rounded-2xl pl-1' id='password' type='password' {...register("password", { required: "password is required", minLength: { value: 8, message: "Enter atleast 8 char" }, 
              validate: {
                hasUppercase: (value) =>
                  /[A-Z]/.test(value) || "Must include an uppercase letter",
                hasNumber: (value) =>
                  /\d/.test(value) || "Must include a number",
                hasSpecialChar: (value) =>
                  /[@$!%*?&]/.test(value) || "Must include a special character"
              }
            })} />
          </div>
          <div className='text-center'>
            <input className=' border-1 p-1.5 rounded-3xl mt-5 cursor-pointer hover:bg-white hover:text-gray-900 active:bg-gray-900 active:text-white' disabled={isSubmitting} type="submit" />
          </div>
        </form>
      </div>
    </>
  )
}

export default App
