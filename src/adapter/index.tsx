import { ArgVal } from "./types.d";

export const isNumericValidation = (value: ArgVal): boolean =>
    !!(
        value !== null &&
        /^[0-9]+$/g.test(value as string) === false &&
        value !== "" &&
        value !== undefined &&
        value !== null
    );