export default function Home() {
  return (
    <>
      <Component />
      <div className="flex-col justify-center items-center">
        <h1 className="text-4xl font-bold">Hello World</h1>
      </div>
    </>
  );
}

function Component() {
  return (
    <div>
      <span>TEXTO TEXTO</span>
    </div>
  );
}
