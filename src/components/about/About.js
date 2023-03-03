import React, { useContext } from 'react'
import Heading from '../Heading'
import './About.css'
import { BsFillPersonFill,BsFillTelephoneFill,BsHeadphones } from "react-icons/bs";
import { MdEmail,MdMovie,MdPhotoCamera } from "react-icons/md";
import { SiYourtraveldottv } from "react-icons/si";
import { sender } from '../../Store';

const About = () => {


  let {mode,setMode}=useContext(sender)

  let info=[
    {
      id:1,
      icon:<BsFillPersonFill />,
      title:"Name",
      data:"Yash Suresh Jagtap"
    },
    {
      id:2,
      icon:<BsFillTelephoneFill />,
      title:"Phone",
      data:7057358048
    },
    {
      id:3,
      icon:<MdEmail />,
      title:"Email",
      data:"yashjagtap918@gmail.com"
    }
  ]

  let interest=[
    {
      id:1,
      icon:<BsHeadphones />,
      title:"Music"
    },
    {
      id:2,
      icon:<SiYourtraveldottv />,
      title:"Travel"
    },
    {
      id:3,
      icon:<MdMovie />,
      title:"Movies"
    },
    {
      id:4,
      icon:<MdPhotoCamera />,
      title:"Photo"
    },
  ]

  return (
    <>
        <div className={`container-fluid bg-${mode?'dark':'light'} text-${mode?"light":"dark"}`} id='about' style={{paddingTop:'70px'}}>
            <Heading title="About Me" desp="Know About Me" size="75px" />
            <div className="row align-items-center about">
                <div className="col-md-4">
                    <img src="Images/About/pexels-djordje-petrovic-2102415.jpg" width="100%" height="580px" alt="" />
                </div>
                <div className="col-md-8">
                    <h1>My Intro</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum sit reprehenderit iure! Illum officiis ad voluptas, deserunt laboriosam molestias velit exercitationem, iste consequatur laudantium soluta. Aut ipsa cumque numquam maiores officiis nam dolore dolorum ipsam.</p>
                    <table>
                      {
                        info.map((e)=>{
                          return (
                              <tbody key={e.id}>
                                <tr>
                                  <td className='fs-6 fs-md-4'>{e.icon}</td>
                                  <td className='pe-3 pe-md-5 fs-6 fs-md-5'>{e.title}</td>
                                  <td className='fs-6 fs-md-5'>{e.data}</td>
                                </tr>
                              </tbody>
                          )
                        })
                      }
                    </table>

                    <h4 className='mt-5'>My Interest</h4>
                    {
                      interest.map((e)=>{
                        return (
                            <label htmlFor="" key={e.id} className="fs-5">{e.icon}&nbsp;{e.title}&emsp;</label>
                        )
                      })
                    }

                </div>
            </div>
        </div>
    </>
  )
}

export default About