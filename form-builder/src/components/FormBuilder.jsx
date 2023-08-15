import React, { useState } from 'react'

function FormBuilder({form, handleChange, handleSubmit}) {
  const [errors, setErrors] = useState({})
  
  const handleValidation = (e, {id, required, regex, type}) => {
    const userInput = e.target.value

    if (required && !userInput) {
      console.log('field empty')
      setErrors({
        ...errors,
        [id]: "Cannot be empty"
      })
    } else {
      if (userInput.match(regex)) {
        setErrors({
          ...errors,
          [id]: null
        })
      } else {
        setErrors({
          ...errors,
          [id]: 'Invalid input'
        })
      }
    }

    // // Name
    // if (type === "name" && userInput) {
    //   if (userInput.match(regex)) {
    //     setErrors({
    //       ...errors,
    //       [id]: null
    //     })
    //     console.log('valid')
    //   } else {
    //     setErrors({
    //       ...errors,
    //       [id]: `Only letters`
    //     })
    //     console.log('invalid')
    //   }
    // }
    // // Email
    // if (type === "email" && userInput) {
    //   let lastAtPos = userInput.lastIndexOf("@");
    //   let lastDotPos = userInput.lastIndexOf(".");

    //   if (
    //     !(
    //       lastAtPos < lastDotPos &&
    //       lastAtPos > 0 &&
    //       userInput.indexOf("@@") == -1 &&
    //       lastDotPos > 2 &&
    //       userInput.length - lastDotPos > 2
    //     )
    //   ) {
    //     console.log('invalid')
    //     setErrors({
    //       ...errors,
    //       [id]: `${id} is not valid`
    //     })
    //   } else {
    //     setErrors({
    //       ...errors,
    //       [id]: null
    //     })
    //   }
    // }

    return formIsValid;
  }
  return (
    <>
      {form.components.map((component, index) => (
          <div key={index} className={`${form.class.stateDefault}`} style={{display: component?.display}}>
            {
              component?.type === 'submit' ? (
                <button id={component?.id} className={component?.class} type={component?.type} onClick={handleSubmit}>{component?.text}</button>
              ) : (
                component?.type === 'select' ? (
                  <>
                    <label
                      htmlFor={component?.id} 
                      className={component?.labelClass}
                    >
                      {component?.label}
                    </label><br />
                    <select
                      id={component?.id} 
                      className={component?.class} 
                      onClick={(e) => {
                        handleChange(e); 
                        handleValidation(e, component) 
                      }}
                    >
                      {
                        component?.options.map((option, index) => (
                          <option key={index} value={option?.value}>{option?.text}</option>
                        ))
                      }
                    </select>
                  </>
                ) : (
                  <>
                    <label 
                      htmlFor={component?.id} 
                      className={component?.labelClass}
                    >
                      {component?.label}
                    </label><br />
                    <input 
                      id={component?.id} 
                      className={component.class} 
                      type={component.type} 
                      onChange={(e) => { 
                        handleChange(e); 
                        handleValidation(e, component) 
                      }} 
                      placeholder = {component?.placeholder}
                      // style={{outline-color: 'red'}}
                    />
                    <div>
                      <span style={{ color: "red" }}>{errors[component?.id]}</span>
                    </div>
                    {/* { console.log(errors) } */}
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