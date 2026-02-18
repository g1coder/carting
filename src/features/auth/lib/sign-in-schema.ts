import { z as zod } from "zod";

export const signInSchema = zod.object({
    email: zod.string().min(1, { message: "Field required" }).email(),
    password: zod.string().min(1, { message: "Field required" }),
});

export type SignInValues = zod.infer<typeof signInSchema>;
