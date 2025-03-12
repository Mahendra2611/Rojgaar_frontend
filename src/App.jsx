
import { createBrowserRouter,RouterProvider } from "react-router-dom"
import Signup from "./components/Signup"
import Signin from "./components/Signin"
import Home from "./components/Home"
import Loader from "./components/Loader"
import React, { Suspense } from "react"
import EditProfile from "./components/EditProfile"
 
import { Toaster } from "react-hot-toast";
import Profile from "./components/Profile"
import Parent from "./Parent"

import UserJob from "./user/UserJob"
import Logout from "./components/Logout"
import Error from "./components/Error"
import SavedJob from "./user/SavedJob"
import CommingSoon from "./components/CommingSoon"
import Home2 from "./admin2/Home2"
const AdminProtected2 = React.lazy(() => import('./admin2/AdminProtected2'));
const AdminJobCreate = React.lazy(() => import('./admin2/AdminJobCreate'));
const AdminJobUpdate = React.lazy(() => import('./admin2/AdminJobUpdate'));

import ForgotPassword from "./components/ForgotPassword"
import OTPVerification from "./components/OTPVerification"
import UpdatePwd from "./components/UpdatePwd"

 const  InternShip = React.lazy(()=>import("./user/InternShip"))

function App() {
const AppRouter = createBrowserRouter([
  {
  path:"/",
  element:<Parent/>,
  errorElement:<Error/>,
  children:[
    {
      path:"/",
      element:<Home/>,
      errorElement:<Error/>,
    },
    {
      path:"profile",
      element:<Profile/>,
      errorElement:<Error/>,
    },
   
   
    {
      path:"editprofile",
      element:<EditProfile/>,
      errorElement:<Error/>,
    },
   
   
    
    
    {
      path:"user/jobs/:filter?",
      element:<UserJob/>,
      errorElement:<Error/>,
    },

    {
      path:"user/intern",
      element:(<Suspense fallback={<Loader/>}><InternShip/>,</Suspense>),
      errorElement:<Error/>,
    },
    {
      path:"user/savedjobs",
      element:<SavedJob/>,
      errorElement:<Error/>,
    },{
      path:"/user/resume",
      element:<CommingSoon/>,
      errorElement:<Error/>
    }
   
  ]
},
{
  path:"/signup",
  element:<Signup/>,
  errorElement:<Error/>,
},
{
  path:"/signin",
  element:<Signin/>,
  errorElement:<Error/>,
},
{
  path:"/forgotpassword",
  element:<ForgotPassword/>,
  errorElement:<Error/>
},
{
  path:"/OTP_Verfication",
  element:<OTPVerification/>,
  errorElement:<Error/>

},
{
  path:"/updatePwd",
  element:<UpdatePwd/>,
  errorElement:<Error/>

},
{
  path:"/error",
  element:<Error/>
},
{
  path:"/logout",
  element:<Logout/>,
  errorElement:<Error/>,
},
{
  path:"/admin2/home",
  element:(<Suspense fallback={<Loader/>}><AdminProtected2><Home2/></AdminProtected2></Suspense>),
  errorElement:<Error/>
  
},
{
  path:"/admin2/jobCreate",
  element:(<Suspense fallback={<Loader/>}><AdminProtected2><AdminJobCreate/></AdminProtected2></Suspense>),
 
  errorElement:<Error/>
  
},
{
  path:"/Admin2/jobUpdate/:id",
  element:(<Suspense fallback={<Loader/>}><AdminProtected2><AdminJobUpdate/></AdminProtected2></Suspense>),
  errorElement:<Error/>
},

])
  return (
    <>
    <Toaster position="bottom-right" reverseOrder={false} />
    <RouterProvider router={AppRouter}/></>
  )
}

export default App



