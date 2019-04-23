import React from "react";
import Header from "./Header";
import Days from "./Days";
import Seasons from "./Seasons";

function App(){

  return (
    <div>

      <style jsx>{`
        div{
          text-align:center;
        }
      `}</style>

      <Header/>
      <Days/>
      <br/><br/>
      <Seasons/>
    </div>
  );
}

export default App;
