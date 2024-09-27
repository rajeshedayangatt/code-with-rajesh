"use client";
import { sendGAEvent } from "@next/third-parties/google";
import { useEffect } from "react";

export default function AnalyticsEvents(title: any) {
  useEffect(() => {
    sendGAEvent("event", "blog-viewed", { value: title });
  }, []);

  return null;
}
