import useNavigatoion from "../hooks/use-navigation";
function Route({ path, children }) {
  const { currenPath } = useNavigatoion();

  if (path === currenPath) {
    return children;
  }

  return null;
}
export default Route;
