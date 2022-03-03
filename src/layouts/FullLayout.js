import { Outlet } from "react-router-dom";
// import { LoginUi } from "";
import Sidebar from "./Sidebar";
import { Container } from "reactstrap";
import { useState } from "react";
import align from "../assets/images/align-left.png";
import { useUserContext } from "../context/user_context";
const FullLayout = () => {
  const [mobile, setMobile] = useState(false);
  const {showSidebar} = useUserContext();
  const handlerMobile = () => {
    setMobile(!mobile);
  };
  return (
    <main>
      <div className="pageWrapper d-lg-flex">
        {showSidebar ? (
          <aside
            className={
              mobile ? "sidebarArea shadow sidebarActive" : "sidebarArea shadow"
            }
            id="sidebarArea"
          >
            <Sidebar />
            <button className="btn-arrow" onClick={handlerMobile}>
              <img src={align} />
            </button>
          </aside>
        ) : null}

        <div className="contentArea">
          <Container className="p-4 wrapper" fluid>
            <Outlet />
          </Container>
        </div>
      </div>
    </main>
  );
};

export default FullLayout;
