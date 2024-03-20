import { useLoaderData } from "react-router-dom";
import User from "../components/User";

const AboutPage = () => {
  const users = useLoaderData();

  return (
    <div className="p-5">
      <h1 className="text-3xl font-semibold">This is About Page.</h1>
      <div className="grid grid-cols-3 gap-4 mt-8">
        {users.map((user) => {
          return <User key={user.id} user={user} />;
        })}
      </div>
    </div>
  );
};

export default AboutPage;
