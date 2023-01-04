import React, { useState } from 'react';
import { useQuery, useQueryClient } from '@tanstack/react-query'

function Customers() {
  const [customers, setCustomers] = useState([]);

  const queryClient = useQueryClient();

	const getCustomers = async () => {
		const res = await fetch('https://customerrest.herokuapp.com/api/customers');
	  const data =  await res.json();
    return data.content;
	};

  const { data, error, isLoading } = useQuery({ queryKey: ['customers'], queryFn: getCustomers })

  if (error) return <div>Request Failed</div>;
	if (isLoading) return <div>Loading...</div>;

  return(
    <>
      Hello
    </>
  );
}

export default Customers;