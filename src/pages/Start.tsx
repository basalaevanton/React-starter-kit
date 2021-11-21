import React, { useEffect } from 'react';
import { useTypedSelector, useActions } from '../hooks';

function Start(): JSX.Element {
  const { start } = useTypedSelector((state) => state.startStore);
  const { setStart } = useActions();

  console.log(start);

  useEffect(() => {
    setStart('hello');
  }, []);

  return (
    <>
      <h1>Start React KIT</h1>
      {start} from Redux
    </>
  );
}

export default Start;
