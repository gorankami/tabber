import { useSelector } from "react-redux";
import { selectTitle } from "../ducks/data";
import FretBoard from "./FretBoard";
import { KeyListener } from "./KeyListener";
import Tablature from "./Tablature";
import { InfoPanel } from "./InfoPanel";
import classNames from "./Page.module.css";
export default function Page() {
  const title = useSelector(selectTitle);

  return (
    <div className={classNames.Page}>
      <KeyListener />
      <div>
        <div className={classNames.noPrint}>
          <FretBoard />
        </div>
        <div className={classNames.print}>
            <div>{!title && <h3 className={classNames.untitled}>untitled</h3>}</div>
            <div>{title && <h3>{title}</h3>}</div>
            <Tablature />
        </div>
      </div>
      <div className={classNames.noPrint}>
        <InfoPanel />
      </div>
    </div>
  );
}
