import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
:root {
  --main-color: #0f1724;
  --alt-color : #5096a4;
  --white-color: #ffffff;
  --main-shadow: 0px 0px 8px var(--alt-color);
}
::-webkit-calendar-picker-indicator{
    background-color: #b06a5c;
    border-radius: 5px;
    filter: invert();
  }
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  transition: background-color 300ms, border 300ms;
}
body {
  background-color: var(--main-color);
  color: var(--white-color);
}
ul {
  list-style: none;
}
/* ScrollBar */
::-webkit-scrollbar {
  width: 4px;
}
::-webkit-scrollbar-thumb {
  background-color: var(--alt-color);
  border-radius: 12px;
}
/* disable mobile tap highlight */
button {
  -webkit-tap-highlight-color: rgba(255, 255, 255, 0);
}

/* Custom styles for the confirmation dialog */
.react-confirm-alert-overlay {
  background-color: rgba(0, 0, 0, 0.6);
}
.react-confirm-alert {
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
}
.react-confirm-alert-body {
  padding: 20px;
  background-color: var(--main-color);
  color: var(--white-color);
  font-family: "Exo 2";
  display: flex;
  flex-direction: column;
  gap: 4px;
  justify-content: space-between;
  /* align-items: center; */
}
.react-confirm-alert-button-group {
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
  padding: 6px 22px;
}

`;

export default GlobalStyles;
