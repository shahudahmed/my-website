export const metadata = { title: 'Pricing - Big Red Banana' };

const tiers = [
  { title: 'Starter', price: '$499/mo', features: ['Social setup', 'Basic ads'] },
  { title: 'Growth', price: '$999/mo', features: ['SEO', 'Email marketing'] },
  { title: 'Enterprise', price: '$1999/mo', features: ['Full strategy', 'Dedicated support'] },
];

export default function Pricing() {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-8">Pricing</h1>
      <div className="grid md:grid-cols-3 gap-6">
        {tiers.map(t => (
          <div key={t.title} className="border p-6 rounded shadow-sm flex flex-col">
            <h2 className="font-semibold text-xl mb-2 text-[#E30613]">{t.title}</h2>
            <p className="text-3xl mb-4">{t.price}</p>
            <ul className="flex-1 space-y-2 mb-4">
              {t.features.map(f => (
                <li key={f}>{f}</li>
              ))}
            </ul>
            <button className="bg-[#E30613] text-white py-2 rounded">Select</button>
          </div>
        ))}
      </div>
    </div>
  );
}
