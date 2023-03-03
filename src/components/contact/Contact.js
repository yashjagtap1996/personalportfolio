import React from 'react'
import Heading from '../Heading'
import Form from './Form'
import Info from './Info'
import './Contact.css'

const Contact = () => {
  return (
    <>
        <div className="container-fluid text-light" style={{paddingTop:'70px'}} id='contact'>
            <Heading title="Contact Us" desp="Want To Work" size="85px" />
            <div className="row align-items-center contactUs">
                <div className="col-md-6">
                    <Info />
                </div>
                <div className="col-md-6">
                    <Form />
                </div>
            </div>
        </div>
    </>
  )
}

export default Contact