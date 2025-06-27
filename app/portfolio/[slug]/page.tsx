import { notFound } from 'next/navigation';

const works = [
  { slug: 'project-a', title: 'Project A', body: 'Details about Project A' },
  { slug: 'project-b', title: 'Project B', body: 'Details about Project B' },
];

export default function WorkPage({ params }: { params: { slug: string } }) {
  const work = works.find(w => w.slug === params.slug);
  if (!work) return notFound();
  return (
    <div className="space-y-4">
      <h1 className="text-3xl font-bold">{work.title}</h1>
      <p>{work.body}</p>
    </div>
  );
}
