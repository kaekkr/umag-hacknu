import { Link } from "react-router-dom";

const App = () => {
  return (
    <div className="w-screen h-screen flex justify-center items-center space-x-10">
      <div className="border border-orange-500 p-5 space-y-5">
        <h1 className="text-center text-2xl">Supply</h1>
        <ul className="p-5 space-y-5">
          <li className="underline underline-offset-8 hover:text-blue-500">
            <Link to={"getsupply"}>Get supply</Link>
          </li>
          <li className="underline underline-offset-8 hover:text-blue-500">
            <Link to={"getidsupply"}>Get supply by id</Link>
          </li>
          <li className="underline underline-offset-8 hover:text-blue-500">
            <Link to={"postsupply"}>Create new supply</Link>
          </li>
          <li className="underline underline-offset-8 hover:text-blue-500">
            <Link to={"putsupply"}>Change existing supply</Link>
          </li>
          <li className="underline underline-offset-8 hover:text-blue-500">
            <Link to={"deletesupply"}>Delete existing supply</Link>
          </li>
        </ul>
      </div>
      <div className="border border-orange-500 p-5 space-y-5">
        <h1 className="text-center text-2xl">Sale</h1>
        <ul className="p-5 space-y-5">
          <li className="underline underline-offset-8 hover:text-blue-500">
            <Link to={"getsale"}>Get sale</Link>
          </li>
          <li className="underline underline-offset-8 hover:text-blue-500">
            <Link to={"getidsale"}>Get sale by id</Link>
          </li>
          <li className="underline underline-offset-8 hover:text-blue-500">
            <Link to={"postsale"}>Create new sale</Link>
          </li>
          <li className="underline underline-offset-8 hover:text-blue-500">
            <Link to={"putsale"}>Change existing sale</Link>
          </li>
          <li className="underline underline-offset-8 hover:text-blue-500">
            <Link to={"deletesale"}>Delete existing sale</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default App;
