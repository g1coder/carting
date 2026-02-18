export interface ErrorModel {
    message?: string | null;
    errors?: { [key: string]: Array<string> } | null;
}
