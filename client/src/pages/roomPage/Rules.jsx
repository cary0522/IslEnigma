import { useState } from "react"
import { rulesData } from "./data/rulesDada"
import RulesItem from "./RulesItem"

const Rules = () => {
  const [ruleIndex, setRuleIndex] = useState(0)

  return (
    <section class="roomRules">
      <h2 class="roomRules__title">住房須知</h2>
      <div class="roomRules__accordion">
        {/* <div class="roomRules__item active">
          <div class="roomRules__header">
            <span class="roomRules__icon"></span>
            <h3>入住規定</h3>
            <span class="roomRules__decorator"></span>
          </div>
          <div class="roomRules__content ">
            <p>本園區採取預約制，若臨時來訪可能無候補可供入住，敬請見諒</p>
            <p>
              露營區開放時段：• 全年無休，24小時開放 • 入住時間：下午 3:00 後 •
              退房時間：上午 11:00 前
            </p>
            <p>
              櫃台營業時間： • 每日 08:00 - 22:00 • 22:00
              後有緊急聯絡電話提供服務
            </p>
            <p>
              預訂與入住須知： • 需提前至少 3 天預訂 • 入住時需出示有效身份證件
              • 僅限 18 歲以上成年人入住
            </p>
            <p>
              餐飲服務時間： • 早餐：07:00 - 10:00 • 午餐：12:00 - 14:00 •
              晚餐：18:00 - 21:00 • 24 小時客房服務 available
            </p>
            <p>
              設施使用時間： • 健身中心：24 小時開放 • 游泳池：06:00 - 22:00 •
              海灘區：日出至日落開放
            </p>
          </div>
        </div>
        <div class="roomRules__item ">
          <div class="roomRules__header">
            <span class="roomRules__icon"></span>
            <h3>其他注意事項</h3>
            <span class="roomRules__decorator"></span>
          </div>
          <div class="roomRules__content">
            <p>
              環保政策： • 請遵守垃圾分類規定 •
              鼓勵使用環保用品，減少一次性物品使用
            </p>
            <p>噪音管制： • 22:00 - 08:00 為安靜時段，請降低音量</p>
            <p>寵物政策： • 很抱歉，為確保所有客人的舒適，不接受寵物入住</p>
            <p>吸煙政策： • 所有室內區域禁止吸煙 • 指定戶外吸煙區available</p>
            <p>
              緊急聯絡： • 緊急情況請撥打房間內的緊急聯絡電話 • 醫療協助 24
              小時available
            </p>
          </div>
        </div>
        <div class="roomRules__item">
          <div class="roomRules__header">
            <span class="roomRules__icon"></span>
            <h3>取消政策</h3>
            <span class="roomRules__decorator"></span>
          </div>
          <div class="roomRules__content">
            <p>
              活動預約： • 建議提前至少 1 天預約特色活動 •
              部分活動可能因天氣因素取消或調整
            </p>
            <p>
              交通服務： • 提供碼頭至露營區的免費接駁服務 • 需提前 2
              小時預約接駁車
            </p>
            <p>
              取消預訂： • 入住日 7 天前取消，全額退款 • 入住日 3-6
              天前取消，收取 50% 取消費 • 入住日 3 天內取消，恕不退款
            </p>
            <p>
              更改預訂： • 可在入住日 3
              天前免費更改一次預訂日期，視房間供應情況而定
            </p>
          </div>
        </div> */}

        {rulesData.map((data, index) => {
          return (
            <RulesItem
              data={data}
              index={index}
              ruleIndex={ruleIndex}
              setRuleIndex={setRuleIndex}
            />
          )
        })}
      </div>
    </section>
  )
}

export default Rules
