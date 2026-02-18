"use client";

const GlobalErrorPage = ({ error }: { error: Error }) => {
    return (
        <html lang="en">
            <body>
                <h2>Something went wrong! {error.message}</h2>
            </body>
        </html>
    );
};

export default GlobalErrorPage;
