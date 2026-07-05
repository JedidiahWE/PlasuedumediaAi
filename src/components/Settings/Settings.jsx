const Settings = () => {
  return (
    <div className="bg-white rounded-3xl shadow p-8">

      <h1 className="text-3xl font-bold mb-8">
        Settings
      </h1>

      <div className="space-y-6">

        <div className="flex justify-between items-center border rounded-xl p-5">

          <span>Dark Mode</span>

          <input type="checkbox" />

        </div>

        <div className="flex justify-between items-center border rounded-xl p-5">

          <span>Email Notifications</span>

          <input type="checkbox" defaultChecked />

        </div>

        <div className="flex justify-between items-center border rounded-xl p-5">

          <span>Auto Save</span>

          <input type="checkbox" defaultChecked />

        </div>

      </div>

    </div>
  );
};

export default Settings;