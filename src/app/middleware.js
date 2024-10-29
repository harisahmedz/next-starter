import NextAuth from "next-auth";
import authConfig from "./auth.config";

const { auth } = NextAuth(authConfig);

export default auth(async (req) => {
  const { pathname } = req.nextUrl;
  const authData = req.auth;

  // Redirect to "/" or "/signup" if unauthenticated or token is expired
  if (!authData?.accessToken || Date.now() >= authData.accessTokenExpires) {
    if (pathname !== "/" && pathname !== "/signup") {
      return Response.redirect(new URL("/", req.url));
    }
    return;
  }

  // If authenticated, handle redirection based on store creation and approval status
  if (authData?.accessToken) {
    const { isStoreCreated, isStoreApproved, isIBANProvided } = authData;
    console.log(isStoreCreated, isStoreApproved, isIBANProvided, authData);
    // Redirect to the dashboard if the store is created and approved
    if (isStoreCreated && isStoreApproved && isIBANProvided) {
      if (
        pathname === "/" ||
        pathname === "/signup" ||
        pathname === "/store/create"
      ) {
        console.log("---here", pathname);
        return Response.redirect(new URL("/dashboard", req.url));
      }
    } else {
      // If either store creation or approval is pending, restrict access to "/store"
      if (pathname.startsWith("/store") && pathname !== "/store/create") {
        return Response.redirect(new URL("/store/create", req.url));
      }

      // Redirect to "/store/create" if accessing restricted paths
      if (
        pathname !== "/store/create" &&
        (pathname === "/" ||
          pathname === "/signup" ||
          pathname.startsWith("/dashboard"))
      ) {
        return Response.redirect(new URL("/store/create", req.url));
      }
    }
  }
});

export const config = {
  matcher: [
    "/dashboard/:path*",
    "/store/:path*",
    "/store/create",
    "/signup",
    "/",
  ],
};
