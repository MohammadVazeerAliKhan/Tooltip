import React, { useState } from "react";

const ToolTip = ({ position }) => {
  const [showTooltip, setShowTooltip] = useState(false);
  console.log(position);
  return (
    <div className="tooltipcontainer">
      <div className="tooltipcontent">
        <button
          className="hoverbtn btnEffect"
          onMouseEnter={() => setShowTooltip(true)}
          onMouseOut={() => setShowTooltip(false)}
          onClick={(e) => e.preventDefault()}
        >
          Hover Me!
        </button>
        {showTooltip && <span className={`tooltip ${position}`}>Tooltip</span>}
      </div>
    </div>
  );
};

export default ToolTip;
