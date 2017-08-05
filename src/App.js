import ReactDOM from 'react-dom';
import React, { Component } from 'react';
import logo1 from './logo1.png';
import './App.css';



class App extends Component {
  
   constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    
  }

  handleSubmit(e) {
    e.preventDefault();
    
    const formData = {};
    for (const field in this.refs) {
      formData[field] = this.refs[field].value;     
    }

  if(formData.email==="admin@info.com" && formData.password==="admin@info.com"){
   alert('Access Granted!');

      
    document.getElementById("row").style.visibility = "hidden";     
  
    document.getElementById("nav").style.display = "block";
  }else{
     alert('Access Denied!');
       document.getElementById("nav").style.visibility = "hidden"; 

  }
    console.log('-->', formData);

  }

 

  render() {
      return (    

  
<div id="row" className="row ">    
                        <div className="small-12 medium-5 small-centered " >
                          <div className={`callout callout-signup`}><br/>
                          <center><img src={logo1} alt="logo1" /></center>    
                              <form onSubmit={this.handleSubmit} >
                                <div className={`callout callout-signup`}>
                                  <span><strong>UserName:</strong></span>
                                  <input  ref="email"  type='email' name="email" required/><br/>
                                  <span><strong>Password:</strong></span>
                                  <input ref="password"  type='password' name="password" required/>         
                                </div>
                                <input type="submit" className="button button success large expanded" value="Log-In"/>
                              </form>                
                          </div>
                        </div>             
                </div>


 
                




              );
          }
}

export default App;


