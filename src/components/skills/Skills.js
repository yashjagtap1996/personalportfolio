import React, { useContext } from 'react'
import { sender } from '../../Store'
import Heading from '../Heading'
import './Skills.css'

const Skills = () => {

    let {mode,setMode}=useContext(sender)

    let skill = [
        {
            id: 1,
            per:"36%",
            title: "HTML"
        },
        {
            id: 2,
            per:"50%",
            title: "CSS"
        },
        {
            id: 3,
            per:"70%",
            title: "BOOTSTRAP"
        },
        {
            id: 4,
            per:"68%",
            title: "JAVASCRIPT"
        },
        {
            id: 5,
            per:"75%",
            title: "REACT"
        },
    ]

    return (
        <>
            <div className={`container-fluid text-${mode?'light':'dark'} bg-${mode?'dark':'light'}`} id='skills' style={{paddingTop:'70px'}}>
                <Heading title="My Skills" desp="Know My Skills" size="65px" />

                <div className="row align-items-center skills">
                    {
                        skill.map((e) => {
                            return (
                                <div className="col-sm-6 mb-5 mb-md-0 col-md-4 text-center">
                                    <div className='bar mx-auto text-dark' data-progress={e.per} style={{ '--progress': e.per }}>{e.per}</div>
                                    <h4>{e.title}</h4>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </>
    )
}

export default Skills