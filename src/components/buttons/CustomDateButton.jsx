import ReactDatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import styled from "styled-components";

export default function CustomDateButton({
  uploadedInfo,
  selectedDate,
  setSelectedDate,
}) {
  return (
    uploadedInfo && (
      <Wrapper>
        <ReactDatePicker
          className="datePicker"
          showTimeSelect
          dateFormat="yyyy.MM.dd" // 날짜 형태
          shouldCloseOnSelect // 날짜를 선택하면 datepicker가 자동으로 닫힘
          minDate={new Date("2000-01-01")} // minDate 이전 날짜 선택 불가
          maxDate={new Date()} // maxDate 이후 날짜 선택 불가
          selected={selectedDate ? selectedDate : new Date()}
          onChange={(date) => setSelectedDate(date)}
        />
      </Wrapper>
    )
  );
}

const Wrapper = styled.div`
  grid-area: date-picker;
`;
