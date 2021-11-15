import { useSelector } from "react-redux";
import {
  selectBuffer,
  selectCurrentSectionForPrint,
  selectSections,
} from "../ducks/data";
import { sectionToTab } from "../utils/sectionToTab";
import { strings } from "../utils/stringsAndNotes";
import classNames from "./Tablature.module.css"

const sectionSeparator = `|\n|\n|\n|\n|\n|`;

export default function Tablature() {
  const buffer = useSelector(selectBuffer);
  const currentSectionForPrint = useSelector(selectCurrentSectionForPrint);
  const sections = useSelector(selectSections);

  return (
    <div className={classNames.Tablature}>
      <pre>{strings.join("\n")}</pre>
      <pre>{sectionSeparator}</pre>
      {sections.map((section) => (
        <>
          <pre>{sectionToTab(section).join("\n")}</pre>
          <pre>{sectionSeparator}</pre>
        </>
      ))}
      <pre>{currentSectionForPrint.join("\n")}</pre>
      <pre className={classNames.bufferStyle}>{buffer.join("\n")}</pre>
    </div>
  );
}
