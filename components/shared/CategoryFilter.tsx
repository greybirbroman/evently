'use client';

import { useState, useEffect } from 'react';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { formUrlQuery, removeKeysFromQuery } from '@/lib/utils';
import { useSearchParams, useRouter } from 'next/navigation';
import { getAllCategories } from '@/lib/actions/category.actions';
import { ICategory } from '@/lib/database/models/category.model';

const CategoryFilter = () => {
  const [categories, setCategories] = useState<ICategory[]>([]);
  const router = useRouter();
  const searchParams = useSearchParams();

  useEffect(() => {
    const renderCategories = async () => {
      const categoriesFromServer = await getAllCategories();

      categoriesFromServer &&
        setCategories(categoriesFromServer as ICategory[]);
    };
    renderCategories();
  }, []);

  const onSelectCategory = (category: string) => {
    let newUrl = '';
    if (category && category !== 'All') {
      newUrl = formUrlQuery({
        params: searchParams.toString().trim(),
        key: 'category',
        value: category,
      });
    } else {
      newUrl = removeKeysFromQuery({
        params: searchParams.toString(),
        keysToRemove: ['category'],
      });
    }
    router.push(newUrl, { scroll: false });
  };

  return (
    <Select onValueChange={(value: string) => onSelectCategory(value)}>
      <SelectTrigger className='select-field'>
        <SelectValue placeholder='Category' />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value='All' className='select-item p-regular-14'>
          All
        </SelectItem>
        {categories.map((category) => (
          <SelectItem value={category.name} key={category._id}>
            {category.name}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
};

export default CategoryFilter;
