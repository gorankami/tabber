import { useSelector } from "react-redux";
import {
  selectBuffer,
  selectCurrentSectionForPrint,
  selectSections,
} from "../ducks/data";
import { sectionToTab } from "../utils/sectionToTab";
import { strings } from "../utils/strings";

const sectionSeparator = `|\n|\n|\n|\n|\n|`;

export default function Tablature() {
  const buffer = useSelector(selectBuffer);
  const currentSectionForPrint = useSelector(selectCurrentSectionForPrint);
  const sections = useSelector(selectSections);

  return (
    <div style={{ display: "flex", flexWrap: "wrap" }}>
      <pre>{strings.join("\n")}</pre>
      <pre>{sectionSeparator}</pre>
      {sections.map((section) => (
        <>
          <pre>{sectionToTab(section).join("\n")}</pre>
          <pre>{sectionSeparator}</pre>
        </>
      ))}
      <pre>{currentSectionForPrint.join("\n")}</pre>
      <pre
        style={{
          marginLeft: "0.2em",
          color: "orange",
          fontWeight: "bold",
        }}
      >
        {buffer.join("\n")}
      </pre>
    </div>
  );
}
