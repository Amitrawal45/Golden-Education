import { useState } from "react";
import "./App.css";
import About from "./Components/About/About";
import Contact from "./Components/Contact/Contact";
import Courses from "./Components/Courses/Courses";
import Footer from "./Components/Footer/Footer";
import Hero from "./Components/Hero/Hero";
import Navbar from "./Components/Navbar/Navbar";
import Programs from "./Components/Programs/Programs";
import Testimonial from "./Components/Testimonials/Testimonial";
import Title from "./Components/Title/Title";
import VideoPlayer from "./Components/VideoPlayer/VideoPlayer";


function App() {

  const [playState,setPlayState] = useState(false);

  return (
  <div>
  <Navbar/>
  <Hero/>
  <div className="container">
    <Title subTitle = 'OUR PROGRAM'  title = 'What we Offer' />
  <Programs/>
  <About setPlayState = {setPlayState}/>
  <Title subTitle='Gallery' title= 'Courses'/>
  <Courses/>
  <Title subTitle='Testimonial' title='What students says' />
  <Testimonial/>
  <Title subTitle='Contact Us' title='Get in Touch' />
  <Contact/>
  <Footer/>

  </div>

 <VideoPlayer playState={playState} setPlayState={setPlayState}/>
  </div>
  )
}

export default App;
