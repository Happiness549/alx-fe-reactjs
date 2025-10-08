import { useState } from 'react'
import './App.css'
import RegistrationForm from './components/RegistrationForm'
import FormikForm from './FormikForm';


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
