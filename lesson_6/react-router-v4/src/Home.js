import React from "react";

const Home = (props)=> {
    return (
      <div>  
        <p>home <hr/> <code>{JSON.stringify(props)}</code> </p>
        <button onClick = {()=> props.history.push("/contact")}>
             Naviagate to contact 
        </button> 
      </div>
    )
 }

export default Home;

