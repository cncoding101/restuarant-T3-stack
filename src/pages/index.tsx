import { signIn, signOut, useSession } from "next-auth/react";
import Head from "next/head";

import { RouterOutputs, api } from "~/utils/api";

type Hello = RouterOutputs["post"]["hello"];

export default function Home() {
  const { data, isLoading } = api.post.hello.useQuery({ text: "from tRPC" });

  if (isLoading) return <div>Loading..</div>;

  if (!data) return <div>Smth went wrong..</div>;

  return (
    <>
      <main className="flex h-screen justify-center">
        <div className="h-full w-full border-x border-slate-400 md:max-w-2xl">
          <div className="flex flex-col items-center gap-2">
            <p className="text-2xl text-white">
              {data ? data.greeting : "Loading tRPC query..."}
            </p>
            <AuthShowcase />
          </div>
        </div>
      </main>
    </>
  );
}

function AuthShowcase() {
  const { data: sessionData, status } = useSession({ required: true });

  const { data: secretMessage } = api.post.getSecretMessage.useQuery(
    undefined, // no input
    { enabled: sessionData?.user !== undefined },
  );

  console.log("what is sessionData", sessionData, secretMessage, status);
  return (
    <div className="flex flex-col items-center justify-center gap-4">
      <p className="text-center text-2xl text-white">
        {sessionData && <span>Logged in as {sessionData.user?.name}</span>}
        {secretMessage && <span> - {secretMessage}</span>}
      </p>
      <button
        className="rounded-full bg-white/10 px-10 py-3 font-semibold text-white no-underline transition hover:bg-white/20"
        onClick={sessionData ? () => void signOut() : () => void signIn()}
      >
        {sessionData ? "Sign out" : "Sign in"}
      </button>
    </div>
  );
}
