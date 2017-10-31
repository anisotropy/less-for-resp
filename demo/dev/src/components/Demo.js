import React, {PureComponent} from 'react';
import Box from './Box';
import SyntaxHighlighter from 'react-syntax-highlighter';
import {tomorrowNightBright} from 'react-syntax-highlighter/dist/styles';

const lessCode =
`@breakpoints: 550 700 850 1200;
.resp-linear(width; 100 175 250 300; @breakpoints);
.resp-linear(height; 100 175 250 300; @breakpoints; 500; ~"-");
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
    this.setState({wWidth: window.innerWidth, boxHeight: this.box.getHeight(), boxWidth: this.box.getWidth()});
  }
  render(){
    return (
      <div className="demo">
        <h1>LESS mixins for responsive design</h1>
        <Box ref={(inst) => {this.box = inst;}}/>
        <div className="description">
          <div className="description__size">
            <table>
              <tbody>
                <tr>
                  <td>Screen width:</td>
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
          <div className="description__code">
            <SyntaxHighlighter language='less' style={tomorrowNightBright}>
              {lessCode}
            </SyntaxHighlighter>
          </div>
        </div>
      </div>
    );
  }
}

export default Demo;
