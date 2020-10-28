import React from 'react';
import { useState } from 'react';
import QueenList from '../components/app/queens/list/QueenList';

const CharacterPage = () => {
  const [page, setPage] = useState(1);
  
  return (
    <>
      <button
        onClick={() => setPage(page => page - 1)}
        disabled={page <= 1}
      >BACK</button>
      <button onClick={() => setPage(page => page + 1)}>FORWARD</button>
      <QueenList page={page} />
    </>
  );
};
export default CharacterPage;
