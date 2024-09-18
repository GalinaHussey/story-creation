import axios from "axios";
import { elevenLabsUrl } from "./constants";

const apiKey = process.env.NEXT_PUBLIC_ELEVEN_LABS_API_KEY;
const url = elevenLabsUrl;
// Function to fetch available voices from ElevenLabs
export const getVoices = async () => {
  try {
    const response = await axios.get(`https://api.elevenlabs.io/v1/voices`, {
      headers: {
        "xi-api-key": apiKey,
      },
    });
    return response.data.voices;
  } catch (error) {
    console.error("Error fetching voices:", error);
    throw error;
  }
};

// Function to generate speech for a given text using the selected voice
export const generateSpeech = async (text: string, voiceId: string) => {
  try {
    const response = await axios.post(
      `https://api.elevenlabs.io/v1/text-to-speech/${voiceId}`, // Correct URL format
      {
        text,
      },
      {
        headers: {
          "xi-api-key": apiKey,
          "Content-Type": "application/json",
        },
        responseType: "arraybuffer", // To receive the audio file as binary data
      }
    );
    return response.data;
  } catch (error) {
    console.error("Error generating speech:", error);
    throw error;
  }
};
