import EventObj from "./components/EventObj";
import PropsTypes from "./components/PropsTypes";
import UseState from "./components/UseState";

function App() {
  return (
    <div className="App">
      <PropsTypes name="layla" age={20} />
      <UseState />
      <EventObj />
    </div>
  );
}

export default App;
