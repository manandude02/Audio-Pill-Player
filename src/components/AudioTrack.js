import React from 'react';

const AudioTrack = ({ track, onRemove }) => {
  return (
    <div className="audio-track">
      <audio controls src={track.url}></audio>
      <button onClick={onRemove}>Remove</button>
    </div>
  );
};

export default AudioTrack;