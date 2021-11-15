import classNames from "./InfoPanel.module.css";
import { a } from "../utils/a";
import { useDispatch, useSelector } from "react-redux";
import {
  completeSection,
  selectAreNoteLabelsShown,
  selectTitle,
  setAreNoteLabelsShown,
  setTitle,
  undo,
} from "../ducks/data";

const mitLicenceUrl = "https://github.com/gorankami/tabber/blob/main/LICENSE";
const githubUrl = "https://github.com/gorankami/tabber";

export function InfoPanel() {
  const dispatch = useDispatch();
  const title = useSelector(selectTitle);
  const areNoteLabelsShown = useSelector(selectAreNoteLabelsShown);

  function onTitleChange(e) {
    dispatch(setTitle(e.target.value));
  }

  function onUndo() {
    dispatch(undo());
  }

  function onCompleteSection() {
    dispatch(completeSection());
  }

  function onNoteVisibilityChange(e) {
    dispatch(setAreNoteLabelsShown(e.target.checked));
  }

  return (
    <div className={classNames.InfoPanel}>
      <label>
        Title: <input value={title} onChange={onTitleChange} />
      </label>
      <p>Click on a fret to add it to the tab</p>
      <p>Hold SHIFT and click multiple strings to add a chord</p>
      <p>Press BACKSPACE to remove last vertical array</p>
      <p>
        This app is open source under {a(mitLicenceUrl, "MIT license")}, and is
        hosted at {a(githubUrl, "GitHub")}
      </p>

      <p>
        <label>
          <input
            type="checkbox"
            checked={areNoteLabelsShown}
            onChange={onNoteVisibilityChange}
          />{" "}
          Show note labels
        </label>
      </p>

      <button onClick={onUndo}>Backspace</button>
      <button onClick={onCompleteSection}>Complete section</button>
      <button onClick={() => window.print()}>Print</button>
    </div>
  );
}
