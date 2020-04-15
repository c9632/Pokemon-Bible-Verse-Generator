const React = require("react");
const PoemDisplay = require("./PoemDisplay");

/* the main page for the index route of this app */
const RootComponent = function() {
  return (
    <div>
      <h1>Old Testament Pokemon Bible Quote Generator</h1>

      <PoemDisplay />
      
    </div>
  );
}

module.exports = RootComponent;