import React, {useState} from "react";
import normalBaby from "../assets/unadulterated-hoglette.png";
import SunBaby from "../assets/sun-eyes.png";
import BlueBaby from "../assets/blue-eyes.png";
import GlowingBaby from "../assets/glowing-eyes.png";

// is there a way we could associate eye color string values with images?
// perhaps so we could do something along the lines of `eyeColorMapper['blue'] and get back the right image?`
const eyeColorMapper = {
  blue: BlueBaby,
  sun: SunBaby,
  glowing: GlowingBaby
}

function BabyHog({eyeColor, hobby, name}) {
  
  const [weight, setWeight] = useState(10)
  const [height, setHeight] = useState(200)
  
  function handleChangeWeight(e) {
    // how can we reuse this for both buttons?
    // perhaps something with e.target.name === "+"
    if (e.target.name === "+") {
      setWeight(weight => weight+1);
      setHeight(height => height+10);
    } else if (e.target.name === "-") {
      setWeight(weight => weight-1);
      setHeight(height => height-10);
    }
  }

  
  // if (eyeColor === "blue"){
  //   eyeColorMapper = BlueBaby
  // } else if (eyeColor === "sun"){
  //   eyeColorMapper = SunBaby
  // } else if (eyeColor === "glowing"){
  //   eyeColorMapper = GlowingBaby
  // }


  return (
    <li className="hogbabies">
      <h1>{name}</h1>
      <h3>Weight: {weight} lbs</h3>
      <h3>Hobby: {hobby}</h3>
      <h4>Eye Color: {eyeColor}</h4>

      <button name="+" onClick={handleChangeWeight}>Increase Weight</button>
      <button name="-" onClick={handleChangeWeight}>Decrease Weight</button>

      <div className="hb-wrap">
        <img
          src={eyeColorMapper[eyeColor]}
          style={{ height: height }}
          alt="MasterBlasterJrJr"
        />
      </div>
    </li>
  );
}

export default BabyHog;
