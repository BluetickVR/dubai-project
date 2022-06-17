import "./App.css";
import { AppStyle } from "./App.style";
import FullScreenButton from "./Component/Elements/FullScreenButton";
import Globe from "./Component/Elements/Globe";
import HideOverlay from "./Component/Elements/HideOverlay";
import Navigator from "./Component/Molecules/Navigator";

function App() {
  return (
    <AppStyle>
      <Navigator />
    </AppStyle>
  );
}

export default App;
