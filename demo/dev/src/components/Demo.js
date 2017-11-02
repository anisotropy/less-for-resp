import React, {PureComponent} from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter';
import {tomorrowNightBright} from 'react-syntax-highlighter/dist/styles';

const lessCode =
`@breakpoints: 550 700 850 1200;
.resp-linear(width; 100 175 250 300; @breakpoints);
.resp-linear(height; 100 175 250 300; @breakpoints; 500; -1);
.resp-linear(font-size; 30 20 50; @breakpoints);
.resp-step(background-color; #f4cc70 #de7a22 #20948b #6ab187; @breakpoints);`;

class Demo extends PureComponent {
  constructor(props){
    super(props);
    this.state = {
      wWidth: null,
      boxHeight: null,
      boxWidth: null
    }
  }
  componentDidMount(){
    this.setSize();
    window.onresize = () => {
      this.setSize();
    }
  }
  setSize(){
    this.setState({wWidth: window.innerWidth, boxHeight: this.box.clientHeight, boxWidth: this.box.clientWidth});
  }
  render(){
    const box = (
      <div className="box box--respstyle" ref={(inst) => {this.box = inst;}}>
        <div className="box__content">Text</div>
      </div>
    );
    const descriptionSize = (
      <div className="description__size">
        <table>
          <tbody>
            <tr>
              <td>Page width:</td>
              <td>{this.state.wWidth}px</td>
            </tr>
            <tr>
              <td>Box width:</td>
              <td>{this.state.boxWidth}px</td>
            </tr>
            <tr>
              <td>Box height:</td>
              <td>{this.state.boxHeight}px</td>
            </tr>
          </tbody>
        </table>
      </div>
    );
    const descriptionCode = (
      <div className="description__code">
        <SyntaxHighlighter language='less' style={tomorrowNightBright}>
          {lessCode}
        </SyntaxHighlighter>
      </div>
    );
    return (
      <div className="demo">
        <h1>LESS mixins for responsive design</h1>
        {box}
        <div className="description">
          {descriptionSize}
          {descriptionCode}
        </div>
      </div>
    );
  }
}

export default Demo;
