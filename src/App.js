import React from "react";
import "./App.css";
import CounterView from "./features/counter/CounterView";
import PostsView from "./features/posts/PostsView";
function App() {
  return (
    <div className="App">
      <h1>React Redux Tutorial Practice.</h1>
      <CounterView />
      <PostsView />
    </div>
  );
}

export default App;

// step1. packages install
// step2. constants define
// step3. async actions creator
// step4. reducer
// step5. create store
// step6. providing store
// step7. use store
// step8. adding css style
