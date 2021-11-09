import Page from "./components/Page";
import { Provider } from "react-redux";
import store from "./ducks/store";

export default function App() {
  return (
    <Provider store={store}>
      <Page />
    </Provider>
  );
}
