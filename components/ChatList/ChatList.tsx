import { mdiDotsHorizontal } from '@mdi/js';
import Icon from '@mdi/react';
import { ChatListItem } from './ChatListItem';
import { ChatListItemModel } from './ChatListItemModel';

type ChatListProps = {
    items: ChatListItemModel[];
}

export default function ChatList({ items }: ChatListProps) {
    return (
        <div>
            <button className="btn btn-circle btn-ghost btn-sm">
                <Icon path={mdiDotsHorizontal}
                    title="More"
                    size={1}
                />
            </button>
            {items.map(user =>
                <ChatListItem
                    key={user.id}
                    name={user.name}
                    lastMessage={user.lastMessage}
                    avatar={user.avatar}>
                </ChatListItem>)}
        </div>
    )
}