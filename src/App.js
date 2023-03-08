import MainContainer from "./components/MainContainer";
import TopContainer from "./components/TopContainer";


const App = () => {

    // CAMBIAR EL ICONO DE HAMBURGUESA CON CADA CLICK
    const handleLogoClick = () => {
        document.getElementById('sideBar').classList.toggle('open')
    //     var elements = document.getElementsByClassName("hamburguerIcon");
    //     for(var i = 0; i < elements.length; i++) {
    //         elements[i].classList.toggle('iconHiding')
    //     }
        var open = document.getElementsByClassName("openList")
        for(var i = 0; i < open.length; i++) {
            open[i].classList.remove('openList')
        }
    }

    const openSideBar = () => {
        document.getElementById('sideBar').classList.add('open')

        // CAMBIAR EL ICONO DE HAMBURGUESA ABRIENDO CON CLICK EN SIDEBAR
        // var elements = document.getElementsByClassName("hamburguerIcon");
        // elements[0].classList.add('iconHiding')
        // elements[1].classList.remove('iconHiding')
    }
    
    return (
        <>
            <TopContainer onLogoClick={handleLogoClick}/>
            <MainContainer openSideBar={openSideBar}/>
        </>
    )
}

export default App