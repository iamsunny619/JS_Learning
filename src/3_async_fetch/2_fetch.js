async function getUserData() {
  try {
    // Retrieve the user's profile information
    const profileResponse = await fetch(
      "https://jsonplaceholder.typicode.com/users/1"
    );
    if (!profileResponse.ok) {
      throw new Error("Failed to retrieve profile information");
    }
    const userProfile = await profileResponse.json();

    // Retrieve the user's recent posts
    const postsResponse = await fetch(
      "https://jsonplaceholder.typicode.com/posts?userId=1"
    );
    if (!postsResponse.ok) {
      throw new Error("Failed to retrieve recent posts");
    }
    const userPosts = await postsResponse.json();


    // Retrieve the user's followers
    const followersResponse = await fetch(
      "https://jsonplaceholder.typicode.com/users/1/followers"
    );
    if (!followersResponse.ok) {
      throw new Error("Failed to retrieve follower information");
    }
    const userFollowers = await followersResponse.json();

    // Combine all the data into a single object
    const userData = {
      profile: userProfile,
      posts: userPosts,
      followers: userFollowers
    };

    // Log the combined data to the console
    console.log(userData);
  } catch (error) {
    console.error(error);
  }
}

getUserData();
