import React from "react";
import { useSelector } from "react-redux";
import ProductCard from "./productCard";
import { SearchBar } from "./searchBar";
import { DisplayAreaStyles } from "./styles";

export const DisplayArea = (props) => {
  const { filteredData, year, searchQuery, searchFilteredData } = useSelector(
    (state) => ({
      filteredData: state?.filteredData,
      year: state?.currentFilters.year,
      searchFilteredData: state?.searchFilteredData,
      searchQuery: state?.searchQuery,
    })
  );
  return (
    <DisplayAreaStyles>
      <div className="top-bar">
        <SearchBar />
        <span className="results-found">
          <span>
            {searchQuery === ""
              ? filteredData?.length + " "
              : searchFilteredData?.length + " "}
          </span>
          results found
        </span>
      </div>
      <div className="products">
        {searchQuery === ""
          ? filteredData?.map((data, key) => {
              return (
                <ProductCard
                  key={key}
                  favourite={false}
                  image_url={`https://picsum.photos/20${key}/300`}
                  data={data}
                  year={year}
                />
              );
            })
          : searchFilteredData?.map((data, key) => {
              return (
                <ProductCard
                  key={key}
                  favourite={false}
                  image_url={`https://picsum.photos/20${key}/300`}
                  data={data}
                  year={year}
                />
              );
            })}
      </div>
    </DisplayAreaStyles>
  );
};
