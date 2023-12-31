import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center bg-slate-800 px-8 py-3">
      <div className="logo">
        <Link className="text-white font-bold" href="/">ToDo App</Link>
      </div>

      <Link className="bg-white p-2" href="/addTopic">Add Topic</Link>
    </nav>
  );
};

export default Navbar;
