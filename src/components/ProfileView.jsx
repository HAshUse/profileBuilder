
const ProfileView = ({ profile, onDelete, isPreview = false }) => {
  if (!profile) return null

  // Support both flat profile ({ name, role, ... }) and nested ({ profile: { name, ... }, id })
  const data = profile.profile || profile
  const { name, role, email, bio, skills, avatar } = data
  const id = profile.id

  const skillsList = Array.isArray(skills)
    ? skills
    : typeof skills === 'string' && skills.trim()
    ? skills.split(',').map((s) => s.trim()).filter(Boolean)
    : []

  const initials = name
    ? name
        .split(' ')
        .map((n) => n[0])
        .join('')
        .toUpperCase()
        .slice(0, 2)
    : '?'

  return (
    <div className="relative flex flex-col justify-between rounded-2xl border border-gray-200 bg-white p-6 shadow-md transition hover:shadow-lg">
      {isPreview && (
        <span className="absolute top-4 right-4 rounded-full bg-blue-100 px-2.5 py-0.5 text-xs font-semibold text-blue-700">
          Preview
        </span>
      )}

      <div>
        <div className="flex items-center gap-4">
          {avatar ? (
            <img
              src={avatar}
              alt={name || 'Avatar'}
              className="h-16 w-16 rounded-full object-cover border-2 border-blue-500 shadow-sm"
              onError={(e) => {
                e.currentTarget.style.display = 'none'
              }}
            />
          ) : (
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-tr from-blue-600 to-indigo-500 text-xl font-bold text-white shadow-sm">
              {initials}
            </div>
          )}

          <div className="min-w-0 flex-1">
            <h3 className="truncate text-lg font-bold text-gray-900">
              {name || <span className="text-gray-400 italic">Your Name</span>}
            </h3>
            <p className="truncate text-sm font-medium text-blue-600">
              {role || <span className="text-gray-400 italic">Job Title / Role</span>}
            </p>
            {email && (
              <p className="truncate text-xs text-gray-500 mt-0.5">
                {email}
              </p>
            )}
          </div>
        </div>

        {bio ? (
          <p className="mt-4 text-sm text-gray-600 line-clamp-3 leading-relaxed">
            {bio}
          </p>
        ) : isPreview ? (
          <p className="mt-4 text-sm text-gray-400 italic">
            Short bio will appear here...
          </p>
        ) : null}

        {skillsList.length > 0 && (
          <div className="mt-4 flex flex-wrap gap-1.5">
            {skillsList.map((skill, index) => (
              <span
                key={index}
                className="rounded-md bg-stone-100 px-2 py-0.5 text-xs font-medium text-stone-700"
              >
                {skill}
              </span>
            ))}
          </div>
        )}
      </div>

      {!isPreview && onDelete && (
        <button
          onClick={() => onDelete(id)}
          type="button"
          className="mt-6 flex w-full items-center justify-center gap-1.5 rounded-lg border border-red-200 bg-red-50 py-2 text-sm font-medium text-red-600 transition hover:bg-red-600 hover:text-white"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
            />
          </svg>
          Delete Profile
        </button>
      )}
    </div>
  )
}

export default ProfileView
