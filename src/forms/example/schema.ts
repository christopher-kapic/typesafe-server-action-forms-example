import { z } from "zod"

export const SignUpSchema = z.object({
    email: z.string().email("Enter a real email please.").describe("Email // Please enter a valid email."),
    password: z.string().describe("Password // Please enter a password."),
    isOver18: z.boolean(),
    age: z.number().positive().describe("Age // Your age must be positive.")
});