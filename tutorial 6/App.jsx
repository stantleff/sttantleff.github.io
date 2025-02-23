import "./App.css";

const subject = "React";
function App() {
  // code omitted for brevity
}


function App(props) {
  return (
    <>
      <header>
        <h1>Hello, {props.subject}!</h1>
        <button type="button" className="primary">
          Click me!
        </button>
      </header>
    </>
  );
}


export default App;

