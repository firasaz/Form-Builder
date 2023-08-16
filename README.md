# Form Builder
This is a custom form builder for React JS projects that allows you to provide the "FormBuilder" component with an array of your components and the component will render your form.

## Description
The component expects a list of objects where each element object is a pair of label/input element attributes that allows you to customize your form elements accordingly. The attirbutes the FormBuilder component accepts are:
- class: the class that wraps each label/input (or select) elements.
- id: the id attribute that the label will reference its relevant input element with.
- label: the text value of the label.
- labelClass: the class label to give a one class for all the labels in the form. Could be used to add styling to your label with a CSS framework such as bootstrap or tailwindCSS.
- type: this determines whether we add a "input" element or a "select" element under our label
- required: to ensure that a certain field is not left empty by the user.
- regex: custom validation by regex the user can optionally supply to be used in validation. *<ins>Note</ins>: validation is only done for required fields*
- placeholder: specify your placeholder for the input fields.
- display: specify whether a field is hidden or displayed. expects any valid 'display' attribute values.
- options: a list of objects where each object is attributes of each option in our select attribute. Each object takes two values:
  - value: the value of the option.
  - text: the text of the option that the user sees.

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
