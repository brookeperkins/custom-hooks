/* eslint-disable max-len */

export const getQueens = async(page = 1) => {
  const res = await fetch(`http://www.nokeynoshade.party/api/queens/all?page=${page}`);
  const json = await res.json();

  if(!res.ok) throw 'Unable to fetch';

  return json.results.map(queen => ({
    id: queen.id,
    name: queen.name,
    imageUrl: queen.image_url,
    quote: queen.quote
  }));
};

export const getQueenById = async(id) => {
  return fetch(`http://www.nokeynoshade.party/api/queens/${id}`)
    .then(res => res.json())
    .then(json => json[0]);
};
