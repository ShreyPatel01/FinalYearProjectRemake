import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center">
      <p className='font-bold text-6xl'>
        Welcome Page
      </p>
      <a href='/register'>
        <Button size='lg' variant='outline' className='mt-4 hover:underline text-xl'>
          Navigate to registration page
        </Button>
      </a>
    </main>
  );
}
