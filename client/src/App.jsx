import { useWindowWidth } from "./contexts/WindowWidthContext";

function App() {
  const width = useWindowWidth();
  return <>{width > 700 ? <p>Hello</p> : null}</>;
}

export default App;
