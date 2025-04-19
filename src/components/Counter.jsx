import { useState } from "react";

export const Counter = () => {
    const [nbr, setNbr] = useState(0) // [value , function of updating the value]
    const dec = () => { setNbr((prev) => prev - 1) }
    const inc = () => { setNbr((prev) => prev + 1) }
    return (
        <div>
            <button
                className="px-4 py-2 bg-black text-white rounded-2xl m-2 cursor-pointer hover:bg-stone-900"
                onClick={dec}>
                dec
            </button>
            <span className="p-2 border">{nbr}</span>
            <button
                className="px-4 py-2 bg-black text-white rounded-2xl m-2 cursor-pointer hover:bg-stone-900"
                onClick={inc}>
                inc
            </button>
        </div>
    );
};
