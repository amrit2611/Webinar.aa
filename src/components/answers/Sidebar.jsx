import { SidebarToggle } from "./SidebarToggle"

export function SidebarComponent({ sidebarOpen, setSidebarOpen }) {
    if (sidebarOpen) {
        return (
            <div className="w-48 md:w-96 border bg-amber-200 h-screen fixed md:relative transition-all duration-200 ease-in-out">
                <div className="cursor-pointer p-2 hover:bg-slate-200" onClick={() => {
                    setSidebarOpen(!sidebarOpen)
                }}>
                    <SidebarToggle />
                </div>
            </div>
        )
    } else {
        return (
            <div className="fixed top-0 left-0 cursor-pointer hover:bg-slate-200 md:text-white p-2 hover:text-black text-black" onClick={() => {
                setSidebarOpen(!sidebarOpen)
            }}>
                <SidebarToggle />
            </div>
        )
    }
}