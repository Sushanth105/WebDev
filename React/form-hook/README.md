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

## Common ```register()``` Validation Rules

| Rule | Description |
| :--- | :--- |
```required``` | Makes the field mandatory. Can be true or a string (custom message).
```minLength``` | Sets the minimum number of characters (for strings).
```maxLength``` | Sets the maximum number of characters (for strings).
```min``` | Sets the minimum value (for numbers).
```max``` | Sets the maximum value (for numbers).
```pattern``` | Validates against a regex pattern (commonly used for email, phone, etc.).
```validate``` | A custom validation function — for advanced rules or server-side checks.
```valueAsNumber``` | Converts the value to a number (for number inputs).
```valueAsDate``` | Converts the value to a Date object (for date inputs).
```setValueAs``` | You can define how the value should be transformed before validation.
```disabled``` | Disables the input entirely.
```shouldUnregister``` | If true, input is removed from the form when unmounted. (Advanced)

---

## Example with All Rules:

```jsx
<input
  {...register("age", {
    required: "Age is required",
    min: {
      value: 18,
      message: "You must be at least 18"
    },
    max: {
      value: 99,
      message: "Maximum age is 99"
    },
    valueAsNumber: true
  })}
/>
```
---

```jsx
<input
  {...register("email", {
    required: "Email is required",
    pattern: {
      value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
      message: "Invalid email address"
    }
  })}
/>
```

---

```jsx
<input
  {...register("username", {
    required: true,
    minLength: {
      value: 3,
      message: "Min 3 characters"
    },
    maxLength: {
      value: 8,
      message: "Max 8 characters"
    }
  })}
/>
```

---

### Custom Validator with validate

```jsx
<input
  {...register("password", {
    required: "Password required",
    validate: value => 
      value.includes("123") ? "Password too weak" : true
  })}
/>
```
You can also return multiple errors using ```criteriaMode: "all"```.

---

## What is ```validate```?

The validate option allows you to write custom logic to determine whether a field is valid.
<br>
It can be:
- A function
- An object of multiple functions (for multiple custom validations)

## Basic Example: Single Function

```jsx
<input
  {...register("username", {
    validate: (value) => {
      return value === "sushanth"
        ? true
        : "Only 'sushanth' is allowed as username";
    }
  })}
/>
```

---

## Example with Multiple Rules Using an Object

```jsx
<input
  {...register("password", {
    validate: {
      hasNumber: (value) =>
        /\d/.test(value) || "Must include a number",
      hasUpperCase: (value) =>
        /[A-Z]/.test(value) || "Must include an uppercase letter",
      notCommon: (value) =>
        value !== "password" || "Password is too common"
    }
  })}
/>
```
**This works only if you use ```criteriaMode: "all"``` in ```useForm()```:**
```jsx
<input
  type="password"
  {...register("confirmPassword", {
    validate: (value) =>
      value === watch("password") || "Passwords do not match"
  })}
/>
```


