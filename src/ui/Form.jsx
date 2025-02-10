const formStyle = "flex flex-col gap-10 justify-center items-center w-full h-full";

function Form({onSubmit, children}) {
    return (
        <form onSubmit={onSubmit} className={formStyle}>
            {children}
        </form>
    );
};

export default Form;
