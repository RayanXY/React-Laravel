import React from 'react';
import axios from 'axios';

class Home extends React.Component {

   componentDidMount() {
      
      axios.get("http://localhost:8000/api/auth/user", {
         headers: {
            'Authorization': localStorage.getItem('access_token'),
         }})
         .then(response => {
            if(response.status === 200){
               console.log("De boas");
            }
         })
         .catch(error => {
            console.log(error.response.data);
         });
      
   }

   render() {
      return(
         <h1>Home</h1>
      )
   }

}

export default Home;
