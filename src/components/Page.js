import { useDispatch, useSelector } from "react-redux";
import { completeSection, selectTitle, setTitle, undo } from "../ducks/data";
import FretBoard from "./FretBoard";
import { KeyListener } from "./KeyListener";
import Tablature from "./Tablature";
import AppInfo from "./AppInfo";

export default function Page() {
  const dispatch = useDispatch();

  const title = useSelector(selectTitle);

  function onUndo() {
    dispatch(undo());
  }

  function onCompleteSection() {
    dispatch(completeSection());
  }

  function onChange(e) {
    dispatch(setTitle(e.target.value));
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
        <button onClick={() => window.print()}>Print</button>
        <br/><br/>
        <label>
          Title: <input onChange={onChange} />
        </label>
        {!title && <h3 style={{color: "gray"}}>untitled</h3>}
      </div>
      {title && <h3>{title}</h3>}
      <Tablature />
    </>
  );
}
