export async function getFollowRecommends() {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/FollowRecommends`,
    {
      next: {
        tags: ["posts", "FollowRecommends"],
      },
    }
  );
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}
