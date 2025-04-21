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
  

  return (
    <>
      
    </>
  )
}

export default App
