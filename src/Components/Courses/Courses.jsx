import React from 'react'
import gallery1 from '../../assets/kharidar.jpg'
import gallery2 from '../../assets/japneses.jpeg'
import gallery3 from '../../assets/police.jpeg'
import gallery4 from '../../assets/doctor.jpg'
import white_arrow from '../../assets/white-arrow.png'
import './Courses.css'

const Courses = () => {
  return (
    <div className='courses' id='courses'>
        <div className="gallery">
            <img src={gallery1} alt="" />
            <img src={gallery2} alt="" />
            <img src={gallery3} alt="" />
            <img src={gallery4} alt="" />
        </div>
        <button className='btn dark-btn'>See more here <img   src={white_arrow} alt="" /></button>

        

    </div>
  )
}

export default Courses