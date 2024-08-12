import React from "react";
import Calendar from "react-calendar";

function DateCalendar({ date, dateShow, selectDate, changeView , tileClassName }) {
	if (dateShow) {
		return (
			<div className="calendarArea" onClick={(e)=>{e.stopPropagation()}}>
				<Calendar
					value={date}
					calendarType={"gregory"}
					defaultValue={new Date()}
					minDate={new Date()}
					onChange={selectDate}
					onActiveStartDateChange={changeView}
                    tileClassName={tileClassName}
				/>
			</div>
		);
	}
}

export default DateCalendar;
