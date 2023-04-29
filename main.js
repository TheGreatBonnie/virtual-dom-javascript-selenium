import { createRoot } from "react-dom/client";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

const update = () => {
  const Element = (
    <>
      <h3>Real DOM Vs Virtual DOM</h3>
      <span id="time">Time: {new Date().toLocaleTimeString()}</span>
      <span id="time1">Time in Kenya: {new Date().toLocaleTimeString("en-KE", { timeZone: "Africa/Nairobi" })}</span>
      <span id="time2">Time in US: {new Date().toLocaleTimeString("en-US", { timeZone: "America/New_York" })}</span>
      <span id="time3">Time in Germany: {new Date().toLocaleTimeString("en-DE", { timeZone: "Europe/Berlin" })}</span>
    </>
  );
  
  root.render(Element);
};

setInterval(update, 1000);