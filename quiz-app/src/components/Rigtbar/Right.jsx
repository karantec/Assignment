import "./Right.css"
const Rightbar= () => {
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
        <div className="p-2">Users</div>
        <div className="ml-auto p-2">+</div>
        </div>
          </a>
      </li>
      <li className="mt-2">
        <a href="#" className="nav-link link-body-emphasis">
        <div className="d-flex">
        <div className="p-2">Name</div>
         <div className="p-2">Name</div>
   
        </div>
          </a>
      </li>
      <li className="mt-2">
        <a href="#" className="nav-link link-body-emphasis">
        <div className="d-flex">
        <div className="p-2">Name</div>
         <div className="p-2">Name</div>
      
        </div>
          </a>
      </li>
      <li className="mt-2">
        <a href="#" className="nav-link link-body-emphasis">
        <div className="d-flex">
        <div className="p-2">Name</div>
        <div className="p-2">Name</div>
        
        </div>
          </a>
      </li>
      
     
      
    </ul>
    
     
    </div>
  </>

  )
}

export default Rightbar