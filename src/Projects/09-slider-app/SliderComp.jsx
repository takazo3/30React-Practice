import React from 'react'

export default function SliderComp({
  setValue, 
  handleInput, 
  bgColor, 
  textColor
  }) {

    const sliderStyle = {
      appearance: "none",
      width: "100%",
      height: 25,
      backgroundColor:!bgColor ? 'lightgray': bgColor,
      cursor: "pointer",
      opacity: 0.7,
    };
  return (
    <div className="d-flex flex-column" style={{gap: 100 }}>
      <input 
      type="range" 
      min="0" max={100} 
      value={setValue} 
      onInput={handleInput}
      style={sliderStyle}
      />
      <div style={{
      color: !textColor ? 'black': textColor,
      backgroundColor:!bgColor ? 'lightgray': bgColor,
      height: `${setValue * 3}px`,
      width: `${setValue * 3}px`,
      fontWeight: 600,
      borderRadius: "50%",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",

      }}>
        <span>{setValue}</span>
      </div>
    </div>
  )
}
