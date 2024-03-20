import { Link } from "react-router-dom";

const User = ({ user }) => {
  const { id, name, email, phone } = user;

  return (
    <div className="p-5 space-y-4 text-xl text-center border-2 border-yellow-400 rounded-xl">
      <h2>{name}</h2>
      <h3>{email}</h3>
      <h4>{phone}</h4>
      <Link to={`/user/${id}`} className="btn">
        Show Details
      </Link>
    </div>
  );
};

export default User;
