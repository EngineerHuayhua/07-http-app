
/**
 * 
 * @returns {Promise<Object>} quote information
 */
const fetchQuote = async () => {
    const res = await fetch('https://api.breakingbadquotes.xyz/v1/quotes');
    const data = await res.json();

    console.log(data[0])
    return data[0];
}


/**
 * 
 * @param {HTMLDivElement} element 
 */
export const BreakingbadApp = async (element) => {

    document.querySelector('#app-title').innerHTML = 'Breakingbad App';
    element.innerHTML = 'Loading...';
    // const quote = await fetchQuote();
    // element.innerHTML = 'Tenemos data!';

    // creamos elementos html
    const quoteLabel = document.createElement('blockquote');
    const authoLabel = document.createElement('h3');
    const nextQuoteButton = document.createElement('button');
    nextQuoteButton.innerText = 'Next Quote';

    const renderQuote = (data) => {
        quoteLabel.innerHTML = data.quote;
        authoLabel.innerHTML = data.author;
        element.replaceChildren( quoteLabel, authoLabel, nextQuoteButton );
        // element.append(quoteLabel, authoLabel, nextQuoteButton)
    }

    // en realidad .then( (data) => renderQuote(data)) es renderQuote
    fetchQuote()
        .then( renderQuote );
}