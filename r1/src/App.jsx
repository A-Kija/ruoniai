import { useEffect, useState, useRef } from 'react';
import axios from 'axios';
import './App.scss';
function App() {

    const [news, setNews] = useState(null);
    const time = useRef(0);

    useEffect(() => {
        axios.get('https://in3.dev/vinted/api/news/')
        .then(res => setNews(res.data));
    }, []);

    useEffect(() => {
        if (null === news) {
            return;
        }
        if (time.current === 1) {
            return;
        }
        time.current++;
        news.forEach(n => {
            let store = localStorage.getItem('vinted_' + n.id);
            if (store !== null) {
                store = JSON.parse(store);
                setNews(n1 => n1.map(n2 => n2.id === n.id ? store : {...n2}));
            } else {
                axios.get('https://in3.dev/vinted/api/products/' + n.id)
                .then(res => {
                    setNews(n1 => n1.map(n2 => n2.id === n.id ? res.data : {...n2}));
                    localStorage.setItem('vinted_' + n.id, JSON.stringify(res.data));
                });
            }
        });
    }, [news]);





    return (
        <div className="App">
            <header className="App-header">


            </header>
        </div>
    );
}

export default App;