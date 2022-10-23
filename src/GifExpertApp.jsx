import { useState } from "react";
import { AddCategory, GifGrid } from "./components";

export const GifExpertApp = () => {

    const [ categories, setCategories ] = useState([ { id: 1, name: 'Better Call Saul'}, {id: 2, name: 'Breaking Bad'}]);
    const [ lastIndex, setLastIndex ] = useState(2)

    const onAddCategory = (newCategory) => {

        if (categories.find(category => category.name.toUpperCase() === newCategory.toUpperCase())) return;

        setCategories(categories => {
            const nextId = lastIndex + 1;
            setLastIndex(nextId);
            return [{ id: nextId, name: newCategory }, ...categories ];
        });

    }

    return (
        <>
            <h1>GifExpertApp</h1>

            <AddCategory 
                onNewCategory={onAddCategory}
            />

            
            { categories.map(category => <GifGrid key={category.id} category={category.name}/>) }
            
        </>
    );
}
