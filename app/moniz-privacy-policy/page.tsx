import type { NextPage } from "next";
import Link from "next/link";

const Page: NextPage = () => {
	return (
		<div>
			<h1 className="text-center text-4xl font-bold pt-12 pb-4">
				Moniz Privacy Policy
			</h1>
			<div className="text-lg p-8">
				This privacy policy describes how Moniz (the &quot;App&quot;) collects,
				uses, and protects your data. Because Moniz is Free and Open Source
				Software (FOSS), the code is publicly available for review, which allows
				for greater transparency.
			</div>
			<div className="text-lg p-8">
				<div className="text-xl font-bold pb-4">Data Collection:</div>
				Moniz collects the following data: <br />
				<span className="font-bold">Crash Reports:</span> When the App crashes,
				anonymized crash reports are generated and sent to Sentry (sentry.io).
				These reports help us identify and fix bugs. These reports may contain
				information about your device model, operating system version, and the
				state of the App at the time of the crash. They do not include personal
				information that could identify you. You can learn more about
				Sentry&apos;s data processing practices{" "}
				<Link
					href="https://sentry.io/privacy/"
					className="underline decoration-2 decoration-double"
				>
					here
				</Link>
				.
				<br />
				<span className="font-bold">Anonymous Usage Statistics:</span> We
				collect anonymized usage statistics using PostHog (posthog.com). This
				data helps us understand how Moniz is being used and improve its
				functionality. This data is anonymized and does not identify you
				personally. You can learn more about PostHog&apos;s data processing
				practices{" "}
				<Link
					href="https://posthog.com/privacy"
					className="underline decoration-2 decoration-double"
				>
					here
				</Link>
				.
			</div>

			<div className="text-lg px-8 pb-8">
				<div className="font-bold py-4">Data Use:</div> Any data collected by
				Moniz is used solely for the purpose of improving the App and fixing
				bugs. We do not sell your data to third parties.{" "}
				<div className="font-bold py-4">Data Sharing:</div> We share anonymized
				crash reports with Sentry for the purpose of improving Moniz&apos;s
				stability. We share anonymized usage statistics with PostHog to
				understand how Moniz is used. We will never share your personal
				information with third parties for marketing or advertising purposes.{" "}
				<div className="font-bold py-4">Changes to this Privacy Policy:</div> We
				may update this Privacy Policy from time to time. Any changes will be
				posted within the app or on [Specify where, e.g., the app&apos;s
				website/repository]. Your continued use of Moniz following the posting
				of such changes constitutes your acceptance of the revised Privacy
				Policy. <div className="font-bold py-4">Contact Us:</div> If you have
				any questions about this Privacy Policy, please contact us at:
				<br />
				<Link
					href="mailto:rishabhwanjari1@gmail.com"
					className="underline decoration-2"
				>
					rishabhwanjari1@gmail.com
				</Link>
				<br />
				<Link
					href={"https://github.com/rishabh-os/moniz"}
					className="underline decoration-2"
				>
					GitHub repository
				</Link>
			</div>
		</div>
	);
};

export default Page;
