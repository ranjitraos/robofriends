import React from "react";

interface ISearchBoxProps {
    searchChange(e: React.SyntheticEvent<HTMLInputElement>): void
}

const SearchBox = ({ searchChange }: ISearchBoxProps) => {
    return (
        <input
            className="pa3 ba b--green bg-lightest-blue"
            type="search"
            placeholder="search robots"
            aria-label="Search Robots"
            onChange={searchChange}
        />
    )
}

export default SearchBox