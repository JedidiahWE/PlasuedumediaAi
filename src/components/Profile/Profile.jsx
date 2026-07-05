import { useState } from "react";
import api from "../../api/api";

const Profile = () => {

  const [user, setUser] = useState(
    JSON.parse(localStorage.getItem("user"))
  );

  const [showModal, setShowModal] = useState(false);

  const [saving, setSaving] = useState(false);

  const [formData, setFormData] = useState({
    fullName: user?.fullName || "",
    institution: user?.institution || "",
    department: user?.department || "",
    level: user?.level || "",
  });

  const handleChange = (e) => {

    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });

  };

  const saveProfile = async () => {

    try {

      setSaving(true);

      const res = await api.put(
        "/auth/profile",
        formData,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );

      setUser(res.data.user);

      localStorage.setItem(
        "user",
        JSON.stringify(res.data.user)
      );

      setShowModal(false);

    } catch (error) {

      console.log(error);

      alert("Unable to update profile.");

    } finally {

      setSaving(false);

    }

  };

  return (

    <>

      <div className="bg-white rounded-3xl shadow-lg p-8">

        <h1 className="text-3xl font-bold mb-8">
          My Profile
        </h1>

        <div className="flex items-center gap-8">

          <div className="w-32 h-32 rounded-full bg-gradient-to-r from-sky-500 to-indigo-600 text-white flex items-center justify-center text-5xl shadow-lg">
            👤
          </div>

          <div className="space-y-3">

            <h2 className="text-3xl font-bold">
              {user?.fullName}
            </h2>

            <p>
              <span className="font-semibold">
                University:
              </span>{" "}
              {user?.institution}
            </p>

            <p>
              <span className="font-semibold">
                Department:
              </span>{" "}
              {user?.department}
            </p>

            <p>
              <span className="font-semibold">
                Level:
              </span>{" "}
              {user?.level}
            </p>

            <p>
              <span className="font-semibold">
                Email:
              </span>{" "}
              {user?.email}
            </p>

          </div>

        </div>

        <button
          onClick={() => setShowModal(true)}
          className="mt-8 bg-sky-600 hover:bg-sky-700 text-white px-8 py-3 rounded-xl transition shadow"
        >
          Edit Profile
        </button>

      </div>

      {showModal && (

        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">

          <div className="bg-white rounded-3xl shadow-2xl w-full max-w-lg p-8">

            <h2 className="text-2xl font-bold mb-6">
              Edit Profile
            </h2>

            <div className="space-y-5">

              <input
                type="text"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                placeholder="Full Name"
                className="w-full border rounded-xl p-3 focus:ring-2 focus:ring-sky-500 outline-none"
              />

              <input
                type="text"
                name="institution"
                value={formData.institution}
                onChange={handleChange}
                placeholder="Institution"
                className="w-full border rounded-xl p-3 focus:ring-2 focus:ring-sky-500 outline-none"
              />

              <input
                type="text"
                name="department"
                value={formData.department}
                onChange={handleChange}
                placeholder="Department"
                className="w-full border rounded-xl p-3 focus:ring-2 focus:ring-sky-500 outline-none"
              />

              <input
                type="text"
                name="level"
                value={formData.level}
                onChange={handleChange}
                placeholder="Level"
                className="w-full border rounded-xl p-3 focus:ring-2 focus:ring-sky-500 outline-none"
              />

            </div>

            <div className="flex justify-end gap-4 mt-8">

              <button
                onClick={() => setShowModal(false)}
                className="px-6 py-3 rounded-xl border"
              >
                Cancel
              </button>

              <button
                onClick={saveProfile}
                disabled={saving}
                className="px-6 py-3 rounded-xl bg-sky-600 hover:bg-sky-700 text-white"
              >
                {saving ? "Saving..." : "Save Changes"}
              </button>

            </div>

          </div>

        </div>

      )}

    </>

  );

};

export default Profile;