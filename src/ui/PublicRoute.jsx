import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useUser } from "../features/authentication/useUser";
import LoadingSpinner from "./LoadingSpinner";

function PublicRoute({children}) {
    const navigate = useNavigate();

    const { isPending, isAuthenticated } = useUser();

    useEffect(function() {
        if (isAuthenticated && !isPending) navigate("/character");
    }, [isAuthenticated, isPending, navigate]);

    if (isPending) return <div><LoadingSpinner /></div>;

    if (!isAuthenticated) return children;

    return null;
}

export default PublicRoute;