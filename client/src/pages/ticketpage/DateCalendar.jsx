import React from "react";
import Calendar from "react-calendar";
import DatePicker from "react-date-picker";

import "react-date-picker/dist/DatePicker.css";
import "react-calendar/dist/Calendar.css";

function DateCalendar({
	today,
	date,
	dateShow,
	selectDate,
	changeView,
	tileClassName,
}) {
	if (dateShow) {
		return (
			<div
				className="calendarArea"
				onClick={(e) => {
					e.stopPropagation();
				}}
			>
				<DatePicker
					value={date}
					onChange={selectDate}
					clearIcon={false}
					closeCalendar={false}
					disableCalendar={false}
					isOpen={true}
					shouldCloseCalendar={({ reason }) => reason !== "outsideAction"}
					locale="en-us"
					calendarType={"gregory"}
					minDate={today}
					onActiveStartDateChange={changeView}
					tileClassName={tileClassName}
				/>
			</div>
		);
	}
}

export default DateCalendar;
