import { useState } from "react";
import { Helmet } from "react-helmet";

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
            <Helmet>
                <meta
                    name="description"
                    content="Page with list of our comics"
                />
                <title>Comics page</title>
            </Helmet>

            <AppBanner/>
            <ErrorBoundary>
                <ComicsList onComicsSelected={onComicsSelected}/>
            </ErrorBoundary>
        </>
    )
}

export default ComicsPage;