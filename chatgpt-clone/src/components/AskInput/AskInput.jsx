import { useState } from "react";

import "./AskInput.css"

const AskInput = () => {

  const [ask, setAsk] = useState("");

  console.log("ask" , ask)

  const handleChange = (event) => {
    setAsk(event.target.value);
  }

  return (
    <div className="ask-input-container">
      <div className="ask-input-plus-icon-wrapper">
        {/* Plus icon */}
        <svg className="ask-input-plus-icon" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M4 12H20M12 4V20"  stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>
        
        <div className="ask-input-plus-icon-tooltip">
          Add files and more
        </div>
      </div>

      <input 
        placeholder="Ask anything"
        value={ask}
        onChange={handleChange}
        type="text">
        
      </input>

      <div className="ask-input-plus-icon-wrapper">
        {/* Microphone icon */}
        <svg className="ask-input-microphone-icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M19 10V12C19 15.866 15.866 19 12 19M5 10V12C5 15.866 8.13401 19 12 19M12 19V22M8 22H16M12 15C10.3431 15 9 13.6569 9 12V5C9 3.34315 10.3431 2 12 2C13.6569 2 15 3.34315 15 5V12C15 13.6569 13.6569 15 12 15Z" stroke="#ffffff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>        
        <div className="ask-input-plus-icon-tooltip">
          Dictate
        </div>
      </div>

      <div className={`ask-input-plus-icon-wrapper ${ask!="" ? "idle":""}`}>
        {/* Voice mode icon */}
        <svg className="ask-input-voice-mode-icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M12 4L12 20" stroke="#ffffff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M8 9L8 15" stroke="#ffffff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M20 10L20 14" stroke="#ffffff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M4 10L4 14" stroke="#ffffff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M16 7L16 17" stroke="#ffffff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>        
        <div className="ask-input-plus-icon-tooltip">
          Use voice mode
        </div>
      </div>

      <div className={`ask-input-arrow-up-icon-wrapper ${ask!="" ? "active":""}`}>
        {/* arrow up icon */}
        <svg className="ask-input-arrow-up-icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M12 20L12 4M12 4L18 10M12 4L6 10" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>
      </div>

    </div>
  )
}

export default AskInput;