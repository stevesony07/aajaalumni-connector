
import { Link } from 'react-router-dom';
import { Layout, User, Pencil, Trash, Download, Upload, BarChart2, Settings, Users } from 'lucide-react';

const AdminDashboard = () => {
  const sidebarLinks = [
    { icon: Layout, label: 'Dashboard', active: true, link: '/admin' },
    { icon: User, label: 'Add Alumni', active: false, link: '/admin/add' },
    { icon: Users, label: 'Manage Alumni', active: false, link: '/admin/manage' },
    { icon: BarChart2, label: 'Reports', active: false, link: '/admin/reports' },
    { icon: Settings, label: 'Settings', active: false, link: '/admin/settings' },
  ];

  const recentActivity = [
    {
      type: 'Added',
      icon: User,
      details: 'Rahul Sharma (CS-2022) added by Admin at 10:00 AM',
    },
    {
      type: 'Updated',
      icon: Pencil,
      details: 'Priya Patel (EE-2020) updated by Admin at 09:45 AM',
    },
    {
      type: 'Deleted',
      icon: Trash,
      details: 'Duplicate entry removed by Admin at 09:30 AM',
    },
  ];

  const quickAccessOptions = [
    {
      icon: Download,
      title: 'Export Data',
      description: 'Download alumni records as CSV',
      button: 'Export',
      link: '/admin/export',
    },
    {
      icon: Upload,
      title: 'Batch Upload',
      description: 'Upload multiple alumni records',
      button: 'Upload',
      link: '/admin/upload',
    },
    {
      icon: BarChart2,
      title: 'Generate Report',
      description: 'Create custom alumni reports',
      button: 'Create',
      link: '/admin/reports/new',
    },
  ];

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <div className="w-64 bg-white shadow-sm">
        <div className="px-6 py-4 border-b">
          <h2 className="text-xl font-bold text-primary">AJCE Alumni</h2>
        </div>
        <div className="p-4">
          <ul className="space-y-2">
            {sidebarLinks.map((link) => (
              <li key={link.label}>
                <Link
                  to={link.link}
                  className={`flex items-center space-x-3 px-4 py-2.5 rounded-lg ${
                    link.active
                      ? 'bg-gray-100 text-primary'
                      : 'text-gray-600 hover:bg-gray-50'
                  }`}
                >
                  <link.icon className="h-5 w-5" />
                  <span>{link.label}</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 overflow-y-auto">
        <div className="p-8">
          <h1 className="text-2xl font-bold text-gray-800 mb-6">
            Welcome, Admin! Manage AJCE Alumni Data
          </h1>

          {/* Stats Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="flex items-center mb-4">
                <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center mr-3">
                  <Users className="h-5 w-5 text-primary" />
                </div>
                <h3 className="text-lg font-semibold">Total Alumni</h3>
              </div>
              <p className="text-3xl font-bold text-secondary">5,280</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="flex items-center mb-4">
                <div className="h-10 w-10 rounded-full bg-accent/10 flex items-center justify-center mr-3">
                  <User className="h-5 w-5 text-accent" />
                </div>
                <h3 className="text-lg font-semibold">Pending Entries</h3>
              </div>
              <p className="text-3xl font-bold text-accent">10</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="flex items-center mb-4">
                <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center mr-3">
                  <Layout className="h-5 w-5 text-primary" />
                </div>
                <h3 className="text-lg font-semibold">Last Updated</h3>
              </div>
              <p className="text-xl font-semibold">Today, 10:45 AM</p>
            </div>
          </div>

          {/* Add Alumni Button */}
          <div className="mb-8">
            <button className="bg-accent text-white px-6 py-3 rounded-lg">
              Add New Alumni
            </button>
          </div>

          {/* Recent Activity */}
          <div className="mb-8">
            <h2 className="text-xl font-bold mb-4">Recent Activity</h2>
            <div className="bg-white rounded-lg shadow-sm overflow-hidden">
              {recentActivity.map((activity, index) => (
                <div
                  key={index}
                  className={`flex items-start p-4 ${
                    index !== recentActivity.length - 1 ? 'border-b' : ''
                  }`}
                >
                  <div className="h-10 w-10 rounded-full bg-blue-50 flex items-center justify-center mr-4">
                    <activity.icon className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-medium">Alumni {activity.type}</h4>
                    <p className="text-gray-600 text-sm">{activity.details}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Quick Access */}
          <div>
            <h2 className="text-xl font-bold mb-4">Quick Access</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {quickAccessOptions.map((option, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-sm">
                  <div className="flex items-center mb-4">
                    <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center mr-3">
                      <option.icon className="h-5 w-5 text-primary" />
                    </div>
                    <h3 className="text-lg font-semibold">{option.title}</h3>
                  </div>
                  <p className="text-gray-600 mb-4">{option.description}</p>
                  <Link
                    to={option.link}
                    className="bg-primary text-white px-4 py-2 rounded inline-block"
                  >
                    {option.button}
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
