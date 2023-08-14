import React, { useEffect, useState } from 'react'

function FormBuilder({form, handleChange, handleSubmit}) {
  const [errors, setErrors] = useState({})
  
  const handleValidation = (e, {id, required, type, regex}) => {
    let formIsValid = true;
    const userInput = e.target.value

    if (required && !e.target.value) {
      formIsValid = false;
      setErrors({[id]: "Cannot be empty"});
    }

    // Name
    if (type === "name") {
      if (userInput.match(regex)) {
        formIsValid = true;
        setErrors({[id]: null});
        console.log('valid')
      } else {
        formIsValid = false;
        setErrors({[id]: "Only letters"});
        console.log('invalid')
      }
    }

    // Email
    if (type === "email") {
      let lastAtPos = userInput.lastIndexOf("@");
      let lastDotPos = userInput.lastIndexOf(".");

      if (
        !(
          lastAtPos < lastDotPos &&
          lastAtPos > 0 &&
          userInput.indexOf("@@") == -1 &&
          lastDotPos > 2 &&
          userInput.length - lastDotPos > 2
        )
      ) {
        formIsValid = false;
        setErrors({[id]: "Email is not valid"});
      } else {
        formIsValid = true
        setErrors({[id]: null})
      }
    }

    return formIsValid;
  }
  return (
    <>
      {form.components.map((component, index) => (
          <div key={index} className={`${form.class}`}>
            {
              component.type === 'submit' ? (
                <button id={component.id} className={component.class} type={component.type} onClick={handleSubmit}>{component.text}</button>
              ) : (
                component.type === 'select' ? (
                  <>
                    <label
                      htmlFor={component.id} 
                      className={component.labelClass}
                    >
                      {component.label}
                    </label>
                    <select
                      id={component.id} 
                      className={component.class} 
                      onClick={(e) => {
                        handleChange(e); 
                        handleValidation(component.required) 
                      }}
                    >
                      {
                        component.options.map((option, index) => (
                          <option key={index} value={option.value}>{option.text}</option>
                        ))
                      }
                    </select>
                  </>
                ) : (
                  <>
                    <label 
                      htmlFor={component.id} 
                      className={component.labelClass}
                    >
                      {component.label}
                    </label>
                    <input 
                      id={component.id} 
                      className={component.class} 
                      type={component.type} 
                      onChange={(e) => { 
                        handleChange(e); 
                        handleValidation(e, component) 
                      }} 
                    />
                    {component.id === 'name1' ? 
                      <span style={{ color: "red" }}>{errors["name"]}</span> : 
                      <span style={{ color: "red" }}>{errors["email"]}</span>
                    }
                  </>
                )
              )
            }
          </div>
      ))}
    </>
  )
}

export default FormBuilder