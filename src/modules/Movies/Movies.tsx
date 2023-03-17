import React, { useEffect, useState } from 'react';
import { BoxWrapper } from '../../components/BoxWrapper';

export const Movies = () => {
  const [data, setData] = useState([]);
  console.log(data);

  //   useEffect(() => {
  //     fetch('https://api.themoviedb.org/3/movie/popular?api_key=db2a4c48afddc2ca40ced287915ab169')
  //       .then((res) => res.json())
  //       .then((data) => setData(data));
  //   }, []);
  return <BoxWrapper>movies</BoxWrapper>;
};
