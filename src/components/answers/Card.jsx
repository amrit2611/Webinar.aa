export function Card() {
    return <div className="border border-gray-200 rounded-2xl h-84 bg-white col-span-12 md:col-span-3 shadow-lg md:-translate-y-20 mb-10 md:block hidden p-2 overflow-hidden">
        <img src="https://res.cloudinary.com/drtum4zzh/image/upload/v1744395152/UserProfileImage_tbodcc.png" alt="profile_img" className="w-24 mx-auto mt-10" />
        <div className="mt-6 mx-2 overflow-auto">
            <div className="text-center font-bold">Shinchan Nohara</div>
            <div className="text-center text-gray-600 text-sm mt-4">shinchan@y.com</div>
            <div className="text-center text-gray-600 text-sm mb-2">656546588</div>
            <div className="text-center text-gray-600 text-sm mb-20">Tokyo, Japan</div>
        </div>
    </div>
}