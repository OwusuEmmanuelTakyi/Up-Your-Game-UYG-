import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/home/Home/Home";
import AddClass from "../pages/dashboard/addclass/AddClass";
import DashboardLayout from "../layout/DashboardLayout";
import MyClasses from "../pages/dashboard/myclasses/MyClasses";
import UpdateClass from "../pages/dashboard/updateClass/UpdateClass";
import ManageClasses from "../pages/dashboard/Admin/manageClasses/ManageClasses";
import Feedback from "../pages/dashboard/Admin/manageClasses/Feedback";
import ManageUser from "../pages/dashboard/Admin/manageUser/ManageUser";
import Instructor from "../pages/instructor/Instructor";
import Classes from "../pages/classes/Classes";
import MySelectedClass from "../pages/dashboard/mySelectedClass/MySelectedClass";
import Payment from "../pages/dashboard/mySelectedClass/Payment";
import MyEnrollClasses from "../pages/dashboard/myEnrollClasses/MyEnrollClasses";
import PaymentHistory from "../pages/dashboard/paymentHistory/PaymentHistory";
import ErrorPage from "../pages/errorPage/ErrorPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/classes",
        element: <Classes />,
      },
      {
        path: "/instructor",
        element: <Instructor />,
      },
    ],
  },

  {
    path: "/dashboard",
    element: <DashboardLayout />,
    children: [
      {
        path: "/dashboard/addclass",
        element: <AddClass />,
      },
      {
        path: "/dashboard/myclasses",
        element: <MyClasses />,
      },
      {
        path: "/dashboard/updateclass/:id",
        element: <UpdateClass />,
      },
      {
        path: "/dashboard/manageclasses",
        element: <ManageClasses />,
      },
      {
        path: "/dashboard/feedback",
        element: <Feedback />,
      },
      {
        path: "/dashboard/manageuser",
        element: <ManageUser />,
      },
      {
        path: "/dashboard/myselectedclass",
        element: <MySelectedClass />,
      },
      {
        path: "/dashboard/payment",
        element: <Payment />,
      },
      {
        path: "/dashboard/myenrollclasses",
        element: <MyEnrollClasses />,
      },
      {
        path: "/dashboard/paymenthistory",
        element: <PaymentHistory />,
      },
    ],
  },
]);
