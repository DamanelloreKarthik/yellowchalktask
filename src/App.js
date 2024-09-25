import { Provider } from "providers/provider";
import RemsPractice from "remspractice";
import { AppRoutes } from "routes/approutes";

function App() {
  return (
    <Provider>
      {/* <AppRoutes /> */}
      <RemsPractice />
    </Provider>
  );
}

export default App;
