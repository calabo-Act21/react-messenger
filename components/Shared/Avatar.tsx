import Image from 'next/image';
import React from 'react'

type AvatarProps = {
    src: string;
    alt: string;
}

export default function Avatar({ src, alt }: AvatarProps) {
    return (
        <Image
            className='rounded-full'
            alt={alt}
            src={src}
            width={48}
            height={48}
        />
    )
}