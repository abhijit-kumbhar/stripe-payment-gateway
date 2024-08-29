import React from 'react'
import "../components/successPage.css"
import { useNavigate } from 'react-router-dom'

const Sucess = () => {
  const navigate = useNavigate();
  const handleNavigate = ()=>{
    navigate("/")
  }
  return (
    <div className="success-page">
    <div className="success-icon">
        {/* You can use an icon here, like a checkmark */}
        <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" fill="green" className="bi bi-check-circle-fill" viewBox="0 0 16 16">
            <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM6.97 11.03a.75.75 0 0 0 1.08-.02l3.992-4.99a.75.75 0 0 0-1.14-.98L7.475 9.093 5.08 7.093a.75.75 0 1 0-1.16.964l2.86 2.867a.75.75 0 0 0 1.18-.894z"/>
        </svg>
    </div>
    <h1>Success!</h1>
    <p>Your Payment has been completed successfully.</p>
    <p>Have a Nice Day ...</p>
    <button className="btn" onClick={handleNavigate}>Go to Home</button>
</div>
  )
}

export default Sucess