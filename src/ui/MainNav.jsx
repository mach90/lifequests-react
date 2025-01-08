import { NavLink } from "react-router-dom";

function MainNav() {
    return (
        <nav className="bg-orange-500 flex flex-row gap-4 justify-end items-center p-2">
            <ul><NavLink to="character">Character</NavLink></ul>
            <ul><NavLink to="skills">Skills</NavLink></ul>
            <ul><NavLink to="guilds">Guilds</NavLink></ul>
            <ul><NavLink to="quests">Quests</NavLink></ul>
            <ul><NavLink to="inventory">Inventory</NavLink></ul>
            <ul>Logout</ul>
        </nav>
    );
};

export default MainNav;
