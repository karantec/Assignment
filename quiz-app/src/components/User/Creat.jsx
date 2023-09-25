import "./Create.css"
const Create= () => {
  return (
<>
<div className="d-flex flex-column  flex-shrink-0 p-3  color1 height fixed-top">
   
    <ul className="nav nav-pills flex-column mb-auto">
      <li className="nav-item">
        <a href="#" className="nav-link active color">
        <div className="flex-column d-flex justify-content-center center">
         <h4>Total Users</h4>
         <p>1,000</p>
         </div>
        </a>
      </li>
      <li className="mt-2">
        <a href="#" className="nav-link link-body-emphasis">
        <div className="d-flex justify-content-between">
        <div className="p-2">Create Users</div>
       
        </div>
          </a>
      </li>
      <li className="mt-2">
        <a href="#" className="nav-link link-body-emphasis">
        <div className="d-flex">
        <input type="text" className="form-control"  placeholder=" User Name"/>
   
        </div>
          </a>
      </li>
      <li className="mt-2">
        <a href="#" className="nav-link link-body-emphasis">
        <div className="d-flex">
        <input type="text" className="form-control"  placeholder=" User Id"/>
   
        </div>
          </a>
      </li>
      <li className="mt-2">
        <a href="#" className="nav-link link-body-emphasis">
        <div className="d-flex">
        <input type="text" className="form-control"  placeholder="Password"/>
   
        </div>
          </a>
      </li>
     
        
         <button className="btn btn-primary  form-control color2 btn-lg btn-block   text-white">Create User</button>
       

      
     
      
    </ul>
    
     
    </div>
  </>

  )
}

export default Create