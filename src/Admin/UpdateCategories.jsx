import { useEffect, useState } from "react"
import {toast} from "react-toastify"
import apiServices, { BASE_IMAGE_URL } from "../Apiservices/apiServices"
import { useParams } from "react-router-dom"


export function UpdateCategories(){
    const[categoryName ,setCategoryName] =useState("")
    const[categoryImg ,setCategoryImg] =useState({})
    const[imageName ,setImageName] =useState()
    const[categoryDescription ,setCategoryDescription] =useState("")
    const[PreviousImage, setPreviousImage] = useState([])
    const param = useParams();

    const id = param.id;

    useEffect(()=>{
        let data = {
            _id : id
        }
        apiServices.getSingleCategory(data)
        .then((res)=>{
            setCategoryName(res.data.data.categoryName);
            setCategoryDescription(res.data.data.categoryDescription);
            setPreviousImage(res.data.data.categoryImg);
        })
    },[id])

    const changeImage =(e)=>{
        setCategoryImg(e.target.files[0])
        setImageName(e.target.value)
    }

    const updateData = (e)=>{
        e.preventDefault()
        let data = new FormData();
        data.append("categoryName" , categoryName)
        if(!!imageName){
            data.append("categoryImg", categoryImg)
        }
        data.append("_id",id)
        data.append("categoryDescription", categoryDescription)
        apiServices.updateCategories(data)
        
        .then((res)=>{
            toast.success(res.data.message)
        })
        .catch((err)=>{
            toast.error(err.message)
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
              <h2>Update Categories</h2>
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
          <h2 className="contact-title">Update A  Category</h2>
        </div>
        <div className="col-lg-8">
          <form onSubmit={updateData}
            className="form-contact contact_form"
            
          >
            <div className="row">
              <div className="col-12">
                <div className="form-group">
                  <label htmlFor="">DESCRIPTION:</label>
                  <textarea
                    className="form-control w-100"
                    name="description"
                    id="description"
                    cols={30}
                    rows={9}
                    
                    placeholder=" Enter Category Description"
                    value={categoryDescription} onChange={(e)=>{setCategoryDescription(e.target.value)}}
                  />
                </div>
              </div>
              <div className="col-sm-6">
                <div className="form-group">
                <label htmlFor="">NAME:</label>
                  <input
                    className="form-control valid"
                    name="name"
                    id="name"
                    type="text"
                    
                    placeholder="Enter Category name"
                    value={categoryName} onChange={(e)=>{setCategoryName(e.target.value)}}
                  />
                </div>

              </div>
              

              <div className="col-sm-6">
                <div className="form-group">
                <label htmlFor="">PREVIOUS IMAGE:</label>
                  <img src={BASE_IMAGE_URL+PreviousImage} alt="" />
                </div>
              </div>

              <div className="col-sm-6">
                <div className="form-group">
                <label htmlFor="">NEW IMAGE:</label>
                  <input
                    className="form-control valid"
                    name="categoryImage"
                    id="image"
                    type="file"
                    
                    placeholder="Enter category image"
                    onChange={changeImage}
                  />
                </div>
              </div>
              {/* <div className="col-12">
                <div className="form-group">
                  <input
                    className="form-control"
                    name="subject"
                    id="subject"
                    type="text"
                    onfocus="this.placeholder = ''"
                    onblur="this.placeholder = 'Enter Subject'"
                    placeholder="Enter Subject"
                  />
                </div>
              </div> */}
            </div>
            <div className="form-group mt-3">
              <button
                type="submit"
                className="button button-contactForm boxed-btn"
              >
                SAVE
              </button>
            </div>
          </form>
        </div>
        <div className="col-lg-3 offset-lg-1">
          <div className="media contact-info">
            <span className="contact-info__icon">
              <i className="ti-home" />
            </span>
            <div className="media-body">
              <h3>Buttonwood, California.</h3>
              <p>Rosemead, CA 91770</p>
            </div>
          </div>
          <div className="media contact-info">
            <span className="contact-info__icon">
              <i className="ti-tablet" />
            </span>
            <div className="media-body">
              <h3>+1 253 565 2365</h3>
              <p>Mon to Fri 9am to 6pm</p>
            </div>
          </div>
          <div className="media contact-info">
            <span className="contact-info__icon">
              <i className="ti-email" />
            </span>
            <div className="media-body">
              <h3>support@colorlib.com</h3>
              <p>Send us your query anytime!</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* ================ contact section end ================= */}
</>

    )
}