import logo from '../assets/Logo-Datelli.svg'
export function Header(){
    return(
        <header className='pb-5'>
            <img src={logo} className="w-[250px] m-auto pt-5" alt="Logo Datelli Calçados" />
        </header>
    )
}