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
			if (facility.facility_id == contentId) {
				// 從資料庫抓設施規定資料
				let [ruleList, setRuleList] = useState([]);
				let getRuleList = () => {
					axios
						.post("https://isl-enigma-server.vercel.app/map/mapPage", { facility_id: facility.facility_id })
						.then((response) => {
							setRuleList(response.data);
						}).catch((err)=>{
							console.log(err)
						})
				};
				// useEffect(() => {
				// 	let fetchRule = async () => {
				// 		await getRuleList();
				// 	};
				// 	fetchRule();
				// }, []);
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

				let [moreAbout, setMoreAbout] = useState(null);
				let getMoreAbout = () => {
					axios
						.post("https://isl-enigma-server.vercel.app/map/moreAbout", {
							facility_id: facility.facility_id,
						})
						.then((response) => {
							if(response.data){
								setMoreAbout(response.data.more_link);
							}else{
								setMoreAbout(null)
							}
						});
				};
				useEffect(() => {
					let fetchAboutData = async () => {
						await getMoreAbout();
					};
					fetchAboutData();
				}, []);

				return (
					<div className="divContent col-10">
						<div className="divContentItem">
							<img src={facility.image.image1} />
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
							<div className="divOtherRules">
								<p>
									設施位置 | <span>{facility.location}</span>
								</p>
								<p>
									設施保養 | <span>{facility.data_maintain}</span>
								</p>
								<p>
									其他限制 | <span>{facility.rule_others}</span>
								</p>
								<p>
									備註說明 | <span>{facility.remarks}</span>
								</p>
							</div>
							<ShopMore shop_more={moreAbout} />
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
