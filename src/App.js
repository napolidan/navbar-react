import MainContainer from "./components/MainContainer";
import TopContainer from "./components/TopContainer";


const App = () => {

    const handleLogoClick = () => {
        document.getElementById('sideBar').classList.toggle('open')
        var elements = document.getElementsByClassName("hamburguerIcon");
        for(var i = 0; i < elements.length; i++) {
            elements[i].classList.toggle('iconHiding')
        }
    }

    const openSideBar = () => {
        document.getElementById('sideBar').classList.add('open')
        var elements = document.getElementsByClassName("hamburguerIcon");
        elements[0].classList.add('iconHiding')
        elements[1].classList.remove('iconHiding')
    }
    
    return (
        <>
            <TopContainer onLogoClick={handleLogoClick}/>
            <MainContainer openSideBar={openSideBar}/>
        </>
    )
}

export default App