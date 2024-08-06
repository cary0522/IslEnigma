import React, { useState, useEffect, useRef } from "react";
import { faqData, lastUpdated } from "./faqData";

const FAQ = () => {
  const [chatMessages, setChatMessages] = useState([]);
  const [currentState, setCurrentState] = useState("初始");
  const [showModal, setShowModal] = useState(false);
  const [modalMessage, setModalMessage] = useState("");
  const chatContainerRef = useRef(null);
  const isInitializedRef = useRef(false);

  useEffect(() => {
    if (!isInitializedRef.current) {
      initializeChat();
      isInitializedRef.current = true;
    }
  }, []);

  useEffect(() => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop =
        chatContainerRef.current.scrollHeight;
    }
  }, [chatMessages]);

  const addMessage = (message, isUser = false) => {
    if (message === undefined || message === null) {
      console.error("嘗試添加未定義或空訊息");
      return;
    }

    setChatMessages((prevMessages) => [
      ...prevMessages,
      { text: message, isUser, id: Date.now() },
    ]);
  };

  const addFeedbackMessage = () => {
    if (currentState in lastUpdated) {
      setChatMessages((prevMessages) => [
        ...prevMessages,
        {
          type: "feedback",
          id: Date.now(),
        },
      ]);
    }
  };

  const handleFeedback = (isHelpful) => {
    console.log(`用戶反饋: ${isHelpful ? "有幫助" : "沒幫助"}`);
    setModalMessage("感謝您的反饋！我們會繼續努力:-)");
    setShowModal(true);

    setChatMessages((prevMessages) =>
      prevMessages.filter((msg) => msg.type !== "feedback")
    );
    addOptions(faqData[currentState], currentState);
  };

  const addOptions = (options, state) => {
    setChatMessages((prevMessages) => [
      ...prevMessages,
      { type: "options", options, state, id: Date.now() },
    ]);
  };

  const handleUserInput = (option) => {
    if (!option || (!option.text && !option.nextState)) {
      console.error("無效的選項:", option);
      return;
    }

    addMessage(option.text || "返回主選單", true);
    if (option.answer) {
      setTimeout(() => {
        addMessage(option.answer);
        setTimeout(() => {
          addFeedbackMessage();
        }, 500);
      }, 500);
    } else if (option.nextState) {
      const newState = option.nextState;
      setCurrentState(newState);
      setTimeout(() => {
        if (newState === "初始") {
          addMessage("還有什麼我可以幫您的嗎？");
        } else {
          addMessage(`關於${newState}，您想了解哪方面的資訊？`);
        }
        addOptions(faqData[newState], newState);
      }, 500);
    }
  };

  const initializeChat = () => {
    addMessage(
      "歡迎來到IslEnigma！我是尼格瑪常見問題小幫手。請問您想了解哪方面的資訊？"
    );
    addOptions(faqData["初始"], "初始");
  };

  return (
    <div id="faqPage" className="FAQ">
      <div className="contain">
        <header>
          <span className="FAQLine"></span>
          <h1>IslEnigma 常見問題</h1>
          <span className="FAQLine"></span>
        </header>
        <div role="main">
          <div
            id="chat-messages"
            className="chat-container"
            ref={chatContainerRef}
          >
            {chatMessages.map((message) => {
              if (message.type === "options") {
                return (
                  <OptionsContainer
                    key={message.id}
                    options={message.options}
                    state={message.state}
                    handleUserInput={handleUserInput}
                  />
                );
              } else if (message.type === "feedback") {
                return (
                  <FeedbackMessage
                    key={message.id}
                    lastUpdated={lastUpdated[currentState]}
                    handleFeedback={handleFeedback}
                  />
                );
              } else {
                return (
                  <MessageBubble
                    key={message.id}
                    message={message.text}
                    isUser={message.isUser}
                  />
                );
              }
            })}
          </div>
        </div>
        <footer>
          <p>
            <a href="#">islEnigma</a> ➛ <a href="#">樂園資訊</a> ➛
            <a href="#">常見問題</a>
          </p>
        </footer>
      </div>
      {showModal && (
        <FeedbackModal
          message={modalMessage}
          onClose={() => setShowModal(false)}
        />
      )}
    </div>
  );
};

// 其他組件保持不變
const MessageBubble = ({ message, isUser }) => (
  <div className={`message ${isUser ? "user-message" : "bot-message"}`}>
    {!isUser && <div className="mascot"></div>}
    <div className="message-content">
      {message.split(/([：:。，,])/).map((part, index) => (
        <React.Fragment key={index}>
          {part}
          {index % 2 === 1 && index < message.length - 1 && <br />}
        </React.Fragment>
      ))}
    </div>
  </div>
);

const OptionsContainer = ({ options, state, handleUserInput }) => {
  const isInitialState = state === "初始";

  return (
    <div
      className={
        isInitialState ? "initial-options-container" : "options-container"
      }
    >
      {options.map((option, index) => (
        <button
          key={index}
          className={isInitialState ? "initial-option-btn" : "option-btn"}
          onClick={() => handleUserInput(option)}
        >
          {option.icon && (
            <img
              src={`../../public/00myIcon/${option.icon}`}
              alt={option.text}
              className="option-icon"
            />
          )}
          <span>{option.text}</span>
        </button>
      ))}
      {!isInitialState && (
        <button
          className="option-btn return-to-main"
          onClick={() =>
            handleUserInput({ text: "返回主選單", nextState: "初始" })
          }
        >
          返回主選單
        </button>
      )}
    </div>
  );
};

const FeedbackMessage = ({ lastUpdated, handleFeedback }) => (
  <div className="message bot-message feedback-message">
    <div className="message-content">
      <p>最後更新時間: {lastUpdated}</p>
      <p>這個回答對您有幫助嗎？</p>
      <div className="feedback-buttons">
        <button onClick={() => handleFeedback(true)}>有幫助</button>
        <button onClick={() => handleFeedback(false)}>沒幫助</button>
      </div>
    </div>
  </div>
);

const FeedbackModal = ({ message, onClose }) => (
  <div id="feedbackModal" className="modal" style={{ display: "block" }}>
    <div className="modal-content">
      <p id="modalMessage">{message}</p>
      <button id="modalClose" onClick={onClose}>
        確定
      </button>
    </div>
  </div>
);

export default FAQ;
