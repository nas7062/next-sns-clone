"use client";

import { Suspense, use } from "react";
import { handlers } from "@/mocks/msw/handlers";

const mockingEnabledPromise =
  typeof window !== "undefined"
    ? import("@/mocks/msw/browser").then(async ({ default: worker }) => {
        if (process.env.NODE_ENV === "production") return;

        await worker.start({
          serviceWorker: {
            url: `${
              process.env.NEXT_PUBLIC_BASE_PATH ?? ""
            }/mockServiceWorker.js`,
          },
          onUnhandledRequest(request, print) {
            if (request.url.includes("_next")) return;
            print.warning();
          },
        });

        worker.use(...handlers);

        // HMR 정리: ESM/Turbopack
        if (typeof import.meta !== "undefined" && (import.meta as any).hot) {
          (import.meta as any).hot.dispose(() => worker.stop());
        }
        // CJS 안전 가드(서버나 테스트 런타임 대비)
        else if (
          typeof module !== "undefined" &&
          (module as any).hot?.dispose
        ) {
          (module as any).hot.dispose(() => worker.stop());
        }

        console.log(worker.listHandlers());
      })
    : Promise.resolve();

export function MSWProvider({ children }: { children: React.ReactNode }) {
  return (
    <Suspense fallback={null}>
      <MSWProviderWrapper>{children}</MSWProviderWrapper>
    </Suspense>
  );
}

function MSWProviderWrapper({ children }: { children: React.ReactNode }) {
  use(mockingEnabledPromise);
  return children;
}
