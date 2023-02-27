import Card from "../Card/Card";
import "./UserList.css";

const UserList = (props) => {
  return (
    <Card>
      <div className="users">
        <ul>
          {props.users.map((user, index) => {
            return (
              <li key={index}>
                {user.name} age is {user.age}
              </li>
            );
          })}
        </ul>
      </div>
    </Card>
  );
};

export default UserList;
