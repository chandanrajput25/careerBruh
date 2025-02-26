import Image from 'next/image'
import React from 'react'

const LogoWithoutLink = () => {
    return (
        <div>
            <Image width={150} height={50} objectFit='contain' src={'/images/icons/logo.png'} alt='logo' />
        </div>
    )
}

export default LogoWithoutLink