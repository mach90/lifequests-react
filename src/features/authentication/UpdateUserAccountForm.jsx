import { useDeleteUser } from "./useDeleteUser";
import Card from "../../ui/Card";
import Modal from "../../ui/Modal";
import Confirm from "../../ui/Confirm";
import Button from "../../ui/Button";

const containerStyle = "flex flex-col gap-10 justify-center items-center w-full h-full";

function UpdateUserAccountForm() {
    const { deleteUser, isPending, error } = useDeleteUser();

    return (
        <Card title="Account">
            <div className={containerStyle}>
                <Modal>
                    <Modal.Open opens="confirm-account-deactivation">
                        <Button type="danger" label="Delete account" />
                    </Modal.Open>
                    <Modal.Window name="confirm-account-deactivation">
                        <Confirm 
                            actionType="danger" 
                            resourceName="Account deletion (definitive)" 
                            information="Your account will be deactivated permanently. This action cannot be undone." 
                            onConfirm={() => deleteUser()} 
                            disabled={isPending} />
                    </Modal.Window>
                </Modal>
            </div>
        </Card>
    );
};

export default UpdateUserAccountForm;