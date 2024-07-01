import React from 'react'
import program1 from '../../assets/images.jpeg'
import program2 from '../../assets/language.jpg'
import program3 from '../../assets/tution1.jpg'
import program_icon1 from '../../assets/program-icon-1.png'
import program_icon2 from '../../assets/program-icon-2.png'
import program_icon3 from '../../assets/program-icon-3.png'
import './Programs.css'

const Programs = () => {
  return (
    <div className='programs ' id='programs'>
        <div className="program">
            <img src={program1} alt="" />
            <div className="caption"> 
                <img src={program_icon1} alt="" />
                <p>Bridge Course</p>
            </div>
        </div>
        <div className="program">
            <img src={program2} alt="" />
            <div className="caption">
                <img src={program_icon2} alt="" />
                <p>Language Class</p>
            </div>

        </div>
        <div className="program">
            <img src={program3} alt="" />
            <div className="caption">
                <img src={program_icon3} alt="" />
                <p>Tution Classes</p>
            </div>
        </div>

    </div>
  )
}

export default Programs