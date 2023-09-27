
/**
 * 
 * @returns {Promise<Object>} quote information
 */
const fetchQuote = async () => {
    const res = await fetch('https://rickandmortyapi.com/api/character/1,183');
    const data = await res.json();

    console.log(data)
    return data;
}


/**
 * 
 * @param {HTMLDivElement} element 
 */
export const BreakingbadApp = async (element) => {

    document.querySelector('#app-title').innerHTML = 'Breakingbad App';
    element.innerHTML = 'Loading...';
    const quote = await fetchQuote();
    element.innerHTML = 'Tenemos data!';
}