import React, {useState} from 'react';

const Form = (props) => {
    const [item, setItem] = useState({
        item: '',
        done: false
    });

    const {itemList, setItemList} = props;

    // event handlers
    const onChangeHandler = (e) => {
        setItem({
            item: e.target.value,
            done: false
        });
    }

    const onSubmitHandler = (e) => {
        e.preventDefault();
        setItemList([...itemList, item]);
        setItem({
            item: '',
            done: false
        });
    }

    return (
        <>
            <form onSubmit={onSubmitHandler}>
                <div className="mb-3">
                    <label htmlFor="item" className="form-label"><b>Add ToDo Item</b></label>
                    <input onChange={onChangeHandler} type="text" className="form-control" name="item" value={item.item} id="item" />
                </div>
                <button type='submit' className='btn btn-primary mt-2'>Add</button>
            </form>            
        </>
    );
}

export default Form;