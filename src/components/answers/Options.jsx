import { PlusIcon } from "./icons/PlusIcon";
import { RecordIcon } from "./icons/RecordIcon";
import { ScheduleWebinarIcon } from "./icons/ScheduleWebinarIcon";

export function Options() {
    return (
        <div className="border h-60 shadow-lg rounded-2xl bg-white col-span-4 md:translate-y-10 transition-all duration-200 ease-in-out grid grid-cols-2 grid-rows-2 ">
            <div className=" col-span-1 row-span-1 mx-auto my-auto p-4 text-[var(--custom-blue-900)]">
                <div className="flex justify-center bg-[var(--custom-green-icon)] p-3 mx-8 mb-2">
                    <ScheduleWebinarIcon />
                </div>
                <div className="text-xs text-center font-semibold text-black">Schedule a Webinar</div>
            </div>
            <div className="col-span-1 row-span-1 mx-auto my-auto p-4 text-[var(--custom-blue-900)]">
                <div className="flex justify-center bg-[var(--custom-green-icon)] p-3 mx-8 mb-2">
                    <PlusIcon />
                </div>
                <div className="text-xs text-center font-semibold text-black">Join a Webinar</div>
            </div>
            <div className="col-span-1 row-span-1 mx-auto my-auto p-4 text-[var(--custom-blue-900)]">
                <div className="flex justify-center bg-[var(--custom-green-icon)] p-3 mx-8 mb-2">
                    <RecordIcon />
                </div>
                <div className="text-xs text-center font-semibold text-black">Open Recordings</div>
            </div>
        </div>
    )
} 