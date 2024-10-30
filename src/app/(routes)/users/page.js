import { getAllUsers } from "@/app/services/user_service";
import User from "../../components/User";
import UserForm from "@/app/components/UserForm";

export default async function Users() {
  const users = await getAllUsers();
  return (
    <div>
      <h1>Usuarios</h1>
      {users.map((user, index) => {
        return <User key={index} user={user} />;
      })}
      <br></br>
      <UserForm></UserForm>
    </div>
  );
}
