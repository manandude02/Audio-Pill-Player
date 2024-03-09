import React from "react";
import Draggable from "react-draggable";

const Timeline = ({ children, audioTracks, setAudioTracks }) => {
  const handleDrag = (index, newPosition) => {
    const newPositionX = newPosition.x;
    const updatedAudioTracks = [...audioTracks];

    updatedAudioTracks[index] = {
      ...updatedAudioTracks[index],
      positionX: newPositionX,
    };

    setAudioTracks(updatedAudioTracks);
  };

  return (
    <div className="timeline">
      {children.map((child, index) => (
        <Draggable
          key={index}
          axis="x"
          onDrag={(e, { x }) => handleDrag(index, { x })}
        >
          <div className="track-item">{child}</div>
        </Draggable>
      ))}
    </div>
  );
};

export default Timeline;