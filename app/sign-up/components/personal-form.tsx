"use client";

import { useState } from "react";
import { z } from "zod";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { countries } from 'countries-list';
import { Info } from "lucide-react";
import { useFormData } from "../context/FormContext";

const fieldSchemas = {
    firstName: z.string().min(2, "First name is required"),
    lastName: z.string().min(2, "Last name is required"),
    country: z.string().min(1, "Please select a country")
};

interface FormProps {
    onNext: () => void;
    onBack?: () => void;
}

export function PersonalForm({ onNext, onBack }: FormProps) {
    const { formData, updateFormData } = useFormData();
    const [errors, setErrors] = useState<Record<string, string>>({});

    const hints = {
        firstName: "Enter your first name as it appears on your ID",
        lastName: "Enter your last name as it appears on your ID",
        country: "Select your country of residence"
    };

    const countriesList = Object.entries(countries).map(([code, data]) => ({
        code,
        name: data.name,
        emoji: data.native
    })).sort((a, b) => a.name.localeCompare(b.name));

    const validateField = (name: string, value: string) => {
        try {
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
        validateField(name, value);
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

    const schema = z.object(fieldSchemas);

    return (
        <form className="space-y-4 min-h-[400px] flex flex-col" onSubmit={handleSubmit}>
            <div className="space-y-4 flex-grow">
                <div className="space-y-2">
                    <label className="text-sm font-medium">First Name</label>
                    <Input
                        type="text"
                        placeholder="John"
                        value={formData.firstName}
                        onChange={(e) => handleChange("firstName", e.target.value)}
                        className={`border-zinc-800 ${errors.firstName ? 'border-red-500' : ''}`}
                    />
                    <div className="h-5 flex items-center text-sm">
                        {errors.firstName ? (
                            <span className="text-red-500 flex items-center gap-1">
                                <Info className="w-4 h-4" />
                                {errors.firstName}
                            </span>
                        ) : (
                            <span className="text-muted-foreground">{hints.firstName}</span>
                        )}
                    </div>
                </div>

                <div className="space-y-2">
                    <label className="text-sm font-medium">Last Name</label>
                    <Input
                        type="text"
                        placeholder="Doe"
                        value={formData.lastName}
                        onChange={(e) => handleChange("lastName", e.target.value)}
                        className={`border-zinc-800 ${errors.lastName ? 'border-red-500' : ''}`}
                    />
                    <div className="h-5 flex items-center text-sm">
                        {errors.lastName ? (
                            <span className="text-red-500 flex items-center gap-1">
                                <Info className="w-4 h-4" />
                                {errors.lastName}
                            </span>
                        ) : (
                            <span className="text-muted-foreground">{hints.lastName}</span>
                        )}
                    </div>
                </div>

                <div className="space-y-2">
                    <label className="text-sm font-medium">Country</label>
                    <select
                        value={formData.country}
                        onChange={(e) => handleChange("country", e.target.value)}
                        className={`w-full rounded-md border border-zinc-800 bg-background px-3 py-2 ${errors.country ? 'border-red-500' : ''}`}
                    >
                        <option value="">Select a country</option>
                        {countriesList.map((country) => (
                            <option key={country.code} value={country.code}>
                                {country.emoji} {country.name}
                            </option>
                        ))}
                    </select>
                    <div className="h-5 flex items-center text-sm">
                        {errors.country ? (
                            <span className="text-red-500 flex items-center gap-1">
                                <Info className="w-4 h-4" />
                                {errors.country}
                            </span>
                        ) : (
                            <span className="text-muted-foreground">{hints.country}</span>
                        )}
                    </div>
                </div>
            </div>
            <div className="flex gap-4">
                <Button type="button" variant="outline" className="flex-1" onClick={onBack}>
                    Back
                </Button>
                <Button type="submit" className="flex-1">
                    Continue
                </Button>
            </div>
        </form>
    );
} 