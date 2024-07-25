import {FaPerson,FaCircleExclamation,FaChair} from 'react-icons/fa6';
import ContentItem from './ContentItem';


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
						<img src="/src/pages/mappage/mapPointHover.svg" />
						</div>
						<div className='divContentItem'>
							<h1>{facility.title}</h1>
							<p>{facility.des}</p>
							
							<div className="col-12 contentItemOutside">
								<ContentItem iconComponent={<FaPerson />} ruleName={"身高"} ruleContent={"123"} />
								<ContentItem iconComponent={<FaCircleExclamation />} ruleName={"刺激度"} ruleContent={"123"} />
								<ContentItem iconComponent={<FaChair />} ruleName={"座位數"} ruleContent={"123"} />
							</div>
							<p>{facility.content}</p>
							<div>
								<p>
									設施位置 | <span>{facility.title}</span>
								</p>
								<p>
									設施保養 | <span>{facility.title}</span>
								</p>
								<p>
									其他限制 | <span>{facility.title}</span>
								</p>
								<p>
									備註說明 | <span>{facility.title}</span>
								</p>
							</div>
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
