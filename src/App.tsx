import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './Components/LayoutArea/Header/Header';
import Footer from './Components/LayoutArea/Footer/Footer';
import Menu from './Components/LayoutArea/Menu/Menu';
import Main from './Components/LayoutArea/Main/Main';

const getValueFromLocalStorage = (): string => {
    const theme = localStorage.getItem("theme");
    if (theme == null) {
        return "light";
    }
    return theme;
}
function App() {
    const [theme, setTheme] = useState<string>(getValueFromLocalStorage());

    const switchTheme = () => {
        const newTheme = theme === 'dark' ? 'light' : 'dark';
        setTheme(newTheme);
        localStorage.setItem("theme", newTheme);
    }


    return (
        <div className="App" data-theme={theme}>
            <button onClick={switchTheme}>{theme === 'dark' ? <span>🌙</span> : <span>🌚</span>}</button>
            <Header />
            <Menu />
            <Main />
            <Footer />
        </div>
    );
}

export default App;
