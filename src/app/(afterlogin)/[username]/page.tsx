import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from "@tanstack/react-query";
import { getUserPosts } from "./_lib/getUserPosts";
import UserPosts from "./_components/UserPosts";
import UserInfo from "./_components/UserInfo";
import { getUser } from "./_lib/getUser";

type Props = {
  params: Promise<{ username: string }>;
};

export default async function Page(props: Props) {
  const { username } = await props.params;
  const queryClient = new QueryClient();
  await queryClient.prefetchQuery({
    queryKey: ["users", username],
    queryFn: getUser,
  });
  await queryClient.prefetchQuery({
    queryKey: ["users", "posts", username],
    queryFn: getUserPosts,
  });
  const dehydratedState = dehydrate(queryClient);

  return (
    <main className="mt-4 space-y-10">
      <HydrationBoundary state={dehydratedState}>
        <UserInfo username={username} />
        <div>
          <UserPosts username={username} />
        </div>
      </HydrationBoundary>
    </main>
  );
}
