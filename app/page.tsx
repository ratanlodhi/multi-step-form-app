"use client";

import { useFormStore } from "@/lib/store";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { motion } from "framer-motion";
import Link from "next/link";

export default function Home() {
  const resetForm = useFormStore((state) => state.resetForm);

  return (
    <div className="max-w-2xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Card className="p-6 space-y-6">
          <div className="space-y-2 text-center">
            <h1 className="text-3xl font-bold">Welcome to Multi-Step Form</h1>
            <p className="text-muted-foreground">
              Complete this form to share your information with us. Your progress
              will be saved automatically.
            </p>
          </div>
          
          <div className="flex justify-center space-x-4">
            <Button asChild>
              <Link href="/form/personal">Start New Form</Link>
            </Button>
            <Button variant="outline" onClick={resetForm}>
              Reset Progress
            </Button>
          </div>
        </Card>
      </motion.div>
    </div>
  );
}