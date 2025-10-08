import { useState } from 'react'
import './App.css'
import RegistrationForm from './components/RegistrationForm'
import FormikForm from './components/formikForm';


function App() {


  return (
    <>
    <h1>Registration (Controlled)</h1>
    <h1>Registration (Formik)</h1>
      <RegistrationForm/>
      <FormikForm />
      
      
    </>
  )
}

export default App
