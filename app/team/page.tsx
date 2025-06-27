export const metadata = { title: 'Team - Big Red Banana' };

const members = [
  { name: 'Alice', role: 'CEO' },
  { name: 'Bob', role: 'Designer' },
  { name: 'Charlie', role: 'Developer' },
];

export default function Team() {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-4">Our Team</h1>
      <div className="grid md:grid-cols-3 gap-6">
        {members.map(m => (
          <div key={m.name} className="p-4 border rounded shadow-sm text-center">
            <div className="h-24 w-24 bg-gray-200 mx-auto rounded-full mb-2" />
            <h2 className="font-semibold">{m.name}</h2>
            <p className="text-sm text-gray-500">{m.role}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
