import React, { useContext } from "react";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import AppCard from "../../shared/components/app-card/AppCard";
import { Grid } from "@mui/material";
import { ProductContext } from "./ProductsContext";


const topProducts = [
  { name: "Product 1", price: "$10.00" },
  { name: "Product 2", price: "$15.00" },
  { name: "Product 3", price: "$20.00" },
];

const TopProducts = () => {
 
    const {quantities,handleQuantityChange}=useContext(ProductContext);
    
    
    

  return (
    <>
      <Typography variant="h4">Top Products</Typography>
      <Grid container>
        {topProducts.map((product) => (
          
          <Grid item xs={3} sx={{ m: 2 }}>
            <AppCard
              
              variant="outlined"
              
              children={
                <div>
                  <Typography variant="h5">{product.name}</Typography>
                  <Typography variant="subtitle1">{product.price}</Typography>
                </div>
              }
              actionChildren={
                <Grid container>
                  <Grid item xs={3}>
                    <IconButton
                      aria-label="remove"
                      onClick={() =>
                        handleQuantityChange(
                          product.name,
                         Math.max((quantities[product.name] || 0)-1,0)
                        )
                      }disabled={quantities[product.name]===0}
                    >
                      <RemoveIcon />
                    </IconButton>
                  </Grid>
                  <Grid item xs={2}>
                    <Typography variant="subtitle1">
                     {quantities[product.name]||0}
                    </Typography>
                  </Grid>
                  <Grid item xs={3}>
                    <IconButton
                      aria-label="add"
                      onClick={() =>
                        handleQuantityChange(
                          product.name,
                          (quantities[product.name] || 0) + 1
                        )
                      }
                    >
                      <AddIcon />
                    </IconButton>
                  </Grid>
                </Grid>
              }
            />
          </Grid>
        ))}
      </Grid>
    </>
  );
};

export default TopProducts;
