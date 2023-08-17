import React, { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { changeLanguage } from 'i18next'

function FormBuilder({form, onSave}) {
  const { t } = useTranslation()
  const [errors, setErrors] = useState([])
  const [showError, setShowError] = useState(false)
  const [formData, setFormData] = useState([])
  
  const handleChange = ({id, value}) => {
      setFormData(prevData => ({
        ...prevData,
        [id]: value
      }))
  }

  const handleSubmit = (e) => {
      e.preventDefault()
      const hasErrors = Object.values(errors).some(value => value !== null) // checks if form has any error messages
      console.log(hasErrors)
      hasErrors ? setShowError(true) : (() => {console.log(formData); setShowError(false)}) // submit only if form has no error messages at all
      onSave(formData)
  }

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
      {form.translated && (
      <div style={{marginBottom: '5px'}}>
          <button type='button' onClick={ () => changeLanguage('en') }>en</button>
          <button type='button' onClick={ () => changeLanguage('ar') }>ar</button>
      </div>
      )}
      {form.components.map((component, index) => (
        <div key={index} className={form.class.stateDefault}style={{display: component?.display}}>
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
                    {t(component?.label)}
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
                    {t(component?.label)}
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