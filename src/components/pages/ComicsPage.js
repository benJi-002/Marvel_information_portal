import { useState } from "react";

import ErrorBoundary from "../errorBoundary/ErrorBoundary";
import AppBanner from "../appBanner/AppBanner";
import ComicsList from "../comicsList/ComicsList";

const ComicsPage = () => {

    const [selectedComics, setComics] = useState(null);

    const onComicsSelected = (id) => {
        setComics(id);
    }

    return (
        <>
            <AppBanner/>
            <ErrorBoundary>
                <ComicsList onComicsSelected={onComicsSelected}/>
            </ErrorBoundary>
        </>
    )
}

export default ComicsPage;