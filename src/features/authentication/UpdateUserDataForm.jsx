import { useState } from "react";
import { useUpdateUser } from "./useUpdateUser";

const loginFormStyle = "flex flex-col gap-4 justify-center items-center w-max p-6";
const loginFormRowStyle = "flex flex-col gap-2";
const loginFormInputStyle = "bg-white border-2 border-[#e3e2dc] p-2 rounded-lg text-[#474646]";
const loginFormButtonStyle = "bg-slate-700 hover:bg-variant1 text-white font-bold px-4 py-2 rounded-lg shadow-md disabled:opacity-50 disabled:cursor-not-allowed";
const errorMessageStyle = "text-red-500 text-sm mt-1";

function UpdateUserDataForm() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        photo: ""
    });
    const { updateUser, isUpdating, error } = useUpdateUser();

    function handleChange(e) {
        const { name, type } = e.target;
        
        if (type === "file") {
            const file = e.target.files[0];
            setFormData(prev => ({
                ...prev,
                [name]: file
            }));
        } else {
            const { value } = e.target;
            setFormData(prev => ({
                ...prev,
                [name]: value
            }));
        }
    }

    function handleSubmit(e) {
        e.preventDefault();
        
        // Create FormData object for handling file upload
        const submitData = new FormData();
        
        // Only append non-empty values
        Object.entries(formData).forEach(([key, value]) => {
            if (key === "photo") {
                if (value) submitData.append(key, value);
            } else {
                if (value.trim() !== "") submitData.append(key, value);
            }
        });
        
        if ([...submitData.entries()].length === 0) return;
        
        updateUser(submitData, {
            onSuccess: () => {
                // Clear form after successful update
                setFormData({ name: "", email: "", photo: null });
            }
        });
    }

    return (
        <form onSubmit={handleSubmit} className={loginFormStyle}>
            <div className={loginFormRowStyle}>
                <input
                    type="text"
                    id="name"
                    name="name"
                    placeholder="Username"
                    autoComplete="username"
                    value={formData.name}
                    onChange={handleChange}
                    disabled={isUpdating}
                    className={loginFormInputStyle}
                />
            </div>
            <div className={loginFormRowStyle}>
                <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="Email"
                    autoComplete="email"
                    value={formData.email}
                    onChange={handleChange}
                    disabled={isUpdating}
                    className={loginFormInputStyle}
                />
            </div>
            <div className={loginFormRowStyle}>
                <input
                    type="file"
                    id="photo"
                    name="photo"
                    accept="image/*"
                    onChange={handleChange}
                    disabled={isUpdating}
                    className={loginFormInputStyle}
                />
            </div>
            {error && (
                <div className={errorMessageStyle}>
                    {error.message}
                </div>
            )}
            <div className={loginFormRowStyle}>
            <button 
                type="submit"
                disabled={isUpdating || (!formData.name && !formData.email && !formData.photo)} 
                className={loginFormButtonStyle}
            >
                {!isUpdating ? "Update" : "Updating..."}
            </button>
            </div>
        </form>
    );
}

export default UpdateUserDataForm;