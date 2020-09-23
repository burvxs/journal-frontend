import React from 'react';

const ColumnHeader = (props) => {
    return (
      <div id="columnHeaders">
        <div className="completed"></div>
        <div className="date">Tasks</div>
        <div className="solidifier">Solidifier</div>
        <div className="priorityLevel">Priority Level</div>
      </div>
    );
}

export default ColumnHeader;
