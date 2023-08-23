# Form Builder
This is a custom form builder for React JS projects that allows you to provide the "FormBuilder" component with an array of your components and the component will render your form.

## Description
The component expects a list of objects where each element object represent a pair of label/input element attributes that allows you to customize your form elements accordingly. The object attirbutes of each form field are:
- **input:**
  - *type:* this determines whether we add an "input" element or a "select" element under our label
  - *id:* the id attribute that the label will reference its relevant input element with
  - *class:* the class that wraps each label/input (or select) elements
  - *name:* the name attribute of the input element
  - *placeholder:* specify your placeholder for the input fields.
  - *options:* a list of objects where each object is attributes of each option in our select attribute. Each object takes two values:
    - value: the value of the option.
    - text: the text of the option that the user sees.
- **label:** the text value of the label element
  - *labelClass:* the label's class to give a one class for all the labels in the form. Could be used to add styling to your label with a CSS framework such as bootstrap or tailwindCSS.
- **validation:**
  - *required*: to ensure that a certain field is not left empty by the user.
  - *regex*: custom validation by regex the user can optionally supply to be used in validation. *<ins>Note</ins>: validation is only done for required fields*
  - *fontSize*: font size of the error message
  - *fontColor*: font color of the error message
  - *errorMsg*:
    - emptyErrorMsg: custom error message for required fields which are empty
    - invalidErrorMsg: custom error message for invalid user input
- **display:** specify whether a field is hidden or displayed. expects any valid 'display' attribute values.

### Preview:
```
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
}
```
This is the structure of the object the component expects to work properly. Currently the naming of the object properties should be used as above but a more flexible structure is in the works to allow for more ease-of-use for developers using the form builder as well as to minimize error possibility.

Here is how the structure would like if no translation of the form is required:
```
{
  'label': {
      'labelClassName': 'class',
      'text': 'name',
  },
  'input': {
      'type': 'text',
      'id': 'nameId',
      'name': 'nameInput',
      'placeholder': 'full name',
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
}
```
## How To Use:
1. Clone the repo in your desired directory.

    ```
    git clone https://github.com/firasaz/Form-Builder.git
    ```
2. Enter into the "form-builder" directory.

    ```
      cd form-builder
    ```  
3. Run npm i then npm run dev.

      ```
      npm i
      npm run dev
      ```
4.  You're done! Open your browser and check the form and style it however you like.
