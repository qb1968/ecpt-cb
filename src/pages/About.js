import React from 'react'
import Bio from '../assets/charlie2.jpg'

const About = () => {
    return (
        <div className='about'>
            
               <h1 style={{textAlign:"center"}}>Charles Sclater, MPT, GTS</h1> 
               <div className='about1'>
               <p ><h4 className='cs'style={{fontStyle:"oblique"}}>Charlie graduated from the University of Maryland Eastern Shore with his Masters in Physical Therapy Degree in 1997. Since then he has been a practicing physical therapist in 3 states and multiple settings including acute care, skilled nursing, rehabilitation centers, and his favorite, out-patient orthopedics. He has taken extensive continuing education courses in conservative and post-surgical shoulder rehabilitation, knee joint and ACL injury rehabilitation, and evaluation and treatment of temporo-mandibular dysfunction.

                   Charlie opened and was the sole owner of Bayview Physical Therapy in Chesapeake Beach from 2011-2014. He recently joined Elite Care Physical Therapy in 2017.

                   When not at the office Charlie enjoys spending time with his family boating, jet skiing, and skiing. An avid soccer coach he enjoys spending time working with kids from 5-18 teaching them the game he has come to love.</h4 >
                </p>
                <img class="bio" src={Bio} alt=""/>
            </div>
        </div>
    )
}

export default About