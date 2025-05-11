import BottomNavbar from "./bottom/BottomNavbar";
import MiddleTop from "./middle/MiddleNavbar";
import TopNavbar from "./top/TopNavbar";

function Navbar() {
  return (
    <div>
      <TopNavbar />
      <MiddleTop />
      <BottomNavbar />
    </div>
  );
}

export default Navbar;
