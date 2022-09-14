import logo from "./logo.svg";
import "./App.css";
import Home from "./Pages/Home/Home";
import { Route, Routes } from "react-router-dom";
import Header from "./Sheard/Navbar/Header";
import Footer from "./Sheard/Navbar/Footer";
import Login from "./Pages/Login/Login";
import Dashboard from "./Pages/Dashboard/Dashboard";
import Signup from "./Pages/Login/Signup";
import RequireAuth from "./Hookes/RequireAuth";
import Purchase from "./Pages/Purchase/Purchase";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import AddAReview from "./Pages/Dashboard/AddAReview";
import MyOrders from "./Pages/Dashboard/MyOrders";
import Myprofile from "./Pages/Dashboard/Myprofile";
import Payment from "./Pages/Dashboard/Payment";
import MakeAdmin from "./Pages/Dashboard/MakeAdmin";
import RequireAdmin from "./Hookes/RequireAdmin";
import RequireUser from "./Hookes/RequireUser";
import Manageallorders from "./Pages/Dashboard/Manageallorders";
import Addaproduct from "./Pages/Dashboard/Addaproduct";
import Manageproducts from "./Pages/Dashboard/Manageproducts";
import NotFound from "./Pages/NotFound/NotFound";
import Myportfolio from "./Pages/Myportfolio/Myportfolio";
import Blog from "./Pages/Blog/Blog";

function App() {
  return (
    <div className="App ">
      <Header />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/signup" element={<Signup />}></Route>
        {/* <Route path="/Myportfolio" element={<Myportfolio />}></Route>
        <Route path="/blog" element={<Blog />}></Route> */}
        <Route
          path="/dashboard"
          element={
            <RequireAuth>
              <Dashboard />
            </RequireAuth>
          }
        >
          <Route
            path="myorders"
            element={
              <RequireUser>
                <MyOrders />
              </RequireUser>
            }
          ></Route>
          <Route
            path="addareview"
            element={
              <RequireUser>
                <AddAReview />
              </RequireUser>
            }
          ></Route>
          <Route path="myprofile" element={<Myprofile />}></Route>
          <Route
            path="payment/:id"
            element={
              <RequireUser>
                <Payment />
              </RequireUser>
            }
          ></Route>
          <Route
            path="MakeAdmin"
            element={
              <RequireAdmin>
                <MakeAdmin />
              </RequireAdmin>
            }
          ></Route>
          <Route
            path="manageallorders"
            element={
              <RequireAdmin>
                <Manageallorders />
              </RequireAdmin>
            }
          ></Route>
          <Route
            path="addaproduct"
            element={
              <RequireAdmin>
                <Addaproduct />
              </RequireAdmin>
            }
          ></Route>
          <Route
            path="manageproducts"
            element={
              <RequireAdmin>
                <Manageproducts />
              </RequireAdmin>
            }
          ></Route>
        </Route>
        <Route
          path="/purchase/:id"
          element={
            <RequireAuth>
              <Purchase />
            </RequireAuth>
          }
        ></Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
      <ToastContainer />
    </div>
  );
}

export default App;
