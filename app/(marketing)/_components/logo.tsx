import React from 'react'
import Image from 'next/image'
import { Poppins } from 'next/font/google'
import { cn } from "@/lib/utils"

const font = Poppins({
    subsets: ["latin"],
    weight: ["400", "600"]
    });

const Logo = () => {
  return (
    <div>Logo</div>
  )
}

export default Logo