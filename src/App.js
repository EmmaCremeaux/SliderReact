import { useEffect, useState } from "react";
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

//selectionne toute les radio
const radios = document.getElementsByTagName("input");

//cocher par defaut la premiere radio
useEffect(() => {
  if (radios) {
    radios[0].checked = true;
  }
}, []);


const [slide, setSlide] = useState(photos[0]);
const [isDisabled, setIsDisabled] = useState(false);

// Comportements


const nextSlide = () => {
  setIsDisabled(true);
  if (position+1 > photos.length - 1) {
    position = 0;
  }
  else {
    position ++;
  }
  radios[position].checked = true;
  setSlide(photos[position]);
  setTimeout(() => { 
    setIsDisabled(false); 
  }, 1000);
};

const postSlide = () => {
  setIsDisabled(true);
  if (position - 1 < 0) {
    position = 6;
  } else {
    position--;
  }
  radios[position].checked = true;
  setSlide(photos[position]);
  setTimeout(() => { 
    setIsDisabled(false); 
  }, 1000);
};

const movePhoto = (photo) => {
  setSlide(photos[photo.id-1]);
  position = photo.id-1;
};



// Render

return (

<div className="container">
    <img
      className="slider" 
      src= {slide.src} alt= {slide.alt}
      width="400"
      height="550"/>

    <div className="mesBoutons">  
  <Boutons disabled={isDisabled} onClick={postSlide} direction = "fa-sharp fa-solid fa-arrow-left bouton"/>              
  <Boutons disabled={isDisabled} onClick={nextSlide} direction = "fa-sharp fa-solid fa-arrow-right bouton" />
</div> 
           
    <div className="container-dots">
      {Array.from(photos).map((photo, position) => (
    <input 
            type="radio" 
            name="image"
            key={photo.id} 
            value={position}
            onClick={() => movePhoto(photo)}
            className="dot">
              

    </input>
    ))}
    </div>
    </div>


)


}

export default App;