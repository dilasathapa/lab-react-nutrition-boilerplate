import React from "react";
import { useState } from "react";

const FoodBox = (props) => {
    let { data, index } = props;
    let { cal, id, img, name } = data;

    let [input, setInput] = useState(0);
    let [quantity, setQuantity] = useState(0);

    function quantityhandler() {
        setQuantity(input)
    }

    return (
        <>
            <div>
                <img src={img} alt="calpic" />
                <div>
                    <span>{name}</span>
                    <span>{cal}</span>
                </div>
                <div>
                    <input type="number" min="0"
                        onChange={(e) => { setInput(e.target.value) }}
                        value={input}
                    />
                    <button onClick={quantityhandler}>+</button>
                </div>
                <h3>{name} X {quantity} = {cal * quantity} calories</h3>
                <button
                    onClick={() => {
                        setQuantity(0)
                        setInput(0)
                    }}
                >reset</button>
            </div>
        </>
    )
}

export default FoodBox;