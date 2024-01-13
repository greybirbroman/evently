'use server';

import { CreateEventParams } from '@/types';
import { handleError } from '../utils';
import { connectToDatabase } from '../database';
import User from '../database/models/user.model';
import Event from '../database/models/event.model';
import Category from '../database/models/category.model';

export const createEvent = async ({
  event,
  userId,
  path,
}: CreateEventParams) => {
  try {
    await connectToDatabase();

    const organizer = await User.findById(userId);

    if (!organizer) {
      throw new Error(`Could not find organizer`);
    }
    const newEvent = await Event.create({
      ...event,
      category: event.categoryId,
      organizer: userId,
    });
    return JSON.parse(JSON.stringify(newEvent));
  } catch (error) {
    handleError(error);
  }
};

const populateEvent = async (query: any) => {
    return query
    .populate({ path: 'organizer', model: User, select: '_id firstName lastName' })
    .populate({ path: 'category', model: Category, select: '_id name'})
}

export const getEventById = async (eventId: string) => {
  try {
    await connectToDatabase();

    const currentEvent = await populateEvent(Event.findById(eventId));

    if (!currentEvent) {
        throw new Error(`Could not find event`);
      }

    return JSON.parse(JSON.stringify(currentEvent));
  } catch (error) {
    handleError(error);
  }
};
