export function Card() {
    return <div className="border border-gray-400 rounded-2xl h-96 bg-white col-span-12 md:col-span-3 shadow-lg md:-translate-y-20 mb-10 md:block hidden p-2 overflow-hidden">
        <img src="src/components/answers/icons/UserProfileImage.png" alt="profile_img" className="w-20 mx-auto mt-10" />
        <div className="m-5">
            <div className="flex justify-center font-bold">Shinchan Nohara</div>
            <div className="flex justify-center">shinchan@y.com</div>
            <div className="flex justify-center">656546588</div>
            <div className="flex justify-center">Somewhere, Japan</div>
        </div>
    </div>
}