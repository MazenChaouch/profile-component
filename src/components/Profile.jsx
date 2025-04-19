export const Profile = ({ avatar, name, address }) => {
    return (
        <div className="Profile bg-white rounded-xl p-8 w-80 shadow-2xl text-center flex flex-col justify-center items-center">
            <img src={avatar} alt="avatar" className="size-24 rounded-full object-cover mb-5 border" />
            <h1 className="text-xl text-stone-800 m-0 font-bold">{name}</h1>
            <p className="text-xl text-stone-400 mt-1.5">{address}</p>
            <div className="flex justify-center gap-2.5 mt-5">
                <button className="px-4 py-2 border-0 rounded-md text-md cursor-pointer text-white bg-blue-500 hover:bg-blue-600">Follow</button>
                <button className="px-4 py-2 border rounded-md text-md cursor-pointer border-blue-500 text-blue-500 bg-white hover:bg-stone-200">Message</button>
            </div>
        </div>
    );
};
