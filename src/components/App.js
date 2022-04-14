import React from "react";
import { BrowserRouter, Route, Router } from "react-router-dom";
import streamEdit from "./streams/streamEdit";
import streamCreate from "./streams/streamCreate";
import streamDelete from "./streams/streamDelete";
import streamList from "./streams/streamList";
import streamShow from "./streams/streamShow";
import Header from "./Header";

const App = () => {
  return (
    <div className="ui container ">
      <BrowserRouter>
        <Header />
        <div>
          <Route path="/" exact component={streamList} />
          <Route path="/new" exact component={streamCreate} />
          <Route path="/delete" exact component={streamDelete} />
          <Route path="/edit" exact component={streamEdit} />
          <Route path="/show" exact component={streamShow} />
        </div>
      </BrowserRouter>
    </div>
  );
};

export default App;
