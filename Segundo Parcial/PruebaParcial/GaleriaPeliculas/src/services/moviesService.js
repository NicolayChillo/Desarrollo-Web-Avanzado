const API_URL = "https://ghibliapi.vercel.app/films";

export async function getMovies() {
    const response = await fetch(API_URL);

    if(!response.ok){
        throw new Error("Error al cargar las películas");
        
    }
    const data = await response.json();
    return data;
    
}