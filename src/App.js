import React, { Component } from 'react';
import ToggleSwitch from './components/ToggleSwitch';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: null,
      value: true
    };

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(newState) {
    const state = {...this.state, ...newState};
    this.setState(state);
  }

  componentWillMount() {
    if(!this.state.name) {
      this.setState({ name: '{name property}' });
    }
  }

  render() {
    return (
      <div className='App'>
        <h1>React UI &mdash; Toggle Switch</h1>

        <table>
          <thead>
            <tr>
              <td>
                Component
              </td>
              <td>
                name* <span>	&#123;props&#125; </span>
              </td>
              <td>
                size <span>	&#123;props&#125; </span>
              </td>
              <td>
                checked <span>	&#123;props&#125; </span>
              </td>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <ToggleSwitch name='ui-test'/>
              </td>
              <td>
                unique string
              </td>
              <td>
                &ndash;
              </td>
              <td>
                &ndash;
              </td>
            </tr>
            <tr>
              <td>
                <ToggleSwitch name='ui-test' size='Small' checked/>
              </td>
              <td>
                unique string
              </td>
              <td>
                [Small, SM]
              </td>
              <td>
                ✔︎
              </td>
            </tr>
            <tr>
              <td style={{paddingTop: '3px'}}>
                <ToggleSwitch name='ui-test' size='Medium' />
              </td>
              <td>
                unique string
              </td>
              <td>
                [Medium, MD]
              </td>
              <td>
                &ndash;
              </td>
            </tr>
            <tr>
              <td style={{paddingTop: '7px'}}>
                <ToggleSwitch name='ui-test' size='Large' />
              </td>
              <td>
                unique string
              </td>
              <td>
                [Large, LG]
              </td>
              <td>
                &ndash;
              </td>
            </tr>
          </tbody>
        </table>


        <h2>Example Usage</h2>
        <div className="Example-Usage">

<code><pre>
{`<div className="Example-Usage">
  <div className="Question">
    Do you <span aria-label="heart" role="img">❤️</span> react?
  </div>
  <div className="Answer">
    <ToggleSwitch name='iLoveReact' size="MD" checked/>
  </div>
</div>`}
</pre></code>

          <div className="clear-fix"></div>

          <div className="Question">
            Do you <span aria-label="heart" role="img">❤️</span> react?
          </div>
          
          <div className="Answer">
            <ToggleSwitch
              fn={(newState) => this.handleClick(newState)}
              name='iLoveReact' 
              size="MD" 
              checked />
          </div>

          <div className="Question Output">
            {this.state.value ? 'yes' : 'no'}
          </div>

          <div className="Question Output Name" style={{marginLeft: '5px'}}>
            {this.state.name}
          </div>

        </div>


      </div>
    );
  }
}

export default App;
