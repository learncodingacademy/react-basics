import React from "react";

const Home = (props)=> {
    return (
      <div>  
        <p>home </p> <hr/> <code>{JSON.stringify(props)}</code> 

        <button style = {{display : 'block', margin : '10px'}} 
          onClick = {()=> props.history.push("/user/344999")}>
             Naviagate to User by 344999
        </button> 
      </div>
    )
 }

export default Home;

