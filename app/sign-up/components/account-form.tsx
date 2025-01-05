"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { z } from "zod";
import { Info } from "lucide-react";
import { useFormData } from "../context/FormContext";

const fieldSchemas = {
    email: z.string().email("Invalid email address"),
    password: z.string()
        .min(8, "Password must be at least 8 characters")
        .regex(/[A-Z]/, "Password must contain at least one uppercase letter")
        .regex(/[0-9]/, "Password must contain at least one number"),
    confirmPassword: z.string()
};

interface FormProps {
    onNext: () => void;
    onBack?: () => void;
}

const schema = z.object(fieldSchemas).refine((data) => data.password === data.confirmPassword, {
    message: "Passwords don't match",
    path: ["confirmPassword"]
});

export function AccountForm({ onNext }: FormProps) {
    const { formData, updateFormData } = useFormData();
    const [errors, setErrors] = useState<Record<string, string>>({});

    const hints = {
        email: "We'll never share your email with anyone else",
        password: "Use a complex password to avoid hacking",
        confirmPassword: "Re-enter your password to confirm"
    };

    const validateField = (name: string, value: string, compareValue?: string) => {
        try {
            if (name === 'confirmPassword' && compareValue) {
                if (value !== compareValue) {
                    setErrors(prev => ({ ...prev, confirmPassword: "Passwords don't match" }));
                    return;
                }
            }

            fieldSchemas[name as keyof typeof fieldSchemas].parse(value);
            setErrors(prev => ({ ...prev, [name]: "" }));
        } catch (error) {
            if (error instanceof z.ZodError) {
                setErrors(prev => ({
                    ...prev,
                    [name]: error.errors[0]?.message || ""
                }));
            }
        }
    };

    const handleChange = (name: string, value: string) => {
        updateFormData({ [name]: value });
        if (name === 'password') {
            validateField('password', value);
            validateField('confirmPassword', formData.confirmPassword, value);
        } else if (name === 'confirmPassword') {
            validateField('confirmPassword', value, formData.password);
        } else {
            validateField(name, value);
        }
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        try {
            schema.parse(formData);
            setErrors({});
            onNext();
        } catch (error) {
            if (error instanceof z.ZodError) {
                const formattedErrors: Record<string, string> = {};
                error.errors.forEach((err) => {
                    if (err.path) {
                        formattedErrors[err.path[0]] = err.message;
                    }
                });
                setErrors(formattedErrors);
            }
        }
    };

    return (
        <form className="space-y-4 min-h-[400px] flex flex-col" onSubmit={handleSubmit}>
            <div className="space-y-4 flex-grow">
                <div className="space-y-2">
                    <label className="text-sm font-medium">Email</label>
                    <Input
                        type="email"
                        value={formData.email}
                        onChange={(e) => handleChange("email", e.target.value)}
                        className={`border-zinc-800 ${errors.email ? 'border-red-500' : ''}`}
                    />
                    <div className="h-5 flex items-center text-sm">
                        {errors.email ? (
                            <span className="text-red-500 flex items-center gap-1">
                                <Info className="w-4 h-4" />
                                {errors.email}
                            </span>
                        ) : (
                            <span className="text-muted-foreground flex items-center gap-1">{hints.email}</span>
                        )}
                    </div>
                </div>

                <div className="space-y-2">
                    <label className="text-sm font-medium">Password</label>
                    <Input
                        type="password"
                        value={formData.password}
                        onChange={(e) => handleChange("password", e.target.value)}
                        className={`border-zinc-800 ${errors.password ? 'border-red-500' : ''}`}
                    />
                    <div className="h-5 flex items-center text-sm">
                        {errors.password ? (
                            <span className="text-red-500 flex items-center gap-1">
                                <Info className="w-4 h-4" />
                                {errors.password}
                            </span>
                        ) : (
                            <span className="text-muted-foreground">{hints.password}</span>
                        )}
                    </div>
                </div>

                <div className="space-y-2">
                    <label className="text-sm font-medium">Confirm Password</label>
                    <Input
                        type="password"
                        value={formData.confirmPassword}
                        onChange={(e) => handleChange("confirmPassword", e.target.value)}
                        className={`border-zinc-800 ${errors.confirmPassword ? 'border-red-500' : ''}`}
                    />
                    <div className="h-5 flex items-center text-sm">
                        {errors.confirmPassword ? (
                            <span className="text-red-500 flex items-center gap-1">
                                <Info className="w-4 h-4" />
                                {errors.confirmPassword}
                            </span>
                        ) : (
                            <></>
                        )}
                    </div>
                </div>
            </div>
            <Button className="w-full" size="lg" type="submit">Continue</Button>
        </form>
    );
} 