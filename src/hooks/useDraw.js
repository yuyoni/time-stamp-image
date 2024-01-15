import { useEffect } from "react";
import calculateTextPosition from "../utils/caculateTextPosition";
import formatTimestamp from "../utils/formatTimestamp";

export default function useDraw(
  uploadedInfo,
  canvasRef,
  fontColor,
  font,
  textStyle,
  textPosition
) {
  useEffect(() => {
    if (uploadedInfo) {
      /* 이미지 그리기 */
      const img = new Image();
      img.src = uploadedInfo.url;
      img.onload = () => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext("2d");

        // 캔버스의 크기를 이미지의 크기로 설정
        canvas.width = img.width;
        canvas.height = img.height;

        ctx.drawImage(img, 0, 0, canvas.width, canvas.height);

        /* 텍스트 그리기 */

        // 날짜 변환
        const date = formatTimestamp(uploadedInfo.lastModified);

        // 폰트 크기 계산
        const fontSize = canvas.width * 0.05;

        // 폰트 스타일
        ctx.fillStyle = fontColor;
        ctx.font = `${fontSize}px ${font}`;
        ctx.shadowColor = `${
          fontColor === "white"
            ? "rgba(0, 0, 0, 0.5)"
            : "rgba(255, 255, 255, 0.8)"
        }`;
        ctx.shadowBlur = 2;
        ctx.shadowOffsetX = 1;
        ctx.shadowOffsetY = 1;

        // 폰트 위치 계산
        calculateTextPosition(
          textStyle,
          fontSize,
          textPosition,
          canvas,
          date,
          ctx
        );
      };
    }
  }, [canvasRef, uploadedInfo, font, fontColor, textPosition, textStyle]);
}
