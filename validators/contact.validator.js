import { z } from "zod";

export const ContactSchema = z.object({
  name: z.string().min(2).max(60),
  email: z.string().email(),
  message: z.string().min(10),
});