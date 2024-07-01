import React, { useRef } from "react";
import nextBtn from "../../assets/next-icon.png";
import backBtn from "../../assets/back-icon.png";
import user1 from "../../assets/user-1.png";
import user2 from "../../assets/user-2.png";
import user3 from "../../assets/user-3.png";
import user4 from "../../assets/user-4.png";
import "./Testimonial.css";

const Testimonial = () => {
    const slider = useRef();
    let tx = 0;

const slideForward = ()=>{
    if(tx > -50){
        tx = tx - 25;
    }
    slider.current.style.transform = `translateX(${tx}%)`

}

const slideBackward = ()=>{
    if(tx < 0){
        tx = tx + 25;
    }
    slider.current.style.transform = `translateX(${tx}%)`

    
}



  return (
    <div className="testimonials" id="testimonials">
      <img src={nextBtn} alt="" className="next-btn" onClick={slideForward}/>
      <img src={backBtn} alt="" className="back-btn" onClick={slideBackward} />
      <div className="slider">
        <ul ref={slider}>
          <li>
            <div className="slide">
              <div className="user-info">
                <img src={user1} alt="" />
                <div>
                  <h3>Aakriti Rawal</h3>
                  <span>Dhangadhi,Nepal</span>
                </div>
              </div>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Quibusdam nesciunt tempora quasi ducimus, explicabo vitae
                adipisci qui. Voluptatibus repudiandae hic laudantium ipsa,
                exercitationem id? Vitae architecto sint sit doloribus maxime.
              </p>
            </div>
          </li>
          <li>
            <div className="slide">
              <div className="user-info">
                <img src={user2} alt="" />
                <div>
                  <h3>Amit Rawal</h3>
                  <span>Kathmandu,Nepal</span>
                </div>
              </div>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Quibusdam nesciunt tempora quasi ducimus, explicabo vitae
                adipisci qui. Voluptatibus repudiandae hic laudantium ipsa,
                exercitationem id? Vitae architecto sint sit doloribus maxime.
              </p>
            </div>
          </li>
          <li>
            <div className="slide">
              <div className="user-info">
                <img src={user3} alt="" />
                <div>
                  <h3>Kalpana  Rawal </h3>
                  <span>Pokhara,Nepal</span>
                </div>
              </div>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Quibusdam nesciunt tempora quasi ducimus, explicabo vitae
                adipisci qui. Voluptatibus repudiandae hic laudantium ipsa,
                exercitationem id? Vitae architecto sint sit doloribus maxime.
              </p>
            </div>
          </li>
          <li>
            <div className="slide">
              <div className="user-info">
                <img src={user4} alt="" />
                <div>
                  <h3>Ram Rawal</h3>
                  <span>Sadhar,Oman</span>
                </div>
              </div>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Quibusdam nesciunt tempora quasi ducimus, explicabo vitae
                adipisci qui. Voluptatibus repudiandae hic laudantium ipsa,
                exercitationem id? Vitae architecto sint sit doloribus maxime.
              </p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Testimonial;
