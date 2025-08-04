import React from 'react';
import { Button } from '@workspace/design-system';

const Page = () => {
  return (
    <div className="text-[var(--sidebar-ring)]">
      Page
      <Button variant="destructive" className="mt-8">
        Shadcn Button – should be red
      </Button>
    </div>
  );
};

export default Page;
