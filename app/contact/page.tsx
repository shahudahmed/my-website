export const metadata = { title: 'Contact - Big Red Banana' };

export default function Contact() {
  return (
    <div className="max-w-xl mx-auto">
      <h1 className="text-3xl font-bold mb-4">Contact Us</h1>
      <form action="https://formspree.io/f/your-id" method="POST" className="space-y-4">
        <input className="w-full border p-2" placeholder="Name" name="name" required />
        <input className="w-full border p-2" placeholder="Email" name="email" type="email" required />
        <textarea className="w-full border p-2" placeholder="Message" name="message" rows={5} required />
        <button className="bg-[#E30613] text-white py-2 px-4 rounded" type="submit">Send</button>
      </form>
    </div>
  );
}
