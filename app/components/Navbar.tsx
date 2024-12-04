export const Navbar = () => {
  return (
    <div className="w-full py-6">
        <div className="container mx-auto flex justify-between items-center">
            <h1>Exclusive</h1>
            <ul className="flex items-center gap-10">
                <li>Home</li>
                <li>About</li>
                <li>Sign Up</li>
                <li>Contact</li>
            </ul>

            <div className="flex items-center gap-10">
                <input className="bg-gray-300 outline-none py-2 p-2 pl-2 rounded" type="text" placeholder="Search"/>
                <div className="flex gap-5">
                    <span>Icon</span>
                    <span>Icon</span>
                </div>
            </div>
        </div>
    </div>
  )
}
