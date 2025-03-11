import type { Route } from '../+types/home';
import React from 'react';

export function meta() {
  return [
    { title: 'Gozette | Top Headlines' },
    { name: 'description', content: 'Welcome to Gozette!' },
  ];
}

export async function loader() {
  const response = await fetch('http://127.0.0.1:8080/news');
  const data = await response.json();

  return data.result;
}

export default function Home({ loaderData }: Route.ComponentProps) {
  return (
    <React.Fragment>
      {loaderData.map((news: string) => `${news}\n`)}
    </React.Fragment>
  );
}
