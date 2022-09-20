import React from 'react'
import ChatListItem from './ChatListItem';

export default function ChatList(props) {
    return props.items.map(user =>
        <ChatListItem
            key={user.id}
            name={user.name}
            lastMessage={user.lastMessage}
            avatar={user.avatar}>
        </ChatListItem>);
}
