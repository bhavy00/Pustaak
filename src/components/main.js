import Navbar from './navbar'
export default function Main(props) {
    return (
        <>
            <Navbar islogged={props.islogged}/>
            <div className="main">
            <div className="title">
                Welcome to pustaak
            </div>
            <div className="text">
                Make effective and stylist notes with real time collabartion with friends and coworkers.
            </div>
            <button type="button"><a href={props.islogged?'/dashboard': '/signup'}>Go to Notebook</a></button>
        </div>
        </>
    )
}