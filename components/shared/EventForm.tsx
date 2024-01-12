'use client';
import { useState } from 'react';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { eventFormSchema } from '@/lib/validation';
import * as z from 'zod';

import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '../ui/textarea';
import { eventDefaultValues } from '@/constants';
import Dropdown from './Dropdown';
import { FileUploader } from './FileUploader';
// const formSchema = z.object({
//   username: z.string().min(2, {
//     message: 'Username must be at least 2 characters.',
//   }),
// });

type EventFormProps = {
  userId: string;
  type: 'create' | 'update';
};

const EventForm = ({ userId, type }: EventFormProps) => {

  const [files, setFiles] = useState<File[]>([])
  const initialValues = eventDefaultValues

  const form = useForm<z.infer<typeof eventFormSchema>>({
    resolver: zodResolver(eventFormSchema),
    defaultValues: initialValues
  });

  function onSubmit(values: z.infer<typeof eventFormSchema>) {
    console.log(values);
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className='flex flex-col gap-5'>
        <div className='flex flex-col gap-5 md:flex-row'>
        <FormField
          control={form.control}
          name='title'
          render={({ field }) => (
            <FormItem className='w-full'>
              <FormControl>
                <Input placeholder='Event title' {...field} className='input-field'/>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name='categoryId'
          render={({ field }) => (
            <FormItem className='w-full'>
              <FormControl>
                <Dropdown onChangeHandler={field.onChange} value={field.value}/>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        </div>

        <div className='flex flex-col gap-5 md:flex-row'>
        <FormField
          control={form.control}
          name='description'
          render={({ field }) => (
            <FormItem className='w-full'>
              <FormControl className='h-72'>
                <Textarea placeholder='Description' {...field} className='textarea rounded-2xl'/>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name='imageUrl'
          render={({ field }) => (
            <FormItem className='w-full'>
              <FormControl className='h-72'>
                <FileUploader 
                  onFieldChange={field.onChange}
                  imageUrl={field.value}
                  setFiles={setFiles}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        </div>
        <Button type='submit'>Submit</Button>
      </form>
    </Form>
  );
};

export default EventForm;
