import React, { useEffect, useState } from 'react'

function CustomFormBuilder({form, formClass, onSave}) {
  const [errors, setErrors] = useState([])
  const [showError, setShowError] = useState(false)
  const [formData, setFormData] = useState([])
  
  const handleChange = (e, component) => {
    handleValidation(e, component)
    const { id, name, value, type } = e.target
    type === 'radio' ? 
    setFormData(prevData => ({
      ...prevData,
      [id]: value
    })) :
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }))
  }

  const handleSubmit = (e) => {
      e.preventDefault()
      const hasErrors = Object.values(errors).some(value => value !== null) // checks if form has any error messages
      console.log(`errors: ${hasErrors}`)
      hasErrors ? setShowError(true) : onSave(formData) // submit only if form has no error messages at all
      
  }

  const handleValidation = (e, {id, validation}) => {
    const userInput = e.target.value
    if(validation) {
      const { required, regex, errorMsg } = validation
      const { emptyMsg, invalidMsg } = errorMsg
      if (required && !userInput) {
        console.log('field empty')
        setErrors({
          ...errors,
          [id]: emptyMsg
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
            [id]: invalidMsg
          })
        }
      }
    }    
  }

  // initialize all required fields with a "required field" error message
  useEffect(() => {
    const updatedErrors = {}
    form.template.map(component => {
      component?.validation?.required && (
        updatedErrors[component.id] = component?.validation?.errorMsg?.emptyMsg
      )
    })

    setErrors({
      ...errors,
      ...updatedErrors
    })
  }, [form.template])
  
  const renderFields = ({ template, parentClass }) => {
    return template.map((element, index) => {
      const { id, className, name, label, labelClass, type, placeholder, options, validation } = element
      switch(type){
        case 'submit':
          return (
            <div key={index} className={parentClass}>
              <button id={id} className={className} name={name} type={type}>{label}</button>
            </div>
          )
        case 'select':
          return (
            <div key={index} className={parentClass}>
              <label htmlFor={id} className={labelClass}>
                {label}
              </label><br />
              <select
                id={id} 
                className={className} 
                name={name} 
                onClick={(e) => { handleChange(e, element) }}
              >
                {
                  options.map((option, index) => (
                    <option key={index} value={option?.value}>{option?.text}</option>
                  ))
                }
              </select>
            </div>
          )
        case 'radio':
          return (
            <div key={index} className={parentClass}>
              <label htmlFor={id} className={labelClass}>
                {label}
              </label><br />
              <input id={id} className={className} name={name} type={type} placeholder={placeholder} onClick={(e) => { handleChange(e, element) }} />
            </div>
          )        
        case 'tel':
          return (
            <div key={index} className={parentClass}>
              <label htmlFor={id} className={labelClass}>
                {label}
              </label>
              <input id={id} className={className} name={name} type={type} placeholder={placeholder} onChange={(e) => { handleChange(e, element) }} />
              <div className='errorMsg' style={ showError ? {display: 'block'} : {display: 'none'} }>
                <span style={{ color: "red", fontSize: validation?.fontSize }}>{errors[id]}</span>
              </div>
            </div>
          )
        default:
          return (
            <div key={index} className={parentClass}>
              <label htmlFor={id} className={labelClass}>
                {label}
              </label><br />
              <input id={id} className={className} name={name} type={type} placeholder={placeholder} onChange={(e) => { handleChange(e, element) }} />
              <div className='errorMsg' style={ showError ? {display: 'block'} : {display: 'none'} }>
                <span style={{ color: "red", fontSize: validation?.fontSize }}>{errors[id]}</span>
              </div>
            </div>
          )
      }
    })
  }
  return (
    <form onSubmit={handleSubmit} className={formClass}>      
      {renderFields(form)}
    </form>
  )
}

export default CustomFormBuilder