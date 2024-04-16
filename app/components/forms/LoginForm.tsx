"use client"

import { Formik, Form } from "formik"
import { Input, Chip, Button } from "@nextui-org/react"
import LoginIcon from '@mui/icons-material/Login';


export const LoginForm = async () => {

  return (
    <Formik
      initialValues={{ 
        email: '',
        password: '', 
      }}
      onSubmit = { async (values, actions) => {
        
        actions.resetForm();
      }}
    >
      {({ handleSubmit, handleChange, handleBlur, errors, touched, isSubmitting, values}) => (
        <div className="w-full h-full flex flex-col min-h-screen items-center justify-center relative">
          <div className="top-10 left-10 absolute flex flex-col gap-10">
            <Chip variant="light" endContent={<LoginIcon className="text-7xl ml-10"/>} className="font-semibold text-6xl">Login</Chip>
          </div>
          <Form className="bg-white flex flex-col gap-4 w-full" onSubmit={handleSubmit}>
            <Input
              label="email"
              variant="underlined"
              type="email"
              name="email"
              value={values.email}
              onBlur={handleBlur}
              placeholder="enter your email..."
              onChange={handleChange}
              
            /> 
            <Input
              label="password"
              variant="underlined"
              type="password"
              name="password"
              value={values.password}
              onBlur={handleBlur}
              placeholder="enter your password..."
              onChange={handleChange}
              
            />
            <Button isLoading={isSubmitting} onClick={() => handleSubmit()} className="p-4 w-72 mx-auto bg-gray-600 hover:bg-[#00faa8] hover:text-gray-700 text-[#00faa8] rounded-md" variant="light"> 
              log in 
            </Button>
          </Form>

        </div>
      )}
    </Formik>
  )
}