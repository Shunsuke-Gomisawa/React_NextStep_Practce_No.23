//このコンポーネントで囲った配下でのルーティングを可能にする
import { BrowserRouter, Link } from "react-router-dom";

import { Router } from "./router/Router";

import "./styles.css";

export default function App() {
  return (
    <BrowserRouter>
      <div className="App">
        {/* ここの“/”はパス（何処のページに飛ぶのか）を表す */}
        <Link to="/">Home</Link>
        <br />
        <Link to="/page1">Page1</Link>
        <br />
        <Link to="/page2">Page2</Link>
      </div>

      <Router />
    </BrowserRouter>
  );
}
