import { AxiosError } from "axios";
import { FieldValues, Path, UseFormSetError } from "react-hook-form";
import { ErrorModel } from "../api";

export const applyValidationErrors = <T extends FieldValues>(
    axiosError: AxiosError<ErrorModel>,
    setError: UseFormSetError<T>,
    asRoot?: boolean
) => {
    if (!axiosError.isAxiosError) {
        return;
    }

    const message = axiosError.response?.data.message || axiosError.response?.statusText;
    const errors = axiosError.response?.data.errors;

    if (asRoot && message) {
        setError("root", { message });
    }

    if (errors) {
        const result: Record<string, string[]> = {};

        const addErrorFn = (field: string, error: string) => {
            if (!result[field]) {
                result[field] = [];
            }
            result[field].push(error);
        };

        Object.entries(errors).forEach(([field, fieldErrors]) => {
            if (Array.isArray(fieldErrors)) {
                fieldErrors.forEach((error) => addErrorFn(field, error));
            } else {
                addErrorFn(field, fieldErrors);
            }
        });

        for (const [fieldName, errors] of Object.entries(result)) {
            setError(fieldName as Path<T>, {
                message: errors.join("; "),
            });
        }
    }
};
