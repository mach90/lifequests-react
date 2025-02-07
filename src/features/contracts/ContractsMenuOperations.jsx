import Filter from "../../ui/Filter";
import SortBy from "../../ui/SortBy";

const contractsMenuOperationsStyle = "flex flex-row gap-8 p-4 border-b-2 border-slate-800 w-full justify-center";

function ContractsMenuOperations() {
    return (
        <div className={contractsMenuOperationsStyle}>
            <Filter 
                filterField="status"
                options={[
                    {value: "all", label:"All"},
                    {value: "active", label:"Active"},
                    {value: "finished", label:"Finished"},
                ]}
                color="variant2"
            />
            <SortBy 
                options={[
                    { value: "status-asc", label: "Sort by status (active first)" },
                    { value: "status-desc", label: "Sort by status (finished first)" },
                    { value: "quest.name-asc", label: "Sort by quest name (A-Z)" },
                    { value: "quest.name-desc", label: "Sort by quest name (Z-A)" },
                    { value: "finishedAt-desc", label: "Sort by finish date (recent first)" },
                    { value: "finishedAt-asc", label: "Sort by finish date (oldest first)" },
                ]}
                color="variant2"
            />
        </div>
    );
};

export default ContractsMenuOperations;
