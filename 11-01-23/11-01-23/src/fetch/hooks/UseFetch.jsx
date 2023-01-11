import {useState,useEffect} from 'react';

export function UseFetch (url){
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);

    const fetchData = async () => {
        setData(null);
        setError(null);
        setLoading(true);

        try {
            const data = await fetch(url).then(r => r.json())
            setData(data);
        } catch (error) {
            setError(error)
        } finally {
            setLoading(false)
        }
    }

    useEffect(() => {
        fetchData();
    }, []);

    return {
        data, 
        error, 
        loading, 
        refetch: fetchData
    };
}