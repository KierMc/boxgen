import React from 'react'

const Form = (props) => {
    const [color, setColor]=props;
    const {setBoxes} = props;

    const onChange = (e) => {
        setColor({
            ...color,
            [e.target.name]: e.target.value,
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        setBoxes(boxes => [...boxes, {"color": color.color}])
        e.target.reset();

    }
    
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label htmlFor='color'>Color</label>
                <input onChange={onChange} type="text" name='color'></input>
                <button type="submit">Add</button>
            </form>
        </div>
    )
}

export default Form;