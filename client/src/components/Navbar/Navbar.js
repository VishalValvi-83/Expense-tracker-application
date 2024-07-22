import toast from "react-hot-toast"

function Navbar() {
    return (
        <nav class="navbar bg-dark navbar-expand-lg bg-body-tertiary" data-bs-theme="dark">
            <div class="container-fluid">
                <span class="navbar-brand">POCKET</span>
                <button
                    class="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarNavDropdown"
                    aria-controls="navbarNavDropdown"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNavDropdown">
                    <ul class="navbar-nav">
                        <li class="nav-item">
                            <a class="nav-link active" aria-current="page" href="/">Home</a>
                        </li>
                        <li class="nav-item dropdown">
                            <span
                                class="nav-link dropdown-toggle"
                                href="/"
                                role="button"
                                data-bs-toggle="dropdown"
                                aria-expanded="false"
                            >
                                User
                            </span>
                            <ul class="dropdown-menu">
                                <li><a class="dropdown-item" href="/login">Login</a></li>
                                <li><a class="dropdown-item" href="/signup">Sign-up</a></li>
                                <li>
                                    <span class="dropdown-item" onClick={() => {
                                        localStorage.clear()
                                        toast.loading("Loging out")
                                        setTimeout(() => {
                                            window.location.href = '/'
                                        }, 2000)
                                    }}>Logout</span></li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar