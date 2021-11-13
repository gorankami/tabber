import { useSelector } from "react-redux";
import {
  selectBuffer,
  selectCurrentSectionForPrint,
  selectSections,
} from "../ducks/data";
import { sectionToTab } from "../utils/sectionToTab";
import { strings } from "../utils/stringsAndNotes";

const sectionSeparator = `|\n|\n|\n|\n|\n|`;
const tabStyle = { display: "flex", flexWrap: "wrap" };
const bufferStyle = {
  marginLeft: "0.2em",
  color: "orange",
  fontWeight: "bold",
  textAlign: "right" ,
  width: "15px"
};

export default function Tablature() {
  const buffer = useSelector(selectBuffer);
  const currentSectionForPrint = useSelector(selectCurrentSectionForPrint);
  const sections = useSelector(selectSections);

  return (
    <div style={tabStyle}>
      <pre>{strings.join("\n")}</pre>
      <pre>{sectionSeparator}</pre>
      {sections.map((section) => (
        <>
          <pre>{sectionToTab(section).join("\n")}</pre>
          <pre>{sectionSeparator}</pre>
        </>
      ))}
      <pre>{currentSectionForPrint.join("\n")}</pre>
      <pre style={bufferStyle}>{buffer.join("\n")}</pre>
    </div>
  );
}
