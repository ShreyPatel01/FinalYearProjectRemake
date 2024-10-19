import { Button } from "@/components/ui/button";
import { getSession } from "@auth0/nextjs-auth0";

export default async function Home() {
  const session = await getSession();
  const user = session?.user;

  if (user) {
    return (
      <main className="flex min-h-screen flex-col items-center justify-center">
        <p className="font-bold text-6xl">Welcome {user.name}</p>
        <a href="/api/auth/logout">
          <Button
            size="lg"
            variant="outline"
            className="mt-4 hover:underline text-xl"
          >
            Logout
          </Button>
        </a>
      </main>
    );
  }
  return (
    <main className="flex min-h-screen flex-col items-center justify-center">
      <p className="font-bold text-6xl">Welcome Page</p>
      <a href="/api/auth/login">
        <Button
          size="lg"
          variant="outline"
          className="mt-4 hover:underline text-xl"
        >
          Login
        </Button>
      </a>
    </main>
  );
}
