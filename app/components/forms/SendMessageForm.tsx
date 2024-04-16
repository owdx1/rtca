"use client"
import { Form, Formik } from 'formik'
import React from 'react'
import { SendButton } from "../buttons/SendButton"
import { Button, Input } from '@nextui-org/react'
import AddIcon from '@mui/icons-material/Add';
import EmojiEmotionsIcon from '@mui/icons-material/EmojiEmotions';
import { postData } from '@/app/action'

type Props = {}



const SendMessageForm = (props: Props) => {

  return (
    <Formik
    initialValues={
      {
        message: ''
      }
    }
    onSubmit={(values, action) => {
      postData(values.message)
      action.resetForm()
    }}
    >
      {({handleBlur, handleChange , handleReset , handleSubmit , values}) => (
        <Form onSubmit={handleSubmit} className=' fixed px-6 bottom-0 left-0 w-full h-16 bg-white'>
          <div className='flex w-full items-center h-full'>
       
            <AddIcon className='p-4 text-black bg-slate-400 mr-2'/>
            <EmojiEmotionsIcon className='p-4 cursor-pointer text-blue-800 bg-slate-300' />
            <Input 
              variant="underlined"
              type='text'
              name='message'
              value={values.message}
              onChange={handleChange}
              className='flex-grow py-2 px-4 outline-none'
              placeholder="Enter message..."
            />
            <SendButton />
          </div>
        </Form>
      )}
        
    </Formik>
  )
}

export default SendMessageForm