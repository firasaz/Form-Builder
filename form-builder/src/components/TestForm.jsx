import React, { useState } from 'react'
import FormBuilder from './FormBuilder'
import { useTranslation } from 'react-i18next'
import { changeLanguage } from 'i18next'

function TestForm() {
  const { t } = useTranslation()
  const [isRTL, setIsRTL] = useState(false)
  
  const toggleDirection = () => {
    setIsRTL(!isRTL);
  };
  
    const handleTranslation = (lng) => {
        changeLanguage(lng)
    }
    
    const customForm1 = [
        {
            'id': 'name1',
            'className': 'customForm form1',
            'name': 'name1Name',
            'label': t('name'),
            'labelClass': 'label',
            'type': 'text',
            'validation': {
                'required': true,
                // 'regex': '^[a-zA-Z]+$', // this regex accepts 1-word values only
                'fontSize': '12px',
                'errorMsg': {
                    'emptyMsg': 'Field Required (custom)',
                    'invalidMsg': 'Invalid Input (custom)'
                }
            },
            'placeholder': 'full name'
        },
        {
            'id': 'input1',
            'className': 'customForm form1',
            'name': 'input1Name',
            'label': 'input1',
            'labelClass': 'label',
            'type': 'text',
            'required': false,
            'display': 'none'
        },
        {
            'id': 'email',
            'className': 'customForm form1',
            'name': 'emailName',
            'label': t('email'),
            'labelClass': 'label',
            'type': 'text',
            'validation': {
                'required': true,
                // 'regex': '^[A-Za-z0-9](([a-zA-Z0-9,=\.!\-#|\$%\^&\*\+/\?_`\{\}~]+)*)@(?:[0-9a-zA-Z-]+\.)+[a-zA-Z]{2,9}$',
                'fontSize': '12px',
                'errorMsg': {
                    'emptyMsg': 'Field Required (custom)',
                    'invalidMsg': 'Invalid Input (custom)'
                }
            },
            'placeholder': 'email'
        },
        {
            'id': 'select',
            'className': 'customForm form1',
            'name': 'selectName',
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
            'id': 'select2',
            'className': 'customForm form1',
            'name': 'selectName2',
            'label': 'select2',
            'labelClass': 'label',
            'type': 'select',
            "options": [{
                'value': 'select element2',
                'text': 'select element2'
            }],
            'required': false,
        },
        {
            'id': 'radio1',
            'className': 'customForm form1',
            'name': 'radioName',
            'label': 'radio btn1',
            'type': 'radio'
        },
        {
            'id': 'radio2',
            'className': 'customForm form1',
            'name': 'radioName',
            'label': 'radio btn2',
            'type': 'radio'
        },
        {
            'id': 'submit',
            'className': 'submitBtn form1',
            'type': 'submit',
            'label': 'Submit',
            'required': false,
            'visible': true,
        }
    ]
    const customForm2 = [
        {
            'id': 'name2',
            'className': 'customForm form2',
            'name': 'name2Name',
            'label': t('name'),
            'labelClass': 'label',
            'type': 'text',
            'validation': {
                'required': true,
                'regex': '^[a-zA-Z]+$', // this regex accepts 1-word values only
                'errorMsg': {
                    'emptyMsg': 'Field Required (custom)',
                    'invalidMsg': 'Invalid Input (custom)'
                }
            },
            'placeholder': 'full name'
        },
        {
            'id': 'input2',
            'className': 'customForm form2',
            'name': 'input2Name',
            'label': 'input2',
            'labelClass': 'label',
            'type': 'text',
            'required': false,
            'display': 'block'
        },
        {
            'id': 'email2',
            'className': 'customForm form2',
            'name': 'email2Name',
            'label': t('email'),
            'labelClass': 'label',
            'type': 'text',
            'validation': {
                'required': true,
                // 'regex': '^[A-Za-z0-9](([a-zA-Z0-9,=\.!\-#|\$%\^&\*\+/\?_`\{\}~]+)*)@(?:[0-9a-zA-Z-]+\.)+[a-zA-Z]{2,9}$',
                'fontSize': '12px',
                'errorMsg': {
                    'emptyMsg': 'Field Required (custom)',
                    'invalidMsg': 'Invalid Input (custom)'
                }
            },
            'placeholder': 'email2'
        },
        {
            'id': 'select2',
            'className': 'customForm form2',
            'name': 'select2Name',
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
            'label': 'Submit2',
            'required': false,
            'visible': true,

        }
    ]
    // const customForm3 = [
    //     {
    //         'id': 'name3',
    //         'class': 'customForm form3',
    //         'label': t('name'),
    //         'labelClass': 'label',
    //         'type': 'text',
    //         'required': true,
    //         // 'regex': '^[a-zA-Z]+$',
    //         'placeholder': 'full name'
    //     },
    //     {
    //         'id': 'input3',
    //         'class': 'customForm form3',
    //         'label': 'input3',
    //         'labelClass': 'label',
    //         'type': 'text',
    //         'required': false,
    //         'display': 'none'
    //     },
    //     {
    //         'id': 'email3',
    //         'class': 'customForm form3',
    //         'label': t('email'),
    //         'labelClass': 'label',
    //         'type': 'text',
    //         'required': true,
    //         // 'regex': '^[A-Za-z0-9](([a-zA-Z0-9,=\.!\-#|\$%\^&\*\+/\?_`\{\}~]+)*)@(?:[0-9a-zA-Z-]+\.)+[a-zA-Z]{2,9}$',
    //         'placeholder': 'email3'
    //     },
    //     {
    //         'id': 'select3',
    //         'class': 'customForm form3',
    //         'label': 'select3',
    //         'labelClass': 'label',
    //         'type': 'select',
    //         "options": [{
    //             'value': 'select element 3',
    //             'text': 'select element 3'
    //         }],
    //         'required': false,
    //     },
    //     {
    //         'id': 'submit3',
    //         'class': 'submitBtn form3',
    //         'type': 'submit',
    //         'text': 'Submit3',
    //         'required': false,
    //         'display': 'block',
    //     }
    // ]

    const handleSave = values => console.log(values)
    const inlineStyle = {
        textAlign: 'right'
    }

  return (
    <div  className={`App ${isRTL ? 'rtl' : 'ltr'}`}>
        <div style={{marginBottom: '5px', textAlign: 'center'}}>
            {isRTL ?
            <button type='button' onClick={ () => {handleTranslation('en'); toggleDirection()} }>en</button> 
            :
            <button type='button' onClick={ () => {handleTranslation('ar'); toggleDirection()} }>ar</button>
            }
        </div><hr />
        <FormBuilder
            form={{
                className: { // class for the div wrapping the label/input pair
                    'stateDefault': 'defaultClass',
                    'stateError': '',
                    'stateInactive': ''
                },
                template: customForm1
            }}
            onSave={handleSave}
        /><hr />
        <FormBuilder
                form={{
                    className: { // class for the div wrapping the label/input pair
                        'stateDefault': 'defaultClass',
                        'stateError': '',
                        'stateInactive': ''
                    },
                    template: customForm2,
                }}
                onSave={handleSave}
        /><hr />
        {/* <form className="form3">
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
        </form><hr /> */}
    </div>
  )
}

export default TestForm