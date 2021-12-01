import classNames from "./InfoPanel.module.css";
import { a } from "../../utils/a";
import ButtonCompleteSection from "./ButtonCompleteSection";
import ButtonUndo from "./ButtonUndo";
import CheckboxNoteVisibilityChange from "./CheckboxNoteVisibilityChange";

const mitLicenceUrl = "https://github.com/gorankami/tabber/blob/main/LICENSE";
const githubUrl = "https://github.com/gorankami/tabber";

export function InfoPanel() {
  return (
    <div className={classNames.InfoPanel}>
      <p>Click on a fret to add it to the tab</p>
      <p>Hold SHIFT and click multiple strings to add a chord</p>
      <p>Press BACKSPACE to remove last vertical array</p>
      <p>
        This app is open source under {a(mitLicenceUrl, "MIT license")}, and is
        hosted at {a(githubUrl, "GitHub")}
      </p>

      <p>
        <CheckboxNoteVisibilityChange />
      </p>

      <ButtonUndo />
      <ButtonCompleteSection />
      <button onClick={() => window.print()}>Print</button>
    </div>
  );
}
