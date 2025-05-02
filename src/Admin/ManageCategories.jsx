import { useEffect, useState } from "react"
import apiServices, { BASE_IMAGE_URL } from "../Apiservices/apiServices"
import { toast } from "react-toastify";
import {Link} from "react-router-dom"

export function ManageCategories(){
    const [myData , setMydata] = useState([]);
    const [isDelete , setIsDelete] = useState(false);
    useEffect(()=>{
        apiServices.getCategoryData()
        .then((res)=>{
          console.log(res.data.data)
          setMydata(res.data.data)
    
        })
        .catch((err)=>{
          toast.error(err.message)
          console.log(err.message)
        })
      },[isDelete])

      const deleteData = (id)=>{
        setIsDelete(true)
        let data = {

            _id : id ,

            
        }
        apiServices.deleteCategoryData(data)
        .then((res)=>{
            toast.success(res.data.message)
      
          })
          .catch((err)=>{
            console.log(err)
          })
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
              <h2>Manage Categories</h2>
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
          <h2 className="contact-title">Manage A Category</h2>
        </div>
        <div className="col-lg-12">
        <table class="table">
  <thead>
    <tr>
      <th scope="col">Sr No.</th>
      <th scope="col">Category Name</th>
      <th scope="col">Image</th>
      <th scope="col">Description</th>
      <th>Delete</th>
      <th>Update</th>
    </tr>
  </thead>
  <tbody>
   {myData.map((el,index)=>(
    <>
     <tr>
      <th scope="row">{index+1}</th>
      <td>{el.categoryName}</td>
      <td>
        <img src={BASE_IMAGE_URL+el.categoryImg} height={200}  alt="" />
      </td>
      <td>{el.categoryDescription}</td>
      <td>
        <button style={{backgroundColor:"red"}} onClick={()=> deleteData(el._id)}>Delete</button>
      </td>
      <td>

        <Link to = {"/admin/updatecategories/"+el._id}>
        <button style={{backgroundColor:"blue"}}>Update</button>
        </Link>
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