import ClienList from '@/components/ClientList';
export default function ClientPanel() {
  return (
    <section className="flex w-full h-full">
      <div className="w-1/4 bg-gray-100 p-4">
        <ClienList />
      </div>
      <div className="w-3/4 bg-white p-4">
        <h3 className="text-black font-bold">Hello Alice!</h3>
      </div>
    </section>
  );
}
