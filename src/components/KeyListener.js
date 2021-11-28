import { useDispatch, useSelector } from "react-redux";
import {
    addLine,
  selectBuffer,
  setBuffer,
  setIsMultipleOn,
  undo,
} from "../ducks/dataReducer";

import { useEventListener } from "../utils/useEventListener";

export function KeyListener() {
  const dispatch = useDispatch();
  const buffer = useSelector(selectBuffer);

  function onBackspace() {
    dispatch(undo());
  }

  useEventListener("keydown", (e) => {
    if (e.key === "Shift") {
      dispatch(setIsMultipleOn(true));
    }
  });

  useEventListener("keyup", (e) => {
    if (e.key === "Backspace") onBackspace();
    if (e.key === "Shift") {
      dispatch(setIsMultipleOn(false));
      if (buffer.find((string) => string !== null)) {
        dispatch(addLine(buffer));
        dispatch(setBuffer(Array(6).fill(null)));
      }
    }
  });

  return <></>;
}
