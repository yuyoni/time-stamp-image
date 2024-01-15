import { useEffect } from "react";

export default function useSave(
  canvasRef,
  uploadedInfo,
  saveConfirm,
  setSaveConfirm,
  setShowSaveMessage
) {
  useEffect(() => {
    if (saveConfirm) {
      const canvas = canvasRef.current;
      const dataURL = canvas.toDataURL("image/png"); // png 형식 사용

      // a 태그를 생성하고 다운로드 링크로 사용
      const a = document.createElement("a");
      a.href = dataURL;
      const renamedFile = uploadedInfo.name.split(".")[0] + "_time";
      a.download = renamedFile; // 파일명
      a.click();

      setSaveConfirm(false);
      setShowSaveMessage(false);
    }
    // eslint-disable-next-line
  }, [saveConfirm]);
}
