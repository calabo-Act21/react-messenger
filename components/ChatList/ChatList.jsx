import React from 'react'
import ChatListItem from './ChatListItem';
import { MdMoreHoriz } from 'react-icons/md';
import { IconContext } from 'react-icons';

export default function ChatList(props) {
    const items = props.items.map(user =>
        <ChatListItem
            key={user.id}
            name={user.name}
            lastMessage={user.lastMessage}
            avatar={user.avatar}>
        </ChatListItem>);

    return (<div>
        <button className="btn btn-circle btn-ghost btn-sm">
            <IconContext.Provider value={{ className: "text-xl" }}>
                <div>
                    <MdMoreHoriz />
                </div>
            </IconContext.Provider>
        </button>
        {items}
    </div>)
}
