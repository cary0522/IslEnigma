import {FaPerson,FaCircleExclamation,FaChair} from 'react-icons/fa6';
import ContentItem from './ContentItem';
import ShopMore from './ShopMore';


function FacilityContent({
	facilityList,
	contentShow,
	contentId,
	handleContentClose,
}) {
	if (contentShow) {
		for (let facility of facilityList) {
			if (facility.id == contentId) {
				return (
					<div className="divContent col-10">
						<div className="divContentItem">
						<img src={facility.image} />
						</div>
						<div className='divContentItem'>
							<h1>{facility.title}</h1>
							<p>{facility.des}</p>
							
							<div className="col-12 contentItemOutside">
								<ContentItem iconComponent={<FaPerson />} ruleName={"身高"} ruleContent={facility.rule_height} />
								<ContentItem iconComponent={<FaCircleExclamation />} ruleName={"刺激度"} ruleContent={facility.rule_excitement} />
								<ContentItem iconComponent={<FaChair />} ruleName={"座位數"} ruleContent={facility.rule_seat} />
							</div>
							<p>{facility.content}</p>
							<div>
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
							<ShopMore shop_more={facility.shop_more}/>
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
