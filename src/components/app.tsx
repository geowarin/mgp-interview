import * as React from "react";

interface Props {
  message?: string
}

class App extends React.Component<Props, {}> {

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>Welcome to React!</h2>
        </div>
        <p className="App-intro">
          {this.props.message}
        </p>
      </div>
    );
  }
}

export default App;

