import {IPromiseDelay, IPromiseResult} from "@/types/helper.types";
import {DELAY_MAX, DELAY_MIN} from "@/constants/Constants";

export function getPromiseDelay (): IPromiseDelay {
    return Math.random() > 0.5 ? DELAY_MIN : DELAY_MAX;
}

export function getPromiseResult(): IPromiseResult {
    return Math.random() > 0.5 ? 'success' : 'error';
}