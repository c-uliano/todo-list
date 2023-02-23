import './App.css';
import Form from './components/Form';
import Display from './components/Display';
import {useState} from 'react';

function App() {
    const [itemList, setItemList] = useState([]);

    return (
        <div className='w-50 m-auto mt-4'>
            <Form itemList={itemList} setItemList={setItemList} />
            <Display itemList={itemList} />
        </div>
    );
}

export default App;
