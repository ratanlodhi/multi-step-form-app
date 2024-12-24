"use client";

import { FormLayout } from "@/components/form/form-layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useFormStore } from "@/lib/store";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function AddressInformation() {
  const router = useRouter();
  const { formData, setFormData } = useFormStore();

  useEffect(() => {
    setFormData({ currentStep: 2 });
  }, [setFormData]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    router.push("/form/preferences");
  };

  return (
    <FormLayout
      title="Address Details"
      description="Please provide your address information."
    >
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="street">Street Address</Label>
          <Input
            id="street"
            value={formData.street}
            onChange={(e) => setFormData({ street: e.target.value })}
            required
          />
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="city">City</Label>
            <Input
              id="city"
              value={formData.city}
              onChange={(e) => setFormData({ city: e.target.value })}
              required
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="state">State</Label>
            <Input
              id="state"
              value={formData.state}
              onChange={(e) => setFormData({ state: e.target.value })}
              required
            />
          </div>
        </div>
        <div className="space-y-2">
          <Label htmlFor="zipCode">ZIP Code</Label>
          <Input
            id="zipCode"
            value={formData.zipCode}
            onChange={(e) => setFormData({ zipCode: e.target.value })}
            required
          />
        </div>
        <div className="flex justify-between">
          <Button
            type="button"
            variant="outline"
            onClick={() => router.push("/form/personal")}
          >
            Previous
          </Button>
          <Button type="submit">Next Step</Button>
        </div>
      </form>
    </FormLayout>
  );
}