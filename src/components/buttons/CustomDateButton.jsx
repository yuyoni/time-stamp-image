import DatePicker from "react-datepicker";
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
        <DatePicker
          showIcon // 달력 아이콘 보임
          showMonthDropdown // month dropdown으로 볼 수 있음
          useShortMonthInDropdown // month 줄임말로
          className="datePicker"
          showTimeSelect // 시간 선택 가능
          dateFormat="yyyy.MM.dd" // 날짜 형태
          shouldCloseOnSelect // 날짜를 선택하면 datepicker가 자동으로 닫힘
          minDate={new Date("2000-01-01")} // minDate 이전 날짜 선택 불가
          maxDate={new Date()} // maxDate 이후 날짜 선택 불가
          selected={selectedDate ? selectedDate : new Date()}
          onChange={(date) => {
            setSelectedDate(date);
          }}
          todayButton="SET DATE TODAY"
        />
      </Wrapper>
    )
  );
}

const Wrapper = styled.div`
  grid-area: date-picker;
  z-index: 3;
`;
