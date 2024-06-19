import { useEffect } from "react";

// Updates the height of a <textarea> when the value changes.
const useAutosizeTextArea = (textAreaRef, boxTextAreaRef, value) => {
  useEffect(() => {
    if (textAreaRef) {
      // We need to reset the height momentarily to get the correct scrollHeight for the textarea
      textAreaRef.style.height = "24px";
      const scrollHeight = textAreaRef.scrollHeight;

      // We then set the height directly, outside of the render loop
      // Trying to set this with state or a ref will product an incorrect value.
      if (scrollHeight !== 40) {
        textAreaRef.style.height = scrollHeight - 16 + "px";
        boxTextAreaRef.style.height = scrollHeight + 60 + "px";
        //boxChatRef.style.height = boxChatRef.clientHeight - scrollHeight + "px";
      }
    }
  }, [textAreaRef, boxTextAreaRef, value]);
};

export default useAutosizeTextArea;
