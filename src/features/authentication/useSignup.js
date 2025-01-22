// import { useMutation } from "@tanstack/react-query";
// import { signup as signupApi } from "../../services/apiAuth";
// import { toast } from "react-hot-toast";

// export function useSignup() {
//   const { mutate: signup, isLoading } = useMutation({
//     mutationFn: signupApi,
//     onSuccess: (user) => {
//       toast.success(
//         "Account successfully created! Please verify the new account from the user's email address."
//       );
//     },
//   });

//   return { signup, isLoading };
// }

/* //////////////////////////////////////////////////
router.post("/signup", signup); authController.js
////////////////////////////////////////////////// */

import { useMutation, useQueryClient } from "@tanstack/react-query";
import { signup as signupApi } from "../../services/apiAuth";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

export function useSignup() {
    const queryClient = useQueryClient();
    const navigate = useNavigate();
    
    const {mutate: signup, isLoading} = useMutation({
        mutationFn: ({name, email, password, passwordConfirm}) => signupApi(name, email, password, passwordConfirm),
        onSuccess: async (newUser) => {
            queryClient.setQueryData(["user"], newUser);
            queryClient.invalidateQueries(["user"]);
            navigate("/character", {replace: true});
            toast.success("Welcome !");
        },
        onError: (error) => {
            toast.error(error.message || "Account creation failed.");
        }
    })

    return {signup, isLoading};
};
