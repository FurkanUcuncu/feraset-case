import {addDoc, collection} from "@firebase/firestore";
import {db} from "@/db/db";
import {PROMPTS_PATH} from "@/constants/Constants";

export const createLogoApi = async ({prompt, style}: {prompt: string, style: string}) => {
    return await addDoc(collection(db, PROMPTS_PATH), {
        prompt,
        logoStyle: style,
    });
}