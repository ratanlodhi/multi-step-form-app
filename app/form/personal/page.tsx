"use client";

import { FormLayout } from "@/components/form/form-layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useFormStore } from "@/lib/store";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function PersonalInformation() {
  const router = useRouter();
  const { formData, setFormData } = useFormStore();

  useEffect(() => {
    setFormData({ currentStep: 1 });
  }, [setFormData]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    router.push("/form/address");
  };

  return (
    <FormLayout
      title="Personal Information"
      description="Please provide your basic information."
    >
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="firstName">First Name</Label>
            <Input
              id="firstName"
              value={formData.firstName}
              onChange={(e) => setFormData({ firstName: e.target.value })}
              required
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="lastName">Last Name</Label>
            <Input
              id="lastName"
              value={formData.lastName}
              onChange={(e) => setFormData({ lastName: e.target.value })}
              required
            />
          </div>
        </div>
        <div className="space-y-2">
          <Label htmlFor="email">Email</Label>
          <Input
            id="email"
            type="email"
            value={formData.email}
            onChange={(e) => setFormData({ email: e.target.value })}
            required
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="phone">Phone Number</Label>
          <Input
            id="phone"
            type="tel"
            value={formData.phone}
            onChange={(e) => setFormData({ phone: e.target.value })}
            required
          />
        </div>
        <div className="flex justify-end">
          <Button type="submit">Next Step</Button>
        </div>
      </form>
    </FormLayout>
  );
}