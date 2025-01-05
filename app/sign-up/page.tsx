"use client";

import { Card } from "@/components/ui/card";
import { playfair } from '@/app/fonts';
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { Progress } from "@/components/ui/progress";
import { AccountForm } from "./components/account-form";
import { PersonalForm } from "./components/personal-form";
import { OptionalForm } from "./components/optional-form";
import { FinishForm } from "./components/finish-form";
import { FormProvider } from "./context/FormContext";

// Определяем этапы регистрации
const steps = ["Account", "Personal", "Optional", "Finish"];

export default function SignUp() {
    const [step, setStep] = useState(0);
    const progress = ((step + 1) / steps.length) * 100;

    return (
        <FormProvider>
            <div className="min-h-screen bg-background">
                <div className="container flex items-center justify-center min-h-[calc(100vh-4rem)]">
                    <Card className="w-full max-w-4xl p-0 border border-zinc-800 bg-background grid md:grid-cols-2 overflow-hidden">
                        {/* Левая часть с изображением */}
                        <div className="relative hidden md:block">
                            <Image
                                src="https://images.unsplash.com/photo-1614849963640-9cc74b2a826f"
                                alt="Sign up"
                                fill
                                className="object-cover"
                                priority
                            />
                        </div>

                        {/* Правая часть с формой */}
                        <div className="p-8 md:p-12">
                            <div className="mb-8">
                                <h1 className={`${playfair.className} text-3xl font-bold mb-2`}>
                                    Create Account
                                </h1>
                                <p className="text-muted-foreground">
                                    {step === 0 && "First, let's create your account"}
                                    {step === 1 && "Tell us about yourself"}
                                    {step === 2 && "Additional information (optional)"}
                                    {step === 3 && "Almost done!"}
                                </p>
                            </div>

                            {/* Прогресс бар */}
                            <div className="mb-8">
                                <Progress value={progress} className="h-1" />
                                <div className="flex justify-between mt-2 text-xs text-muted-foreground">
                                    {steps.map((stepName, index) => (
                                        <span key={stepName} className={step >= index ? "text-primary" : ""}>
                                            {stepName}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            {/* Формы для разных этапов */}
                            {step === 0 && <AccountForm onNext={() => setStep(1)} />}
                            {step === 1 && <PersonalForm onNext={() => setStep(2)} onBack={() => setStep(0)} />}
                            {step === 2 && <OptionalForm onNext={() => setStep(3)} onBack={() => setStep(1)} />}
                            {step === 3 && <FinishForm onBack={() => setStep(2)} />}

                            {/* Ссылка на вход */}
                            <div className="mt-6 text-center text-sm text-muted-foreground">
                                Already have an account?{" "}
                                <Link href="/sign-in" className="text-primary hover:underline">
                                    Sign in
                                </Link>
                            </div>
                        </div>
                    </Card>
                </div>
            </div>
        </FormProvider>
    );
} 