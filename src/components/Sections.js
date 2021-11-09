import { useSelector } from "react-redux";
import { selectPreRows } from "../ducks/data";
import { strings } from "../utils/strings";

export default function Sections() {
  const preRows = useSelector(selectPreRows);
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
    </div>
  );
}
