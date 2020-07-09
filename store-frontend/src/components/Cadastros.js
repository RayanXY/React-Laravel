import React from 'react';
import axios from 'axios';

class Cadastros extends React.Component {

   constructor() {
      super();
      this.state = {
         name: "",
         email: "",
         password: "",
         password_confimation: ""
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
         name: this.state.name,
         email: this.state.email,
         password: this.state.password,
         password_confirmation: this.state.password_confimation
      };

      axios.post("http://localhost:8000/api/auth/signup", user)
         .then(response => {
            console.log(response.data);
         })
         .catch(error => {
            console.log(error.response.data);
         });

   }

   render() {

      return (
         <div>
            <label>Nome:
               <input type="text" name="name" onChange={this.handleChange.bind(this)} />
            </label>
            <br />
            <label>E-mail:
               <input type="text" name="email" onChange={this.handleChange.bind(this)} />
            </label>
            <br />
            <label>Senha:
               <input type="password" name="password" onChange={this.handleChange.bind(this)} />
            </label>
            <br />
            <label>Confirme a Senha:
               <input type="password" name="password_confimation" onChange={this.handleChange.bind(this)} />
            </label>
            <br />
            <button onClick={this.handleSubmit}>Cadastrar!</button>
         </div>
      );

   }

}

export default Cadastros;
