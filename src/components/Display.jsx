import style from './Display.module.css';

const Display = (props) => {
    const {itemList, setItemList} = props;

    const onClickDelete = (e) => {
        console.log();
        const newList = itemList.filter(
            (item, index) => 
                index !== parseInt(e.target.value)
            );
        setItemList(newList);
    }

    const onClickStrike = (e) => {
        console.log(e.target);
        
        const newList = itemList.map(
            (i, index) => 
                parseInt(e.target.value) === index ? {item: i.item, done: !i.done} : i 
            );
        console.log(newList);
        setItemList(newList);
    }

    return (
        <div className='mt-4'>
            <h1 className='mb-4'>Get 'em Done:</h1>
            <>
    {
        itemList && itemList.map((newItem, idx) => (
            <div key={idx} className="row mb-3 border-bottom pb-3 align-items-center">
                <div className="form-check col-md-8">
                    <input onClick={onClickStrike} className="form-check-input" name={idx} type="checkbox" value={idx} />
                    <label className="form-check-label">
                        <span className={newItem.done ? style.strikeThrough : null} id={idx}>{newItem && newItem.item}</span>
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