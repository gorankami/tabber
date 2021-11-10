import { useDispatch, useSelector } from "react-redux";
import {
  addLine,
  selectBuffer,
  selectIsMultipleOn,
  setBuffer,
} from "../ducks/data";
import { strings } from "../utils/strings";

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
    <table style={{ userSelect: "none" }}>
      <tbody>{getFreatBoardTable(onClick)}</tbody>
    </table>
  );
}

function getFreatBoardTable(onClickHandler) {
  const fretBoard = [];
  for (let i = 0; i < 6; i++) {
    const rows = [];
    for (let j = 0; j <= 24; j++) {
      const key = strings[i] + j;
      rows.push(
        <td
          key={key}
          onClick={() => onClickHandler(i, j)}
          className={
            [3, 5, 7, 9, 12, 15, 17, 19, 21].includes(j) ? "gray-cell" : ""
          }
        >
          {key}
        </td>
      );
    }

    fretBoard.push(
      <tr key={i}>
        {rows}
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
