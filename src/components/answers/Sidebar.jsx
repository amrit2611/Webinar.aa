import { BillingIcon } from "./icons/BillingIcon"
import { HomeIcon } from "./icons/HomeIcon"
import { SettingsIcon } from "./icons/SettingsIcon"
import { UserManagementIcon } from "./icons/UserManagementIcon"
import { WebinarIcon } from "./icons/WebinarIcon"
import { SidebarToggle } from "./SidebarToggle"

export function SidebarComponent({ sidebarOpen, setSidebarOpen }) {
    if (sidebarOpen) {
        return (
            <div className="w-64 md:w-96 border bg-white border-gray-400 h-screen fixed md:relative transition-all duration-200 ease-in-out">
                <div className="cursor-pointer p-2 hover:bg-slate-200" onClick={() => {
                    setSidebarOpen(!sidebarOpen)
                }}>
                    <SidebarToggle />
                </div>
                <div className="mx-5">
                    <div className="flex place-content-between hover:bg-slate-200 p-2 my-2">
                        <div>Home</div>
                        <HomeIcon />
                    </div>
                    <div className="flex place-content-between hover:bg-slate-200 p-2 my-2">
                        <div>Webinars</div>
                        <WebinarIcon />
                    </div>
                    <div className="flex place-content-between hover:bg-slate-200 p-2 my-2">
                        <div>Billing</div>
                        <BillingIcon />
                    </div>
                    <div className="flex place-content-between hover:bg-slate-200 p-2 my-2">
                        <div>User Management</div>
                        <UserManagementIcon />
                    </div>
                    <div className="flex place-content-between hover:bg-slate-200 p-2 my-2">
                        <div>Settings</div>
                        <SettingsIcon />
                    </div>
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