
import { useDispatch, useSelector } from "react-redux";
import {
  selectAreNoteLabelsShown,
  setAreNoteLabelsShown,
} from "../ducks/dataReducer";

export default function CheckboxNoteVisibilityChange() {
  const dispatch = useDispatch();
  const areNoteLabelsShown = useSelector(selectAreNoteLabelsShown);

  function onNoteVisibilityChange(e) {
    dispatch(setAreNoteLabelsShown(e.target.checked));
  }

  return (
    <label>
      <input
        type="checkbox"
        checked={areNoteLabelsShown}
        onChange={onNoteVisibilityChange}
      />{" "}
      Show note labels
    </label>
  );
}
