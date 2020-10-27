import { useEffect, useState } from 'react';
import { getQueenById, getQueens } from '../services/rupaulApi';

export const useQueens = page => {
  const [loading, setLoading] = useState(true);
  const [queens, setQueens] = useState([]);

  useEffect(() => {
    getQueens(page)
      .then(fetchedQueens => setQueens(fetchedQueens))
      .finally(() => setLoading(false));
  }, [page]);

  return {
    loading,
    queens
  };
};

export const useQueenById = id => {
  const [loading, setLoading] = useState(true);
  const [queen, setQueen] = useState(null);

  useEffect(() => {
    getQueenById(id)
      .then(fetchedQueen => setQueen(fetchedQueen))
      .finally(() => setLoading(false));
  }, [id]);

  return {
    loading,
    queen
  };
};
