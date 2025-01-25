import { useDeleteUser } from "./useDeleteUser";

const updateUserAccountButtonStyle = "bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-sm focus:outline-hidden focus:shadow-outline";

function UpdateUserAccountForm() {
    const { deleteUser, isDeleting, error } = useDeleteUser();

    return (
        <div>
            <button onClick={() => deleteUser()} disabled={isDeleting} className={updateUserAccountButtonStyle}>Delete account</button>
        </div>
    );
};

export default UpdateUserAccountForm;