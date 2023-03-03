import React, { useContext } from 'react'
import { sender } from '../../Store'
import './Home.css'

const Home = () => {

    let {mode,setMode}=useContext(sender)

  return (
    <>
        <div className={`container-fluid bg-${mode?"dark":"light"}`} id="home" style={{paddingTop:'70px'}}>
            <div className="row home align-items-center">
                <div className={`col-md-6 text-${mode?"light":"dark"}`}>
                    <h1>Lorem, ipsum dolor.</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed alias qui recusandae! Sunt at qui pariatur, excepturi assumenda, error voluptates explicabo omnis quas, saepe blanditiis.</p>
                </div>
                <div className="col-md-6">
                    <img src="Images/Home/pexels-olia-danilevich-4974915.jpg" width="100%" alt="" />
                </div>
            </div>
        </div>
    </>
  )
}

export default Home