"use client";

import { Card } from "@/components/ui/card";
import { FormProgress } from "./form-progress";

interface FormLayoutProps {
  children: React.ReactNode;
  title: string;
  description: string;
}

export function FormLayout({ children, title, description }: FormLayoutProps) {
  return (
    <div className="max-w-2xl mx-auto space-y-6">
      <FormProgress />
      <Card className="p-6 space-y-6">
        <div className="space-y-2">
          <h1 className="text-2xl font-semibold">{title}</h1>
          <p className="text-muted-foreground">{description}</p>
        </div>
        {children}
      </Card>
    </div>
  );
}