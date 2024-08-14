import { useEffect, useState } from "react"
import "./Robot.css"
import axios from "axios"
import { optionsData } from "./optionsData"

const Robot = () => {
  const [message, setMessage] = useState("")
  const [toggleBot, setToggleBot] = useState(false)
  const [messages, setMessages] = useState([])

  useEffect(() => {
    const displayWelcome = () => {
      setMessages(() => [
        {
          text:
            "您好！歡迎來到IslEnigma遊樂園。我是您的智能助理，有什麼我可以幫助您的嗎？",
        },
      ])
    }
    displayWelcome()
  }, [])

  const handleSendMessage = async () => {
    if (message.trim() !== "") {
      setMessages((prevMessages) => [
        ...prevMessages,
        { text: message, sender: "user" },
      ])

      try {
        setMessage("")

        const res = await axios.post("http://localhost:3000/get_completion", {
          user_input: message,
        })

        const botMessage = res.data.response

        setMessages((prevMessages) => [...prevMessages, { text: botMessage }])
      } catch (error) {
        console.error("Error fetching bot response:", error)
      }
    }
  }

  const handleSendOption = async (index) => {
    const option = optionsData[index]

    setMessages((prevMessages) => [
      ...prevMessages,
      { text: option, sender: "user" },
    ])

    try {
      const res = await axios.post("http://localhost:3000/get_completion", {
        user_input: option,
      })

      const botMessage = res.data.response

      setMessages((prevMessages) => [...prevMessages, { text: botMessage }])
    } catch (err) {
      console.log(err)
    }
  }

  return (
    <div id="chatbot">
      <div className="chatBot" onClick={() => setToggleBot(!toggleBot)}>
        <img src="/robotIcon/robotIcon.png  " alt="Chat Bot" />
      </div>
      {toggleBot && (
        <div className="chatBotContainer" id="chatBotContainer">
          <div className="chatBotHeader">
            <span>IslEnigma遊樂園智能助理</span>
            <span
              className="closeRobot"
              onClick={() => {
                setToggleBot(false)
              }}
            >
              ×
            </span>
          </div>

          <div className="chatBotMessages" id="chatBotMessages">
            {messages.map((msg) => {
              return (
                <div
                  className={
                    msg.sender ? " message userMessage" : "message botMessage"
                  }
                >
                  {msg.text}
                </div>
              )
            })}
            {messages.length <= 1 && (
              <div className="optionsContainer">
                {optionsData.map((data, index) => {
                  return (
                    <button
                      className="optionButton"
                      onClick={() => {
                        handleSendOption(index)
                      }}
                    >
                      {data}
                    </button>
                  )
                })}
              </div>
            )}
          </div>
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
            <button onClick={handleSendMessage}>發送</button>
          </div>
        </div>
      )}
    </div>
  )
}

export default Robot
