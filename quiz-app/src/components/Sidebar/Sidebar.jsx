import "./Sidebar.css";

const Sidebar = () => {
  return (
<>
<div className="d-flex flex-column flex-shrink-0 p-3 fixed-top height">
    <a href="/" className="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-body-emphasis text-decoration-none">
      <img src="group.png" alt='logo' className="bi pe-none me-2" width="202" height="134"></img>
    </a>
    <ul className="nav nav-pills flex-column mb-auto mt-5">
      <li className="nav-item">
        <a href="#" className="nav-link active color">
        <div className="flex-row d-flex  center">
        <img src="Test.png" alt='logo'  width="40" height="40"></img>
         <h5 className="mt-2  font-bold">Quiz</h5>
         </div>
        </a>
      </li>
      <li>
        <a href="#" className="nav-link link-body-emphasis">
        <div className="flex-row d-flex ">
          <img src="Exam.png" alt='logo'  width="40" height="40"></img>
          <p className="mt-2 bold">Exam</p>
          </div>
          
        </a>
      </li>
      <li>
        <a href="#" className="nav-link link-body-emphasis">
          <svg className="bi pe-none me-2" width="16" height="16"></svg>
         <span className="p-3 bold ">Create</span>
        </a>
      </li>
      <li>
        <a href="#" className="nav-link link-body-emphasis">
          <svg className="bi pe-none me-2" width="16" height="16"></svg>
         <span className="p-3 bold">Assign User</span> 
        </a>
      </li>
      
    </ul>
    
     
    </div>
  </>

  )
}

export default Sidebar