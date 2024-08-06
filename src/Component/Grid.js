import React from 'react';
import Cell from './Cell';

class Grid extends React.Component {
  renderCell = (category, value, isAnswered, question, options) => {
    return (
      <Cell
        key={`${category}-${value}`}
        category={category}
        value={value}
        isAnswered={isAnswered}
        onCellClick={this.props.onCellClick}
        question={question}
        options={options}
      />
    );
  }

  render() {
    const { gridData } = this.props;
    const categories = Object.keys(gridData);

    return (
      <div className="grid">
        {categories.map(category => (
          <div key={category} className="column">
            <div className="cell category-cell">{category}</div>
            {gridData[category].map(({ value, isAnswered,question, options }) =>
              this.renderCell(category, value, isAnswered, question, options)
            )}
          </div>
        ))}
      </div>
    );
  }
}

export default Grid;
