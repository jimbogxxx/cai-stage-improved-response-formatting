// BadWords.tsx
type SynonymDictionary = { [key: string]: string[] };

const synonymsDictionary: SynonymDictionary = {
    'ministrations': [
        'attention', 'attentions', 'care', 'aid', 'assistance',
        'service', 'support', 'help', 'administration', 'management',
        'guidance', 'supervision'
    ],
    'barely contained': [
        'tightly packed', 'squeezed', 'trapped', 'enticingly covered',
        'tightly held', 'closely confined', 'snugly secured', 'firmly encased',
        'narrowly confined', 'compactly stored', 'densely packed'
    ]
};

export const replacePhrases = (text: string): string => {
    for (const key in synonymsDictionary) {
        const regex = new RegExp(`\\b${key}\\b`, 'gi');
        text = text.replace(regex, () => {
            const synonyms = synonymsDictionary[key];
            const randomIndex = Math.floor(Math.random() * synonyms.length);
            return synonyms[randomIndex];
        });
    }
    return text;
};
