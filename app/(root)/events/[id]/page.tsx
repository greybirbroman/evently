import { getEventById } from '@/lib/actions/event.actions';
import { SearchParamProps } from '@/types';
import Image from 'next/image';

const EventDetails = async ({ params: { id } }: SearchParamProps) => {
  const event = await getEventById(id);

  return (
    <section className='flex justify-center bg-primary-50 bg-dotted-pattern bg-contain'>
      <div className='grid grid-cols-1 md:grid-cols-2 2xl:max-w-7xl'>
        <Image
          src={event.imageUrl}
          alt={`Изображение события ${event.title}`}
          width={1000}
          height={1000}
          className='h-full min-h-[300px] object-cover object-center'
        />
        <div className='flex w-full flex-col gap-8 p-5 md:p-10'>
          <div className='flex flex-col gap-6'>
            <h2 className='h2-bold'>{event.title}</h2>
            <div className='flex flex-col gap-3 sm:flex-row sm:items-center'>
              
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EventDetails;
