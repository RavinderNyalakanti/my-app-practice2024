import { Component } from "react"; 
 
class Popular extends Component{ 
    state = {isLoggin:true}
     render(){ 
        const {isLoggin} = this.state;
          return (
              <div>
               
               {
                isLoggin? <button>
                       Logout
                </button> : <button>Loggin</button>
               }
              </div>
          )
     }
} 
export default Popular