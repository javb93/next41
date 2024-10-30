export default function User({ user }) {
  return (
    <div className="flex gap-3 border-solid border-black border w-[450px]">
      <h1>Usuario: {user.nombre}</h1>
      <h2> Email:{user.email}</h2>
      <h2> Telefono:{user.phone}</h2>
    </div>
  );
}
