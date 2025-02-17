import { useDeleteUser } from "./useDeleteUser";
import Card from "../../ui/Card";
import Form from "../../ui/Form";
import Modal from "../../ui/Modal";
import Confirm from "../../ui/Confirm";
import FormRow from "../../ui/FormRow";
import Button from "../../ui/Button";

const updateUserAccountButtonStyle = "bg-red1 hover:bg-red2 text-neutral0 font-bold py-2 px-4 rounded-sm focus:outline-hidden focus:shadow-outline";
const updateUserAccountDangerLabelStyle = "text-red2 font-bold";

function UpdateUserAccountForm() {
    const { deleteUser, isDeleting, error } = useDeleteUser();

    return (
        <Card title="Account">
            {/* <Form>
                <FormRow>
                    <p className={updateUserAccountDangerLabelStyle}>Deactivate account (irreversible)</p>
                    <Button type="danger" label="Deactivate account" onClick={() => deleteUser()} disabled={isDeleting} className={updateUserAccountButtonStyle}/>
                </FormRow>
            </Form> */}
            <Modal>
                <Modal.Open opens="confirm-account-deactivation">
                    <Button type="danger" label="Delete account" />
                </Modal.Open>
                <Modal.Window name="confirm-account-deactivation">
                    <Confirm actionType="delete" resourceName="Account deletion (definitive)" onConfirm={() => deleteUser()} disabled={isDeleting} />
                </Modal.Window>
            </Modal>
        </Card>
    );
};

export default UpdateUserAccountForm;