import Link from "./Link";

function Sidebar() {
  const links = [
    { label: "Dropdown", path: "/" },
    { label: "Accordion", path: "./Accordion" },
    { label: "Buttons", path: "/Button" },
  ];
  const renderdLinks = links.map((link) => {
    return (
      <Link
        key={link.label}
        to={link.path}
        className={"mb-3"}
        activeClassName="font-bold border-l-4 border-blue-500 pl-2"
      >
        {link.label}
      </Link>
    );
  });
  return (
    <div className="sticky top-0 overflow flex flex-col items-start ">
      {renderdLinks}
    </div>
  );
}
export default Sidebar;
