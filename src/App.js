import { useState } from "react";
import "./App.css";
import Boutons from "./Components/Boutons";



let position = 0


function App() {


// States
const photos=[
  { id: 1, src:"/Photos/photo1.jpg", alt:"photo1" },
  { id: 2, src:"/Photos/photo2.jpg", alt:"photo2" },
  { id: 3, src:"/Photos/photo3.jpg", alt:"photo3" },
  { id: 4, src:"/Photos/photo4.jpg", alt:"photo4" },
  { id: 5, src:"/Photos/photo5.jpg", alt:"photo5" },
  { id: 6, src:"/Photos/photo6.jpg", alt:"photo6" },
  { id: 7, src:"/Photos/photo7.jpg", alt:"photo7" }
];



const [slide, setSlide] = useState(photos[0])


// Comportements
const nextSlide = () => {
  
  setTimeout(() => {
    position ++
  
  if (position > photos.length - 1) {
    position = 0
  }
  setSlide(photos[position])
  }, 1000);
  
}


const postSlide = () => {
  setTimeout(() => {
    position --
  
  if (position < 0) {
    position = 6
  } 
  setSlide(photos[position])
  }, 1000);
  
}


const movePhoto = position => {
  setSlide(photos[position])
}


// Render

return (

<div className="container">
    <img
      className="slider" 
      src= {slide.src} alt= {slide.alt}
      width="400"
      height="550"/>

    <div className="mesBoutons">  
  <Boutons onClick={postSlide} direction = "fa-sharp fa-solid fa-arrow-left bouton"/>              
  <Boutons onClick={nextSlide} direction = "fa-sharp fa-solid fa-arrow-right bouton" />
</div> 
           
    <div className="container-dots">
      {Array.from({length: 7}).map((item, position) => (
    <div onClick={() => movePhoto(position + 1)}
        className={slide === position + 1 ? "dot active" : "dot"}>

    </div>
    ))}
    </div>
    </div>


)


}

export default App;