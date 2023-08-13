import React from 'react'
import FormBuilder from './FormBuilder'
function TestForm() {
    const customForm = [
        {
            'id': 'input1',
            'class': 'customForm',
            'label': 'input1',
            'labelClass': 'label',
        },
        {
            'id': 'input2',
            'class': 'customForm',
            'label': 'input2',
            'labelClass': 'label'
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
        } 
    ]
  return (
    <div>
        <FormBuilder form={{
            class: 'form',
            components: customForm
        }} />
    </div>
  )
}

export default TestForm