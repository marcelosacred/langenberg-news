"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { playfair } from '@/app/fonts';
import Link from "next/link";
import Image from "next/image";

export default function SignIn() {
    return (
        <div className="min-h-screen bg-background">
            <div className="container flex items-center justify-center min-h-[calc(100vh-4rem)]">
                <Card className="w-full max-w-4xl p-0 border border-zinc-800 bg-background grid md:grid-cols-2 overflow-hidden">
                    <div className="relative hidden md:block">
                        <Image
                            src="https://i.pinimg.com/originals/d9/9e/b5/d99eb5d8ee8b7bb012eb49b51b8232f8.jpg"
                            alt="Sign in"
                            fill
                            className="object-cover"
                            priority
                        />
                    </div>

                    <div className="p-8 md:p-12">
                        <div className="mb-8">
                            <h1 className={`${playfair.className} text-3xl font-bold mb-2`}>
                                Welcome Back
                            </h1>
                            <p className="text-muted-foreground">
                                Sign in to access your account
                            </p>
                        </div>

                        <div className="space-y-3 mb-8">
                            <Button variant="outline" className="w-full border-zinc-800" size="lg">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-5 h-5 mr-2">
                                    <path
                                        d="M12.48 10.92v3.28h7.84c-.24 1.84-.853 3.187-1.787 4.133-1.147 1.147-2.933 2.4-6.053 2.4-4.827 0-8.6-3.893-8.6-8.72s3.773-8.72 8.6-8.72c2.6 0 4.507 1.027 5.907 2.347l2.307-2.307C18.747 1.44 16.133 0 12.48 0 5.867 0 .307 5.387.307 12s5.56 12 12.173 12c3.573 0 6.267-1.173 8.373-3.36 2.16-2.16 2.84-5.213 2.84-7.667 0-.76-.053-1.467-.173-2.053H12.48z"
                                        fill="currentColor"
                                    />
                                </svg>
                                Continue with Google
                            </Button>
                            <Button variant="outline" className="w-full border-zinc-800" size="lg">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-5 h-5 mr-2">
                                    <path
                                        d="M12.152 6.896c-.948 0-2.415-1.078-3.96-1.04-2.04.027-3.91 1.183-4.961 3.014-2.117 3.675-.546 9.103 1.519 12.09 1.013 1.454 2.208 3.09 3.792 3.039 1.52-.065 2.09-.987 3.935-.987 1.831 0 2.35.987 3.96.948 1.637-.026 2.676-1.48 3.676-2.948 1.156-1.688 1.636-3.325 1.662-3.415-.039-.013-3.182-1.221-3.22-4.857-.026-3.04 2.48-4.494 2.597-4.559-1.429-2.09-3.623-2.324-4.39-2.376-2-.156-3.675 1.09-4.61 1.09zM15.53 3.83c.843-1.012 1.4-2.427 1.245-3.83-1.207.052-2.662.805-3.532 1.818-.78.896-1.454 2.338-1.273 3.714 1.338.104 2.715-.688 3.559-1.701"
                                        fill="currentColor"
                                    />
                                </svg>
                                Continue with Apple
                            </Button>
                            <Button variant="outline" className="w-full border-zinc-800" size="lg">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-5 h-5 mr-2">
                                    <path
                                        d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"
                                        fill="currentColor"
                                    />
                                </svg>
                                Continue with GitHub
                            </Button>
                        </div>

                        <div className="relative mb-8">
                            <div className="absolute inset-0 flex items-center">
                                <Separator />
                            </div>
                            <div className="relative flex justify-center text-xs uppercase">
                                <span className="bg-background px-2 text-muted-foreground">Or continue with</span>
                            </div>
                        </div>

                        <form className="space-y-4">
                            <div className="space-y-2">
                                <label className="text-sm font-medium" htmlFor="email">
                                    Email
                                </label>
                                <Input
                                    id="email"
                                    type="email"
                                    placeholder="name@example.com"
                                    className="border-zinc-800"
                                />
                            </div>

                            <div className="space-y-2">
                                <label className="text-sm font-medium" htmlFor="password">
                                    Password
                                </label>
                                <Input
                                    id="password"
                                    type="password"
                                    placeholder="••••••••"
                                    className="border-zinc-800"
                                />
                            </div>

                            <div className="flex items-center justify-between">
                                <div className="flex items-center space-x-2">
                                    <input
                                        type="checkbox"
                                        id="remember"
                                        className="rounded border-zinc-800"
                                    />
                                    <label htmlFor="remember" className="text-sm text-muted-foreground">
                                        Remember me
                                    </label>
                                </div>
                                <Link href="/forgot-password" className="text-sm text-primary hover:underline">
                                    Forgot password?
                                </Link>
                            </div>

                            <Button className="w-full" size="lg">Sign In</Button>
                        </form>

                        <div className="mt-6 text-center text-sm text-muted-foreground">
                            Don't have an account?{" "}
                            <Link href="/sign-up" className="text-primary hover:underline">
                                Sign up
                            </Link>
                        </div>
                    </div>
                </Card>
            </div>
        </div>
    );
} 