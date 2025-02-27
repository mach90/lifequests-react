import { NavLink } from "react-router-dom";
import Button from "../ui/Button";
import { GiCompass } from "react-icons/gi";

const pageNotFoundContainerStyle = "bg-[url(/background-404.avif)] bg-cover bg-center flex flex-col p-5 gap-2.5 h-screen max-w-screen";
const pageNotFoundContentStyle = "flex flex-col w-full h-full justify-center items-center gap-4";
const pageNotFoundH1Style = "text-9xl leading-none font-bold text-neutral0";
const pageNotFoundH2Style = "text-3xl leading-none font-medium text-neutral500";
const pageNotFoundPStyle = "text-xl leading-none font-medium text-neutral500";
const pageNotFoundButtonsStyle = "flex flex-row gap-4 justify-center items-center";
const pageNotFoundCompassStyle = "text-9xl text-neutral0 animate-random";

function PageNotFound() {
    return (
        <div className={pageNotFoundContainerStyle}>
            <div className={pageNotFoundContentStyle}>
                <h1 className={pageNotFoundH1Style}>404</h1>
                <h2 className={pageNotFoundH2Style}>You are lost at sea</h2>
                <p className={pageNotFoundPStyle}>Where do you want to go ?</p>
                <GiCompass className={pageNotFoundCompassStyle} />
                <div className={pageNotFoundButtonsStyle}>
                    <NavLink to="/login"><Button type="small" label="Login" /></NavLink>
                    <NavLink to="/character"><Button type="small" label="App" /></NavLink>
                </div>
            </div>
        </div>
    );
};

export default PageNotFound;
