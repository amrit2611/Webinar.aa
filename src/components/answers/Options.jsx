import { PlusIcon } from "./icons/PlusIcon";
import { RecordIcon } from "./icons/RecordIcon";
import { ScheduleWebinarIcon } from "./icons/ScheduleWebinarIcon";

export function Options() {
    return (
        <div className="border border-gray-200 h-60 lg:h-52 shadow-lg rounded-2xl bg-white col-span-4 md:translate-y-10 transition-all duration-300 ease-in-out grid grid-cols-2 grid-rows-2 overflow-clip md:block md:h-80 lg:grid ">
            <div className=" col-span-1 row-span-1 mx-auto my-auto p-4 text-[var(--custom-blue-900)]">
                <div className="flex justify-center bg-[var(--custom-green-icon)] p-3 mx-8 mb-2 md:w-12 md:mx-auto lg:mx-8 lg:w-auto">
                    <ScheduleWebinarIcon />
                </div>
                <div className="text-xs text-center font-semibold text-black">Schedule a Webinar</div>
            </div>
            <div className="col-span-1 row-span-1 mx-auto my-auto p-4 text-[var(--custom-blue-900)]">
                <div className="flex justify-center bg-[var(--custom-green-icon)] p-3 mx-8 mb-2 md:w-12 md:mx-auto lg:mx-8 lg:w-auto">
                    <PlusIcon />
                </div>
                <div className="text-xs text-center font-semibold text-black">Join a Webinar</div>
            </div>
            <div className="col-span-1 row-span-1 mx-auto my-auto p-4 text-[var(--custom-blue-900)]">
                <div className="flex justify-center bg-[var(--custom-green-icon)] p-3 mx-8 mb-2 md:w-12 md:mx-auto lg:mx-8 lg:w-auto">
                    <RecordIcon />
                </div>
                <div className="text-xs text-center font-semibold text-black">Open Recordings</div>
            </div>
        </div>
    )
} 