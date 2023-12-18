import React from 'react';
import { Button } from "react-bootstrap";
import cl from './Categories.module.css';

const Categories = ({ value, onClickCategory }) => {
    const categories = ['Все', 'Европа', 'Восток', 'Китай', 'Шашлык', 'Бар'];

    return (
        <>
        <div className={cl.container}>
            <h2 className={cl.menuTitle}>Меню</h2>
        </div>
        <div className={cl.container}>
            {categories.map((categoryName, i) => (
                <Button
                    variant="outline-secondary"
                    key={i}
                    onClick={() => onClickCategory(i)}
                    className={cl.butCss}
                >
                    {categoryName}
                </Button>
            ))}
        </div>
        </>
    );
};

export default Categories;
