import {BrowserRouter,Routes,Route} from "react-router-dom"
import Header from './Layout/Header'
import { Footer } from './Layout/Footer'
import { Home } from './User/Home'
import { Master } from './Layout/Master'
import { FindJobs } from "./User/FindJobs"
import { About } from "./User/About"
import { Blog } from "./User/Blog"
import { BlogDetails } from "./User/BlogDetails"
import { Elements } from "./User/Elements"
import { JobDetails } from "./User/JobDetails"
import { Contact } from "./User/Contact"
import { AdminMaster } from "./Layout/AdminMaster"
import { Dashboard } from "./Admin/Dashboard"
import { AddCategories } from "./Admin/AddCategories"
import{ToastContainer} from "react-toastify"
import { ManageCategories } from "./Admin/ManageCategories"
import { AddJobs } from "./Admin/AddJobs"
import { ManageJobs } from "./Admin/ManageJobs"
import { UserRegister } from "./Authentication/UserRegister"
import { ManageQueries } from "./Admin/ManageQueries"
import { UpdateCategories } from "./Admin/UpdateCategories"
import { UpdateJobs } from "./Admin/UpdateJobs"
import Login from "./Authentication/Login"
import { ApplyJobs } from "./User/ApplyJobs"
import { ShowJobs } from "./User/ShowJobs"
import { Categories } from "./User/Categories"
import { TrackApplication } from "./User/TrackApplication"
import { PendingApplications } from "./Admin/PendingApplications"
import { AcceptedApplications } from "./Admin/AcceptedApplications"
import { RejectedApplications } from "./Admin/RejectedApplications"


function App() {

  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route path="/" element = {<Master/>}>
          <Route path="/" element = {<Home/>}/>
          <Route path="/job_listing" element = {<FindJobs/>}/>
          <Route path="/about" element = {<About/>}/>
          <Route path="/blog" element = {<Blog/>}/>
          <Route path="/single-blog" element = {<BlogDetails/>}/>
          <Route path="/elements" element = {<Elements/>}/>
          <Route path="/job_details" element = {<JobDetails/>}/>
          <Route path="/contact" element = {<Contact/>}/>
          <Route path="/categories" element = {<Categories/>}/>
          <Route path="/userregister" element = {<UserRegister/>}/>
          <Route path="/login" element = {<Login/>}/>
          <Route path="/trackapplication" element = {<TrackApplication/>}/>
          <Route path="/applyjobs/:id" element = {<ApplyJobs/>}/>
          <Route path="/showjobs/:id" element = {<ShowJobs/>}/>

        </Route>
        <Route path="/admin" element={<AdminMaster/>}>
          <Route path="/admin" element={<Dashboard/>}/>

          {/* CATEGORIES */}
          <Route path="/admin/addcategories" element={<AddCategories/>}/>
          <Route path="/admin/managecategories" element={<ManageCategories/>}/>
          <Route path="/admin/updatecategories/:id" element={<UpdateCategories/>}/>
          
          {/* JOBS */}
          <Route path="/admin/addjobs" element={<AddJobs/>}/>
          <Route path="/admin/managejobs" element={<ManageJobs/>}/>
          <Route path="/admin/updatejobs/:id" element={<UpdateJobs/>}/>

          {/* QUERIES */}
          <Route path="/admin/managequeries" element={<ManageQueries/>}/>

          {/* APPLICATIONS */}
          <Route path="/admin/pendingapplications" element={<PendingApplications/>}/>
          <Route path="/admin/acceptedapplications" element={<AcceptedApplications/>}/>
          <Route path="/admin/rejectedapplications" element={<RejectedApplications/>}/>


          {/* LOGIN
          <Route path="/admin/login" element = {<Login/>}/> */}
          
          
        </Route>
      </Routes>
      </BrowserRouter>
      <ToastContainer>

      </ToastContainer>
    </>
  )
}

export default App
