
export default (portfolioItems, { text, sortBy }) => {
    console.log(portfolioItems)
    return portfolioItems.filter( portfolioItem => {
        // includes() finds partial string matches
        const textMatch = portfolioItem.description.toLowerCase().includes(text.toLowerCase());
        return textMatch;
    }).sort((a, b) => {
        if (sortBy === 'date') {
            return a.createdAt < b.createdAt ? 1 : -1;
        } else if (sortBy === 'alphabet') {
            return a.headline > b.headline ? -1 : 1;
        }
    })
};