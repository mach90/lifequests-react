import Filter from "../../ui/Filter";
import SortBy from "../../ui/SortBy";

const questsMenuOperationsStyle = "flex flex-auto gap-8 p-4 border-b-2 border-slate-800 w-full justify-center";

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
                    { value: "name-asc", label: "Sort by name (A-Z)" },
                    { value: "name-desc", label: "Sort by name (Z-A)" },
                    { value: "reward.experience-desc", label: "Highest experience first" },
                    { value: "reward.money-desc", label: "Highest money first" },
                ]}
                color="variant6"
            />
        </div>
    );
};

export default QuestsMenuOperations;
