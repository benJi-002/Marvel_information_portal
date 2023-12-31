import { useHttp } from "../hooks/http.hook";

const useMarvelService = () => {
    const {request, clearError, process, setProcess} = useHttp();

    const _apiBase = 'https://gateway.marvel.com:443/v1/public/',
          _apiKey = 'apikey=1d5cd1c31c3cb686a9f38fbb57e3023b',
          _baseOffsetForHeroes = 210,
          _baseOffsetForComics = 50;

    const getAllCharacters = async (offset = _baseOffsetForHeroes) => {
        const res = await request(`${_apiBase}characters?limit=9&offset=${offset}&${_apiKey}`, 'GET', null, {'Content-Type': 'application/json'});
        return res.data.results.map(_transformCharacter)
    }

    const getCharacterByName = async (name) => {
        const res = await request(`${_apiBase}characters?name=${name}&${_apiKey}`);
        return res.data.results.map(_transformCharacter);
    }

    const getCharacter = async (id) => {
        const res = await request(`${_apiBase}characters/${id}?${_apiKey}`, 'GET', null, {'Content-Type': 'application/json'});
        return _transformCharacter(res.data.results[0]);
    }

    const _transformCharacter = (char) => {

        return {
            id: char.id,
            name: char.name,
            description: limitDescr(checkDescr(char.description)),
            thumbnail: char.thumbnail.path + '.' + char.thumbnail.extension,
            homepage: char.urls[0].url,
            wiki: char.urls[1].url,
            comics: char.comics.items
        }
    }

    const getComic = async (id) => {
        const res = await request(`${_apiBase}comics/${id}?${_apiKey}`, 'GET', null, {'Content-Type': 'application/json'});
        return _transformComics(res.data.results[0]);
    }

    const getAllComics = async (offset = _baseOffsetForComics) => {
        const res = await request(`${_apiBase}comics?limit=8&offset=${offset}&${_apiKey}`, 'GET', null, {'Content-Type': 'application/json'});
        return res.data.results.map(_transformComics)
        
    }

    const _transformComics = (comics) => {


        return {
            id: comics.id,
            name: comics.title,
            description: comics.description || 'There is no description',
            thumbnail: comics.thumbnail.path + '.' + comics.thumbnail.extension,
            homepage: comics.urls[0].url,
            price: comics.prices[0].price ? comics.prices[0].price + '$' : 'No price',
            pageCount: comics.pageCount ? comics.pageCount + ' pages' : 'No information about the number of pages',
            language: comics.textObjects.language || 'en-us'
        }
    }

    const checkDescr = (descr) => {
        if (descr !== '') {
            return descr
        } else {
            return 'There is no description'
        }
    }

    const limitDescr = (descr) => {
        const maxLength = 210;

        if (descr.length > maxLength) {
            const description = descr.slice(0, maxLength) + '...';
            return description;
        } else {
            return descr;
        }
    }

    return {
            clearError, 
            process, 
            setProcess,
            getAllCharacters, 
            getCharacterByName, 
            getCharacter, 
            getAllComics, 
            getComic
        }
}

export default useMarvelService;