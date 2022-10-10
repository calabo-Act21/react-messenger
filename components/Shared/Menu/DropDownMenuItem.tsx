import Icon from '@mdi/react'
import React from 'react'

type DropDownMenuItemProps = {
    icon: string;
    title: string;
    clicked: () => void;
}

export default function DropDownMenuItem({ icon, title, clicked }: DropDownMenuItemProps) {
    return (
        <li>
            <a onClick={clicked}>
                <Icon path={icon} title={title} size={'18px'} />
                <span className='text-sm font-bold'>{title}</span>
            </a>
        </li>
    )
}