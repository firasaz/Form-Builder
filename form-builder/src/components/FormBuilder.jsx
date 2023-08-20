import React, { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { changeLanguage } from 'i18next'

function FormBuilder({form, onSave}) {
  const { t } = useTranslation()
  const [errors, setErrors] = useState([])
  const [showError, setShowError] = useState(false)
  const [formData, setFormData] = useState([])
  
  const handleChange = (e, component) => {
    handleValidation(e, component)
    const { name, value } = e.target
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }))
  }

  const handleSubmit = (e) => {
      e.preventDefault()
      const hasErrors = Object.values(errors).some(value => value !== null) // checks if form has any error messages
      console.log(hasErrors)
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

  // chatGPT solution
  useEffect(() => {
    const updatedErrors = {}
    form.components.map(component => {
      component?.validation?.required && (
        updatedErrors[component.id] = component?.validation?.errorMsg?.emptyMsg
      )
    })
    setErrors({
      ...errors,
      ...updatedErrors
    })
  }, [])
  
  return (
    <form onSubmit={handleSubmit}>

      {/* {form.translated && (
      <div style={{marginBottom: '5px'}}>
          <button type='button' onClick={ () => changeLanguage('en') }>en</button>
          <button type='button' onClick={ () => changeLanguage('ar') }>ar</button>
      </div>
      )} */}
      
      {form.components.map((component, index) => (
        <div key={index} className={form.class.stateDefault} style={{display: component?.display}}>
          {
            component?.type === 'submit' ? (
              <button id={component?.id} className={component?.class} name={component?.name} type={component?.type}>{component?.text}</button>
            ) : (
              component?.type === 'select' ? (
                <>
                  <label
                    htmlFor={component?.id} 
                    className={component?.labelClass}
                  >
                    {t(component?.label)}
                  </label><br />
                  <select
                    id={component?.id} 
                    className={component?.class} 
                    name={component?.name} 
                    onClick={(e) => { handleChange(e, component) }}
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
                    {t(component?.label)}
                  </label><br />
                  <input 
                    id={component?.id} 
                    className={component?.class} 
                    name={component?.name} 
                    type={component.type} 
                    onChange={(e) => { handleChange(e, component) }} 
                    placeholder = {component?.placeholder}
                  />
                  <div className='errorMsg' style={ showError ? {display: 'block'} : {display: 'none'} }>
                    <span style={{ color: "red", fontSize: '14px' }}>{errors[component?.id]}</span>
                  </div>
                </>
              )
            )
          }
        </div>
      ))}
    </form>
  )
}

export default FormBuilder