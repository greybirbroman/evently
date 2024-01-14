import { Button } from '../ui/button';
import { IEvent } from '@/lib/database/models/event.model';

interface ICheckout {
  event: IEvent;
  userId: string;
}

const Checkout = ({ event, userId }: ICheckout) => {
  const onCheckout = async () => {
    console.log('yo');
  };

  return (
    <form action={onCheckout} method='post'>
      <Button type='submit' role='link' size='lg' className='button sm:w-fit'>
        {event.isFree ? 'Get Ticket' : 'Buy Ticket'}
      </Button>
    </form>
  );
};

export default Checkout;
