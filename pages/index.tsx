import type { NextPage } from 'next'
import Button from '@/components/atoms/Button'
import { useCallback } from 'react'

const Home: NextPage = () => {
  const handler = useCallback((): void => {
    console.log('hello')
  }, []) 

  return (
    <div>
      <Button
        label={"hello"}
        onClick={handler}
      />
    </div>
  )
}

export default Home
