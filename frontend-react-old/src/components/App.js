import React from "react";

import List from "./List";
import Form from "./Form";

const App = () => (
  <>
    <div>
      <h2>Recipes</h2>
      <List />
    </div>
    <div>
      <h2>Add a new recipe</h2>
      <Form />
    </div>
  </>
);
export default App;
