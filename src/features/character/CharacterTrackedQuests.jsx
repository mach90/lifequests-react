import Card from "../../ui/Card";
import { FaBookBookmark } from "react-icons/fa6";
import Modal from "../../ui/Modal";
import Button from "../../ui/Button";
import Hello from "../../ui/Hello";

const characterTrackedQuestsContainerStyle = "col-span-3 row-span-full";

function CharacterTrackedQuests() {
    return (
        <div className={characterTrackedQuestsContainerStyle}>
            <Card title="Tracked Contracts" icon={FaBookBookmark}>
            {/* <Modal>
                <Modal.Open opens="quest-infos">
                    <Button type="small" label="Show quest"/>
                </Modal.Open>
                <Modal.Window name="quest-infos">
                    <Hello />
                </Modal.Window>

                <Modal.Open opens="contract-infos">
                    <Button type="small" label="Show contract"/>
                </Modal.Open>
                <Modal.Window name="contract-infos">
                    <Hello />
                </Modal.Window>
            </Modal> */}
            </Card>
        </div>
    );
};

export default CharacterTrackedQuests;
