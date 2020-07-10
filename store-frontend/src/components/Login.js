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
         <div className="flex items-center justify-center h-screen">
            <div className="bg-white shadow-md px-6 pt-6 pb-8 mb-4">
               <h1 className="text-center text-gray-700 text-xl font-bold -mt-2 mb-1">LOGIN</h1>
               <div className="mb-4">
                  <label className="block text-gray-700 text-base font-bold mb-2">
                     E-mail
                  </label>
                  <input
                    className="shadow appeareance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    type="text" name="email" onChange={this.handleChange.bind(this)} 
                  />
               </div>
               <div className="mb-4">
                  <label className="block text-gray-700 text-base font-bold mb-2">
                     Senha                  
                  </label>
                  <input 
                    className="shadow appeareance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    type="password" name="password" onChange={this.handleChange.bind(this)} 
                  />
               </div>
               <div className="flex items-center justify-between">
                  <button 
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                    onClick={this.handleSubmit}
                  >
                     Entrar
                  </button>
                  <Link to="/Cadastros"><button className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800">Cadastre-se</button></Link>
               </div>
            </div>
         </div>
      );

   }

}

export default Login;
