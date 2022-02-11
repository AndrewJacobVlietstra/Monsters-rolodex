import "./CardList.css";
import Card from "../card/Card";

const CardList = ({ users }) => {
  return (
    <div className="card-list">
      {users.map((user) => (
        <Card key={user.id} user={user} />
      ))}
    </div>
  );
};

export default CardList;
