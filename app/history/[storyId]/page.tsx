import { getStoryById } from "@/app/_lib/data.service";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";

const StoryPage = () => {
  const router = useRouter();
  const { storyID } = router.query; // Get the storyID from the dynamic route
  const [story, setStory] = useState("");

  useEffect(() => {
    // Fetch the story from Supabase using the storyID from the URL
    const fetchStory = async () => {
      if (storyID) {
        const storyData = await getStoryById(storyID as string);
        setStory(storyData.body); // Assuming 'body' contains the personalized story text
      }
    };
    fetchStory();
  }, [storyID]);

  if (!story) {
    return <p>Loading story...</p>;
  }

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-4">Your Story</h1>
      <p className="mb-6">{story}</p>

      <button
        onClick={() => router.push("/")}
        className="mr-4 p-2 bg-yellow-500 text-white"
      >
        Edit Story
      </button>
      <button className="p-2 bg-green-500 text-white">Download Story</button>
    </div>
  );
};

export default StoryPage;
