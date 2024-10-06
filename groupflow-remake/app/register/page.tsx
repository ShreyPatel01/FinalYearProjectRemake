import { Button } from "@/components/ui/button";
import React from "react";
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import RegisterFields from "./RegisterFields";

const Registration = () => {
  return (
    <main className="flex min-h-screen flex-col w-screen px-20">
      <div className="mb-2">
        <a href="/">
          <Button
            size="lg"
            variant="outline"
            className="mt-4 hover:underline text-xl mb-4"
          >
            Navigate to Home page
          </Button>
        </a>
      </div>
      <div className="flex-grow justify-center mx-60">
        <Card className="scroll-auto">
          <CardHeader>
            <CardTitle className="text-2xl">Create Account</CardTitle>
            <CardDescription>Sort it out mate</CardDescription>
          </CardHeader>
          <RegisterFields />
          <CardFooter>
            <Button variant="default" className="w-full">
              Create Your Account Now
            </Button>
          </CardFooter>
        </Card>
      </div>
    </main>
  );
};

export default Registration;
