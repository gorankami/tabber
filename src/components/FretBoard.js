import { useDispatch, useSelector } from "react-redux";
import {
  addLine,
  selectBuffer,
  selectIsMultipleOn,
  setBuffer,
} from "../ducks/data";
import { getNoteByStringAndFret } from "../utils/getNoteByStringAndFret";
import { strings } from "../utils/stringsAndNotes";

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
    <table style={{ userSelect: "none", textAlign: "center" }}>
      <tbody>{getFreatBoardTable(onClick)}</tbody>
    </table>
  );
}

function getFreatBoardTable(onClickHandler) {
  const fretBoard = [
    <tr>
      {Array.from(Array(25).keys()).map((n) => (
        <th>{n}</th>
      ))}
    </tr>,
  ];

  for (let i = 0; i < 6; i++) {
    const frets = [];
    let width = 3;

    for (let j = 0; j <= 24; j++) {
      width *= 0.96;
      const key = strings[i] + j;
      frets.push(
        <td
          key={key}
          onClick={() => onClickHandler(i, j)}
          style={{ width: j ? width + "em" : "1em" }}
          className={
            [3, 5, 7, 9, 12, 15, 17, 19, 21].includes(j) ? "gray-cell" : ""
          }
        >
          {getNoteByStringAndFret(strings[i], j)}
        </td>
      );
    }

    fretBoard.push(
      <tr key={i}>
        {frets}
        <td
          style={{ width: "20px", textAlign: "center" }}
          onClick={() => onClickHandler(i, "x")}
        >
          x
        </td>
      </tr>
    );
  }
  return fretBoard;
}
