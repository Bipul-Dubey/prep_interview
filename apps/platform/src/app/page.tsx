import React from 'react';
import DefaultExport, { Button, NamedExport } from '@workspace/design-system';

const Page = () => {
  return (
    <div className="text-[var(--sidebar-ring)]">
      Page
      <DefaultExport />
      <NamedExport />
      <Button variant={'destructive'}>Example</Button>
    </div>
  );
};

export default Page;
