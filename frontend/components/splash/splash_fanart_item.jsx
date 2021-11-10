import React, { useEffect, useState } from 'react';

const SplashFanartItem = ({ categories, fetchCategories }) => {
    const [splashCategories, setSplashCategories] = useState([]);

    useEffect(() => {
        fetchCategories()
    }, [setSplashCategories])

    return (
        <div>

        </div>
    )
};

export default SplashFanartItem;