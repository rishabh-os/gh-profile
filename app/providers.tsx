"use client";
import { HeroUIProvider } from "@heroui/react";
import { ThemeProvider } from "next-themes";
import posthog from "posthog-js";
import { PostHogProvider } from "posthog-js/react";

if (typeof window !== "undefined") {
	// biome-ignore lint/style/noNonNullAssertion: <explanation>
	posthog.init(process.env.NEXT_PUBLIC_POSTHOG_KEY!, {
		api_host: process.env.NEXT_PUBLIC_POSTHOG_HOST,
		person_profiles: "identified_only", // or 'always' to create profiles for anonymous users as well
	});
}
export function CSPostHogProvider({ children }: { children: React.ReactNode }) {
	return <PostHogProvider client={posthog}>{children}</PostHogProvider>;
}

export function CSThemeProvider({ children }: { children: React.ReactNode }) {
	return (
		<HeroUIProvider>
			<ThemeProvider attribute="class" defaultTheme="dark">
				{children}
			</ThemeProvider>
		</HeroUIProvider>
	);
}
