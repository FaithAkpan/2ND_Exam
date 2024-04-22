import React from "react";
import "../assets/Styles/ErrorBoundary.css";
import { Link } from "react-router-dom";

const ErrorBoundary = () => {
  return (
    <div className="error">
      <span className="error-span">ERROR!!!</span>
      <h2 className="err-msg">Sorry Something went wrong.</h2>

      <Link to={"/"} className="return-home-btn">
        Return Home
      </Link>
    </div>
  );
};





// // class ErrorBoundary extends Component
// const ErrorBoundary = () =>  {
//     constructor(props); {
//       super(props);
//       this.state = { hasError: false };
//     }
  
//     let  getDerivedStateFromError () => {
//       return { hasError: true };
//     }
  
//     componentDidCatch(error, errorInfo); {
//       console.error('Error caught by ErrorBoundary:', error, errorInfo);
//     }
  
//     render(); {
//       if (this.state.hasError) {
//         return (
//             <div className="error">
//       <span className="error-span">ERROR!!!</span>

//       <Link to={"/"} className="return-home-btn">
//         Return Home
//       </Link>
//     </div>
//         )
//       }
  
//       return this.props.children;
//     }
//   }
  export default ErrorBoundary;

