type Client = {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  birthDate: string;
  policyNumber: string;
  perimum: number;
  address: string;
}

type ClienListProps = {
  clients: Client[];
}

export default function ClienList({ clients }: ClienListProps) {
//  console.log('ClienList: Rendering client list', clients);
  return (
    <section className=" w-full h-full ">
      <ul className="text-black divide-y divide-gray-300">
        {
          clients.map((client) => (
            <li key={client.id} className="hover:bg-blue-100 py-2">
              {client.firstName} {client.lastName}
            </li>
          ))
        }

      </ul>
      <div className="flex py-4 bg-gray-100 gap-2">
        <button className="bg-blue-500 text-white px-4 py-2 rounded">
          Previous
        </button>
        <button className="bg-green-500 text-white px-4 py-2 rounded">
          Next
        </button>
      </div>
      <div className="text-center text-gray-500 text-sm">
        Page 1 of 10<br />
        Showing 1-10 of 100
      </div>
    </section>
  );
}
