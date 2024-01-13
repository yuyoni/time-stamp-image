export default function formatTimestamp(timestamp) {
  const date = new Date(timestamp);
  const year = date.getFullYear();
  const month = (date.getMonth() + 1).toString().padStart(2, "0"); // 0부터 시작하므로 1을 더하고 2자리로 맞춤
  const day = date.getDate().toString().padStart(2, "0");
  const weekday = ["일", "월", "화", "수", "목", "금", "토"][date.getDay()]; // 요일 배열
  const hours = date.getHours();
  const minutes = date.getMinutes().toString().padStart(2, "0");
  const ampm = hours >= 12 ? "오후" : "오전";
  const formattedHours = hours % 12 || 12; // 0시를 12시로 변경

  const formattedDate = `${year}년 ${month}월 ${day}일 (${weekday}) ${ampm} ${formattedHours}:${minutes}`;

  return formattedDate;
}
