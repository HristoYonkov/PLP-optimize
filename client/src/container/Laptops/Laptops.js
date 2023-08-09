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
    const [selected, setSelected] = useState([]);

    useEffect(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }, []);

    useEffect(() => {
        // filter products 'state'!!!
        setProducts(state);
        setInterval(4);
    }, [state]);

    useEffect(() => {
        // filter products 'state'!!!
        setProducts((curr) => [...curr, ...state.slice(curr.length, curr.length + interval)]);
    }, [interval, selected, state]);

    const loadMoreHandler = () => {
        setInterval(state => state + 4);
    }


    return (
        <div className='wrapper'>
            <Filter minMaxPrice={calcMinMaxPrice(originalState)} setSelected={setSelected} />

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
                            <FilterMobile minMaxPrice={calcMinMaxPrice(originalState)} originalState={originalState} setCurrentState={setCurrentState} />
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