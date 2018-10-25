import React, { Component } from 'react';

export default class PageHeader extends Component {
    render() {
        return (
          <div className="page-header">
              <div className="page-header-inner">
                  <div className="page-header-content">
                      <h1>Clean & Minimal React Admin Template</h1>
                      <p>
                          Duis vel dui eu risus convallis tempus. Pellentesque quis est at nibh facilisis commodo. Fusce eu accumsan massa.
                      </p>

                      <div className="page-header-info">
                          <span>Redux Boilerplate <br/>Implemented</span>
                      </div>
                  </div>
              </div>
          </div>
        );
    }
}
