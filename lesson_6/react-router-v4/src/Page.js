import React from "react";

class Page extends React.Component {
 constructor(props) {
        super(props);
        this.state = {
            didMount : false,
            update: false 
        }
    }
   
   componentDidMount(){
      this.setState({didMount : true })
   } 

   shouldComponentUpdate() {
       console.log("sds")
       return true;
   }

   render(){
       return(
           <div>
               <p>Page</p>
               <code>{JSON.stringify(this.state)}</code>
            </div>   
       ) 
   }

   componentWillUnmount(){
       console.log("componentWillUnmount")
   }
}

export default Page;