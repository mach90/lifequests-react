import Filter from "../../ui/Filter";
import SortBy from "../../ui/SortBy";

const guildsMenuOperationsStyle = "flex flex-auto gap-8 p-4 border-b-2 border-slate-800 w-full justify-center";

function GuildsMenuOperations() {
    return (
        <div className={guildsMenuOperationsStyle}>
            {/* <Filter 
                filterField="company"
                options={[
                    {value: "all", label:"All"},
                    {value: "naturalists", label:"naturalists"},
                    {value: "crafters", label:"crafters"},
                    {value: "specialists", label:"specialists"},
                    {value: "champions", label:"champions"},
                    {value: "artists", label:"artists"},
                    {value: "synergists", label:"synergists"},
                ]}
                color="variant3"
            /> */}
            <SortBy 
                options={[
                    { value: "name-asc", label: "Sort by name (A-Z)" },
                    { value: "name-desc", label: "Sort by name (Z-A)" },
                ]}
                color="variant3"
            />
        </div>
    );
};

export default GuildsMenuOperations;
