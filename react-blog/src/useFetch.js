import { useState, useEffect } from 'react';

const useFetch = ( url ) => {

  const [data, setData] = useState( null );
  const [isPending, setIsPending] = useState( true );
  const [error, setError] = useState( null );

  useEffect( () => {
    const abortCont = new AbortController();

    fetch( url, { signal: abortCont.signal } )

      .then( (res) => {
        if( !res.ok ) {  // if fetch Successful but problem with 'res' obj --> issue with endpoint
          throw Error( 'Could not fetch data for this resource!' );
        }
        return res.json();
      } )

      .then( (data) => {  // 'data' name clash doesn't matter as this one is the local var
        // console.log( data );
        setData( data );
        setIsPending( false );
        setError( null );  // if any subsequent fetch is successful, then error msg shouldn't show up
      } )

      // catches error Automatically if fetch Unsuccessful due to --> network problem
      // & catches the other error Thrown Manually when --> 'res.ok' is 'false'
      .catch( (err) => {
        // console.log( err.message );
        if( err.name === 'AbortError' )
          console.log( "Aborting Fetch." );
        else {
          setIsPending( false );
          setError( err.message );
        }
        
      } );

      return () => {
        abortCont.abort();
        console.log( "Cleanup" );  // when "Home" component unmounts
      }

  }, [url] );  // only runs upon render of component ref. by url

  return { data, isPending, error };

}

export default useFetch;
