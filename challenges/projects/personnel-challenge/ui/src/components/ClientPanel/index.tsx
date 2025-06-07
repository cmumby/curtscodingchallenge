import ClienList from '@/components/ClientList';


export default async function ClientPanel() {
  const res = await fetch('http://localhost:3001/clients?page=1');
  if (!res.ok) { return <div>Error loading clients</div>; }
  const json = await res.json();
  const data = json.data;
  const featuredPerson = data[1]

  return (
    <section className="flex w-full h-full">
      <div className="w-1/4 bg-gray-100 p-4">
        <ClienList clients={data} />
      </div>
      <div className="w-3/4 text-center bg-white p-4">
        <h2 className="text-black font-bold">Policy Details: {featuredPerson.firstName} {featuredPerson.lastName}</h2>
        <div className="odd:bg-white even:bg-gray-100">
          <dl className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-4 p-4">
            <dt className="font-medium text-gray-600">First</dt>
            <dd className="text-gray-900">{featuredPerson.firstName}</dd>
          </dl>
        </div>
        <div className="odd:bg-white even:bg-gray-100">
          <dl className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-4 p-4">
            <dt className="font-medium text-gray-600">Last</dt>
            <dd className="text-gray-900">{featuredPerson.lastName}</dd>
          </dl>
        </div>
        <div className="odd:bg-white even:bg-gray-100">
          <dl className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-4 p-4">
            <dt className="font-medium text-gray-600">Email</dt>
            <dd className="text-gray-900"><a href="mailto:bob.robertson@example.com">{featuredPerson.email}</a></dd>
          </dl>
        </div>
        <div className="odd:bg-white even:bg-gray-100">
          <dl className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-4 p-4">
            <dt className="font-medium text-gray-600">Phone</dt>
            <dd className="text-gray-900"><a href="mailto:bob.robertson@example.com">{featuredPerson.phone}</a></dd>
          </dl>
        </div>
        <div className="odd:bg-white even:bg-gray-100">
          <dl className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-4 p-4">
            <dt className="font-medium text-gray-600">Birthdate</dt>
            <dd className="text-gray-900"><a href="mailto:bob.robertson@example.com">{featuredPerson.birthDate}</a></dd>
          </dl>
        </div>
        <div className="odd:bg-white even:bg-gray-100">
          <dl className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-4 p-4">
            <dt className="font-medium text-gray-600">Policy Number</dt>
            <dd className="text-gray-900"><a href="mailto:bob.robertson@example.com">{featuredPerson.policyNumber}</a></dd>
          </dl>
        </div>
        <div className="odd:bg-white even:bg-gray-100">
          <dl className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-4 p-4">
            <dt className="font-medium text-gray-600">Coverage Amount</dt>
            <dd className="text-gray-900"><a href="mailto:bob.robertson@example.com">{featuredPerson.coverageAmount}</a></dd>
          </dl>
        </div>
        <div className="odd:bg-white even:bg-gray-100">
          <dl className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-4 p-4">
            <dt className="font-medium text-gray-600">Permium</dt>
            <dd className="text-gray-900"><a href="mailto:bob.robertson@example.com">{featuredPerson.premium}</a></dd>
          </dl>
        </div>
        <div className="odd:bg-white even:bg-gray-100">
          <dl className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-4 p-4">
            <dt className="font-medium text-gray-600">Address</dt>
            <dd className="text-gray-900"><a href="mailto:bob.robertson@example.com">{featuredPerson.address}</a></dd>
          </dl>
        </div>

      </div>
    </section>
  );
}
