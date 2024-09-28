"use client";
import { sendGAEvent } from "@next/third-parties/google";
import { useEffect } from "react";

export default function AnalyticsEvents({ title }: { title: string }) {
  useEffect(() => {
    sendGAEvent("event", "blog-viewed", { value: title });
  }, [title]);

  return null;
}
