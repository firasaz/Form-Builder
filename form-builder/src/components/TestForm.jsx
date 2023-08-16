import React, { useState } from 'react'
import FormBuilder from './FormBuilder'
import { useTranslation } from 'react-i18next'
import { changeLanguage } from 'i18next'

function TestForm() {
  const { t } = useTranslation()
  const [formData1, setFormData1] = useState({})
  const [formData2, setFormData2] = useState({})
  const [formData3, setFormData3] = useState({})

    const handleChange = (e) => {
        if(e.target.className.includes('form1')) {
            setFormData1({
                ...formData1,
                [e.target.id]: e.target.value
            })
        }
        if(e.target.className.includes('form2')) {
            setFormData2({
                ...formData2,
                [e.target.id]: e.target.value
            })
        }
        if(e.target.className.includes('form3')) {
            setFormData3({
                ...formData3,
                [e.target.id]: e.target.value
            })
        }
    }
    
    const handleSubmit = (e) => {
        e.preventDefault()
        // log (submit the form later) the form of the relevant button not all the forms
        e.target.className.includes('form1') && console.log(formData1)
        e.target.className.includes('form2') && console.log(formData2)
        e.target.className.includes('form3') && console.log(formData3)
    }
    
    const customForm1 = [
        {
            'id': 'name1',
            'class': 'customForm form1',
            'label': t('name'),
            'labelClass': 'label',
            'type': 'text',
            'required': true,
            // 'regex': '^[a-zA-Z]+$',
            'placeholder': 'full name'
        },
        {
            'id': 'input1',
            'class': 'customForm form1',
            'label': 'input1',
            'labelClass': 'label',
            'type': 'text',
            'required': false,
            'display': 'block'
        },
        {
            'id': 'email',
            'class': 'customForm form1',
            'label': t('email'),
            'labelClass': 'label',
            'type': 'text',
            'required': true,
            // 'regex': '^[A-Za-z0-9](([a-zA-Z0-9,=\.!\-#|\$%\^&\*\+/\?_`\{\}~]+)*)@(?:[0-9a-zA-Z-]+\.)+[a-zA-Z]{2,9}$',
            'placeholder': 'email'
        },
        {
            'id': 'select',
            'class': 'customForm form1',
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
            'class': 'submitBtn form1',
            'type': 'submit',
            'text': 'Submit',
            'required': false,
            'visible': true,
        }
    ]
    const customForm2 = [
        {
            'id': 'name2',
            'class': 'customForm form2',
            'label': t('name'),
            'labelClass': 'label',
            'type': 'text',
            'required': true,
            // 'regex': '^[a-zA-Z]+$',
            'placeholder': 'full name'
        },
        {
            'id': 'input2',
            'class': 'customForm form2',
            'label': 'input2',
            'labelClass': 'label',
            'type': 'text',
            'required': false,
            'display': 'block'
        },
        {
            'id': 'email2',
            'class': 'customForm form2',
            'label': t('email'),
            'labelClass': 'label',
            'type': 'text',
            'required': true,
            // 'regex': '^[A-Za-z0-9](([a-zA-Z0-9,=\.!\-#|\$%\^&\*\+/\?_`\{\}~]+)*)@(?:[0-9a-zA-Z-]+\.)+[a-zA-Z]{2,9}$',
            'placeholder': 'email2'
        },
        {
            'id': 'select2',
            'class': 'customForm form2',
            'label': 'select2',
            'labelClass': 'label',
            'type': 'select',
            "options": [{
                'value': 'select element 2',
                'text': 'select element 2'
            }],
            'required': false,
        },
        {
            'id': 'submit2',
            'class': 'submitBtn form2',
            'type': 'submit',
            'text': 'Submit2',
            'required': false,
            'visible': true,

        }
    ]
    const customForm3 = [
        {
            'id': 'name3',
            'class': 'customForm form3',
            'label': t('name'),
            'labelClass': 'label',
            'type': 'text',
            'required': true,
            // 'regex': '^[a-zA-Z]+$',
            'placeholder': 'full name'
        },
        {
            'id': 'input3',
            'class': 'customForm form3',
            'label': 'input3',
            'labelClass': 'label',
            'type': 'text',
            'required': false,
            'display': 'none'
        },
        {
            'id': 'email3',
            'class': 'customForm form3',
            'label': t('email'),
            'labelClass': 'label',
            'type': 'text',
            'required': true,
            // 'regex': '^[A-Za-z0-9](([a-zA-Z0-9,=\.!\-#|\$%\^&\*\+/\?_`\{\}~]+)*)@(?:[0-9a-zA-Z-]+\.)+[a-zA-Z]{2,9}$',
            'placeholder': 'email3'
        },
        {
            'id': 'select3',
            'class': 'customForm form3',
            'label': 'select3',
            'labelClass': 'label',
            'type': 'select',
            "options": [{
                'value': 'select element 3',
                'text': 'select element 3'
            }],
            'required': false,
        },
        {
            'id': 'submit3',
            'class': 'submitBtn form3',
            'type': 'submit',
            'text': 'Submit3',
            'required': false,
            'display': 'block',

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
        <div style={{marginBottom: '5px'}}>
            <button type='button' onClick={ () => changeLanguage('en') }>en</button>
            <button type='button' onClick={ () => changeLanguage('ar') }>ar</button>
        </div>
        <form className="form1">
            <FormBuilder
                form={{
                    class: { // class for the div wrapping the label/input pair
                        'stateDefault': 'defaultClass',
                        'stateError': '',
                        'stateInactive': ''
                    },
                    components: customForm1
                }}
                handleChange={handleChange}
                handleSubmit={handleSubmit}
             />
        </form><hr />
        <form className="form2">
            <FormBuilder
                form={{
                class: { // class for the div wrapping the label/input pair
                    'stateDefault': 'defaultClass',
                    'stateError': '',
                    'stateInactive': ''
                },
                    components: customForm2
                }}
                handleChange={handleChange}
                handleSubmit={handleSubmit}
            />
        </form><hr />
        <form className="form3">
            <FormBuilder
                form={{
                class: { // class for the div wrapping the label/input pair
                    'stateDefault': 'defaultClass',
                    'stateError': '',
                    'stateInactive': ''
                },
                    components: customForm3
                }}
                handleChange={handleChange}
                handleSubmit={handleSubmit}
            />
        </form><hr />
    </div>
  )
}

export default TestForm