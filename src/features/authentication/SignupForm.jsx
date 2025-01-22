import { useState } from "react";
import { useSignup } from "./useSignup";

const signupFormStyle = "flex flex-col gap-4 justify-center items-center w-max p-6";
const signupFormRowStyle = "flex flex-col gap-2 w-full";
const signupFormInputStyle = "bg-white border-2 border-[#e3e2dc] p-2 rounded-lg text-[#474646]";
const signupFormButtonStyle = "bg-slate-700 hover:bg-variant1 text-white font-bold px-4 py-2 rounded-lg shadow-md";

function SignupForm() {
    const [name, setName] = useState("Jean")
    const [email, setEmail] = useState("jean@example.com");
    const [password, setPassword] = useState("test123456");
    const [passwordConfirm, setPasswordConfirm] = useState("test123456");
    const {signup, isLoading} = useSignup();

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
                <button disabled={isLoading} className={signupFormButtonStyle}>
                    {!isLoading ? "Register" : "Loading..."}
                </button>
            </div>
        </form>
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