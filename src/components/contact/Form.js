import axios from 'axios'
import React from 'react'
import { useForm } from 'react-hook-form'

const Form = () => {

 let {register,handleSubmit,formState:{errors},reset}=useForm()

 let handleContact=(data)=>{
  console.log(data);
  axios.post("https://port-folio-dfcbb-default-rtdb.firebaseio.com/contact.json",data)
  reset()
 }

  return (
    <>
        <form action="" onSubmit={handleSubmit(handleContact)}>
            <label htmlFor="" className='form-label'>Enter Name</label>
            <input type="text" name='Name' {...register('Name',{required:"name is required!"})} className='form-control' /> 
            <p>{errors?.Name && errors.Name.message}</p>            
            <label htmlFor="" className='form-label'>Enter Email</label>
            <input type="email" name='Email' {...register('Email',{required:"email is required!"})} className='form-control'  />
            <p>{errors?.Email && errors.Email.message}</p>            
            <label htmlFor="" className='form-label'>Enter Phone</label>
            <input type="number" name='Phone' {...register('Phone',{required:'phone is required!',minLength:{value:10,message:"min 10 digits required!"},maxLength:{value:10,message:"max 10 digits required!"}})} className='form-control' />
            <p>{errors?.Phone && errors.Phone.message}</p>            
            <input className='btn btn-success' type="submit" />
        </form>
    </>
  )
}

export default Form