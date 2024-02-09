import { Button } from '@/components/ui/button';
import Image from 'next/image';

export default function Home() {
  return (
    <div className='w-screen h-screen flex flex-col gap-5 text-white justify-center items-center'>
      <h1>¡Home page!</h1>
      <Button>Button for shadcn</Button>
    </div>
  );
}
