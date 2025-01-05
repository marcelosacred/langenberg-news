"use client";

import { createContext, useContext, useState } from "react";

interface FormData {
    email: string;
    password: string;
    confirmPassword: string;
    firstName: string;
    lastName: string;
    country: string;
    avatar: string | null;
    bio: string;
}

const initialFormData: FormData = {
    email: '',
    password: '',
    confirmPassword: '',
    firstName: '',
    lastName: '',
    country: '',
    avatar: null,
    bio: ''
};

const FormContext = createContext<{
    formData: FormData;
    updateFormData: (data: Partial<FormData>) => void;
}>({
    formData: initialFormData,
    updateFormData: () => { }
});

export function FormProvider({ children }: { children: React.ReactNode }) {
    const [formData, setFormData] = useState<FormData>(initialFormData);

    const updateFormData = (newData: Partial<FormData>) => {
        setFormData(prev => ({ ...prev, ...newData }));
    };

    return (
        <FormContext.Provider value={{ formData, updateFormData }}>
            {children}
        </FormContext.Provider>
    );
}

export const useFormData = () => useContext(FormContext); 