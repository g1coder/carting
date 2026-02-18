import { NextRequest, NextResponse } from "next/server";
import { publicRoute, privateRoute } from "shared/constants";
import { ACCESS_TOKEN_NAME } from "shared/api";
import { decryptKey } from "shared/lib";

export const config = {
    matcher: ["/((?!api|_next/static|.*svg|.*png|.*jpg|.*jpeg|.*gif|.*webp|_next/image|favicon.ico).*)"],
};

const publicPaths = Object.values(publicRoute) as string[];
const privatePaths = Object.values(privateRoute) as string[];

export default async function middleware(req: NextRequest) {
    const pathname = req.nextUrl.pathname;
    const isPrivateRoute = privatePaths.includes(pathname);
    const isPublicRoute = publicPaths.includes(pathname);
    const accessToken = req.cookies.get(ACCESS_TOKEN_NAME)?.value;
    const decryptedAccessToken = accessToken && (await decryptKey(accessToken));

    if (isPrivateRoute && !decryptedAccessToken) {
        return NextResponse.redirect(new URL(publicRoute.SIGN_IN, req.nextUrl));
    }

    if (isPublicRoute && decryptedAccessToken && !req.nextUrl.pathname.startsWith(privateRoute.MAIN)) {
        return NextResponse.redirect(new URL(privateRoute.MAIN, req.nextUrl));
    }

    return NextResponse.next();
}
