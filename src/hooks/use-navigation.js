import NavigationContext from "../context/navigation";
import { useContext } from "react";

function useNavigatoion() {
  return useContext(NavigationContext);
}
export default useNavigatoion;
