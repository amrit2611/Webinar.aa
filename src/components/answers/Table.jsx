import { CalendarIcon } from "./icons/CalendarIcon";
import { DownArrowIcon } from "./icons/DownArrowIcon";
import { LeftArrowIcon } from "./icons/LeftArrowIcon";
import { RightArrowIcon } from "./icons/RightArrowIcon";

export function Table() {
    return <div className="col-span-12 md:col-span-5 overflow-visible mb-10">
        <div className="mx-2">
            <div className="mt-2 mb-4">Sunday, 26 November</div>
            <div className="text-2xl font-bold text-[var(--custom-blue-greet)]">Good morning, Shinchan!</div>
        </div>
        <div className="border border-gray-300 h-72 bg-white rounded-2xl shadow-lg mb-10 transition-all duration-200 ease-in-out p-2 mt-5 overflow-clip">
            <div className="flex place-content-between bg-gray-200 my-2 mx-4 p-2">
                <div className="flex">
                    <CalendarIcon />
                    <div className="mx-2 font-medium">Sunday, 26 Novenmber 2000</div>
                    <DownArrowIcon />
                </div>
                <div className="flex gap-2">
                    <LeftArrowIcon />
                    <RightArrowIcon />
                </div>
            </div>
            <div className="grid grid-rows-4 divide-y-1 divide-gray-300 mx-4">
                <div className="row-span-1 grid grid-cols-5 divide-x-1  divide-[var(--custom-green-divide)] ">
                    <div className="col-span-1">
                        <div className="font-medium">11.30 AM</div>
                        <div className="text-xs ">11.30 AM</div>
                    </div>
                    <div className="col-span-4 p-2">
                        <div className="text-xs">Live</div>
                        <div className="font-medium">UX Webinar</div>
                    </div>
                </div>
                <div className="row-span-1 grid grid-cols-5 divide-x-1 divide-[var(--custom-green-divide)]">
                    <div className="col-span-1">
                        <div className="font-medium">11.30 AM</div>
                        <div className="text-xs ">11.30 AM</div>
                    </div>
                    <div className="col-span-4 p-2">
                        <div className="text-xs">Upcoming</div>
                        <div className="font-medium">My first Webinar</div>
                    </div>
                </div>
                <div className="row-span-1 grid grid-cols-5 divide-x-1 divide-[var(--custom-green-divide)]">
                    <div className="col-span-1">
                        <div className="font-medium">11.30 AM</div>
                        <div className="text-xs ">11.30 AM</div>
                    </div>
                    <div className="col-span-4 p-2">
                        <div className="text-xs">Upcoming</div>
                        <div className="font-medium">Important Webinar</div>
                    </div>
                </div>
                <div className="row-span-1 grid grid-cols-5 divide-x-1 divide-[var(--custom-green-divide)]">
                    <div className="col-span-1">
                        <div className="font-medium">11.30 AM</div>
                        <div className="text-xs ">11.30 AM</div>
                    </div>
                    <div className="col-span-4 p-2">
                        <div className="text-xs">Upcoming</div>
                        <div className="font-medium">Webinar 1</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
}