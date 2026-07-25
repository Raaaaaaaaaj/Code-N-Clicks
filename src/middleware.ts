import { withAuth } from "next-auth/middleware";

export default withAuth({
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
});

export const config = {
  matcher: ["/admin/:path*"],
};
