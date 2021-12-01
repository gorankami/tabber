import { useDispatch, useSelector } from "react-redux";
import {
  addLine,
  selectAreNoteLabelsShown,
  selectBuffer,
  selectIsMultipleOn,
  setBuffer,
} from "../ducks/dataReducer";
import { getNoteByStringAndFret } from "../utils/getNoteByStringAndFret";
import { strings } from "../utils/stringsAndNotes";
import classNames from "./FretBoard.module.css";

export default function FretBoard() {
  const buffer = useSelector(selectBuffer);
  const dispatch = useDispatch();
  const isMultipleOn = useSelector(selectIsMultipleOn);
  const areNoteLabelsShown = useSelector(selectAreNoteLabelsShown);

  function onClick(string, fret) {
    const newBuffer = isMultipleOn ? [...buffer] : Array(6).fill(null);
    newBuffer[string] = fret.toString();

    if (isMultipleOn) {
      dispatch(setBuffer(newBuffer));
    } else {
      dispatch(addLine(newBuffer));
    }
  }

  return (
    <table className={classNames.FretBoard}>
      <thead>
        <tr>
        {Array.from(Array(25).keys()).map((n) => (
            <th>{n}</th>
        ))}
        <th>Special</th>
        </tr>
      </thead>
      <tbody>{getFreatBoardTable(onClick, areNoteLabelsShown)}</tbody>
    </table>
  );
}

function getFreatBoardTable(onClickHandler, areNoteLabelsShown) {
  const fretBoard = [];
  for (let i = 0; i < 6; i++) {
    const frets = [];
    let width = 4;

    for (let j = 0; j <= 24; j++) {
      width *= 0.96;
      frets.push(
        <td
          key={strings[i] + j}
          onClick={() => onClickHandler(i, j)}
          style={{ width: j ? width + "em" : "1em" }}
        >
          {areNoteLabelsShown && getNoteByStringAndFret(strings[i], j)}
        </td>
      );
    }

    fretBoard.push(
      <tr key={i}>
        {frets}
        <td onClick={() => onClickHandler(i, "x")}>x</td>
      </tr>
    );
  }
  return fretBoard;
}
