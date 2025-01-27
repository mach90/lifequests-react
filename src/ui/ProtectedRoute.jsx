import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useUser } from "../features/authentication/useUser";
import LoadingSpinner from "./LoadingSpinner";
import toast from "react-hot-toast";

function ProtectedRoute({children}) {
    const navigate = useNavigate();

    const {isLoading, isAuthenticated} = useUser();

    useEffect(function() {
        if (!isAuthenticated && !isLoading) navigate("/login");
        if (!isAuthenticated && isLoading) return;
        if (!isAuthenticated) toast.error("You need to log in to access the app");
    }, [isAuthenticated, isLoading, navigate]); 
    
    if(isLoading) return <div><LoadingSpinner /></div>

    if(isAuthenticated) return children;

    return null;
};

export default ProtectedRoute;