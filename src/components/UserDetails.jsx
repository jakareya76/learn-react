import { useLoaderData } from "react-router-dom";

const UserDetails = () => {
  const userData = useLoaderData();

  return (
    <div className="p-5">
      <h1 className="text-3xl font-bold">User Details</h1>

      <h2 className="text-2xl font-semibold">Name: {userData.name}</h2>
      <h2 className="text-2xl font-semibold">username: {userData.username}</h2>
      <h2 className="text-2xl font-semibold">email: {userData.email}</h2>
      <h2 className="text-2xl font-semibold">phone: {userData.phone}</h2>
      <h2 className="text-2xl font-semibold">website: {userData.website}</h2>
    </div>
  );
};

export default UserDetails;
