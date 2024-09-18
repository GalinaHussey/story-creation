// app/components/VoiceSelector.tsx
import { useState, useEffect } from "react";
import Select from "react-select";
import { getVoices, generateSpeech } from "../_lib/elevenLabsApi";

const VoiceSelector = () => {
  const [voices, setVoices] = useState([]);
  const [selectedVoice, setSelectedVoice] = useState(null);

  useEffect(() => {
    // Fetch available voices on component mount
    const fetchVoices = async () => {
      const voiceList = await getVoices();
      setVoices(
        voiceList.map((voice: any) => ({
          value: voice.voice_id,
          label: voice.name,
        }))
      );
    };
    fetchVoices();
  }, []);

  // Function to play a short sample when a voice is selected
  const handleVoiceChange = async (selectedOption: any) => {
    setSelectedVoice(selectedOption);

    const shortSampleText = "Hello, I will be reading your story!";

    try {
      const audioData = await generateSpeech(
        shortSampleText,
        selectedOption.value
      );

      // Convert binary audio data to a playable URL
      const blob = new Blob([audioData], { type: "audio/mpeg" });
      const url = URL.createObjectURL(blob);

      // Play the generated speech
      const audio = new Audio(url);
      audio.play(); // Auto-play the voice sample when voice is changed
    } catch (error) {
      console.error("Error generating speech:", error);
    }
  };

  return (
    <div className="voice-selector">
      <h2>Select a Voice</h2>
      <Select
        options={voices}
        onChange={handleVoiceChange} // Play voice sample on change
      />
    </div>
  );
};

export default VoiceSelector;
