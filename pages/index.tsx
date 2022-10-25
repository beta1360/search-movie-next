import type { NextPage } from 'next'
import Button from '@/components/atoms/Button'
import Input from '@/components/atoms/Input'
import { useCallback } from 'react'

const Home: NextPage = () => {
  const handler = useCallback((): void => {
    console.log('hello')
  }, [])

  const onChangeValue = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value)
  }, [])

  return (
    <div>
      <Button
        label="hello!"
        onClick={handler}
      />
      <Input
        defaultInput="hello"
        onChange={onChangeValue}/>
    </div>
  )
}

export default Home
