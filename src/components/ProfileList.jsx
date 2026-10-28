import ProfileView from './ProfileView'

const ProfileList = ({ profiles, deleteProfile, showPage }) => {
  return (
    <div className="mx-auto max-w-5xl px-4 py-6">
      <div className="mb-6 flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Saved Profiles</h1>
          <p className="text-sm text-gray-600">
            {profiles.length === 1
              ? '1 profile saved'
              : `${profiles.length} profiles saved`}
          </p>
        </div>

        {profiles.length > 0 && (
          <button
            onClick={() => showPage('create')}
            className="inline-flex items-center gap-1.5 rounded-lg bg-blue-600 px-4 py-2 text-sm font-semibold text-white shadow transition hover:bg-blue-700"
          >
            + Create New Profile
          </button>
        )}
      </div>

      {profiles.length === 0 ? (
        <div className="mx-auto max-w-md rounded-2xl border border-gray-200 bg-white p-8 text-center shadow-md">
          <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-blue-50 text-3xl">
            📋
          </div>
          <h2 className="text-lg font-bold text-gray-800">No Profiles Found</h2>
          <p className="mt-1 text-sm text-gray-500">
            You haven't added any profiles yet. Create your first profile to see it here!
          </p>
          <button
            onClick={() => showPage('create')}
            className="mt-5 rounded-lg bg-blue-600 px-5 py-2.5 text-sm font-semibold text-white shadow transition hover:bg-blue-700"
          >
            Create Profile
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {profiles.map((profile) => (
            <ProfileView
              key={profile.id}
              profile={profile}
              onDelete={deleteProfile}
            />
          ))}
        </div>
      )}
    </div>
  )
}

export default ProfileList
