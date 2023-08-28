
import Nav from "../components/ui/NavBar";

function ErrorPage() {
    return <>
    <Nav />
    <main className="w-full h-screen text-center bg-orange-100 overflow-hidden font-['Permanent_marker']">
        <h1>An error occured!</h1>
        <p>Could not find this page</p>
    </main>
    </>
}

export default ErrorPage