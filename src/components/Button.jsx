
export const Button = ({
    disabled,
    children,
    onClick
}) => {
    return <>
        <div onClick={onClick} className={`mt-8 font-medium cursor-pointer px-32 py-4 rounded-xl ${disabled ? "bg-[var(--custom-grey-400)] text-white" : "bg-green-400 text-black"}`}>
            {children}
        </div>
    </>
}