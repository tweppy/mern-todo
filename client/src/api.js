export const API_BASE = 'http://localhost:4000/api';

export const callApi = async (data, method, link) => {
  try {
    console.log(method);

    if (method == 'POST') {
      const response = await fetch(API_BASE + link, {
        method: method,
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          text: data,
        }),
      });

      const result = await response.json();
      return result;
    }

    const response = await fetch(API_BASE + link + data, {
      method: method,
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (!response.ok) {
      throw new Error('Failed to ', method, ' todo');
    }

    const result = await response.json();
    return result;
  } catch (error) {
    console.log(error);
  }
};
