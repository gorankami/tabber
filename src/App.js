import { useState } from "react";
import { useEventListener } from "./useEventListener";

const strings = ["e", "B", "G", "D", "A", "E"];

export default function App() {

  const [preRows, setPreRows] = useState(Array(6).fill(""));

  const [buffer, setBuffer] = useState(Array(6).fill(null));

  const [isMultipleOn, setIsMultipleOn] = useState(false);

  useEventListener("keydown", (e) => {
    if (e.key === "Shift") {
      setIsMultipleOn(true);
    }
  });

  useEventListener("keyup", (e) => {
    if(e.key === "Backspace") undo()
    if (e.key === "Shift") {
      setIsMultipleOn(false);
      if (buffer.find((string) => string !== null)) {
        addLine(buffer);
        setBuffer(Array(6).fill(null));
      }
    }
  });

  function addLine(line) {
    let maxFret = line.reduce((maximum, fret) => {
      return Math.max(maximum, fret);
    }, null);
    let empty = maxFret > 9 ? "--" : "-";
    const newPreRows = [];
    for (let i = 0; i < 6; i++) {
      newPreRows.push(
        (preRows[i] += "-" + (line[i] !== null ? line[i] : empty))
      );
    }
    setPreRows(newPreRows);
  }

  function onClick(string, fret) {
    const newBuffer = isMultipleOn ? [...buffer] : Array(6).fill(null);
    newBuffer[string] = fret;

    if (isMultipleOn) {
      setBuffer(newBuffer);
    } else {
      addLine(newBuffer);
    }
  }

  function undo(){
      setPreRows(preRows.map(row=>row.substring(0,row.length-1)))
  }

  const table = [];
  for (let i = 0; i < 6; i++) {
    const rows = [];
    for (let j = 0; j <= 24; j++) {
      const key = strings[i] + j;
      rows.push(
        <td
          key={key}
          onClick={() => onClick(i, j)}
          className={
            [3, 5, 7, 9, 12, 15, 17, 19, 21].includes(j) ? "gray-cell" : ""
          }
        >
          {key}
        </td>
      );
    }

    table.push(<tr key={i}>{rows}</tr>);
  }

  return (
    <>
      <p>Click on a fret to add it to the tab</p>
      <p>Hold SHIFT and click multiple strings to add a chord</p>
      <p>Press BACKSPACE to remove last vertical array</p>
      <table class="noselect">
        <tbody>{table}</tbody>
      </table>
      <button onClick={undo}>Baclspace</button>
      <div className="flex">
        <pre>{strings.join("\n")}</pre>
        <pre>
          {preRows.map((r,i) => (
            <span key={i}>
              {r}
              <br />
            </span>
          ))}
        </pre>
      </div>
    </>
  );
}
