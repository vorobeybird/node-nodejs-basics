
export const parseEnv = () => {

    const asArray = Object.entries(process.env);

    const filtered = Object.fromEntries(asArray.filter(([key, value]) => key.slice(0,4) === 'RSS_'));

    for ( let key in filtered) {
        process.stdout.write(`${key}=${filtered[key]}; `)
    }
};