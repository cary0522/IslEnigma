import userImage from "/shoppingCart/about.png";
import "./Profile.scss";

import { payMethodData } from "./data/orderData";
import { useState } from "react";
import Order from "./Order";
import PayMethod from "./PayMethod";
const Profile = () => {
	const [activeButton, setActiveButton] = useState("order");

	const handleButtonClick = (buttonId) => {
		setActiveButton(buttonId);
	};

	return (
		<div className="profilePage">
			<div className="container">
				<div className="layout">
					<div className="sidebar">
						<div id="profile-image">
							<img id="userProfileImage" src={userImage} alt="個人頭像" />
							<input
								type="file"
								id="profileImageUpload"
								accept="image/*"
								style={{ display: "none" }}
							/>
							<label htmlFor="profileImageUpload" className="edit-icon">
								<i className="bi bi-pencil-fill"></i>
							</label>
						</div>
						<div className="button-group">
							<button
								className={`btn-custom ${
									activeButton === "order" ? "active" : ""
								}`}
								id="order"
								data-target="orderContent"
								onClick={() => handleButtonClick("order")}
							>
								訂單
							</button>
							<button
								className={`btn-custom ${
									activeButton === "payMethod" ? "active" : ""
								}`}
								id="payMethod"
								data-target="payMethodContent"
								onClick={() => handleButtonClick("payMethod")}
							>
								付款資訊
							</button>
							<button
								className={`btn-custom ${
									activeButton === "accountInfo" ? "active" : ""
								}`}
								id="accountInfo"
								data-target="accountInfoContent"
								onClick={() => handleButtonClick("accountInfo")}
							>
								帳號資訊
							</button>
							<button
								className={`btn-custom ${
									activeButton === "changePassword" ? "active" : ""
								}`}
								id="changePassword"
								data-target="changePasswordContent"
								onClick={() => handleButtonClick("changePassword")}
							>
								更改密碼
							</button>
							<button
								className="btn-custom"
								id="logout"
								data-target="logoutContent"
							>
								登出
							</button>
						</div>
					</div>
					<div id="content-group">
						{activeButton === "order" && <Order />}
						{activeButton === "payMethod" && <PayMethod />}
						{activeButton === "accountInfo" && (
							<div id="accountInfoContent">
								<div className="accountInfo-form">
									<div className="form-row">
										<div className="form-col">
											<label htmlFor="memberSurname">姓氏</label>
											<input
												type="text"
												className="memberInput-field"
												id="memberSurname"
												name="surname"
											/>
										</div>
										<div className="form-col">
											<label htmlFor="memberGivenName">名字</label>
											<input
												type="text"
												className="memberInput-field"
												id="memberGivenName"
												name="name"
											/>
										</div>
									</div>
									<div className="form-row">
										<div className="form-col">
											<label htmlFor="memberPhone">電話號碼</label>
											<input
												type="tel"
												className="memberInput-field"
												id="memberPhone"
												name="phone"
											/>
										</div>
										<div className="form-col">
											<label htmlFor="memberEmail">電子郵件</label>
											<input
												type="email"
												className="memberInput-field"
												id="memberEmail"
												name="email"
											/>
										</div>
									</div>
									<div className="form-row">
										<div className="form-col">
											<label htmlFor="memberAddress">居住地</label>
											<input
												type="text"
												className="memberInput-field"
												id="memberAddress"
												name="address"
											/>
										</div>
										<div className="form-col">
											<label htmlFor="memberBirth">生日</label>
											<input
												type="date"
												className="memberInput-field"
												id="memberBirth"
												name="birth"
											/>
										</div>
									</div>
									<button
										type="submit"
										className="submit-btn"
										// onClick={updateAccountInfo}
									>
										確認更改
									</button>
								</div>
							</div>
						)}
						{activeButton === "changePassword" && (
							<div id="changePasswordContent">
								<div className="password-form">
									<div className="form-group">
										<label htmlFor="oldPassword">舊密碼</label>
										<input
											type="password"
											className="memberInput-field"
											id="oldPassword"
										/>
									</div>
									<div className="form-group">
										<label htmlFor="newPassword">新密碼</label>
										<input
											type="password"
											className="memberInput-field"
											id="newPassword"
										/>
									</div>
									<div className="form-group">
										<label htmlFor="confirmPassword">確認密碼</label>
										<input
											type="password"
											className="memberInput-field"
											id="confirmPassword"
										/>
									</div>
									<button
										type="submit"
										className="submit-btn"
										// onClick={checkPassword}
									>
										確認更改
									</button>
								</div>
							</div>
						)}
					</div>
				</div>
			</div>
		</div>
	);
};

export default Profile;
