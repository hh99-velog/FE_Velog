import React from "react";
import Grid from "../elements/Grid";
import Text from "../elements/Text";
import IconButton from "../elements/IconButton";

function App() {
  return (
    <div className="App">
      <Grid>  
        <Text bold>가나다</Text>
        <IconButton size='50px' clock></IconButton>
        <IconButton size='50px' search></IconButton>
        <IconButton size='50px'></IconButton>
      </Grid>
    </div>
  );
}

export default App;
