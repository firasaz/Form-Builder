import React, { useState } from 'react'
import FormBuilder from './FormBuilder'
import FormBuilderT from './FormBuilderT'
import { useTranslation } from 'react-i18next'
import { changeLanguage } from 'i18next'

function TestForm() {
  const { t } = useTranslation()
  const [isRTL, setIsRTL] = useState(false)
  
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
    //         'label': 'name',
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
    //         'label': 'email',
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

    const testFn = () => console.log('key press')
    const customForm1 = [
        {
            'label': {
                'labelClassName': 'class',
                'default': {
                    'text': 'options',
                },
                'ar': {
                    'text': 'الخيارات',
                }
            },
            'input': {
                'type': 'select',
                'id': 'inputId',
                'name': 'selectName',
                'inputClassName': 'inputClassName',
                'options': {
                    'default': [
                        {
                            'text': 'Option 1',
                            'value': 'option1',
                        },
                        {
                            'text': 'Option 2',
                        }
                    ],
                    'ar': [
                        {
                            'text': 'الخيار الأول'
                        },
                        {
                            'text': 'الخيار الثاني'
                        }
                    ]
                },
            },
            'validation': {
                'required': true,
                'fonstSize': '12',
                'fontUnit': 'px',
                'errorMsg': {
                    'emptyErrorMsg': 'Field Required (custom)',
                    'invalidErrorMsg': 'Invalid Input (custom)'
                }
            }
        },
        {
            'label': {
                'labelClassName': 'class',
                'default': {
                    'text': 'name',
                },
                'ar': {
                    'text': 'الاسم',
                }
            },
            'input': {
                'type': 'text',
                'id': 'nameId',
                'name': 'nameInput',
                'placeholder': {
                    'default':'full name',
                    'ar': 'الاسم الثلاثي'
                },
                'attributes': ['readOnly=true'],
                'events': [
                    {
                        'event': 'onKeyPress',
                        'handler': testFn
                    }
                ]
            },
            'validation': {
                'required': true,
                'fontSize': '12',
                'fontUnit': 'px',
                'errorMsg': {
                    'emptyErrorMsg': 'Field Required (custom)',
                    'invalidErrorMsg': 'Invalid Input (custom)'
                }
            }
        },
        {
            'label': {
                'labelClassName': 'class',
                'default': {
                    'text': 'Password',
                },
                'ar': {
                    'text': 'كلمة السر',
                }
            },
            'input': {
                'type': 'password',
                'id': 'passwordId',
                'name': 'passwordInput',
                'placeholder': {
                    'default':'password',
                    'ar': 'الكلمة السرية'
                },
                'events': [
                    {
                        event: 'onFocus',
                        handler: testFn
                    }
                ]
            },
            'validation': {
                'required': true,
                'fontSize': '12',
                'fontUnit': 'px',
                'errorMsg': {
                    'emptyErrorMsg': 'Field Required (custom)',
                    'invalidErrorMsg': 'Invalid Input (custom)'
                }
            }
        },
    ]
    const handleSave = values => console.log(values)

  return (
    <div>
        <FormBuilder
            form={{
                template: customForm1,
                fieldClass: { // class for the div wrapping the label/input pair
                    'stateDefault': 'defaultClass',
                    'stateError': '',
                    'stateInactive': ''
                },
            }}
            formClass='form1'
            onSave={handleSave}
        />

        {/* form */}
        {/* <FormBuilderT
            form={{
                template: customForm1,
                fieldClass: { // class for the div wrapping the label/input pair
                    'stateDefault': 'defaultClass',
                    'stateError': '',
                    'stateInactive': ''
                },
                langs: {
                    'ar': {
                        'labelText': 'العنوان',
                        'placeholder': 'الاسم',
                        'options': [
                            {
                                'text': 'الخيار الأول',
                            },
                            {
                                'text': 'الخيار الثاني',
                            }
                        ],
                        'errorMsg': {
                            'emptyErrorMsg': 'الحقل ضروري',
                            'invalidErrorMsg': 'الحقل غير صحيح'
                        }
                    }
                }
            }}
            formClass='form1'
            onSave={handleSave}
        /><hr /> */}
        {/* <FormBuilder
            form={{
                template: customForm1,
                fieldClass: { // class for the div wrapping the label/input pair
                    'stateDefault': 'defaultClass',
                    'stateError': '',
                    'stateInactive': ''
                },
            }}
            formClass='form1'
            onSave={handleSave}
        /><hr /> */}
        {/* <FormBuilder
                form={{
                    className: { // class for the div wrapping the label/input pair
                        'stateDefault': 'defaultClass',
                        'stateError': '',
                        'stateInactive': ''
                    },
                    template: customForm2,
                }}
                onSave={handleSave}
        /><hr /> */}
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