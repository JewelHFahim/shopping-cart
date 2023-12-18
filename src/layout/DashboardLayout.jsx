import { Outlet } from "react-router-dom";
import Sidebar from "../components/sidedrawer/SideDrawer";

const DashboardLayout = () => {
  return (
    <div className="flex min-h-screen">
      <Sidebar />
      <Outlet />
    </div>
  );
};

export default DashboardLayout;
