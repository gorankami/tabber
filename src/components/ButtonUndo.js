import { useDispatch } from "react-redux";
import { undo } from "../ducks/dataReducer";

export default function ButtonUndo() {
  const dispatch = useDispatch();
  
  function onUndo() {
    dispatch(undo());
  }

  return <button onClick={onUndo}>Backspace</button>;
}
