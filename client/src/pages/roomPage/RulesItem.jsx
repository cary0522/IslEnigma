import { useEffect, useState } from "react"

const RulesItem = ({ data, ruleIndex, setRuleIndex, index }) => {
  const { title, contents } = data
  const [toggleRule, setToggleRule] = useState(false)

  const handleRuleClick = (index) => {
    if (ruleIndex === index) {
      setToggleRule(!toggleRule)
    } else {
      setRuleIndex(index)
      setToggleRule(true)
    }
  }

  console.log(toggleRule)
  //預設第一個項目打開
  useEffect(() => {
    setToggleRule(ruleIndex === index)
  }, [ruleIndex, index])

  return (
    <div
      className={`roomRules__item ${
        ruleIndex === index && toggleRule ? "active" : ""
      }`}
    >
      <div className="roomRules__header" onClick={() => handleRuleClick(index)}>
        <span className="roomRules__icon"></span>
        <h3>{title}</h3>
        <span className="roomRules__decorator"></span>
      </div>
      <div className="roomRules__content">
        {contents.map((content, contentIndex) => (
          <p key={contentIndex}>{content}</p>
        ))}
      </div>
    </div>
  )
}

export default RulesItem
