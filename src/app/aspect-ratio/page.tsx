import React from 'react'
import { AspectRatio } from "@/components/ui/aspect-ratio"
import Image from "next/image";

const page = () => {
  return (
    <AspectRatio ratio={11 / 9}>
      <Image src="/images/sample.jpg" alt="Descriptive Alt Text" fill className="rounded-md object-cover" />
    </AspectRatio>
  )
}

export default page