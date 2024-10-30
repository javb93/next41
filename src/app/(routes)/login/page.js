export default function Login() {
  return (
    <div className="flex flex-col items-center">
      <input className="m-4 w-[200px]" type="text" placeholder="Username" />
      <input className="m-4 w-[200px]" type="password" placeholder="Password" />
      <button>Login</button>
    </div>
  );
}
