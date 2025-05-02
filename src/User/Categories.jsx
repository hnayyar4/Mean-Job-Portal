import { useEffect, useState } from "react";
import apiServices, { BASE_IMAGE_URL } from "../Apiservices/apiServices";
import { Link } from "react-router-dom";

export function Categories(){
  const [myData , setMydata] = useState([]);
    useEffect(()=>{
        apiServices.getCategoryData()
        .then((res)=>{
          console.log(res.data.data)
          setMydata(res.data.data)
    
        })
        .catch((err)=>{
          console.log(err.message)
        })
      },[])
    return(
        <main>
  {/* Hero Area Start*/}
  <div className="slider-area ">
    <div
      className="single-slider section-overly slider-height2 d-flex align-items-center"
      data-background="assets/img/hero/about.jpg" style={{backgroundImage:"url('/assets/img/hero/about.jpg')"}}
    >
      <div className="container">
        <div className="row">
          <div className="col-xl-12">
            <div className="hero-cap text-center">
              <h2>Categories</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* Hero Area End */}
  {/* Job List Area Start */}
  <div className="job-listing-area pt-120 pb-120">
    <div className="container-fluid">
      <div className="row">
        {/* Left content */}
        
        {/* Right content */}
        <div className="col-xl-12 col-lg-12 col-md-12">
          {/* Featured_job_start */}
          <section className="featured-job-area">
            <div className="container">
              {/* Count of Job list Start */}
              
              {/* Count of Job list End */}
              {/* single-job-content */}
              <div className="row d-flex justify-contnet-center">
               {myData.map((el, index)=>(
          <>
           <Link to={"/showjobs/" + el._id}><div className="col-xl-4 col-lg-4 col-md-4 col-sm-6" >
          <div className="single-services text-center mb-30" style={{height:300}}>
            <div className="services-ion">

            <img src={BASE_IMAGE_URL+el.categoryImg} height={200}  alt="" />
            </div>
            <div className="services-cap">
            <h5>
              <span>{el.categoryName}</span>
              </h5>
              <h5>
              <span>{el.categoryDescription}</span>
              </h5>
              
            </div>
          </div>
        </div></Link>
          </>
        ))}

       
       
      </div>
                
              
              
              
              
              
              
            </div>
          </section>
          {/* Featured_job_end */}
        </div>
      </div>
    </div>
  </div>
  {/* Job List Area End */}
  {/*Pagination Start  */}
  <div className="pagination-area pb-115 text-center">
    <div className="container">
      <div className="row">
        <div className="col-xl-12">
          <div className="single-wrap d-flex justify-content-center">
            <nav aria-label="Page navigation example">
              <ul className="pagination justify-content-start">
                <li className="page-item active">
                  <a className="page-link" href="#">
                    01
                  </a>
                </li>
                <li className="page-item">
                  <a className="page-link" href="#">
                    02
                  </a>
                </li>
                <li className="page-item">
                  <a className="page-link" href="#">
                    03
                  </a>
                </li>
                <li className="page-item">
                  <a className="page-link" href="#">
                    <span className="ti-angle-right" />
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/*Pagination End  */}
</main>

    )
}