import { useRef } from "react";

export const Otp = ({ number }) => {
    const ref = useRef(Array(number).fill(0));
    return <div className="flex justify-center">
        {Array(number).fill(1).map((x, index) => <SubOtpBox reference={(e) => ref.current[index] = e} key={index} onDone={() => {
            console.log(ref);
            console.log(index);
            if (index + 1 >= number) {
                return;
            }
            ref.current[index + 1].focus()
        }} goBack={() => {
            if (index == 0) {
                return;
            }
            ref.current[index - 1].focus();
        }}
        />)}
    </div>
}

function SubOtpBox({
    reference, onDone, goBack
}) {
    return <div>
        <input ref={reference} onChange={(e) => {
            onDone()
        }} type="text" className="bg-[var(--custom-blue-700)] w-[40px] h-[50px] mx-1 rounded-2xl px-4 outline-none text-white" />
    </div>
}