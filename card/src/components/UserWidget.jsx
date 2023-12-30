import React from 'react'
import '../Css/UserWidget.css';

function UserWidget() {
  return (
    <div>
        <div className="widget" style={{width: '18rem'}}>
        <img src="../images/demo.avif" className="img" alt="..." />
        <div className='data'>
        <b>Rowan Torres</b>
       <p>email@gmail.com</p>
       <p><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-dot" viewBox="0 0 16 16">
  <path d="M8 9.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3"/>
</svg>Active</p> 
        </div>   
        <button className='svgbtn' ><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-three-dots-vertical" viewBox="0 0 16 16">
  <path d="M9.5 13a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0m0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0m0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0"/>
</svg></button>
        
      </div>
    </div>
  )
}

export default UserWidget