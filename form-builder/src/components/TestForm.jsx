import React, { useEffect, useState } from 'react'
import FormBuilder from './FormBuilder'
function TestForm() {
    const [formData, setFormData] = useState({})

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.id]: e.target.value
        })
    }
    
    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(formData)
    }
    
    const customForm = [
        {
            'id': 'name1',
            'class': 'customForm',
            'label': 'name',
            'labelClass': 'label',
            'type': 'text',
            'required': true,
            'value': '',
            'regex': '^[a-zA-Z]+$'
        },
        {
            'id': 'input1',
            'class': 'customForm',
            'label': 'input1',
            'labelClass': 'label',
            'type': 'text',
            'required': false,
            'value': ''
        },
        {
            'id': 'email',
            'class': 'customForm',
            'label': 'email',
            'labelClass': 'label',
            'type': 'text',
            'required': true,
            'value': '',
            'regex': '^[a-zA-Z]+$'
        },
        {
            'id': 'select',
            'class': 'customForm',
            'label': 'select',
            'labelClass': 'label',
            'type': 'select',
            "options": [{
                'value': 'select element',
                'text': 'select element'
            }],
            'required': false,
            'value': ''
        },
        {
            'id': 'submit',
            'class': 'submitBtn',
            'type': 'submit',
            'text': 'Submit',
            'required': false,
            'value': '',
            'visible': true,

        }
    ]

    // useEffect(() => {
    //     customForm.map((el, index) => (
    //         // ...formData,
    //         // setFormData({
    //         //     [el.id]: '',
    //         // })
    //         console.log(el.id)
    //     ))
    // }, [])
  return (
    <div>
        <FormBuilder 
            form={{
                class: 'form',
                components: customForm
            }}
            handleChange={handleChange}
            handleSubmit={handleSubmit}
         />
    </div>
  )
}

export default TestForm