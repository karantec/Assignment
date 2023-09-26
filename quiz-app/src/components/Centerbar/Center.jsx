import "./Center.css"
const Center = () => {
  return (
    <div>
     <div className="d-flex justify-content-between mt-5">
       <h3 className="center1">Create Quiz</h3>
       <div className="d-flex justify-content-between  space-x-5">
       <img className="center" src="Vector.png"></img>
       <img  className="center" src="picture.png"></img>
       </div>
        
     </div>

     <div className="container align-self-center self">
     <div className="dropdown custom-dropdown">
                    <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        Dropdown with Arrow
                    </button>
                    <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                        <a className="dropdown-item" href="#">Item 1</a>
                        <a className="dropdown-item" href="#">Item 2</a>
                        <a className="dropdown-item" href="#">Item 3</a>
                        <div className="dropdown-divider"></div>
                        <a className="dropdown-item" href="#">Item 4</a>
                    </div>
                </div>
                </div>
</div>
     
  
  )
}

export default Center