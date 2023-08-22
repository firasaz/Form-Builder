// Translation Through URL Parameters
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

function CustomFormBuilder({form, formClass, onSave}) {
  const [errors, setErrors] = useState([])
  const [showError, setShowError] = useState(false)
  const [formData, setFormData] = useState([])
  
  const {lng} = useParams()
  const [lang, setLang] = useState(lng)
  const [isRTL, setIsRTL] = useState(false)
  const toggleDirection = (lng='default') => {
    setIsRTL(!isRTL);
    // setLang(lng)
  };

  const handleSubmit = (e) => {
      e.preventDefault()
      const hasErrors = Object.values(errors).some(value => value !== null) // checks if form has any error messages
      console.log(`errors: ${hasErrors}`)
      console.log(errors)
      hasErrors ? setShowError(true) : onSave(formData) // submit only if form has no error messages at all
      
  }
  
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

  const handleValidation = (e, {input, validation}) => {
    const userInput = e.target.value
    const { id } = input
    if(validation) {
      const { required, regex, errorMsg } = validation
      const { emptyErrorMsg, invalidErrorMsg } = errorMsg
      if (required && !userInput) {
        console.log('field empty')
        setErrors({
          ...errors,
          [id]: emptyErrorMsg
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
            [id]: invalidErrorMsg
          })
        }
      }
    }    
  }

  // initialize all required fields with a "required field" error message
  useEffect(() => {
    const updatedErrors = {}
    form.template.map(obj => {
      obj?.validation?.required && (
        updatedErrors[obj?.input?.id] = obj?.validation?.errorMsg?.emptyErrorMsg
      )
    })

    setErrors({
      ...errors,
      ...updatedErrors
    })
  }, [form.template])
  
  const renderFields = ({ template, fieldClass, langs }) => {
    const { stateDefault, stateError, stateInactive } = fieldClass

    // template is a list
    return template.map((element, index) => {
      // const { id, fieldClass, name, label, labelClass, type, placeholder, options, validation } = element
      const { label, input, validation } = element // each element is an object in the template list that includes 'label', 'input' and 'validation
      const { text, labelClassName } = label // each label includes the label's class and text
      const { id, name, type, inputClassName, placeholder, options } = input
      const { fontSize, fontUnit } = validation
      switch(type) {
        case 'submit':
          return (
            <div key={index} className={stateDefault}>
              <button id={id} className={labelClassName} name={name} type={type}>{!(isRTL && langs) ? text : langs[lng].labelText}</button>
            </div>
          )
        case 'select':
          return (
            <div key={index} className={stateDefault}>
              <label htmlFor={id} className={labelClassName}>
                { !(lng && langs) ? text : langs[lng].labelText }
              </label><br />
              <select
                id={id} 
                className={inputClassName} 
                name={name} 
                onClick={(e) => { handleChange(e, element) }}
              >
                {
                  !(lng && langs) ? 
                  options.map((option, index) => (
                    <option key={index} label={option?.label}>{option?.text}</option>
                  )) : 
                  langs[lng].options.map((option, index) => (
                    <option key={index} label={option?.label}>{option?.text}</option>
                  ))
                }
              </select>
            </div>
          )
        case 'radio':
          return (
            <div key={index} className={stateDefault}>
              <label htmlFor={id} className={labelClassName}>
                {text}
              </label><br />
              <input id={id} className={inputClassName} name={name} type={type} placeholder={placeholder} onClick={(e) => { handleChange(e, element) }} />
            </div>
          )        
        case 'tel':
          return (
            <div key={index} className={stateDefault}>
              <label htmlFor={id} className={labelClassName}>
                {text}
              </label>
              <input id={id} className={inputClassName} name={name} type={type} placeholder={placeholder} onChange={(e) => { handleChange(e, element) }} />
              <div className='errorMsg' style={ showError ? {display: 'block'} : {display: 'none'} }>
                <span style={{ color: "red", fontSize: fontSize+fontUnit }}>{errors[id]}</span>
              </div>
            </div>
          )
        default:
          return (
            <div key={index} className={stateDefault}>
              <label htmlFor={id} className={labelClassName}>
                {!(lng && langs) ? text : langs[lng].labelText}
              </label><br />
              <input id={id} className={inputClassName} name={name} type={type} placeholder={!(lng && langs) ? placeholder : langs[lng].placeholder} onChange={(e) => { handleChange(e, element) }} />
              <div className='errorMsg'>
                <span style={showError ? { color: "red", fontSize: fontSize+fontUnit } : {display: 'none'}}>{errors[id]}</span>
              </div>
            </div>
          )
      }
    })
  }
  return (
    <div>
      <form onSubmit={handleSubmit} className={formClass}>
        {renderFields(form)}
        <div className={form.fieldClass.stateDefault}>
          <button id='submitBtn' className='submitBtn' name='submitBtn' type='submit'>Submit</button>
        </div>
      </form>
    </div>
  )
}

export default CustomFormBuilder