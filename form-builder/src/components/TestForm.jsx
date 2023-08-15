import React, { useEffect, useState } from 'react'
import FormBuilder from './FormBuilder'
import { useTranslation } from 'react-i18next'
import { changeLanguage } from 'i18next'

function TestForm() {
  const { t, i18n } = useTranslation()
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

    const handleLanguage = lng => {
        i18n.changeLanguage(lng)
    }
    
    const customForm = [
        {
            'id': 'name1',
            'class': {
                'stateDefault': 'defaultClass',
                'stateError': '',
                'stateInactive': ''
            },
            'label': t('name'),
            'labelClass': 'label',
            'type': 'text',
            'required': true,
            // 'regex': '^[a-zA-Z]+$',
            'placeholder': 'full name'
        },
        {
            'id': 'input1',
            'class': 'customForm',
            'label': 'input1',
            'labelClass': 'label',
            'type': 'text',
            'required': false,
            'display': 'block'
        },
        {
            'id': 'email',
            'class': 'customForm',
            'label': t('email'),
            'labelClass': 'label',
            'type': 'text',
            'required': true,
            'regex': '^[A-Za-z0-9](([a-zA-Z0-9,=\.!\-#|\$%\^&\*\+/\?_`\{\}~]+)*)@(?:[0-9a-zA-Z-]+\.)+[a-zA-Z]{2,9}$',
            'placeholder': 'email'
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
        },
        {
            'id': 'submit',
            'class': 'submitBtn',
            'type': 'submit',
            'text': 'Submit',
            'required': false,
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
        <div style={{margin: '5px'}}>
            <button onClick={() => changeLanguage('en')}>en</button>
            <button onClick={() => changeLanguage('ar')}>ar</button>
        </div>
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