import { NavLink } from "react-router-dom";

function UserInfos() {
    return (
        <div className="bg-blue-900 p-2 flex flex-row gap-2 justify-start items-center">
            <div><NavLink to="account">Avatar</NavLink></div>
            <div>Username</div>
            <div>15</div>
            <div>Experience</div>
            <div>🪙 35258</div>
        </div>
    );
};

export default UserInfos;
