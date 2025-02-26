import Filter from "../../ui/Filter";
import SortBy from "../../ui/SortBy";

const questsMenuOperationsStyle = "flex flex-row justify-center items-center";

function QuestsMenuOperations() {
    return (
        <div className={questsMenuOperationsStyle}>
            <Filter 
                filterField="difficulty"
                options={[
                    {value: "all", label:"All"},
                    {value: "easy", label:"Easy"},
                    {value: "medium", label:"Medium"},
                    {value: "hard", label:"Hard"},
                ]}
                color="variant6"
            />
            <SortBy 
                options={[
                    { value: "name-asc", label: "Sort A-Z ↑" },
                    { value: "name-desc", label: "Sort Z-A ↓" },
                    { value: "reward.experience-desc", label: "Sort XP ↓" },
                    { value: "reward.money-desc", label: "Sort money ↓" },
                ]}
                color="variant6"
            />
        </div>
    );
};

export default QuestsMenuOperations;
