import { useState } from "react";
import { NavLink } from "react-router-dom";
import { useSignup } from "./useSignup";
import LoadingSpinner from "../../ui/LoadingSpinner";

const signupTitlestyle = "text-2xl font-bold text-white";
const signupFormStyle = "flex flex-col gap-4 justify-center items-center w-full p-6";
const signupFormRowStyle = "flex flex-col gap-2 w-full";
const signupFormRow2Style = "flex flex-row gap-2 w-full px-6";
const signupFormLabelStyle = "flex flex-row gap-2 font-medium text-white";
const signupFormInputStyle = "bg-stone-950 border border-gray-500 p-2 rounded-lg text-white";
const signupFormButtonSubmitStyle = "bg-variant2 disabled:bg-gray-800 disabled:cursor-not-allowed hover:bg-variant1 text-white font-bold px-4 py-2 rounded-lg shadow-md";
const signupFormButtonLinkStyle = "bg-slate-700 hover:brightness-90 text-white text-sm font-bold px-4 py-2 rounded-lg shadow-md w-full text-center";

function SignupForm() {
    const [name, setName] = useState("Jean")
    const [email, setEmail] = useState("jean@example.com");
    const [password, setPassword] = useState("test123456");
    const [passwordConfirm, setPasswordConfirm] = useState("test123456");
    const [isChecked, setIsChecked] = useState(false);
    const {signup, isPending: isLoading} = useSignup();

    function handleSubmit(e) {
        e.preventDefault();
        if(!name || !email || !password || !passwordConfirm) return;
        signup({name, email, password, passwordConfirm}, {
          onSettled: () => {
            setName("");
            setEmail("");
            setPassword("");
            setPasswordConfirm("");
          }
        });
    }

    return (
        <>
            <h2 className={signupTitlestyle}>Register</h2>
            <form onSubmit={handleSubmit} className={signupFormStyle}>
                <div className={signupFormRowStyle}>
                    <input
                        type="text"
                        id="name"
                        placeholder="Name"
                        autoComplete="name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        disabled={isLoading}
                        className={signupFormInputStyle}
                    />
                    <input
                        type="email"
                        id="email"
                        placeholder="Email address"
                        autoComplete="username"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        disabled={isLoading}
                        className={signupFormInputStyle}
                    />
                </div>
                <div className={signupFormRowStyle}>
                    <input
                        type="password"
                        id="password"
                        placeholder="*****"
                        autoComplete="new-password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        disabled={isLoading}
                        className={signupFormInputStyle}
                    />
                </div> 
                <div className={signupFormRowStyle}>
                    <input
                        type="password"
                        id="passwordConfirm"
                        placeholder="*****"
                        autoComplete="new-password"
                        value={passwordConfirm}
                        onChange={(e) => setPasswordConfirm(e.target.value)}
                        disabled={isLoading}
                        className={signupFormInputStyle}
                    />
                </div>
                <div className={signupFormRowStyle}>
                    <label className={signupFormLabelStyle}>
                        <input 
                            type="checkbox"
                            checked={isChecked}
                            onChange={(e) => setIsChecked(e.target.checked)}
                            className={signupFormInputStyle}
                        />
                        I agree to the terms and conditions
                    </label>
                </div>
                <div className={signupFormRowStyle}>
                    <button disabled={isLoading || !isChecked} className={signupFormButtonSubmitStyle}>
                        {isLoading ? <LoadingSpinner size="sm" /> : "Register" }
                    </button>
                </div>
            </form>
            <div className={signupFormRow2Style}>
                <NavLink to="/login" className={signupFormButtonLinkStyle}>Already registered ?</NavLink>
            </div>
        </>
    );
};

export default SignupForm;

// import { useForm } from "react-hook-form";
// import Button from "../../ui/Button";
// import Form from "../../ui/Form";
// import FormRow from "../../ui/FormRow";
// import Input from "../../ui/Input";
// import { useSignup } from "./useSignup";

// // Email regex: /\S+@\S+\.\S+/

// function SignupForm() {
//   const { signup, isLoading } = useSignup();
//   const { register, formState, getValues, handleSubmit, reset } = useForm();
//   const { errors } = formState;

//   function onSubmit({ fullName, email, password }) {
//     signup(
//       { fullName, email, password },
//       {
//         onSettled: () => reset(),
//       }
//     );
//   }

//   return (
//     <Form onSubmit={handleSubmit(onSubmit)}>
//       <FormRow label="Full name" error={errors?.fullName?.message}>
//         <Input
//           type="text"
//           id="fullName"
//           disabled={isLoading}
//           {...register("fullName", { required: "This field is required" })}
//         />
//       </FormRow>

//       <FormRow label="Email address" error={errors?.email?.message}>
//         <Input
//           type="email"
//           id="email"
//           disabled={isLoading}
//           {...register("email", {
//             required: "This field is required",
//             pattern: {
//               value: /\S+@\S+\.\S+/,
//               message: "Please provide a valid email address",
//             },
//           })}
//         />
//       </FormRow>

//       <FormRow
//         label="Password (min 8 characters)"
//         error={errors?.password?.message}
//       >
//         <Input
//           type="password"
//           id="password"
//           disabled={isLoading}
//           {...register("password", {
//             required: "This field is required",
//             minLength: {
//               value: 8,
//               message: "Password needs a minimum of 8 characters",
//             },
//           })}
//         />
//       </FormRow>

//       <FormRow label="Repeat password" error={errors?.passwordConfirm?.message}>
//         <Input
//           type="password"
//           id="passwordConfirm"
//           disabled={isLoading}
//           {...register("passwordConfirm", {
//             required: "This field is required",
//             validate: (value) =>
//               value === getValues().password || "Passwords need to match",
//           })}
//         />
//       </FormRow>

//       <FormRow>
//         {/* type is an HTML attribute! */}
//         <Button
//           variation="secondary"
//           type="reset"
//           disabled={isLoading}
//           onClick={reset}
//         >
//           Cancel
//         </Button>
//         <Button disabled={isLoading}>Create new user</Button>
//       </FormRow>
//     </Form>
//   );
// }

// export default SignupForm;