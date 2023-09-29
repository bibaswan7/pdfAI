import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";


const page = () => {
  const { getUser } = getKindeServerSession()
  const user = getUser()
// console.log(user.email)
  return <div className="text-black">
    {user? user.email: "No user"}
  </div>;
};

export default page;
