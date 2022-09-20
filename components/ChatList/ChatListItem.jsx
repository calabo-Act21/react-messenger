import Image from 'next/Image'
import { React, useState } from 'react'
import { MdMoreHoriz } from 'react-icons/md';
import { IconContext } from "react-icons";

export default function ChatListItem(props) {
    const [isHoverItem, setIsHoverItem] = useState(false);
    const [isHoverMenu, setIsHoverMenu] = useState(false);

    return (
        <div className={`mx-1 p-2 w-96 h-16 rounded-lg transition duration-300 ease-in-out flex cursor-pointer bg-white ${!isHoverMenu && 'hover:bg-gray-100'}`}
            onMouseOver={() => setIsHoverItem(true)}
            onMouseOut={() => setIsHoverItem(false)}>
            <div className='mr-4 flex-none'>
                <Image
                    className='rounded-full'
                    alt="Avatar picture"
                    src={props.avatar}
                    width={48}
                    height={48}
                />
            </div>
            <div className='flex-1 font-sans text-neutral-800'>
                <div className='text-base font-medium'>{props.name}</div>
                <div className='text-sm font-normal text-neutral-600'>{props.lastMessage.substring(0, 32)} {props.lastMessage.length > 32 && '...'}</div>
            </div>
            {/* MENU BUTTON */}
            {isHoverItem && <div className={`flex-none rounded-full h-10 w-10 my-auto border border-gray-200 transition duration-300 ease-in-out bg-white hover:bg-gray-100`}
                onMouseOver={() => setIsHoverMenu(true)}
                onMouseOut={() => setIsHoverMenu(false)}>
                <IconContext.Provider value={{ className: "h-9 w-6 block mx-auto text-neutral-600" }}>
                    <div>
                        <MdMoreHoriz />
                    </div>
                </IconContext.Provider>
            </div>}
        </div>
    )
}