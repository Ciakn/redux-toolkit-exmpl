import {} from "@reduxjs/toolkit"
import {Provider} from "react-redux"
import CounterComponent from "./component/CounterComponent";
import { store } from "./component/features/store";
import { UseSelector } from "react-redux/es/hooks/useSelector";
const App = () => {

  return (
    <Provider store={store}>
<CounterComponent/>
    </Provider>
  );
};

export default App
