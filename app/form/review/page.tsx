"use client";

import { FormLayout } from "@/components/form/form-layout";
import { Button } from "@/components/ui/button";
import { useFormStore } from "@/lib/store";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { useToast } from "@/hooks/use-toast"; // Correct import for useToast

export default function Review() {
  const router = useRouter();
  const { formData, setFormData } = useFormStore();
  const toast = useToast(); // Correct usage

  useEffect(() => {
    toast({
      title: "Success.",
      description: "Your action was successful.",
      status: "success",
      duration: 5000,
      isClosable: true,
    });
    setFormData({ currentStep: 4 });
  }, [setFormData, toast]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormData({ isSubmitting: true });

    // Simulate API call
    setTimeout(() => {
      setFormData({ isSubmitting: false });
      toast({
        title: "Success!",
        description: "Your form has been submitted successfully.",
        status: "success",
        duration: 5000,
        isClosable: true,
      });
      router.push("/");
    }, 1500);
  };

  return (
    <FormLayout title="Review" description="Please review your information.">
      <div className="space-y-6">
        <div className="grid grid-cols-2 gap-4">
          <div>
            <h3 className="font-semibold mb-2">Personal Information</h3>
            <dl className="space-y-1">
              <div>
                <dt className="text-sm text-muted-foreground">Name</dt>
                <dd>
                  {formData.firstName} {formData.lastName}
                </dd>
              </div>
              <div>
                <dt className="text-sm text-muted-foreground">Email</dt>
                <dd>{formData.email}</dd>
              </div>
              <div>
                <dt className="text-sm text-muted-foreground">Phone</dt>
                <dd>{formData.phone}</dd>
              </div>
            </dl>
          </div>
          <div>
            <h3 className="font-semibold mb-2">Address</h3>
            <dl className="space-y-1">
              <div>
                <dt className="text-sm text-muted-foreground">Street</dt>
                <dd>{formData.street}</dd>
              </div>
              <div>
                <dt className="text-sm text-muted-foreground">City</dt>
                <dd>{formData.city}</dd>
              </div>
              <div>
                <dt className="text-sm text-muted-foreground">State</dt>
                <dd>{formData.state}</dd>
              </div>
              <div>
                <dt className="text-sm text-muted-foreground">ZIP Code</dt>
                <dd>{formData.zipCode}</dd>
              </div>
            </dl>
          </div>
        </div>
        <div>
          <h3 className="font-semibold mb-2">Preferences</h3>
          <ul className="space-y-1">
            <li className="flex items-center">
              <span className="text-sm text-muted-foreground mr-2">
                Push Notifications:
              </span>
              {formData.notifications ? "Enabled" : "Disabled"}
            </li>
            <li className="flex items-center">
              <span className="text-sm text-muted-foreground mr-2">
                Email Newsletter:
              </span>
              {formData.newsletter ? "Subscribed" : "Not subscribed"}
            </li>
            <li className="flex items-center">
              <span className="text-sm text-muted-foreground mr-2">
                Product Updates:
              </span>
              {formData.updates ? "Enabled" : "Disabled"}
            </li>
          </ul>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="flex justify-between">
            <Button
              type="button"
              variant="outline"
              onClick={() => router.push("/form/preferences")}
            >
              Previous
            </Button>
            <Button type="submit" disabled={formData.isSubmitting}>
              {formData.isSubmitting ? "Submitting..." : "Submit"}
            </Button>
          </div>
        </form>
      </div>
    </FormLayout>
  );
}
