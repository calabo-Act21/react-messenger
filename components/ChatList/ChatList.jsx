import React from 'react';
import ChatListItem from './ChatListItem';
import Icon from '@mdi/react';
import { mdiDotsHorizontal } from '@mdi/js'

export default function ChatList(props) {
    const items = props.items.map(user =>
        <ChatListItem
            key={user.id}
            name={user.name}
            lastMessage={user.lastMessage}
            avatar={user.avatar}>
        </ChatListItem>);

    return (
        <div>
            <button className="btn btn-circle btn-ghost btn-sm">
                <Icon path={mdiDotsHorizontal}
                    title="More"
                    size={1}
                />
            </button>
            {items}
        </div>
    )
}
