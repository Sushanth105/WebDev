# ```useForm``` Hook

## What is useForm?

useForm is a custom React hook provided by the library React Hook Form. It helps manage forms in a simpler, more performant, and scalable way compared to using traditional React state (useState) for each input.

---

## Basic Setup
First, install the library:
```bash
npm install react-hook-form
```
Then in your component:

```jsx
import { useForm } from "react-hook-form";
```
---
## ``` useForm() ``` Return Object - What's Inside?

```js
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
```
---
##  Example
```jsx
import React from "react";
import { useForm } from "react-hook-form";

export default function FullForm() {
  const { register, handleSubmit, watch, formState: { errors }, reset } = useForm();

  const onSubmit = data => {
    console.log(data);
    reset(); // reset after submit
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input 
        {...register("email", { required: "Email is required", pattern: /^\S+@\S+$/i })} 
        placeholder="Email" 
      />
      {errors.email && <p>{errors.email.message}</p>}

      <input 
        {...register("password", { required: true, minLength: 6 })} 
        placeholder="Password" 
        type="password"
      />
      {errors.password && <p>Password must be at least 6 characters</p>}

      <input type="submit" />
    </form>
  );
}
```
---
## Reset, SetValue, Watch

You can do more programmatically:

- ```reset()``` → Reset the form

- ```setValue("fieldName", "newValue")``` → Update any input value

- ```watch("fieldName")``` → Get the current value as user types

---

## How to Add Custom Error Messages
When you use register, you can pass custom error messages:
```jsx
<input
  {...register("email", {
    required: "Email is required",
    pattern: {
      value: /^\S+@\S+$/i,
      message: "Invalid email format"
    }
  })}
/>

{errors.email && <p>{errors.email.message}</p>}
```
---

> [!TIP]
> - Works with controlled or uncontrolled components
> - Minimal re-renders improve performance
> - Works with custom inputs too (like select, date pickers, etc.)
> - You can even integrate with Yup or Zod for schema-based validation

---