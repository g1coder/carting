import { enqueueSnackbar } from "notistack";
import { AxiosError } from "axios";
import { ErrorModel } from "../api";

const onError = (error: unknown, msg?: string) => {
    const _error = error as AxiosError<ErrorModel>;
    const message =
        (_error.isAxiosError && (_error.response?.data.message || _error.response?.statusText)) || "Some error!";

    enqueueSnackbar({
        message: msg || message,
        variant: "error",
    });
};

const onSuccess = (message: string = "Успешно!") => {
    enqueueSnackbar({
        message,
        variant: "success",
    });
};

export const defaultHandler = {
    onError,
    onSuccess,
} as const;
