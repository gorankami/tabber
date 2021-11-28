import classNames from "./Page.module.css";
import { useSelector } from "react-redux";
import { selectTitle } from "../ducks/dataReducer";

export default function Title() {
  const title = useSelector(selectTitle);

  return (
    <div>
      {!title && <h3 className={classNames.untitled}>untitled</h3>}
      {title && <h3>{title}</h3>}
    </div>
  );
}
