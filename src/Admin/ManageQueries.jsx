import { useEffect, useState } from "react"
import apiServices, { BASE_IMAGE_URL } from "../Apiservices/apiServices"
import { toast } from "react-toastify";

export function ManageQueries(){
    const [myData , setMydata] = useState([]);
    useEffect(()=>{
        apiServices.getQueryData()
        .then((res)=>{
          console.log(res.data.data)
          setMydata(res.data.data)
    
        })
        .catch((err)=>{
          console.log(err.message)
        })
      },[])

      const handleReply = (email,subject,message)=>{
        const gmailURL = `https://mail.google.com/mail/?view=cm&fs=1&to=${email}&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(message)}`;
        window.open(gmailURL, '_blank');
      }

      

    return(
        <>
  {/* Hero Area Start*/}
  <div className="slider-area ">
    <div
      className="single-slider section-overly slider-height2 d-flex align-items-center"
      data-background="assets/img/hero/about.jpg" style={{backgroundImage:'url("/assets/img/hero/about.jpg")'}}
    >
      <div className="container">
        <div className="row">
          <div className="col-xl-12">
            <div className="hero-cap text-center">
              <h2>MANAGE QUERIES</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* Hero Area End */}
  {/* ================ contact section start ================= */}
  <section className="contact-section">
    <div className="container">
      <div className="d-none d-sm-block mb-5 pb-4">
        
      </div>
      <div className="row">
        <div className="col-12">
          <h2 className="contact-title">Add A  Category</h2>
        </div>
        <div className="col-lg-12">
        <table class="table">
  <thead>
    <tr>
      <th scope="col">Sr No.</th>
      <th scope="col">Query Name</th>
      <th scope="col">Query Email</th>
      <th scope="col">Subject</th>
      <th scope="col">Message</th>
      <th>Reply</th>
      
    </tr>
  </thead>
  <tbody>
   {myData.map((el,index)=>(
    <>
     <tr>
      <th scope="row">{index+1}</th>
      <td>{el.queryName}</td>
      <td>
        {el.queryEmail}
      </td>
      <td>{el.querySubject}</td>
      <td>{el.queryMessage}</td>
      <td>
        <button className="btn btn-light" 
        onClick={()=> 
          handleReply(el?.queryEmail, el?.querySubject, el?.queryMessage)}>Reply</button>
      </td>
    </tr></>
   ))}
    
  </tbody>
</table>
        </div>
        
      </div>
    </div>
  </section>
  {/* ================ contact section end ================= */}
</>

    )
}