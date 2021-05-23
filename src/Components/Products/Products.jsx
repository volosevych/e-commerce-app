import React from 'react';
import { Grid } from '@material-ui/core';

import Product from '../Product/Product';
import useStyles from './styles';

const products = [
    { id: 1, name: 'Shoes', description: 'Running Shoes', price: '$5', image: 'https://www.pngkit.com/png/detail/816-8161946_adidas-shoes-clipart-picsart-png-shoes-png-for.png'},
    { id: 2, name: 'MacBook', description: 'Apple MacBook', price: '$10', image: 'https://support.apple.com/library/APPLE/APPLECARE_ALLGEOS/SP825/macbookair.png'},
]

const Products = () => {
    const classes = useStyles();
    return (
        <main className={classes.content}> 
        <div className={classes.toolbar}/>
            <Grid container justify='center' spacing={4}>
               {products.map((product) => (
                   <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
                       <Product product={product} />
                   </Grid>
               ))}
            </Grid>
        </main>
    )
}

export default Products;
