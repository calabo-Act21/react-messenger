import { mdiAccount, mdiBell, mdiCheck, mdiDotsHorizontal } from '@mdi/js';
import Icon from '@mdi/react';
import { useTranslation } from 'next-i18next';
import React from 'react'
import DropDownMenuItem from '../Shared/Menu/DropDownMenuItem';

type ChatListItemMenuProps = {
    onMouseOver: () => void;
    onMouseOut: () => void;
}

export default function ChatListItemMenu({ onMouseOver, onMouseOut }: ChatListItemMenuProps) {
    const { t } = useTranslation('chat');
    return (
        <div className="dropdown z-10">
            <label tabIndex={0}
                className="btn btn-circle btn-outline btn-primary btn-sm m-1"
                onMouseOver={onMouseOver}
                onMouseOut={onMouseOut}>
                <Icon path={mdiDotsHorizontal} title="More" size={1} />
            </label>
            <ul tabIndex={0} className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-64">
                <DropDownMenuItem icon={mdiCheck} title={t('MARK_AS_UNREAD')} clicked={() => console.log('MARK_AS_UNREAD')}></DropDownMenuItem>
                <DropDownMenuItem icon={mdiBell} title={t('DISABLE_NOTIFICATIONS')} clicked={() => console.log('DISABLE_NOTIFICATIONS')}></DropDownMenuItem>
                <DropDownMenuItem icon={mdiAccount} title={t('SHOW_USER_PROFILE')} clicked={() => console.log('SHOW_USER_PROFILE')}></DropDownMenuItem>
            </ul>
        </div >
    )
}