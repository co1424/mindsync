'use client';

import { ChevronsLeftRight } from 'lucide-react';
import { useUser, SignOutButton } from '@clerk/clerk-react';

import { Avatar, AvatarImage } from '@/components/ui/avatar';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

export const UserItem = () => {
  const { user } = useUser();

  return (
    <div className=" m-4 gap-x-2 flex items-center max-w-[150px]">
      <Avatar className="h-10 w-10">
        <AvatarImage src={user?.imageUrl} />
      </Avatar>
      
      <div className='m-3 flex flex-wrap nowrap items-end'>
      <SignOutButton>Log Out</SignOutButton>
      </div>
    </div>
  );
};
