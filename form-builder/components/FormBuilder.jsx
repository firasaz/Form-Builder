import React from 'react'

function FormBuilder({form}) {
  return (
    <div id='customForm'>
      {form.components.map((component, index) => (
          <div key={index} className={`${form.class}`}>
            <label htmlFor={component.id} className={component.labelClass}>{component.label}</label>
            {
              component.type === 'select' ? (
                <select className={component.class}>
                  {component.options.map((option, index) => (
                    <option key='index' value={option.value}>{option.text}</option>
                  ))}
                </select>
              ) : (
                <input id={component.id} className={component.class} type={component.type} />
              )
            }
          </div>
      ))}
    </div>
  )
}

export default FormBuilder