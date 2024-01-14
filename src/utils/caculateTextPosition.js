export default function calculateTextPosition(
  textStyle,
  fontSize,
  textPosition,
  canvas,
  date,
  ctx
) {
  // 폰트 위치
  let textX, textY;
  let result;

  switch (textStyle) {
    case "twoline": {
      const lineheight = fontSize * 1.2;

      switch (textPosition) {
        case "top": {
          textX = canvas.width * 0.1;
          textY = canvas.height * 0.1 + lineheight;
          break;
        }
        case "bottom": {
          textX = canvas.width * 0.1;
          textY = canvas.height * 0.9 - lineheight;
          break;
        }
        default: {
          textX = canvas.width * 0.1;
          textY = canvas.height * 0.9;
        }
      }
      result = date[1].split("\n");
      for (let i = 0; i < result.length; i++) {
        ctx.fillText(result[i], textX, textY + i * lineheight);
      }
      break;
    }
    default: {
      // 텍스트 위치 계산
      switch (textPosition) {
        case "top": {
          textX = canvas.width * 0.1;
          textY = canvas.height * 0.15;
          // 여기서 textX와 textY를 사용하여 작업 수행
          break;
        }
        case "bottom": {
          textX = canvas.width * 0.1;
          textY = canvas.height * 0.85;
          // 여기서 textX와 textY를 사용하여 작업 수행
          break;
        }
        default: {
          textX = canvas.width * 0.1;
          textY = canvas.height * 0.9;
        }
      }
      result = date[0].split("\n");
      for (let i = 0; i < result.length; i++) {
        ctx.fillText(result[i], textX, textY);
      }
    }
  }
}
