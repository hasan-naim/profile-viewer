import "./App.css";
import { Row } from "antd";
import { useEffect, useState } from "react";
import Loading from "./components/Loading/Loading";
import axios from "axios";
import CardElem from "./components/Card/Card";
function App() {
  const [userData, setUserData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/users").then((res) => {
      setUserData([...res.data]);
      setTimeout(() => {
        setLoading(false);
      }, 1000);
    });
  }, []);

  /// delete function
  const handleDelete = (user) => {
    const filteredData = userData.filter((us) => us.id !== user.id);
    setUserData(filteredData);
  };

  /// update user
  const updateUser = (id, data) => {
    const newUserData = userData.map((usr) => {
      if (usr.id === id) {
        usr = { ...usr, ...data };
      }
      return usr;
    });
    setUserData(newUserData);
  };
  return (
    <div className="App">
      {loading ? (
        <Loading />
      ) : (
        <>
          <div className="container">
            <Row
              className="row"
              gutter={[{ xs: 8, sm: 16, md: 24, lg: 32, xl: 48 }, 16]}
            >
              {userData.map((user) => (
                <CardElem
                  key={user.id}
                  user={user}
                  handleDelete={handleDelete}
                  updateUser={updateUser}
                />
              ))}
            </Row>
          </div>
        </>
      )}
    </div>
  );
}

export default App;
