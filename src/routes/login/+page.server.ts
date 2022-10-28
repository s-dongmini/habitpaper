import { loginPOST } from "$lib/_api";
import { invalid } from "@sveltejs/kit";
import type { Actions } from "./$types";

export const actions: Actions = {
    default: async ({ request }) => {
        // const form = await request.formData();

        // const id = form.get('id') as string;
        // const password = form.get('id') as string;

        // const result = await loginPOST(id, password);
        // console.log(result);
    }
}