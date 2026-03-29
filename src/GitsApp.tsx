import { GifList } from "./gifs/components/GifList";
import { PreviousSearches } from "./gifs/components/PreviousSearches";
import { CustomHeader } from "./shared/components/CustomHeader";
import { SearchBar } from "./shared/components/SearchBar";

import { useGifs } from "./gifs/hooks/useGifs";

export const GitsApp = () => {

    const { gifs, previousTerms, handleTermClicked, handleSearch } = useGifs();

    return (
        <>
            {/* Header */}
            <CustomHeader title="Buscador de gits" description="Descubre y comparte el gif perfecto" />

            {/* Search */}
            <SearchBar placeholder="Buscar" onQuery={handleSearch} />

            {/* Búsquedas previas */}
            <PreviousSearches searches={previousTerms} onLabelClicked={handleTermClicked} />

            {/* Gits */}
            <GifList gifs={gifs} />

        </>
    );
}