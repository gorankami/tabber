import FretBoard from "./FretBoard";
import { KeyListener } from "./KeyListener";
import Tablature from "./Tablature";
import { InfoPanel } from "./InfoPanel";
import classNames from "./Page.module.css";
import InputTitle from "./InputTitle";
import Title from "./Title";

export default function Page() {
  return (
    <div className={classNames.Page}>
      <KeyListener />
      <div>
        <div className={classNames.noPrint}>
          <InputTitle />
          <FretBoard />
          {/* <Chord size="10em" /> */}
        </div>
        <div className={classNames.print}>
          <Title />
          <Tablature />
        </div>
      </div>
      <div className={classNames.noPrint}>
        <InfoPanel />
      </div>
    </div>
  );
}
