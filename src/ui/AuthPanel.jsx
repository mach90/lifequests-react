const authFormPanelStyle = "flex flex-col gap-4 justify-center items-center bg-container w-[30%] p-6 rounded-lg";

function AuthPanel({children}) {
    return (
        <div className={authFormPanelStyle}>
            {children}
        </div>
    );
};

export default AuthPanel;
