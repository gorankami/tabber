import { useDispatch, useSelector } from "react-redux";
import { selectTitle, setTitle } from "../ducks/dataReducer";
import classNames from "./InputTitle.module.css";

export default function TitleInput() {
  const dispatch = useDispatch();

  const title = useSelector(selectTitle);

  function onTitleChange(e) {
    dispatch(setTitle(e.target.value));
  }

  return (
    <div className={classNames.InputTitle}>
      <label>
        Title: <input value={title} onChange={onTitleChange} />
      </label>
    </div>
  );
}
