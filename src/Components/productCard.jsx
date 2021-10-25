import { Favorite, Info } from "@mui/icons-material";

import { Button } from "@mui/material";
import React from "react";
import { ProductCardStyles } from "./styles";

export const ProductCard = ({ image_url, data, year }) => {
  return (
    <ProductCardStyles image_url={image_url}>
      <div className="car-image"></div>
      <div className="details">
        <table>
          <tbody>
            <tr>
              <td>Model</td>
              <td>
                <h2>{data.Model_Name}</h2>
              </td>
            </tr>
            <tr>
              <td>Make</td>
              <td>
                <h4>{data.Make_Name}</h4>
              </td>
            </tr>
            <tr>
              <td>Type</td>
              <td>
                <h4>{data.VehicleTypeName}</h4>
              </td>
            </tr>
            <tr>
              <td>Year</td>
              <td>
                <h4>{year}</h4>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="buttons">
        <Button variant={"outlined"}>
          <Info />
          <span>Details</span>
        </Button>
        <Button>
          <Favorite />
        </Button>
      </div>
    </ProductCardStyles>
  );
};

export default ProductCard;
