import React from 'react';

class Cell extends React.Component {
  handleClick = () => {
    const { category, value, onCellClick, question, options } = this.props;
    onCellClick(category, value, question, options);
  }

  render() {
    const { value, isAnswered } = this.props;
    const cellStyle = isAnswered ? { textDecoration: 'line-through', color: 'red' } : {};

    return (
      <div className="cell onlyCell" style={cellStyle} onClick={this.handleClick}>
        {value}
      </div>
    );
  }
}

export default Cell;
