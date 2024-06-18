/* eslint-disable @typescript-eslint/no-explicit-any */
export const fetchData = async (endpoint: string) => {
  const API_ENDPOINT = endpoint;

  const headers: any = {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': window.location.origin,
  };
  let payload: any = [];
  try {
    const response = await fetch(API_ENDPOINT, headers);
    if (response.ok) {
      payload = await response.json();
      return payload;
    }
  } catch (e) {
    console.log({ e });
  }
  return payload || [];
};

export const postData = async (endpoint: string, data: any) => {
  const API_ENDPOINT = endpoint;

  const headers = {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': window.location.origin,
  };

  let payload: any = [];
  try {
    const response = await fetch(API_ENDPOINT, {
      method: 'POST',
      headers: headers,
      body: JSON.stringify(data),
    });

    if (response.ok) {
      payload = await response.json();
      return payload;
    } else {
      console.error(`HTTP error! status: ${response.status}`);
    }
  } catch (e) {
    console.log({ e });
  }
  return payload || [];
};
