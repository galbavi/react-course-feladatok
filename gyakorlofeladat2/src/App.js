import { ErrorBoundary } from "react-error-boundary";
import ErrorFallBack from "./ErrorFallBack.js";
import "./App.css";
import CardGame from "./CardGame";
import { CardBackProvider } from "./CardBackContext.js";

function App() {
  return (
    <ErrorBoundary FallbackComponent={ErrorFallBack}>
      <div className="App">
        <CardBackProvider>
          <CardGame />
        </CardBackProvider>
        <br />
        <h1 className="Title">Memóriajáték</h1>
      </div>
    </ErrorBoundary>
  );
}

export default App;
