import Dashboard from "views/Dashboard/Dashboard.js";
import Tables from "views/Dashboard/Tables.js";
import Billing from "views/Dashboard/Billing.js";
import RTLPage from "views/RTL/RTLPage.js";
import Profile from "views/Dashboard/Profile.js";
import SignIn from "views/Pages/SignIn.js";
import SignUp from "views/Pages/SignUp.js";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import {
  HomeIcon,
  StatsIcon,
  CreditIcon,
  PersonIcon,
  DocumentIcon,
  RocketIcon,
  SupportIcon,
} from "components/Icons/Icons";
import {
  FaHome,
  FaUserFriends,
  FaMoneyBill,
  FaUser,
  FaUtensils,
  FaFileAlt,
  FaRocket,
  FaHandsHelping,
} from "react-icons/fa";
var dashRoutes = [
  {
    path: "/dashboard",
    name: "Dashboard",
    rtlName: "لوحة القيادة",
    icon: <FaHome color='inherit' />,
    component: Dashboard,
    layout: "/admin",
  },
  {
    path: "/tables",
    name: "Find Your Buddy",
    rtlName: "لوحة القيادة",
    icon: <FaUserFriends color='inherit' />,
    /*component: Tables,*/
    component : null,
    layout: "/admin",
  },
  {
    path: "/billing",
    name: "Meal Tracker",
    rtlName: "لوحة القيادة",
    icon: <FaUtensils color='inherit' />,
    //component: Billing,
    component : null,
    layout: "/admin",
  },
  {
    name: "Tribe Up",
    category: "account",
    rtlName: "صفحات",
    state: "pageCollapse",
    views: [
      {
        path: "/profile",
        name: "Profile",
        rtlName: "لوحة القيادة",
        icon: <PersonIcon color='inherit' />,
        secondaryNavbar: true,
        //component: Profile,
        component : null,
        layout: "/admin",
      },
      {
        path: "/signin",
        name: "Sign In",
        rtlName: "لوحة القيادة",
        icon: <DocumentIcon color='inherit' />,
        //component: {},
        component : null,
        layout: "/admin",
      },
      {
        path: "/signup",
        name: "Sign Up",
        rtlName: "لوحة القيادة",
        icon: <RocketIcon color='inherit' />,
        secondaryNavbar: true,
        //component: SignUp,
        component : null,
        layout: "/admin",
      },
    ],
  },
];
export default dashRoutes;
