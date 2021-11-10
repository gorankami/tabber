import { useSelector } from "react-redux";
import { selectBuffer, selectPreRows } from "../ducks/data";
import { strings } from "../utils/strings";

export default function Sections() {
  const preRows = useSelector(selectPreRows);
  const buffer = useSelector(selectBuffer);
  return (
    <div style={{ display: "flex" }}>
      <pre>{strings.join("\n")}</pre>
      <pre>
        {preRows.map((r, i) => (
          <span key={i}>
            {r}
            <br />
          </span>
        ))}
      </pre>
      <pre style={{marginLeft: "0.2em", color: "darkgreen", fontWeight: "bolder"}}>
          {buffer.join("\n")}
      </pre>
    </div>
  );
}
