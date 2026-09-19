import Home from "./pages/Home/page";
import Comments from "./pages/Comments/page";
import Products from "./pages/Products/page";
import Tickets from "./pages/Tickets/page";
import Users from "./pages/Users/page";
import TicketDetails from "./pages/Tickets/TicketDetails/ticketDetails";
import { Children } from "react";
import { createBrowserRouter, Outlet } from "react-router";
import DashboardLayout from "./components/layout/DashboardLayout";
const router = createBrowserRouter([
  {
    path: "/",
    element: <DashboardLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "products",
        element: <Products />,
      },
      {
        path: "comments",
        element: <Comments />,
      },
      {
        path: "users",
        element: <Users />,
      },
      {
        path: "tickets",
        element: <Tickets />,
      },
      {
        path: "tickets/:id",
        element: <TicketDetails />,
      },
    ],
  },
]);

export default router;
