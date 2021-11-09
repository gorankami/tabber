import { useDispatch } from "react-redux";
import FretBoard from "./FretBoard";
import { KeyListener } from "./KeyListener";
import Sections from "./Sections";
import { undo } from "../ducks/data";
import AppInfo from "./AppInfo";
export default function Page() {
  const dispatch = useDispatch();

  function onUndo() {
    dispatch(undo());
  }

  return (
    <>
      <KeyListener />
      <AppInfo />
      <p>Click on a fret to add it to the tab</p>
      <p>Hold SHIFT and click multiple strings to add a chord</p>
      <p>Press BACKSPACE to remove last vertical array</p>
      <FretBoard />
      <button onClick={onUndo}>Backspace</button>
      <Sections />
    </>
  );
}
