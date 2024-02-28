export { default } from "next-auth/middleware";

export const config = {
  matcher: ["/profile", "/api/movies/:path*", "/api/user/:path*"],
};
