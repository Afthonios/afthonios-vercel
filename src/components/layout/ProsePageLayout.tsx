'use client';

import React from 'react';

export default function ProsePageLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div className="prose prose-red max-w-none dark:prose-invert
             prose-h1:text-9xl prose-h1:text-red-700 prose-h1:font-extrabold
             prose-h2:text-7xl prose-h2:text-blue-700 prose-h2:font-bold
             prose-h3:text-5xl prose-h3:text-green-700 prose-h3:font-bold
             prose-p:text-2xl prose-p:text-purple-700">{children}</div>;
}