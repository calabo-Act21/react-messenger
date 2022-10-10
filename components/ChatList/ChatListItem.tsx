import { FunctionComponent, useState } from 'react';
import Avatar from '../Shared/Avatar';
import ChatListItemMenu from './ChatListItemMenu';

type ChatListItemProps = {
    key: string;
    name: string;
    avatar: string;
    lastMessage: string;
    children: never[];
}
export const ChatListItem: FunctionComponent<ChatListItemProps> = (props) => {
    const [isHoverItem, setIsHoverItem] = useState(false);
    const [isHoverMenu, setIsHoverMenu] = useState(false);

    return (
        <div className={`mx-1 p-2 w-96 h-16 rounded-lg transition duration-300 ease-in-out flex cursor-pointer bg-white ${!isHoverMenu && 'hover:bg-gray-100'}`}
            onMouseOver={() => setIsHoverItem(true)}
            onMouseOut={() => setIsHoverItem(false)}>
            <div className='mr-4 flex-none'>
                <Avatar src={props.avatar} alt={props.avatar}></Avatar>
            </div>
            <div className='flex-1 font-sans text-neutral-800'>
                <div className='text-base font-medium'>{props.name}</div>
                <div className='text-sm font-normal text-neutral-600'>{props.lastMessage.substring(0, 32)} {props.lastMessage.length > 32 && '...'}</div>
            </div>
            {isHoverItem && <ChatListItemMenu
                onMouseOver={() => setIsHoverMenu(true)}
                onMouseOut={() => setIsHoverMenu(false)}></ChatListItemMenu>}
        </div>
    )
}