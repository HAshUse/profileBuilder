import { useState } from 'react'
import ProfileView from './ProfileView'

const emptyFormData = {
  name: '',
  role: '',
  email: '',
  avatar: '',
  skills: '',
  bio: '',
}

const ProfileForm = ({ addProfile, showPage }) => {
  const [formData, setFormData] = useState(emptyFormData)

  const onChangeHandler = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const submitHandler = (e) => {
    e.preventDefault()

    if (!formData.name.trim()) {
      alert('Please enter a name.')
      return
    }

    if (!formData.role.trim()) {
      alert('Please enter a role.')
      return
    }

    addProfile(formData)
    setFormData(emptyFormData)

    if (showPage) {
      showPage('profiles')
    }
  }

  const handleReset = () => {
    setFormData(emptyFormData)
  }

  return (
    <div className="mx-auto max-w-5xl px-4 py-6">
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-900">Create Profile</h1>
        <p className="text-sm text-gray-600">Fill in your information to generate a profile card.</p>
      </div>

      <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
        {/* Form Section */}
        <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-md">
          <form onSubmit={submitHandler} className="space-y-4">
            <div>
              <label className="mb-1 block text-sm font-medium text-gray-700">
                Full Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                name="name"
                required
                value={formData.name}
                onChange={onChangeHandler}
                placeholder="e.g. Alex Morgan"
                className="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm outline-none transition focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
              />
            </div>

            <div>
              <label className="mb-1 block text-sm font-medium text-gray-700">
                Role / Title <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                name="role"
                required
                value={formData.role}
                onChange={onChangeHandler}
                placeholder="e.g. Frontend Developer"
                className="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm outline-none transition focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
              />
            </div>

            <div>
              <label className="mb-1 block text-sm font-medium text-gray-700">
                Email Address <span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                name="email"
                required
                value={formData.email}
                onChange={onChangeHandler}
                placeholder="e.g. alex@example.com"
                className="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm outline-none transition focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
              />
            </div>

            <div>
              <label className="mb-1 block text-sm font-medium text-gray-700">
                Avatar Image URL <span className="text-xs text-gray-400 font-normal">(optional)</span>
              </label>
              <input
                type="url"
                name="avatar"
                value={formData.avatar}
                onChange={onChangeHandler}
                placeholder="https://example.com/avatar.jpg"
                className="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm outline-none transition focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
              />
            </div>

            <div>
              <label className="mb-1 block text-sm font-medium text-gray-700">
                Skills <span className="text-xs text-gray-400 font-normal">(comma-separated)</span>
              </label>
              <input
                type="text"
                name="skills"
                value={formData.skills}
                onChange={onChangeHandler}
                placeholder="React, JavaScript, Tailwind, Git"
                className="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm outline-none transition focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
              />
            </div>

            <div>
              <label className="mb-1 block text-sm font-medium text-gray-700">
                Bio / About
              </label>
              <textarea
                name="bio"
                rows={3}
                value={formData.bio}
                onChange={onChangeHandler}
                placeholder="Tell us a little about yourself and your passions..."
                className="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm outline-none transition focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
              />
            </div>

            <div className="flex gap-3 pt-2">
              <button
                type="submit"
                className="flex-1 rounded-lg bg-blue-600 py-2.5 text-sm font-semibold text-white shadow transition hover:bg-blue-700 focus:outline-none"
              >
                Save Profile
              </button>
              <button
                type="button"
                onClick={handleReset}
                className="rounded-lg border border-gray-300 px-4 py-2.5 text-sm font-medium text-gray-700 transition hover:bg-gray-100 focus:outline-none"
              >
                Clear
              </button>
            </div>
          </form>
        </div>

        {/* Live Preview Section */}
        <div>
          <div className="mb-3 flex items-center justify-between">
            <span className="text-xs font-semibold uppercase tracking-wider text-gray-500">
              Live Preview
            </span>
            <span className="text-xs text-gray-400">Updates as you type</span>
          </div>
          <ProfileView profile={formData} isPreview={true} />
        </div>
      </div>
    </div>
  )
}

export default ProfileForm
