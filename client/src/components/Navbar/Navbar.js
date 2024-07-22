import toast from "react-hot-toast"
import Logo from './pocket.png'
import User from './user.png'
function Navbar({ user }) {
    return (
        <nav class="navbar bg-dark navbar-expand-lg bg-body-tertiary" data-bs-theme="dark">
            <div class="container-fluid">
                <span class="navbar-brand">
                    <img src={Logo} alt="Logo" width="30" height="24" class="d-inline-block align-text-top" />
                    POCKET
                </span>
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
                {
                    user && <div className="navbar-text">Welcome, {user.fullName}
                        <img src={User} alt="Logo" width="26" height="26" class="d-inline-block align-text-top ms-2" />
                    </div>
                }
            </div>
        </nav>
    )
}

export default Navbar