
export const Input = ({
    onClick,
    type,
    placeholder
}) => {
    return <>
        <div onClick={onClick} className={`font-normal rounded-xl bg-[var(--custom-blue-700)] my-4`}>
            <input type={type} placeholder={placeholder} className="rounded px-8 outline-none py-4"/>
        </div>
    </>
}