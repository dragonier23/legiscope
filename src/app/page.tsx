import Link from "next/link";

import { LatestPost } from "@/app/_components/post"; 
import { api, HydrateClient } from "@/trpc/server";
import { CardWithForm } from "@/app/_components/clone";
import { NaviMenu } from "@/app/_components/navi"



export default async function Home() {
  return (
    <HydrateClient>
      <main className="flex min-h-screen flex-col items-center bg-gradient-to-b from-[#2e026d] to-[#15162c] pt-16">
          <NaviMenu />
          <CardWithForm />    
      </main>
    </HydrateClient>
  );
}
