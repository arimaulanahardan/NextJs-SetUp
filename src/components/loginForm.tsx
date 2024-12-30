"use client";

import { useActionState } from "react";
import { useFormStatus } from "react-dom";
import { login } from "@/app/login/action";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import {
  Card,
  CardContent,
  CardDescription,
  CardTitle,
  CardHeader,
} from "./ui/card";

export function LoginForm() {
  const [state, loginAction] = useActionState(login, undefined);

  return (
    <Card>
    <CardHeader>
      <CardTitle>Login</CardTitle>
      <CardDescription>Masukkan detail Anda untuk masuk</CardDescription>
    </CardHeader>
    <CardContent>
      <form action={loginAction} className="flex flex-col gap-2">
        <div className="flex flex-col gap-2">
          <Input id="email" name="email" placeholder="Email" />
        </div>
        {state?.errors?.email && (
          <p className="text-red-500">{state.errors.email}</p>
        )}

        <div className="flex flex-col gap-2">
          <Input
            id="password"
            name="password"
            type="password"
            placeholder="Password"
          />
        </div>
        {state?.errors?.password && (
          <p className="text-red-500">{state.errors.password}</p>
        )}
        <SubmitButton />
      </form>
    </CardContent>
  </Card>
);
}

function SubmitButton() {
  const { pending } = useFormStatus();

  return (
    <Button disabled={pending} type="submit">
      Login
    </Button>
  );
}
