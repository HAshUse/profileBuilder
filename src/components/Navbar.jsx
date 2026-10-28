const Navbar = ({ showPage, page, profileCount = 0 }) => {
  const navBtnClasses = `border-b-2 px-3 py-2 text-sm font-medium transition flex items-center gap-1.5 `

  return (
    <nav className="border-b border-gray-200 bg-white shadow-xs">
      <div className="mx-auto flex max-w-5xl items-center justify-between gap-x-4 px-4 py-3">
        <span
          onClick={() => showPage('create')}
          className="cursor-pointer text-lg font-bold text-blue-700 tracking-tight"
        >
          Profile Builder
        </span>

        <div className="flex gap-2">
          <button
            onClick={() => showPage('create')}
            className={`${navBtnClasses} ${
              page === 'create'
                ? 'border-gray-900 text-gray-900 font-semibold'
                : 'border-transparent text-gray-500 hover:text-gray-900'
            }`}
          >
            Create Profile
          </button>
          <button
            onClick={() => showPage('profiles')}
            className={`${navBtnClasses} ${
              page === 'profiles'
                ? 'border-gray-900 text-gray-900 font-semibold'
                : 'border-transparent text-gray-500 hover:text-gray-900'
            }`}
          >
            Saved Profiles
            {profileCount > 0 && (
              <span className="rounded-full bg-blue-100 px-2 py-0.5 text-xs font-semibold text-blue-700">
                {profileCount}
              </span>
            )}
          </button>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
