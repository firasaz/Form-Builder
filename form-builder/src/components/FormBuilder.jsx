import React, { useEffect, useState } from 'react'

function FormBuilder({form, handleChange, handleSubmit}) {
  const [errors, setErrors] = useState({})
  const [showError, setShowError] = useState(false)
  
  const handleValidation = (e, {id, required, regex}) => {
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
  }

  // chatGPT solution
  useEffect(() => {
    const updatedErrors = {}
    form.components.map(component => {
      component.required && (
        updatedErrors[component.id] = 'Cannot be empty'
      )
    })
    setErrors({
      ...errors,
      ...updatedErrors
    })
  }, [])

  // // my approach
  // useEffect(() => {
  //   form.components.map(component => {
  //     component.required && (
  //       setErrors({
  //         ...errors,
  //         [component.id]: "Cannot be empty"
  //       })
  //     )
  //   })
  // }, [])
  
  return (
    <>
      {form.components.map((component, index) => (
        <div key={index} className={form.class.stateDefault}style={{display: component?.display}}>
          {
            component?.type === 'submit' ? (
              <button id={component?.id} className={component?.class} type={component?.type} onClick={(e) => {handleSubmit(e); setShowError(true)}}>{component?.text}</button>
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
                    onClick={(e) => { handleChange(e) }}
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
                    className={component?.class} 
                    type={component.type} 
                    onChange={(e) => { 
                      handleValidation(e, component);
                      handleChange(e); 
                    }} 
                    placeholder = {component?.placeholder}
                  />
                  <div className='errorMsg' style={ showError ? {display: 'block'} : {display: 'none'} }>
                    <span style={{ color: "red" }}>{errors[component?.id]}</span>
                  </div>
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