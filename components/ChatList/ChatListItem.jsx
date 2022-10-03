import { React, useState } from 'react';
import Image from 'next/Image';
import Icon from '@mdi/react';
import { mdiAccount, mdiBell, mdiCheck, mdiDotsHorizontal } from '@mdi/js';

export default function ChatListItem(props) {
    const [isHoverItem, setIsHoverItem] = useState(false);
    const [isHoverMenu, setIsHoverMenu] = useState(false);

    const menuDropdown = <div className="dropdown">
        <label tabIndex={0}
            className="btn btn-circle btn-outline btn-primary btn-sm m-1"
            onMouseOver={() => setIsHoverMenu(true)}
            onMouseOut={() => setIsHoverMenu(false)}>
            <Icon path={mdiDotsHorizontal}
                title="More"
                size={1}
            />
        </label>
        <ul tabIndex={0} className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-64">
            <li>
                <a>
                    <Icon path={mdiCheck} title="Marquer comme non lu" size={'18px'} />
                    <span className='text-sm font-bold'>Marquer comme non lu</span>
                </a>
            </li>
            <li>
                <a>
                    <Icon path={mdiBell} title="Désactiver les notifications" size={'18px'} />
                    <span className='text-sm font-bold'>Désactiver les notifications</span>
                </a>
            </li>
            <li>
                <a>
                    <Icon path={mdiAccount} title="Voir le profil" size={'18px'} />
                    <span className='text-sm font-bold'>Voir le profil</span>
                </a>
            </li>
        </ul>
    </div>;

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
            {isHoverItem && menuDropdown}
        </div>
    )
}