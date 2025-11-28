"use client";

import { useCallback } from "react";

type EventName =
    | "WALLET_CONNECT"
    | "GENERATE_POAP_START"
    | "GENERATE_POAP_SUCCESS"
    | "GENERATE_POAP_ERROR"
    | "MINT_POAP_START"
    | "MINT_POAP_SUCCESS"
    | "MINT_POAP_ERROR"
    | "TEMPLATE_SELECTED"
    | "SHARE_CLICK"
    | "EXPLORER_VIEW"
    | "NAVIGATION_CLICK";

interface AnalyticsEvent {
    name: EventName;
    properties?: Record<string, any>;
}

export function useAnalytics() {
    const trackEvent = useCallback(({ name, properties = {} }: AnalyticsEvent) => {
        // In development, log to console
        if (process.env.NODE_ENV === "development") {
            console.groupCollapsed(`[Analytics] ${name}`);
            console.log("Properties:", properties);
            console.log("Timestamp:", new Date().toISOString());
            console.groupEnd();
        }

        // TODO: Integrate with real analytics provider (e.g., PostHog, Google Analytics)
        // Example: posthog.capture(name, properties);
    }, []);

    return { trackEvent };
}
