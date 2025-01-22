

export const env = (key: string): string => {
    const value = process.env[key];
    if (!value) {
        throw Error(`No environment variable found for ${key}`);
    }
    return value;
};

export const getBaseUrl = (): string => {
    //console.log('ENV value: ',process.env.ENV?.toUpperCase().trim())
    const environment = process.env.ENV?.toUpperCase().trim();
    
    if (!environment) {
        throw Error('No ENV environment variable found.');
    }
    const key = `${environment.trim()}BASEURL`;
    //console.log('Key being used:', key);
    const baseUrl = process.env[key];
    // console.log('Base URL found:', baseUrl);
    
    if (!baseUrl) {
        
        throw Error(`No BASEURL found for environment: ${environment}`);
    }
    return baseUrl;
};

