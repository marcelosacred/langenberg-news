"use client";

import { Button } from "@/components/ui/button";
import { useFormData } from "../context/FormContext";

interface FormProps {
    onBack: () => void;
}

export function FinishForm({ onBack }: FormProps) {
    const { formData } = useFormData();

    const handleComplete = () => {
        // Здесь можно добавить логику отправки данных на сервер
        console.log('Form data:', formData);
    };

    return (
        <div className="space-y-6 min-h-[400px] flex flex-col">
            <div className="text-center space-y-4 flex-grow">
                <div className="mb-4 text-4xl">🎉</div>
                <h2 className="text-xl font-semibold">Almost there!</h2>
                <p className="text-muted-foreground">
                    Please verify your email address to complete the registration.
                </p>
                <p className="text-sm text-muted-foreground">
                    We've sent a verification email to:
                    <br />
                    <span className="font-medium text-foreground">{formData.email}</span>
                </p>
            </div>
            <div className="flex gap-4">
                <Button variant="outline" className="flex-1" onClick={onBack}>
                    Back
                </Button>
                <Button className="flex-1" onClick={handleComplete}>
                    Complete Registration
                </Button>
            </div>
        </div>
    );
} 