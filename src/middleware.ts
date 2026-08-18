import { withAuth } from "next-auth/middleware";
import { NextResponse } from "next/server";

export default withAuth(
  function middleware(req) {
    // Return 410 Gone for all previous location URLs
    if (req.nextUrl.pathname.startsWith("/locations")) {
      return new NextResponse("410 Gone - This location page has been permanently removed.", { status: 410 });
    }
    return NextResponse.next();
  },
  {
    callbacks: {
      authorized: ({ req, token }) => {
        const path = req.nextUrl.pathname;
        // Protect all /admin routes except /admin/login and /admin/register
        if (path.startsWith("/admin") && !path.startsWith("/admin/login") && !path.startsWith("/admin/register")) {
          return token !== null;
        }
        return true;
      },
    },
  }
);

export const config = {
  matcher: ["/admin/:path*", "/locations", "/locations/:path*"],
};
