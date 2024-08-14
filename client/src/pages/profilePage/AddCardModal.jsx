import { useForm } from "react-hook-form";
import { useUpdateCard } from "../../hooks/useUpdateCard";

const AddCardModal = ({ openModal, setOpenModal }) => {
	const { mutate: updateCard, isLoading: loadingUpdate } = useUpdateCard();

	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm();

	const onSubmit = (data) => {
		updateCard(data, {
			onSuccess: setOpenModal(false),
		});
	};

	if (openModal) {
		return (
			<div className="modal" id="addPayMethodModal">
				<div className="modal-content__profile">
					<span
						className="close-btn"
						onClick={() => {
							setOpenModal(false);
						}}
					>
						×
					</span>
					<h2 className="modal-title">新增付款方式</h2>
					<form className="payMethod-form" onSubmit={handleSubmit(onSubmit)}>
						<div>
							<label>信用卡號碼</label>
							<input
								type="number"
								id="cardNumber"
								className="memberInput-field"
								maxLength="19"
								{...register("cardNumber", {
									required: "請輸入信用卡號碼",
									minLength: {
										value: 16,
										message: "請至輸入至少16位數字",
									},
								})}
							/>
							{errors.cardNumber && (
								<span className="modal-errorMessage">
									{errors.cardNumber.message}
								</span>
							)}
						</div>
						<div>
							<label>有效日期</label>
							<input
								type="month"
								id="expiryDate"
								className="memberInput-field"
								min="2024-08"
								{...register("expiryDate", {
									required: "請選擇有效日期",
								})}
							/>
							{errors.expiryDate && (
								<span className="modal-errorMessage">
									{errors.expiryDate.message}
								</span>
							)}
						</div>
						<div>
							<label>CVV</label>
							<input
								type="text"
								id="cvv"
								className="memberInput-field"
								maxLength="3"
								{...register("cvv", {
									required: "請輸入CVV",
									pattern: {
										value: /^\d{3}$/,
										message: "CVV格式錯誤",
									},
								})}
							/>
							{errors.cvv && (
								<span className="modal-errorMessage">{errors.cvv.message}</span>
							)}
						</div>
						<div className="modal-errorMessage"></div>
						<button type="submit" id="submitPayMethod" className="submit-btn">
							確認新增
						</button>
					</form>
				</div>
			</div>
		);
	}
};

export default AddCardModal;
