import Sidebar from "./components/SideBar";
import Route from "./components/Route";
import AccordionPage from "./pages/AccoridonPage";
import DropDownPage from "./pages/DropDownPage";
import ButtonsPage from "./pages/ButtonPage";
function App() {
  return (
    <div className="container mx-auto grid grid-cols-6 gap-4 mt-4">
      <Sidebar></Sidebar>
      <div className="col-span-5">
        <Route path="/">
          <DropDownPage />
        </Route>
        <Route path="/Accordion">
          <AccordionPage />
        </Route>
        <Route path="/Button">
          <ButtonsPage />
        </Route>
      </div>
    </div>
  );
}
export default App;
