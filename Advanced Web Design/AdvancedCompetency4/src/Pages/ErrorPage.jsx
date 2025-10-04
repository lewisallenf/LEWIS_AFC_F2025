import React from "react";
import { useRouteError, Link } from "react-router-dom";
import {
    Alert,
    Container,
    Button
} from "reactstrap";

const ErrorPage = () => {
    const error = useRouteError();
    console.error("Routing Error:", error);

    const getStatusMessage = () => {
        if (error?.status === 404) {
            return "Page Not Found";
        }
        if (error?.status === 500) {
            return "Internal Server Error";
        }
        return error?.statusText || "Unexpected Error";
    };

    return (
        <Container className="py-5 text-center">
            <Alert color="danger" className="p-4">
                <h1 className="display-4">Oops! Something went wrong.</h1>
                <p className="lead mb-3">
                    We couldn't find the page you were looking for, or an unexpected error occurred.
                </p>

                {error?.status && (
                    <p className="text-muted">
                        <strong>Error {error.status}:</strong> {getStatusMessage()}
                    </p>
                )}

                <p className="mt-4">
                    This may be due to a broken link, mistyped URL, or server issue.
                </p>

                <hr />

                <div className="mt-4 d-flex justify-content-center gap-3">
                    <Button color="primary" tag={Link} to="/">
                        Go to Homepage
                    </Button>
                    <Button color="secondary" onClick={() => window.history.back()}>
                        Go Back
                    </Button>
                </div>
            </Alert>
        </Container>
    );
};

export default ErrorPage;
