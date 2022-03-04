import { Nav, NavItem } from "reactstrap";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useUserContext } from "../context/user_context";
const navigation = [
  {
    title: "Search Query",
    href: "/search",
  },
  {
    title: "Conversation lookup",
    href: "/conversation",
  },
  {
    title: "User Lookup",
    href: "/user",
  },
  {
    title: "Saved Query",
    href: "/saved",
  },
];

const Sidebar = () => {
  const showMobilemenu = () => {
    document.getElementById("sidebarArea").classList.toggle("showSidebar");
  };
  const { handlerShowSidebar } = useUserContext();
  let location = useLocation();
  const navigate = useNavigate();
  const logout = function () {
    localStorage.clear();
    handlerShowSidebar(false);
    navigate("/", { replace: false });
  };
  return (
    <div className="p-3 main-menu ">
      <div className="pt-4 mt-2">
        <Nav vertical className="sidebarNav">
          {navigation.map((navi, index) => (
            <NavItem key={index} className="sidenav-bg">
              <Link
                to={navi.href}
                className={
                  location.pathname === navi.href
                    ? "text-primary nav-link py-3 borderRi"
                    : "nav-link text-secondary py-3"
                }
              >
                <span className="ms-3 d-inline-block">{navi.title}</span>
              </Link>
            </NavItem>
          ))}
          <div className="btn-logout">
            <button className="button-logout" onClick={logout}>
              Log Out
            </button>
          </div>
        </Nav>
      </div>
    </div>
  );
};

export default Sidebar;
