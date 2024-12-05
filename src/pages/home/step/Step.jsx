import { useState, useEffect } from "react";

const Step = () => {
  // State for form input values
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [videoUrl, setVideoUrl] = useState("");
  const [selectedSport, setSelectedSport] = useState("");
  const [imageUrl, setImageUrl] = useState("");

  // State for posts (Loaded from localStorage initially)
  const [posts, setPosts] = useState(() => {
    const storedPosts = localStorage.getItem("posts");
    return storedPosts ? JSON.parse(storedPosts) : [];
  });

  // Sports list
  const sportsList = ["Football", "Basketball", "Tennis", "Athletics (Running)", "Swimming", "Boxing", "Cycling", "Volleyball"];

  // Handle form submission
  const handlePostSubmit = (e) => {
    e.preventDefault();

    const newPost = {
      title,
      content,
      selectedSport,
      videoUrl,
      imageUrl,
      date: new Date().toLocaleString(),
    };

    // Add the new post to the posts array
    const updatedPosts = [...posts, newPost];

    // Save the updated posts array to localStorage
    localStorage.setItem("posts", JSON.stringify(updatedPosts));

    // Update the state to render the posts
    setPosts(updatedPosts);

    // Clear the form
    setTitle("");
    setContent("");
    setVideoUrl("");
    setSelectedSport("");
    setImageUrl("");
  };

  return (
    <>
      {/* Headline */}
      <div id="steps" className="text-center">
        <h2 className="text-4xl text-black text-center font-bold my-10 bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400 inline-block text-transparent bg-clip-text">
          Share Your Sports Journey
        </h2>
      </div>

      {/* Form Section */}
      <section className="text-gray-400 bg-gray-900 body-font md:p-10">
        <div className="container px-5 py-24 mx-auto flex flex-wrap">
          <div className="w-full">
            <form onSubmit={handlePostSubmit} className="bg-gray-800 p-6 rounded-lg">
              {/* Sport Selection */}
              <div className="mb-4">
                <label htmlFor="sport" className="text-white text-lg">Choose Your Sport</label>
                <select
                  id="sport"
                  value={selectedSport}
                  onChange={(e) => setSelectedSport(e.target.value)}
                  className="w-full mt-2 p-2 bg-gray-700 text-white rounded-md"
                >
                  <option value="">Select Sport</option>
                  {sportsList.map((sport, index) => (
                    <option key={index} value={sport}>
                      {sport}
                    </option>
                  ))}
                </select>
              </div>

              {/* Title */}
              <div className="mb-4">
                <label htmlFor="title" className="text-white text-lg">Post Title</label>
                <input
                  id="title"
                  type="text"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  className="w-full mt-2 p-2 bg-gray-700 text-white rounded-md"
                  required
                />
              </div>

              {/* Content */}
              <div className="mb-4">
                <label htmlFor="content" className="text-white text-lg">Content</label>
                <textarea
                  id="content"
                  rows="4"
                  value={content}
                  onChange={(e) => setContent(e.target.value)}
                  className="w-full mt-2 p-2 bg-gray-700 text-white rounded-md"
                  required
                />
              </div>

              {/* Video URL */}
              <div className="mb-4">
                <label htmlFor="videoUrl" className="text-white text-lg">Video URL (optional)</label>
                <input
                  id="videoUrl"
                  type="url"
                  value={videoUrl}
                  onChange={(e) => setVideoUrl(e.target.value)}
                  className="w-full mt-2 p-2 bg-gray-700 text-white rounded-md"
                />
              </div>

              {/* Image URL */}
              <div className="mb-4">
                <label htmlFor="imageUrl" className="text-white text-lg">Upload Image</label>
                <input
                  id="imageUrl"
                  type="url"
                  value={imageUrl}
                  onChange={(e) => setImageUrl(e.target.value)}
                  className="w-full mt-2 p-2 bg-gray-700 text-white rounded-md"
                  placeholder="Enter image URL"
                  required
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700"
              >
                Post Blog
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Display Posted Blogs */}
      <section className="text-gray-400 bg-gray-900 body-font md:p-10">
        <div className="container px-5 py-24 mx-auto">
          <h2 className="text-3xl text-white font-bold mb-10">Your Posts</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {posts.map((post, index) => (
              <div key={index} className="bg-gray-800 p-6 rounded-lg shadow-lg">
                <h3 className="text-xl text-white font-semibold">{post.title}</h3>
                <p className="text-gray-400">{post.content}</p>
                <div className="mt-4">
                  <img src={post.imageUrl} alt="Sport" className="w-full h-64 object-cover rounded-md" />
                </div>
                {post.videoUrl && (
                  <div className="mt-4">
                    <video width="100%" controls>
                      <source src={post.videoUrl} type="video/mp4" />
                      Your browser does not support the video tag.
                    </video>
                  </div>
                )}
                <p className="text-sm text-gray-400 mt-2">Sport: {post.selectedSport}</p>
                <p className="text-sm text-gray-400">Posted on: {post.date}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Step;
