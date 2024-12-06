export const Navbar = () => {
  return (
    <div className="w-full py-6">
        <div className="container mx-auto flex justify-between items-center">
            <h1 className="text-2xl font-semibold">Exclusive</h1>
            <ul className="flex items-center gap-10 text-xl cursor-pointer">
                <li>Home</li>
                <li>About</li>
                <li>Sign Up</li>
                <li>Contact</li>
            </ul>

            <div className="flex items-center gap-10">
                <input className="bg-gray-100 outline-none py-2 px-4 p-2 pl-3 rounded" type="text" placeholder="What are you looking for"/>
                <div className="flex gap-5">
                    <span>Icon</span>
                    <span>Icon</span>
                </div>
            </div>
        </div>
    </div>
  )
}
