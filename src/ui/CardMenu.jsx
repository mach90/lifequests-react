import Filter from "./Filter";
import Pagination from "./Pagination";
import SortBy from "./SortBy";

function CardMenu({ title, icon: IconComponent, legend, sort, filter, pagination, totalCount, results, children }) {
    const cardStyle = "flex flex-col p-5 gap-5 bg-main2 border border-main3 rounded-3xl h-full w-full justify-start items-start";
    const cardHeaderStyle = "w-full flex flex-row gap-2.5 justify-between items-center";
    const cardFilterContainerStyle = "w-full h-max flex justify-center items-center";
    const cardTitleStyle = "uppercase text-base text-neutral0 font-bold flex flex-row gap-2 items-center";
    const cardLegendStyle = "uppercase text-xs text-neutral500 font-bold";
    const cardChildrenStyle = "w-full h-full flex flex-col justify-between";

    return (
        <div className={cardStyle}>
            <div className={cardHeaderStyle}>
                <h3 className={cardTitleStyle}>{IconComponent && <IconComponent size={16} />} {title}</h3>
                {!sort && <h4 className={cardLegendStyle}>{legend}</h4>}
                {sort === "Skills" && <SortBy 
                    options={[
                        { value: "name-asc", label: "Sort A-Z ↑" },
                        { value: "name-desc", label: "Sort Z-A ↓" },
                        { value: "level-asc", label: "Sort level ↑" },
                        { value: "level-desc", label: "Sort level ↓" },
                        { value: "category-asc", label: "Sort category ↑" },
                        { value: "category-desc", label: "Sort category ↓" },
                    ]}
                />}
                {sort === "Guilds" && <SortBy 
                    options={[
                        { value: "name-asc", label: "Sort A-Z ↑" },
                        { value: "name-desc", label: "Sort Z-A ↓" },
                    ]}
                />}
                {sort === "Quests" && <SortBy 
                    options={[
                        { value: "name-asc", label: "Sort A-Z ↑" },
                        { value: "name-desc", label: "Sort Z-A ↓" },
                        { value: "duration-asc", label: "Sort duration ↑" },
                        { value: "reward.experience-desc", label: "Sort XP ↓" },
                        { value: "reward.money-desc", label: "Sort money ↓" },
                    ]}
                />}
                {sort === "Contracts" && <SortBy 
                    options={[
                        { value: "status-asc", label: "Sort active first" },
                        { value: "status-desc", label: "Sort finished first" },
                        // { value: "questName-asc", label: "Sort A-Z ↑" },
                        // { value: "questName-desc", label: "Sort A-Z ↓" },
                        { value: "createdAt-desc", label: "Sort recent" },
                        { value: "createdAt-asc", label: "Sort oldest" },
                        { value: "finishedAt-desc", label: "Sort finished ↓" },
                        { value: "finishedAt-asc", label: "Sort finished ↑" },
                    ]}
                />}
                {sort === "Inventory" && <SortBy 
                    options={[
                        { value: "name-asc", label: "Sort AZ ↑" },
                        { value: "name-desc", label: "Sort ZA ↓" }
                    ]}
                />}
            </div>
            <div className={cardFilterContainerStyle}>
                {filter === "Guilds" && <Filter 
                    filterField="company.name"
                    options={[
                        {value: "all", label:"All companies"},
                        {value: "Naturalists", label:"🌿"},
                        {value: "Crafters", label:"⚒️"},
                        {value: "Specialists", label:"🛠️"},
                        {value: "Champions", label:"🎖️"},
                        {value: "Artists", label:"🖌️"},
                        {value: "Synergists", label:"🗣️"},
                    ]}
                />}
                {filter === "Skills" && <Filter 
                    filterField="category"
                    options={[
                        {value: "all", label:"All"},
                        {value: "technical", label:"Tech."},
                        {value: "social", label:"Soc."},
                        {value: "physical", label:"Phys."},
                        {value: "fourth", label:"Four."},
                        {value: "fifth", label:"Fif."},
                    ]}
                />}
                {filter === "Quests" && <Filter 
                    filterField="difficulty"
                    options={[
                        {value: "all", label:"All"},
                        {value: "easy", label:"Easy"},
                        {value: "medium", label:"Medium"},
                        {value: "hard", label:"Hard"},
                    ]}
                />}
                {filter === "Contracts" && <Filter 
                    filterField="status"
                    options={[
                        {value: "all", label:"All"},
                        {value: "active", label:"Active"},
                        {value: "finished", label:"Finished"},
                    ]}
                />}
                {filter === "Inventory" && <Filter 
                    filterField="type"
                    options={[
                        {value: "all", label:"All"},
                        {value: "app", label:"App"},
                        {value: "image", label:"Image"},
                        {value: "book", label:"Book"},
                        {value: "document", label:"Document"},
                    ]}
                />}
            </div>
            <div className={cardChildrenStyle}>
                {children}
            </div>
            {pagination && <Pagination totalCount={totalCount} results={results} />}
        </div>
    );
};

export default CardMenu;
