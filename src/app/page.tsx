'use client'
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <main>
      <Button onClick={() => alert("Button clicked!")}>Click Me</Button>
    </main>
  );
}
