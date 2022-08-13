export default function Navbar(props) {

    return (
        <nav>
            <div className="title">
                <h1>pustaak</h1>
            </div>
            <div className="navbutton">
                {props.isSign!==true && <button type="button"><a href="/signup">Login/Signup</a></button>}
                {/* TODO: Create a custom nav component if a user is signed in */ }
            </div>
        </nav>
    )
}