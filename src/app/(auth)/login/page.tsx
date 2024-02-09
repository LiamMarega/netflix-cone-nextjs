import { Button } from '@/components/ui/button';
import { GithubIcon } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { Input } from '@/components/ui/input';
import Google from '../../../../public/images/google.svg';

export default function Login() {
  return (
    <div className='mt-24 rounded bg-black/80 py-10 px-6 md:mt-0 md: max-w-sm md:px-14'>
      <form action=''>
        <h1 className='text-3xl font-semibold text-white'>Log in</h1>
        <div className='space-y-4 mt-5'>
          <Input
            type='email'
            name='email'
            placeholder='Email'
            className='placeholder:text-gray-500 bg-[#333] placeholder:text-sm inline-block'
          />
          <Button type='submit' variant={'destructive'} className='w-full bg-[#e50914]'>
            Log in
          </Button>
        </div>
      </form>
      <div className='text-sm text-gray-500 mt-2'>
        New to Netflix?{' '}
        <Link className='text-white hover:underline' href='/sign-up'>
          Sign up now!
        </Link>
        <div className='flex w-full justify-center items-center gap-x-3 mt-6'>
          <Button variant={'outline'} size={'icon'}>
            <Image src={Google} alt='Google' />
          </Button>
          <Button variant={'outline'} size={'icon'}>
            <GithubIcon className='w-4 h-4' />
          </Button>
        </div>
      </div>
    </div>
  );
}
