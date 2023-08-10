import SliderComp from './SliderComp'
import Title from '../components/Title'

import { useState } from 'react'

export default function SliderApp() {
  const [slideValue, setSlideValue] = useState(0);
  const handeleSliderValueChange = (e) => {
    setSlideValue(e.target.value);
  };

  let bgColor;
  let textColor;
  if (slideValue < 20) {
    bgColor = "red";
    textColor = "gray";
  } else if (slideValue < 40) {
    bgColor = "orange";
    textColor = "lightgray";
  } else if (slideValue < 60) {
    bgColor = "yellow";
    textColor = "black";
  } else if (slideValue < 80) {
    bgColor = "green";
    textColor = "white";
  } else {
    bgColor = "blue";
    textColor = "white";
  }
  return (
    <div className="container text-center">
      <Title text={"Slide to Grow"} />
      <SliderComp setValue={slideValue} handleInput={handeleSliderValueChange} bgColor={bgColor} textColor={textColor} />
    </div>
  )
}
