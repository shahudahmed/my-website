export const metadata = { title: 'Portfolio - Big Red Banana' };

const works = [
  { slug: 'project-a', title: 'Project A', description: 'Case study A' },
  { slug: 'project-b', title: 'Project B', description: 'Case study B' },
];

export default function Portfolio() {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-4">Portfolio</h1>
      <div className="grid md:grid-cols-2 gap-6">
        {works.map(w => (
          <div key={w.slug} className="border rounded p-4">
            <h2 className="font-semibold mb-2">{w.title}</h2>
            <p>{w.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
