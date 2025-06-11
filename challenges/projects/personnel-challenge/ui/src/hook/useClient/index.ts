
// hooks/useClient.ts
import { useClientContext } from '@/context/ClientContext'; 
import type { Client } from '@/types/Client';

export function useClient() {

    const {currentPage, setCurrentPage, setFeaturedPerson} = useClientContext();

    const handlePageChange = (page: number) => {
       // alert(`Changing to page ${page}`);
        setCurrentPage(page);
    }

    const handleClientClick = (client: Client) => { 
       console.log('Client clicked:', client);
       setFeaturedPerson(client)
    }

  return { currentPage, handlePageChange, handleClientClick };
}
