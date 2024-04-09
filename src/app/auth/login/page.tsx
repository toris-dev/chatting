"use client";
import Button from "@/components/Button";
import Input from "@/components/Input";
import { signIn } from "next-auth/react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";

const LoginPage = () => {
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FieldValues>({
    defaultValues: {
      name: "",
      email: "",
      password: "",
    },
  });
  const onSubmit: SubmitHandler<FieldValues> = async (body) => {
    setIsLoading(true);
    try {
      const data = await signIn("credentials", body);
      console.log(data);
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <section className="grid h-[calc(100vh_-_56px)] place-items-center">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col justify-center gap-4 min-w-[350px]"
      >
        <h1 className="text-2xl">Login</h1>
        <Input
          id="email"
          label="Email"
          type="email"
          placeholder="Example@example.com"
          disabled={isLoading}
          register={register}
          errors={errors}
          required
        />
        <Input
          id="password"
          label="Password"
          type="password"
          placeholder="패스워드 입력"
          disabled={isLoading}
          register={register}
          errors={errors}
          required
        />
        <Button label="Login" />

        <div className="text-center">
          <p className="text-gray-400">
            Not a member?{" "}
            <Link href="/auth/register" className="text-black hover:underline">
              Register
            </Link>
          </p>
        </div>
      </form>
    </section>
  );
};

export default LoginPage;
