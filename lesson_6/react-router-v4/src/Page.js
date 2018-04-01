import React from "react";

class Page extends React.Component {
 
   componentDidMount(){
    console.log("componentDidMount")
   } 

   shouldComponentUpdate() {
       console.log("sds")
       return true;
   }

   render(){
       return(
           <div>
               <p>Page</p>
            </div>   
       ) 
   }

   componentWillUnmount(){
       console.log("componentWillUnmount")
   }
}

export default Page;