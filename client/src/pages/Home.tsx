import { Background } from "@/components/Background";
import { Profile } from "@/components/Profile";
import { Skills } from "@/components/Skills";
import { Contact } from "@/components/Contact";

export default function Home() {
  return (
    <main className="relative">
      <Background />
      <div className="space-y-20">
        <Profile />
        <Skills />
        <Contact />
      </div>
    </main>
  );
}
