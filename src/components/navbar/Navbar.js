import React, { useContext } from 'react'
import { sender } from '../../Store'
import { BsFillMoonFill,BsFillSunFill } from "react-icons/bs";
import Links from './Links';
import { FcNightPortrait } from "react-icons/fc";

const Navbar = () => {

    let {mode,setMode}=useContext(sender)

    return (
        <>
            <nav className={`fixed-top navbar navbar-expand-lg bg-${mode?"dark":"light"}`}>
                <div className="container-fluid">
                    <a className="navbar-brand fs-2 p-0" href="#"><FcNightPortrait /></a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
                            <Links link="Home" id="#home" />
                            <Links link="About" id="#about" />
                            <Links link="Skills" id="#skills" />
                            <Links link="Contact" id="#contact" />
                            
                        </ul>
                        <div className="d-flex" role="search">
                            <button className={`border-0 fs-4 bg-${mode?"dark":"light"}`} onClick={()=>setMode(!mode)} >{mode?<BsFillSunFill className='text-warning'  />:<BsFillMoonFill />}</button>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar