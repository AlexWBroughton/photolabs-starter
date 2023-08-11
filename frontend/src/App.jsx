import React from "react";

import "./App.scss";
import PhotoList from "./components/PhotoList";
import TopNavigation from "components/TopNavigationBar";
import HomeRoute from "routes/HomeRoute";
//return new Array(3).fill(null).map((_, index)
//Array.from(Array(3)).map((_, index) => <PhotoListItem key={index}/>)


// Note: Rendering a single component to build components in isolation
const App = () => (
  <div className="App">
    <HomeRoute/>
    <PhotoList/>
  </div>
);

export default App;
