import { Provider } from "provider/provider";
import { AppRoutes } from "routes";

function App() {
  return (
    <Provider>
      <AppRoutes />
    </Provider>
  );
}

export default App;
