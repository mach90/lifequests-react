import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useUser } from "../features/authentication/useUser";
import LoadingSpinner from "./LoadingSpinner";
import toast from "react-hot-toast";

function ProtectedRoute({children}) {
    const navigate = useNavigate();

    const {isPending, isAuthenticated} = useUser();

    useEffect(function() {
        if (!isAuthenticated && !isPending) navigate("/login");
        if (!isAuthenticated && isPending) return;
        if (!isAuthenticated) toast.error("You need to log in to access the app");
    }, [isAuthenticated, isPending, navigate]); 
    
    if(isPending) return <div><LoadingSpinner /></div>

    if(isAuthenticated) return children;

    return null;
};

export default ProtectedRoute;