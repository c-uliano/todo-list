const Display = (props) => {
    const {itemList, setItemList} = props;

    const onClickDelete = (e) => {
        const newList = itemList.filter(
            (item, index) => 
                index !== parseInt(e.target.value)
            );
        console.log(e.target);
        setItemList(newList);
    }

    const onClickStrike = (e) => {
        console.log(e.target);
        const labelSpan = document.querySelector('label span');
        console.log(labelSpan);

        const newList = itemList.map(
            (item, index) => 
                {
                    if (index !== labelSpan) {
                        labelSpan.classList.add("strikeThrough");
                    } else {
                        labelSpan.classList.remove("strikeThrough");
                    }
                }
            );
        // setItemList(newList);
    }

    return (
        <div className='mt-4'>
            <h1 className='mb-4'>Get 'em Done:</h1>
            <>
    {
        itemList.map((newItem, idx) => (
            <div key={idx} className="row mb-3 border-bottom pb-3 align-items-center">
                <div className="form-check col-md-8">
                    <input onClick={onClickStrike} className="form-check-input" name={idx} type="checkbox" value="" />
                    <label className="form-check-label">
                        <span id={idx}>{newItem}</span>
                    </label>
                </div>
                <div className="col-md-4">
                    <button value={idx} onClick={onClickDelete} className='btn btn-secondary'>Delete</button>
                </div>
            </div>
        ))
    }
            </>
        </div>
    )
}

export default Display;