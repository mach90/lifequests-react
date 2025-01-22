// import { useForm } from "react-hook-form";
// import Button from "../../ui/Button";
// import Form from "../../ui/Form";
// import FormRow from "../../ui/FormRow";
// import Input from "../../ui/Input";

// import { useUpdateUser } from "./useUpdateUser";

// function UpdatePasswordForm() {
//   const { register, handleSubmit, formState, getValues, reset } = useForm();
//   const { errors } = formState;

//   const { updateUser, isUpdating } = useUpdateUser();

//   function onSubmit({ password }) {
//     updateUser({ password }, { onSuccess: reset });
//   }

//   return (
//     <Form onSubmit={handleSubmit(onSubmit)}>
//       <FormRow
//         label="New password (min 8 chars)"
//         error={errors?.password?.message}
//       >
//         <Input
//           type="password"
//           id="password"
//           autoComplete="current-password"
//           disabled={isUpdating}
//           {...register("password", {
//             required: "This field is required",
//             minLength: {
//               value: 8,
//               message: "Password needs a minimum of 8 characters",
//             },
//           })}
//         />
//       </FormRow>

//       <FormRow
//         label="Confirm new password"
//         error={errors?.passwordConfirm?.message}
//       >
//         <Input
//           type="password"
//           autoComplete="new-password"
//           id="passwordConfirm"
//           disabled={isUpdating}
//           {...register("passwordConfirm", {
//             required: "This field is required",
//             validate: (value) =>
//               getValues().password === value || "Passwords need to match",
//           })}
//         />
//       </FormRow>
//       <FormRow>
//         <Button onClick={reset} type="reset" variation="secondary">
//           Cancel
//         </Button>
//         <Button disabled={isUpdating}>Update password</Button>
//       </FormRow>
//     </Form>
//   );
// }

// export default UpdatePasswordForm;

import { useState } from "react";
import { useUpdatePassword } from "./useUpdatePassword";

const formStyle = "flex flex-col gap-4 justify-center items-center w-max p-6";
const formRowStyle = "flex flex-col gap-2";
const inputStyle = "bg-white border-2 border-[#e3e2dc] p-2 rounded-lg text-[#474646]";
const buttonStyle = "bg-slate-700 hover:bg-variant1 text-white font-bold px-4 py-2 rounded-lg shadow-md disabled:opacity-50 disabled:cursor-not-allowed";
const errorMessageStyle = "text-red-500 text-sm mt-1";

function UpdateUserPasswordForm() {
    const [formData, setFormData] = useState({
        passwordCurrent: "",
        password: "",
        passwordConfirm: ""
    });
    
    const { updateUserPassword, isUpdating, error } = useUpdatePassword();

    function handleChange(e) {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    }

    function handleSubmit(e) {
        e.preventDefault();
        
        if (!formData.passwordCurrent || !formData.password || !formData.passwordConfirm) return;
        if (formData.password !== formData.passwordConfirm) {
            // You might want to handle this error state in the UI
            return;
        }
        
        updateUserPassword(formData, {
            onSuccess: () => {
                // Clear form after successful update
                setFormData({
                    passwordCurrent: "",
                    password: "",
                    passwordConfirm: ""
                });
            }
        });
    }

    const isValid = 
        formData.passwordCurrent && 
        formData.password && 
        formData.passwordConfirm && 
        formData.password === formData.passwordConfirm;

    return (
        <form onSubmit={handleSubmit} className={formStyle}>
            <div className={formRowStyle}>
                <input
                    type="password"
                    id="passwordCurrent"
                    name="passwordCurrent"
                    placeholder="Current Password"
                    value={formData.passwordCurrent}
                    onChange={handleChange}
                    disabled={isUpdating}
                    className={inputStyle}
                    required
                    minLength={8}
                />
            </div>
            <div className={formRowStyle}>
                <input
                    type="password"
                    id="password"
                    name="password"
                    placeholder="New Password"
                    value={formData.password}
                    onChange={handleChange}
                    disabled={isUpdating}
                    className={inputStyle}
                    required
                    minLength={8}
                />
            </div>
            <div className={formRowStyle}>
                <input
                    type="password"
                    id="passwordConfirm"
                    name="passwordConfirm"
                    placeholder="Confirm New Password"
                    value={formData.passwordConfirm}
                    onChange={handleChange}
                    disabled={isUpdating}
                    className={inputStyle}
                    required
                    minLength={8}
                />
            </div>
            
            {error && (
                <div className={errorMessageStyle}>
                    {error.message}
                </div>
            )}
            
            {formData.password && formData.passwordConfirm && 
             formData.password !== formData.passwordConfirm && (
                <div className={errorMessageStyle}>
                    Passwords do not match
                </div>
            )}

            <div className={formRowStyle}>
                <button 
                    type="submit"
                    disabled={isUpdating || !isValid}
                    className={buttonStyle}
                >
                    {!isUpdating ? "Update Password" : "Updating..."}
                </button>
            </div>
        </form>
    );
}

export default UpdateUserPasswordForm;