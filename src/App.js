import Button from "./Button";
import { GoBellFill, GoPackageDependents, GoGift } from "react-icons/go";

function App() {
  return (
    <div>
      <div>
        <Button rounded outline className="mb-5">
          <GoBellFill />
          click me!
        </Button>
      </div>
      <div>
        <Button success>
          <GoPackageDependents />
          Buy now!
        </Button>
      </div>
      <div>
        <Button secondary>
          <GoGift /> see Deal!
        </Button>
      </div>
      <div>
        <Button danger>
          <GoPackageDependents />
          Hide Ads!
        </Button>
      </div>
      <div>
        <Button warning rounded>
          <GoPackageDependents />
          Somthing
        </Button>
      </div>
    </div>
  );
}
export default App;
