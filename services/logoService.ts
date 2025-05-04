import {addDoc, collection} from "@firebase/firestore";
import {db} from "@/db/db";
import {PROMPTS_PATH} from "@/constants/Constants";
import {ICreateLogoParam} from "@/types/logo.types";

export const createLogoApi = async ({prompt, logoStyle}: ICreateLogoParam) => {
    return await addDoc(collection(db, PROMPTS_PATH), {
        prompt,
        logoStyle
    });
}