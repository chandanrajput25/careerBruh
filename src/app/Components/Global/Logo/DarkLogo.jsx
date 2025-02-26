import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const DarkLogo = () => {
  return (
    <div>
      <Link href="/"><Image width={200} height={63} src={'/images/icons/logo.png'} alt='logo' /></Link>
    </div>
  )
}

export default DarkLogo