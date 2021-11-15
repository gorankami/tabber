import { useDispatch, useSelector } from "react-redux";
import {
  addLine,
  selectBuffer,
  selectIsMultipleOn,
  setBuffer,
} from "../ducks/data";
import { getNoteByStringAndFret } from "../utils/getNoteByStringAndFret";
import { strings } from "../utils/stringsAndNotes";
import styles from "./FretBoard.module.css";

export default function FretBoard() {
  const buffer = useSelector(selectBuffer);
  const dispatch = useDispatch();
  const isMultipleOn = useSelector(selectIsMultipleOn);

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
    <table className={styles.FretBoard}>
      <thead>
        <tr>
          {Array.from(Array(25).keys()).map((n) => (
            <th>{n}</th>
          ))}
          <th>Special</th>
        </tr>
      </thead>
      <tbody>{getFreatBoardTable(onClick)}</tbody>
    </table>
  );
}

function getFreatBoardTable(onClickHandler) {
  const fretBoard = [];
  for (let i = 0; i < 6; i++) {
    const frets = [];
    let width = 3;

    for (let j = 0; j <= 24; j++) {
      width *= 0.96;
      frets.push(
        <td
          key={strings[i] + j}
          onClick={() => onClickHandler(i, j)}
          style={{ width: j ? width + "em" : "1em" }}
        >
          {getNoteByStringAndFret(strings[i], j)}
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
