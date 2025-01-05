"use client";

import { useState, useCallback } from "react";
import { X, Info, Upload } from "lucide-react";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { useFormData } from "../context/FormContext";
import { z } from "zod";

const schema = z.object({
    bio: z.string().max(500, "Bio must be less than 500 characters")
});

interface FormProps {
    onNext: () => void;
    onBack?: () => void;
}

export function OptionalForm({ onNext, onBack }: FormProps) {
    const { formData, updateFormData } = useFormData();
    const [errors, setErrors] = useState<Record<string, string>>({});
    const [isDragging, setIsDragging] = useState(false);

    const hints = {
        avatar: "Upload a profile picture (optional)",
        bio: "Share a brief description about yourself (optional)"
    };

    const handleFile = (file: File) => {
        const reader = new FileReader();
        reader.onloadend = () => {
            updateFormData({ avatar: reader.result as string });
        };
        reader.readAsDataURL(file);
    };

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file) {
            handleFile(file);
        }
    };

    const handleDrop = useCallback((e: React.DragEvent) => {
        e.preventDefault();
        setIsDragging(false);

        const file = e.dataTransfer.files?.[0];
        if (file && file.type.startsWith('image/')) {
            handleFile(file);
        }
    }, []);

    const handleDragOver = useCallback((e: React.DragEvent) => {
        e.preventDefault();
        setIsDragging(true);
    }, []);

    const handleDragLeave = useCallback((e: React.DragEvent) => {
        e.preventDefault();
        setIsDragging(false);
    }, []);

    const handleBioChange = (value: string) => {
        updateFormData({ bio: value });
        try {
            schema.parse({ bio: value });
            setErrors({});
        } catch (error) {
            if (error instanceof z.ZodError) {
                setErrors({ bio: error.errors[0]?.message || "" });
            }
        }
    };

    const removeAvatar = () => {
        updateFormData({ avatar: null });
    };

    return (
        <form className="space-y-4 min-h-[400px] flex flex-col" onSubmit={(e) => { e.preventDefault(); onNext(); }}>
            <div className="space-y-4 flex-grow">
                <div className="space-y-2">
                    <label className="text-sm font-medium">Profile Picture</label>
                    <div
                        className={`border-2 border-dashed rounded-lg p-4 text-center min-h-[120px] flex flex-col items-center justify-center cursor-pointer transition-colors
                            ${isDragging ? 'border-primary bg-primary/10' : 'border-zinc-800'}
                            ${formData.avatar ? '' : 'hover:border-primary hover:bg-primary/5'}`}
                        onDrop={handleDrop}
                        onDragOver={handleDragOver}
                        onDragLeave={handleDragLeave}
                        onClick={() => !formData.avatar && document.getElementById('avatar')?.click()}
                    >
                        {formData.avatar ? (
                            <div className="relative inline-block">
                                <Avatar className="w-20 h-20">
                                    <AvatarImage src={formData.avatar} alt="Preview" />
                                    <AvatarFallback>Avatar</AvatarFallback>
                                </Avatar>
                                <button
                                    type="button"
                                    onClick={(e) => {
                                        e.stopPropagation();
                                        removeAvatar();
                                    }}
                                    className="absolute -top-2 -right-2 bg-background rounded-full p-1"
                                >
                                    <X className="w-4 h-4" />
                                </button>
                            </div>
                        ) : (
                            <>
                                <input
                                    type="file"
                                    className="hidden"
                                    id="avatar"
                                    accept="image/*"
                                    onChange={handleFileChange}
                                />
                                <Upload className="w-8 h-8 text-muted-foreground mb-2" />
                                <span className="text-sm text-muted-foreground">
                                    {isDragging ? 'Drop image here' : hints.avatar}
                                </span>
                            </>
                        )}
                    </div>
                </div>

                <div className="space-y-2">
                    <label className="text-sm font-medium">Bio</label>
                    <textarea
                        value={formData.bio}
                        onChange={(e) => handleBioChange(e.target.value)}
                        className={`w-full rounded-md border border-zinc-800 bg-background px-3 py-2 min-h-[100px] ${errors.bio ? 'border-red-500' : ''}`}
                        placeholder="Tell us about yourself..."
                    />
                    <div className="h-5 flex items-center text-sm">
                        {errors.bio ? (
                            <span className="text-red-500 flex items-center gap-1">
                                <Info className="w-4 h-4" />
                                {errors.bio}
                            </span>
                        ) : (
                            <span className="text-muted-foreground">{hints.bio}</span>
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