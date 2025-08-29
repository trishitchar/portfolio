'use client'
import { ModeToggle } from "@/components/theme/theme-toggle";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <main>
      <Button onClick={() => alert("Button clicked!")}>Click Me</Button>
      <ModeToggle />
    </main>
  );
}
