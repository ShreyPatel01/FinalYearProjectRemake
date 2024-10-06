"use client";

import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent } from "@/components/ui/card";

const RegisterFields = () => {
  const [focused, setFocused] = useState<number | null>(null);
  const [usernameInput, setUsernameInput] = useState<string | null>(null);
  const [emailInput, setEmailInput] = useState<string | null>(null);
  const [confirmEmailInput, setConfirmEmailInput] = useState<string | null>(
    null
  );
  const [passwordInput, setPasswordInput] = useState<string | null>(null);
  const [confirmPassInput, setConfirmPassInput] = useState<string | null>(null);

  const handleFocus = (inputNumber: number) => {
    setFocused(inputNumber);
  };

  const handleBlur = () => {
    setFocused(null);
  };

  return (
    <CardContent>
      <div className="grid w-full items-center gap-4">
        <div className="flex flex-col space-y-1.5">
          <Label htmlFor="name" className="text-lg">
            Name
          </Label>
          <div className="flex items-center relative">
            <Input id="name" placeholder="Enter your full name" />
          </div>
        </div>
        <div className="flex flex-col space-y-1.5">
          <Label htmlFor="username" className="text-lg">
            Username
          </Label>
          <div className="flex items-center relative">
            <Input
              id="username"
              placeholder="Enter your username"
              onFocus={() => handleFocus(2)}
              onBlur={handleBlur}
              onChange={(e) => {
                setUsernameInput(e.target.value);
              }}
            />
            {focused === 2 &&
              usernameInput !== null &&
              usernameInput.trim().length !== 0 && (
                <Card className="absolute left-full ml-4 p-2 min-w-48 text-center z-10">
                  {usernameInput !== null &&
                    usernameInput === "MyNameShrey" && (
                      <p className="text-red-600">
                        This username is already taken
                      </p>
                    )}
                  {usernameInput !== null &&
                    usernameInput.trim().length !== 0 &&
                    usernameInput !== "MyNameShrey" && (
                      <p className="text-green-600">
                        You can use this username
                      </p>
                    )}
                </Card>
              )}
          </div>
        </div>
        <div className="flex flex-col space-y-1.5">
          <Label htmlFor="email" className="text-lg">
            Email
          </Label>
          <div className="flex items-center relative">
            <Input
              id="email"
              placeholder="Enter your email"
              onFocus={() => handleFocus(3)}
              onBlur={handleBlur}
              onChange={(e) => {
                setEmailInput(e.target.value);
              }}
            />
            {focused === 3 &&
              emailInput !== null &&
              emailInput.trim().length !== 0 && (
                <Card className="absolute left-full ml-4 p-2 min-w-48 text-center z-10">
                  {emailInput !== null && emailInput.trim().length !== 0 && (
                    <>
                      {emailInput.includes("@") && (
                        <>
                          {emailInput ===
                            "ShreyPatel505@gmail.com".toLowerCase() && (
                            <p className="text-red-600">
                              This email is already in use
                            </p>
                          )}
                          {emailInput !==
                            "ShreyPatel505@gmail.com".toLowerCase() && (
                            <p className="text-green-600">
                              You can use this email
                            </p>
                          )}
                        </>
                      )}
                      {!emailInput.includes("@") && (
                        <p className="text-red-600">Enter a valid email</p>
                      )}
                    </>
                  )}
                </Card>
              )}
          </div>
        </div>
        <div className="flex flex-col space-y-1.5">
          <Label htmlFor="Confirm Email" className="text-lg">
            Confirm Email
          </Label>
          <div className="flex items-center relative">
            <Input
              id="Confirm Email"
              placeholder="Confirm your email"
              onFocus={() => handleFocus(4)}
              onBlur={handleBlur}
              onChange={(e) => {
                setConfirmEmailInput(e.target.value);
              }}
            />
            {focused === 4 &&
              confirmEmailInput !== null &&
              confirmEmailInput.trim().length !== 0 && (
                <Card className="absolute left-full ml-4 p-2 min-w-48 text-center z-10">
                  {confirmEmailInput !== emailInput && (
                    <p className="text-red-600">The emails do not match</p>
                  )}
                  {confirmEmailInput === emailInput && (
                    <p className="text-green-600">The emails match</p>
                  )}
                </Card>
              )}
          </div>
        </div>
        <div className="flex flex-col space-y-1.5">
          <Label htmlFor="password" className="text-lg">
            Password
          </Label>
          <Input
            id="password"
            placeholder={focused === 5 ? "password" : "password 2"}
            onFocus={() => handleFocus(5)}
            onBlur={handleBlur}
            onChange={(e) => setPasswordInput(e.target.value)}
          />
        </div>
        <div className="flex flex-col space-y-1.5">
          <Label htmlFor="confirmPass" className="text-lg">
            Confirm Password
          </Label>
          <Input
            id="confirmPass"
            placeholder={
              focused === 6 ? "confirm password" : "confirm password 2"
            }
            onFocus={() => handleFocus(6)}
            onBlur={handleBlur}
            onChange={(e) => setConfirmPassInput(e.target.value)}
          />
        </div>
        <div className="flex flex-col space-y-1.5">
          <Label htmlFor="dateOfBirth" className="text-lg">
            Date of Birth
          </Label>
          <Input id="dateOfBirth" type="date" />
        </div>
      </div>
    </CardContent>
  );
};

export default RegisterFields;
