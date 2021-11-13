import { useDispatch } from "react-redux";
import FretBoard from "./FretBoard";
import { KeyListener } from "./KeyListener";
import Tablature from "./Tablature";
import { completeSection, undo } from "../ducks/data";
import AppInfo from "./AppInfo";
export default function Page() {
  const dispatch = useDispatch();

  function onUndo() {
    dispatch(undo());
  }

  function onCompleteSection() {
    dispatch(completeSection());
  }

  return (
    <>
      <div className="no-print">
        <KeyListener />
        <AppInfo />
        <p>Click on a fret to add it to the tab</p>
        <p>Hold SHIFT and click multiple strings to add a chord</p>
        <p>Press BACKSPACE to remove last vertical array</p>
        <FretBoard />
        <button onClick={onUndo}>Backspace</button>
        <button onClick={onCompleteSection}>Complete section</button>
      </div>
      <Tablature />
    </>
  );
}
