import { mdiDotsHorizontal } from '@mdi/js';
import Icon from '@mdi/react';
import { ChatListItem } from './ChatListItem';
import { ChatListItemModel } from './ChatListItemModel';

type ChatListProps = {
    items: ChatListItemModel[];
}

export default function ChatList({ items }: ChatListProps) {
    return (
        <div className='h-screen flex flex-col'>
            <div className='flex-none'>
                TOOLBAR
                <button className="btn btn-circle btn-ghost btn-sm">
                    <Icon path={mdiDotsHorizontal}
                        title="More"
                        size={1}
                    />
                </button>
            </div>
            <div className='flex-1 overflow-y-auto overflow-x-hidden'>
                {items.map(user =>
                    <ChatListItem
                        key={user.id}
                        name={user.name}
                        lastMessage={user.lastMessage}
                        avatar={user.avatar}>
                    </ChatListItem>)}
            </div>
            <div className='flex-none'>FOOTER</div>
        </div>
    )
}