import { FaPerson, FaCircleExclamation, FaChair } from "react-icons/fa6";
import ContentItem from "./ContentItem";
import ShopMore from "./ShopMore";
import axios from "axios";
import { useEffect, useState } from "react";

function FacilityContent({
	facilityList,
	contentShow,
	contentId,
	handleContentClose,
}) {
	if (contentShow) {
		for (let facility of facilityList) {
			if (facility.id == contentId) {
				// 從資料庫抓設施規定資料
				let [ruleList, setRuleList] = useState([]);
				let getRuleList = () => {
					axios
						.post("http://localhost:3000/mapPage", { facility_id: facility.id })
						.then((response) => {
							setRuleList(response.data);
						});
				};
				useEffect(() => {
					let fetchRule = async () => {
						await getRuleList();
					};
					fetchRule();
				}, []);
				let rule_height,
					rule_seat,
					rule_excitement = null;

				ruleList.forEach((element) => {
					if (element.rule_type == "rule_height") {
						rule_height = element.rule_value;
					} else if (element.rule_type == "rule_seat") {
						rule_seat = element.rule_value;
					} else if (element.rule_type == "rule_excitement") {
						rule_excitement = element.rule_value;
					}
				});

				return (
					<div className="divContent col-10">
						<div className="divContentItem">
							<img src={facility.images.image1} />
						</div>
						<div className="divContentItem">
							<h1>{facility.title}</h1>
							<p>{facility.des}</p>

							<div className="col-12 contentItemOutside">
								<ContentItem
									iconComponent={<FaPerson />}
									ruleName={"身高"}
									ruleContent={rule_height}
								/>
								<ContentItem
									iconComponent={<FaCircleExclamation />}
									ruleName={"刺激度"}
									ruleContent={rule_excitement}
								/>
								<ContentItem
									iconComponent={<FaChair />}
									ruleName={"座位數"}
									ruleContent={rule_seat}
								/>
							</div>
							<p>{facility.content}</p>
							<div>
								<p>
									設施位置 | <span>{facility.location}</span>
								</p>
								<p>
									設施保養 | <span>{facility.date_maintain}</span>
								</p>
								<p>
									其他限制 | <span>{facility.rule_other}</span>
								</p>
								<p>
									備註說明 | <span>{facility.remarks}</span>
								</p>
							</div>
							<ShopMore shop_more={facility.shop_more} />
						</div>
						<div
							id="btnXContent"
							onClick={() => {
								handleContentClose();
							}}
						>
							X
						</div>
					</div>
				);
			}
		}
	}
}

export default FacilityContent;
