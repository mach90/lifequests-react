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
                    { value: "status-asc", label: "Sort active first" },
                    { value: "status-desc", label: "Sort finished first" },
                    // { value: "quest.name-asc", label: "Sort by quest name (A-Z)" },
                    // { value: "quest.name-desc", label: "Sort by quest name (Z-A)" },
                    { value: "createdAt-desc", label: "Sort recent" },
                    { value: "createdAt-asc", label: "Sort oldest" },
                    { value: "finishedAt-desc", label: "Sort finished ↓" },
                    { value: "finishedAt-asc", label: "Sort finished ↑" },
                ]}
                color="variant2"
            />
        </div>
    );
};

export default ContractsMenuOperations;
