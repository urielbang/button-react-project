import classNames from "classnames";
import useNavigatoion from "../hooks/use-navigation";

function Link({ to, children, className, activeClassName }) {
  const { navigate, currenPath } = useNavigatoion();

  const classes = classNames(
    "text-blue-500",
    className,
    currenPath === to && activeClassName
  );
  const handleClick = (event) => {
    if (event.metaKey || event.ctrKey) {
      return;
    }
    event.preventDefault();

    navigate(to);
  };
  return (
    <a className={classes} href={to} onClick={handleClick}>
      {children}
    </a>
  );
}

export default Link;
