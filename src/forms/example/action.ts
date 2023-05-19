// action.ts
"use server";

import { zact } from "zact/server";
import { SignUpSchema } from "./schema";

export const validatedAction = zact(SignUpSchema)(
  async (input) => {
    console.log(input)
  }
);