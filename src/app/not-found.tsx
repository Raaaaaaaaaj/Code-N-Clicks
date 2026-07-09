import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex flex-col items-center justify-center text-center p-4">
      <span className="text-sm font-semibold uppercase tracking-wider text-primary mb-2">404 Error</span>
      <h1 className="text-4xl md:text-6xl font-bold mb-4 text-brand-graphite">Page Not Found</h1>
      <p className="text-muted-foreground max-w-md mb-8">
        The page you are looking for does not exist or has been moved. Let's get you back on track.
      </p>
      <Link
        href="/"
        className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-white font-semibold rounded-lg hover:bg-primary/90 transition-colors text-sm"
      >
        Go Back Home <ArrowRight className="w-4 h-4" />
      </Link>
    </div>
  );
}
