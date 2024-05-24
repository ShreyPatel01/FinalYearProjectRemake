import { Button } from '@/components/ui/button'
import React from 'react'

const Registration = () => {
  return (
    <div className='flex min-h-screen flex-col items-center justify-center'>
      <p className='font-bold text-6xl'>
        Registration Page
      </p>
      <a href='/'>
        <Button size='lg' variant='outline' className='mt-4 hover:underline text-xl'>
            Navigate to Home page
        </Button>
      </a>
    </div>
  )
}

export default Registration