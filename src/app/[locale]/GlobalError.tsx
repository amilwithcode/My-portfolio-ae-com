export default function GlobalError({
    error,
}: {
    error: Error & { digest?: string }
}) {
    return (
        <html>
            <body className="text-black dark:bg-black dark:text-white">
                <h2>Something went wrong!</h2>
                <p>{error.message}</p>
            </body>
        </html>
    );
}
