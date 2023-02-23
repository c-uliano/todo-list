import React from 'react';

const Display = (props) => {
    const {itemList} = props;

    // todo: I think I need some kind of event that will clear the state to remove the line?
    // const onClickHandler = (e) => {
    //     itemList.pop();
    // }

    return (
        <div className='mt-4'>
            <h1 className='mb-4'>Get 'em Done:</h1>
            <>
    {
        itemList.map((newItem, idx) => (
            // should each new task be a Display component?
            <div key={idx} className="row mb-3 border-bottom pb-3 align-items-center">
                <div class="form-check col-md-8">
                    <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                    <label class="form-check-label" htmlFor="flexCheckDefault">
                    {newItem}
                    </label>
                </div>
                <div className="col-md-4">
                    <button className='btn btn-secondary'>Delete</button>
                </div>
            </div>
        ))
    }
            </>
        </div>
    )
}

export default Display;