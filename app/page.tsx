import Image from 'next/image'
import IFrame from 'react-iframe'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <IFrame
          src="https://antoinerossai-soap-opera.hf.space"
          frameBorder="0"
          width="100%"
          height={1100}
      ></IFrame>
    </main>
  )
}
