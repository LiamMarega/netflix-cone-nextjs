import GithubSignInButton from '@/app/components/GithubSignInButton';
import GoogleSignInButton from '@/app/components/GoogleSignInButton';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import Link from 'next/link';

export default function SignUp() {
  return (
    <div className='mt-24 rounded bg-black/80 py-10 px-6 md:mt-0 md: max-w-sm md:px-14'>
      <form action=''>
        <h1 className='text-3xl font-semibold text-white'>Sign up</h1>
        <div className='space-y-4 mt-5'>
          <Input
            type='email'
            name='email'
            placeholder='Email'
            className='placeholder:text-gray-500 bg-[#333] placeholder:text-sm inline-block'
          />
          <Button type='submit' variant={'destructive'} className='w-full bg-[#e50914]'>
            Sing Up
          </Button>
        </div>
      </form>
      <div className='text-sm text-gray-500 mt-2'>
        Already Have a account?{' '}
        <Link className='text-white hover:underline' href='/login'>
          Sign up now!
        </Link>
        <div className='flex w-full justify-center items-center gap-x-3 mt-6'>
          <GoogleSignInButton />
          <GithubSignInButton />
        </div>
      </div>
    </div>
  );
}
