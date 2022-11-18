import "./App.css";
import { Button } from "antd";
import { useState } from "react";
import Loading from "./components/Loading/Loading";

function App() {
  const [userData, setUserData] = useState([]);
  const [loading, setLoading] = useState(true);

  return <div className="App">{loading ? <Loading /> : <></>}</div>;
}

export default App;
