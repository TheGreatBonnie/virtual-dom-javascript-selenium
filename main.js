import { createRoot } from "react-dom/client";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

const update = () => {
  const Element = (
    <>
      <h3>Real DOM Vs Virtual DOM</h3>
      <span>Time: {new Date().toLocaleTimeString()}</span>
    </>
  );
  
  root.render(Element);
};

setInterval(update, 1000);