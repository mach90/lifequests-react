const formErrorStyle = "text-red2 w-full font-medium px-4 h-24";

function FormError({ error }) {
    return (
        <div className={formErrorStyle}>
            {error && error.message}
        </div>
    );
};

export default FormError;
