import { useDispatch } from "react-redux";
import { completeSection } from "../../ducks/dataReducer";

export default function ButtonCompleteSection() {
  const dispatch = useDispatch();

  function onCompleteSection() {
    dispatch(completeSection());
  }

  return <button onClick={onCompleteSection}>Complete section</button>;
}
