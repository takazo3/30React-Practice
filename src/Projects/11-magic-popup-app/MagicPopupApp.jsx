import React, { useState, useEffect } from 'react'
import Popup from '../components/PopupComponent'
import Title from '../components/Title'
import Button from '../components/Button'

export default function MagicPopupApp() {

  const [trigger, setTrigger] = useState(false);
  const [timeTrigger, setTimeTrigger] = useState(false);
  const [timeTriggerWarnig, setTimeTriggerWarning] = useState(false);
  const [disable, setDisable] = useState(false);


  const triggerPopup = () => {
    setTrigger(true);
  }

  useEffect(() => {
    setTimeout(() => {
      setTimeTrigger(true);
    }, 3000);
    setTimeout(() => {
      setTimeTriggerWarning(true);
    }, 8000);
  }, []);

  return (
    <div className="text-center">
      <Title text="Click for Popup or Wait 3 sec" />
      <Button disable={disable} btnClass={"btn btn-primary"}  text={"click"} onClick={triggerPopup} />


      <Popup
        type={"alert-info"}
        title={"Triggered Popup"}
        text={"This popup was triggerd by a button."}
        handleClose={setTrigger}
        trigger={trigger} />

      <Popup
        type={"alert-danger"}
        title={"Time Triggered Popup"}
        text={"This popup was triggerd by delay."}
        handleClose={setTimeTrigger}
        trigger={timeTrigger}
      />
      <Popup
        type={"alert-warning"}
        title={"Time Triggered Popup"}
        text={"This popup was triggerd by delay."}
        handleClose={setTimeTriggerWarning}
        trigger={timeTriggerWarnig} />
    </div>
  )
}
