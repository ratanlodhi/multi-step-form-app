"use client";

import { FormLayout } from "@/components/form/form-layout";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { useFormStore } from "@/lib/store";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function Preferences() {
  const router = useRouter();
  const { formData, setFormData } = useFormStore();

  useEffect(() => {
    setFormData({ currentStep: 3 });
  }, [setFormData]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    router.push("/form/review");
  };

  return (
    <FormLayout
      title="Preferences"
      description="Please set your communication preferences."
    >
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <Label htmlFor="notifications">Push Notifications</Label>
            <Switch
              id="notifications"
              checked={formData.notifications}
              onCheckedChange={(checked) =>
                setFormData({ notifications: checked })
              }
            />
          </div>
          <div className="flex items-center justify-between">
            <Label htmlFor="newsletter">Email Newsletter</Label>
            <Switch
              id="newsletter"
              checked={formData.newsletter}
              onCheckedChange={(checked) => setFormData({ newsletter: checked })}
            />
          </div>
          <div className="flex items-center justify-between">
            <Label htmlFor="updates">Product Updates</Label>
            <Switch
              id="updates"
              checked={formData.updates}
              onCheckedChange={(checked) => setFormData({ updates: checked })}
            />
          </div>
        </div>
        <div className="flex justify-between">
          <Button
            type="button"
            variant="outline"
            onClick={() => router.push("/form/address")}
          >
            Previous
          </Button>
          <Button type="submit">Review</Button>
        </div>
      </form>
    </FormLayout>
  );
}