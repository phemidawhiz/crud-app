import { Pages } from "./routes";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <>
      <Pages />
      <Toaster position="top-right" />
    </>
  );
}

export default App;
