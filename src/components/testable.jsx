import { Component } from "react";
import bootstrap from "bootstrap";

class Testable extends Component {
  state = {};
  render() {
    return (
      <body>
        <div className="container border">
          Content
          <table class="table">
            <thead>
              <tr>
                <th scope="col">1</th>
                <th scope="col">1</th>
                <th scope="col">1</th>
                <th scope="col">1</th>
              </tr>
            </thead>
          </table>
        </div>
      </body>
    );
  }
}

export default Testable;
