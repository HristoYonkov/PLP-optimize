import React, { useEffect, useState } from 'react'

import './Laptops.scss'
import Filter from '../../components/Filter/Filter'
import Card from '../../components/Card/Card'
import Dropdown from '../../components/Dropdown/Dropdown'
import FilterMobile from '../../components/FilterMobile/FilterMobile'
import { calcMinMaxPrice } from '../../hooks/calcMinMaxPrice'


const Laptops = ({ state, setCurrentState, originalState, setBackupProducts, setBuyedProducts }) => {
    const [products, setProducts] = useState(state);
    const [interval, setInterval] = useState(4);
    // Filtering... will try to work with 1 state!
    const [selected, setSelected] = useState([]);
    const [filteredPrice, setFilteredPrice] = useState({
        price: calcMinMaxPrice(originalState).min
    });
    const [colors, setColors] = useState({
        white: false,
        black: false,
        blue: false
    });

    useEffect(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }, []);

    useEffect(() => {
        // filter products 'state'!!!
        // setProducts(state.filter((x) => selected.includes(x.color)));
        // setProducts((state) => state.filter((x) => x.price >= filteredPrice.price));

        // setProducts(state);
        // setInterval(4);
    }, [state]);

    useEffect(() => {
        // filter products 'state'!!!
        console.log(filteredPrice, selected, products);
        setProducts(state);
        if (selected.length > 0) {
            setProducts(state => state.filter((x) => selected.includes(x.color)));
        }
        setProducts(state => state.filter((x) => x.price >= filteredPrice.price));
        // setProducts((curr) => [...curr, ...state.slice(curr.length, curr.length + interval)]);
    }, [interval, selected, filteredPrice, state]);

    const loadMoreHandler = () => {
        setInterval(state => state + 4);
    }


    return (
        <div className='wrapper'>
            <Filter
                minMaxPrice={calcMinMaxPrice(state)}
                setSelected={setSelected}
                setFilteredPrice={setFilteredPrice}
                filteredPrice={filteredPrice}
                colors={colors}
                setColors={setColors}
            />

            <div className='app__container'>
                <section className='app__container-top'>

                    <div className='app__container-descr'>
                        <div className='app__container__descr-heading'>
                            <h1>Laptops</h1>
                            <p> <span>'Smart-Shopping'</span> offers one of the best pricie for laptops!</p>
                        </div>

                        <div className='app__container__descr-count'>
                            <p><span>{products?.slice(0, interval).length}</span> Products in store</p>
                        </div>
                    </div>

                    <div className='app__container-sort'>
                        <div>
                            <FilterMobile
                                minMaxPrice={calcMinMaxPrice(state)}
                                setSelected={setSelected}
                                setFilteredPrice={setFilteredPrice}
                                filteredPrice={filteredPrice}
                                colors={colors}
                                setColors={setColors}
                            />
                        </div>

                        <div>
                            <Dropdown setProducts={setProducts} reset={state} />
                        </div>
                    </div>
                </section>

                <section className='app__container-products'>
                    {products.slice(0, interval).map((item) =>
                        <Card key={item.id} item={item} setBackupProducts={setBackupProducts} setBuyedProducts={setBuyedProducts} />
                    )}
                </section>
                {interval < products.length &&
                    <button className='showMore' onClick={() => loadMoreHandler()} >Load More</button>
                }
            </div>
        </div>
    )
}

export default Laptops