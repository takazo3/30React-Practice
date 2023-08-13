import React, { useState, useEffect } from 'react'
import Button from './Button'

export default function Popup({ type, title, text, handleClose, trigger}) {
  const popupContainer = {
    position: 'absolute',
    top: '0',
    width: '100vw',
    height: '100vh',
    background: 'rgba(0, 0, 0, 0.1)',
    zIndex: "-1",
    // display: 'flex',
    // justifyContent: 'center',
    textAlign: 'left',
  }

  const popStyle = {
    position: 'relative',
    margin: "40vh auto",
    zIndex: "1",
  }

  // const handleClose = () => {


  // }

  // let times= "&times;"
  return trigger && (
    <div style={popupContainer}>
      <div className={`${type} text-left`} style={popStyle}>
        <div className="alert-close">
          <div className="d-flex flex-column">
            <h4 className="mb-1">{title && title}</h4>
            <p>{text && text}</p>
          </div>
          <Button btnClass={"btn-close"} text={"x"} onClick={()=>handleClose(false)} />
        </div>

      </div>
    </div>
  )
}
