import { NextRequest } from "next/server";
import { cookies } from "next/headers";
import { ACCESS_TOKEN_NAME, SignInRequest } from "shared/api";
import { userSessions } from "../_session-store/session-store";

type Slug = "sign-in" | "sign-up" | "sign-out";

export async function POST(request: NextRequest, { params }: { params: { slug: Slug } }) {
    const cookieStore = await cookies();

    let status = 404;
    let response = null;

    switch (params.slug) {
        case "sign-in":
            {
                const { email, password } = (await request.json()) as SignInRequest;
                const encryptedAccessToken = await userSessions.signIn(email, password);

                if (encryptedAccessToken) {
                    cookieStore.set(ACCESS_TOKEN_NAME, encryptedAccessToken, {
                        httpOnly: true,
                        secure: true,
                        expires: new Date(Date.now() + 10 * 60 * 1000),
                        sameSite: "lax",
                        path: "/",
                    });

                    status = 200;
                    response = { success: true };
                } else {
                    status = 401;
                    response = { success: false, error: "Invalid login or password" };
                }
            }
            break;

        case "sign-out": {
            await userSessions.signOut(request.cookies.get(ACCESS_TOKEN_NAME)?.value);
            cookieStore.delete(ACCESS_TOKEN_NAME);

            status = 200;
            response = { success: true };
        }
    }

    return new Response(JSON.stringify(response), {
        status,
    });
}
