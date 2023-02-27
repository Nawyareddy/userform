import { useState } from "react";
import UserForm from "./components/User/UserForm";
import UserList from "./components/UserList/UserList";
import "./styles.css";

export default function App() {
  const [userData, setUserData] = useState([]);

  const handleAddUserData = (name, age) => {
    setUserData((users) => {
      return [...users, { name, age }];
    });
  };
  return (
    <div className="App">
      <UserForm handleAddUserData={handleAddUserData} />
      <UserList users={userData} />
    </div>
  );
}
