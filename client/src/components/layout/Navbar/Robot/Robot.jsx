import { useState } from "react"
import "./Robot.css"

const Robot = () => {
  const [message, setMessage] = useState("")
  const [toggleBot, setToggleBot] = useState(false)
  return (
    <div id="chatbot">
      <div class="chatBot" onClick={() => setToggleBot(!toggleBot)}>
        <img src="./about.png" alt="Chat Bot" />
      </div>
      {toggleBot && (
        <div class="chatBotContainer">
          <div class="chatBotHeader">
            <span>IslEnigma遊樂園智能助理</span>
            <span>×</span>
          </div>
          <div class="chatBotMessages" id="chatBotMessages"></div>
          <div class="chatBotInput">
            <button class="menuButton">☰</button>
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
