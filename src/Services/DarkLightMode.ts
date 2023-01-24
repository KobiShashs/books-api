class DarkLightMode{

    private theme = 'dark';

    public switchTheme() {
        const newTheme = this.theme === 'dark' ? 'light' : 'dark';
        this.theme = newTheme;
    }

    public getTheme() {
        return this.theme;
    }
}


const themeState = new DarkLightMode();
export default themeState;