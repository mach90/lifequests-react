import { api } from "./api";

/* ////////////////////////////////////////////////////////////////////////////////////////////////////
SIGNUP
//////////////////////////////////////////////////////////////////////////////////////////////////// */
export const signup = async ({name, email, password, passwordConfirm}) => {
    try {
        const res = await api.post("/users/signup", { 
            name, 
            email, 
            password, 
            passwordConfirm 
        });

        if(res.data.status === "success") {
            return res.data;
        }

    } catch(err) {
        throw new Error(err?.response?.data?.message || "Signup failed");
    }
}

/* ////////////////////////////////////////////////////////////////////////////////////////////////////
LOGIN
//////////////////////////////////////////////////////////////////////////////////////////////////// */
export const login = async ({email, password}) => {
    try {
        const res = await api.post("/users/login", { 
            email, 
            password 
        });

        if(res.data.status === "success") {
            return res.data.data.user;
        }

    } catch(err) {
        throw new Error(err?.response?.data?.message || "Login failed");
    }
}

/* ////////////////////////////////////////////////////////////////////////////////////////////////////
LOGOUT
//////////////////////////////////////////////////////////////////////////////////////////////////// */
export const logout = async () => {
    try {
        const res = await api.get("/users/logout");

        if(res.data.status === "success") {
            return res.data;
        }

    } catch(err) {
        throw new Error(err?.response?.data?.message || "Logout failed");
    }
}

/* ////////////////////////////////////////////////////////////////////////////////////////////////////
UPDATE PASSWORD
//////////////////////////////////////////////////////////////////////////////////////////////////// */
export const updatePassword = async ({passwordCurrent, password, passwordConfirm}) => {
    try {
        const res = await api.patch("/users/updateMyPassword", {
            passwordCurrent,
            password,
            passwordConfirm
        });

        if(res.data.status === "success") {
            return res.data.data.user;
        }

    } catch(err) {
        throw new Error(err?.response?.data?.message || "Password update failed");
    }
}

/* ////////////////////////////////////////////////////////////////////////////////////////////////////
FORGOT PASSWORD
//////////////////////////////////////////////////////////////////////////////////////////////////// */
export const forgotPassword = async({email}) => {
    try {
        const res = await api.post("/users/forgotPassword", {
            email
        });

        if(res.data.status === "success") {
            return res.data;
        }

    } catch(err) {
        throw new Error(err?.response?.data?.message || "Forgot password request failed");
    }
}

/* ////////////////////////////////////////////////////////////////////////////////////////////////////
RESET PASSWORD
//////////////////////////////////////////////////////////////////////////////////////////////////// */
export const resetPassword = async({token, password, passwordConfirm}) => {
    try {
        const res = await api.patch(`/users/resetPassword/${token}`, {
            password,
            passwordConfirm
        });

        if(res.data.status === "success") {
            return res.data;
        }

    } catch(err) {
        throw new Error(err?.response?.data?.message || "Password reset failed");
    }
}