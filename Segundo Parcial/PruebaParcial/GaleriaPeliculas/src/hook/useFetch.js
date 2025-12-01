import { useState, useEffect, useCallback } from "react";

// hook personalizado para realizar fetch de datos
export function useFetch( asyncCallback){
    // estados internos del hook
    const [data, setData] = useState([]); // estado para almacenar los datos obtenidos 
    const [loading, setLoading] = useState(true); // estado para indicar si se está cargando
    const [error, setError] = useState(null); // estado para almacenar errores

    // ejecutar una peticion cuando el componente se monta
    useEffect(() => {
        async function fetchData() {
            try {
                // ejecuta la funcion de la api pasada como parametro
                const result = await asyncCallback();
                setData(result); // guarda en data el resultado
            } catch (error) {
                // si la api falla, guarda el error
                setError(error.message);
            } finally {
                // indica que ya no se está cargando
                setLoading(false);
            }
        }
        fetchData(); // llama a la funcion fetchData, muestra la peticion 
    }, []);
    return { data, loading, error };
}