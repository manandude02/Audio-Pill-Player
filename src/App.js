import React, { useState } from "react";
import "./App.css";
import TrackList from "./components/TrackList";
import Timeline from "./components/Timeline";

function App() {
  const [audioTracks, setAudioTracks] = useState([]);

  const handleFileUpload = (event) => {
    const files = event.target.files;
    const newAudioTracks = Array.from(files).map((file) => ({
      name: file.name,
      url: URL.createObjectURL(file),
    }));
    setAudioTracks((prev) => [...prev, ...newAudioTracks]);
  };

  const handleRemoveTrack = (index) => {
    setAudioTracks((prev) => prev.filter((_, i) => i !== index));
  };

  return (
    <div className="App">
      <h1>Audio Pill Player</h1>
      <input
        type="file"
        onChange={handleFileUpload}
        multiple
        accept="audio/*"
      />
      <TrackList audioTracks={audioTracks} onRemoveTrack={handleRemoveTrack} />
      <Timeline audioTracks={audioTracks} setAudioTracks={setAudioTracks}>
        <div></div>
        <div></div>
      </Timeline>
    </div>
  );
}

export default App;