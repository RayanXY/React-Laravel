import React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

class Login extends React.Component {

   constructor() {
      super();
      localStorage.removeItem('access_token');
      this.state = {
         email: "",
         password: "",
         remember_me: "false",
         redirect: false,
      };
   }

   /**
    * Generic handleChange
    * @param {The element changing} e 
    */
   handleChange = (e) => {
      this.setState({
         [e.target.name] : e.target.value
      });
   }

   handleSubmit = () => {
      
      const user = {
         email: this.state.email,
         password: this.state.password,
      };

      axios.post("http://localhost:8000/api/auth/login", user)
         .then(response => {
            localStorage.setItem('access_token', 'Bearer ' + response.data.access_token)
            this.props.history.push("/home");
         })
         .catch(error => {
            console.log("Error" + error.response.data);
         });
      
   }

   render() {

      return (
         <div>
            <label>E-mail:
               <input type="text" name="email" onChange={this.handleChange.bind(this)} />
            </label>
            <br />
            <label>Senha:
               <input type="password" name="password" onChange={this.handleChange.bind(this)} />
            </label>
            <br />
            <button onClick={this.handleSubmit}>Entrar!</button>
            <Link to="/Cadastros"><button>Sign Up!</button></Link>
         </div>
      );

   }

}

export default Login;
