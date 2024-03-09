import React from 'react';
import AudioTrack from './AudioTrack';

const TrackList = ({ audioTracks, onRemoveTrack }) => {
  return (
    <div className="audio-tracks">
      {audioTracks.map((track, index) => (
        <AudioTrack key={index} track={track} onRemove={() => onRemoveTrack(index)} />
      ))}
    </div>
  );
};

export default TrackList;
