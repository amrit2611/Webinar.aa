import './App.css'
import { Button } from './components/Button'
import { Input } from './components/Input'
import { Otp } from './components/Otp'

function App() {

  return (
    <>
      <div className='bg-[var(--custom-blue-800)] flex justify-center h-screen text-white '>
        <div className='my-auto'>
          <Otp number={6}></Otp>
          <Input type={'text'} placeholder={'Username'}></Input>
          <Button disabled={true}>Continue</Button>
        </div>
      </div>
    </>
  )
}

export default App
