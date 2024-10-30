import Link from "next/link";

export function NavBar() {
  return (
    <nav className="flex justify-between items-center p-4 bg-slate-200 text-black">
      <div>
        <h1 className="text-2xl font-bold">My App</h1>
      </div>
      <div>
        <ul className="flex space-x-4">
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/login">Login</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
export function NavButton() {
  return <button className="p-2 bg-slate-200 text-black">Click Me</button>;
}
