import { NextRequest, NextResponse } from "next/server";

export const config = {
    matcher: ["/((?!api|_next/static|.*svg|.*png|.*jpg|.*jpeg|.*gif|.*webp|_next/image|favicon.ico).*)"],
};

export default async function middleware(_: NextRequest) {
    return NextResponse.next();
}
