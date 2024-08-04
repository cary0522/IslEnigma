import { useState } from "react"
import "./Robot.css"

const Robot = () => {
  const [message, setMessage] = useState("")
  const [toggleBot, setToggleBot] = useState(false)
  return (
    <div id="chatbot">
      <div className="chatBot" onClick={() => setToggleBot(!toggleBot)}>
        <img src="./about.png" alt="Chat Bot" />
      </div>
      {toggleBot && (
        <div className="chatBotContainer">
          <div className="chatBotHeader">
            <span>IslEnigma遊樂園智能助理</span>
            <span>×</span>
          </div>
          <div className="chatBotMessages" id="chatBotMessages"></div>
          <div className="chatBotInput">
            <button className="menuButton">☰</button>
            <input
              type="text"
              id="chatBotInput"
              placeholder="請輸入您的問題..."
              value={message}
              onChange={(e) => {
                setMessage(e.target.value)
              }}
            />
            <button>發送</button>
          </div>
        </div>
      )}
    </div>
  )
}

export default Robot
