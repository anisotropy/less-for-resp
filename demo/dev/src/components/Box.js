import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';

class Box extends PureComponent {
  getHeight(){
    return this.box.clientHeight;
  }
  getWidth(){
    return this.box.clientWidth;
  }
  render(){
    return (
      <div className="box box--respstyle" ref={(inst) => {this.box = inst;}}>
        <div className="box__content">Text</div>
      </div>
    );
  }
}

export default Box;
