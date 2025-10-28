import PostForm from "./_component/PostForm";
import Tab from "./_component/Tab";
import TabProvider from "./_component/TabProvider";
import { Suspense } from "react";
import Loading from "./loading";
import TabDeciderSuspense from "./_component/TabDeciderSuspense";

export default async function Page() {
  return (
    <main className="flex flex-col gap-14">
      <TabProvider>
        <Tab />
        <PostForm />
        <Suspense fallback={<Loading />}>
          <TabDeciderSuspense />
        </Suspense>
      </TabProvider>
    </main>
  );
}
