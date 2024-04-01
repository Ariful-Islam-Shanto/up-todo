import React from 'react';
import { FaPlus } from 'react-icons/fa';

const EmptyState = () => {
    return (
        <div
            className="h-full w-full space-y-4 flex items-center justify-center flex-col">
                <img src="https://res.cloudinary.com/debqyv4o6/image/upload/v1711999631/Frame_161_id8d4l.png" />

                <h1 className="text-3xl text-white">What do you want to do today?</h1>
                <p className='text-xl'>Tap + to add your tasks</p>
                <div className="p-5 rounded-full text-xl bg-[#8875FF] text-white">
                    <FaPlus/>
                </div>
            </div>
    );
};

export default EmptyState;