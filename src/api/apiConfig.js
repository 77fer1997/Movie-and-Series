const apiConfig = {
    baseUrl: 'https://api.themoviedb.org/3/',
    apiKey: 'ec59036d93037db715abc7785a6897fd',
    originalImage: (imgPath) => `https://image.tmdb.org/t/p/original/${imgPath}`,
    w500Image: (imgPath) => `https://image.tmdb.org/t/p/w500/${imgPath}`
}

export default apiConfig;