import {twop0} from '../../apiConfig'

export const readPost = async ({ defaultLimit=20, isprivate=false, userId="userId1", skipLastId=""}, signal) => {
    const controller = new AbortController();
    const fetchSignal = signal || controller.signal;
  
    try {
      const res = await fetch(
        `${twop0}/load-post?isPrivate=${isprivate}&userId=${userId}&defaultLimit=${defaultLimit}&skipLastId=${skipLastId}`,
        {
          method: "GET",
          headers: {
            'Content-Type': 'application/json'
          },
          signal: fetchSignal,
        }
      ).then(res => res.json());
  
      return res.data;
    } catch (error) {
      if (error.name === 'AbortError') {
        console.log('Fetch aborted:', error.message);
      } else {
        throw new Error(error);
      }
    }
  };
  