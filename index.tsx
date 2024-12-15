index.tsx "import {
BookOpen,
Home,
Settings,
Award,
BarChart,
Users,
LogOut,
} from "lucide-react";
import { render } from "react-dom";
import React from "react";
export default function CourseLayout() {
return (
<div className="min-h-screen grid grid-cols-1 md:grid-cols-[280px_1fr]">
{/* Sidebar /}
<aside className="bg-slate-800 text-white p-6 flex flex-col">
{/ Logo/Title */}
<div className="flex items-center gap-3 mb-8">
<BookOpen className="w-8 h-8" />
<h1 className="text-xl font-bold">Learning Academy</h1>
</div>


    {/* Level Display */}
    <div className="bg-slate-700 rounded-lg p-4 mb-8">
      <div className="flex items-center gap-2 mb-2">
        <Award className="w-5 h-5 text-yellow-400" />
        <span className="font-medium">Current Level</span>
      </div>
      <div className="text-2xl font-bold">Level 5</div>
      <div className="mt-2 bg-slate-600 rounded-full h-2">
        <div className="bg-yellow-400 w-3/4 h-full rounded-full"></div>
      </div>
      <div className="text-sm text-slate-300 mt-2">750/1000 XP</div>
    </div>

    {/* Navigation */}
    <nav className="flex-1">
      <ul className="space-y-2">
        <li>
          <a className="flex items-center gap-3 p-3 rounded-lg hover:bg-slate-700 transition-colors">
            <Home className="w-5 h-5" />
            Dashboard
          </a>
        </li>
        <li>
          <a className="flex items-center gap-3 p-3 rounded-lg hover:bg-slate-700 transition-colors">
            <BookOpen className="w-5 h-5" />
            Courses
          </a>
        </li>
        <li>
          <a className="flex items-center gap-3 p-3 rounded-lg hover:bg-slate-700 transition-colors">
            <BarChart className="w-5 h-5" />
            Progress
          </a>
        </li>
        <li>
          <a className="flex items-center gap-3 p-3 rounded-lg hover:bg-slate-700 transition-colors">
            <Users className="w-5 h-5" />
            Community
          </a>
        </li>
        <li>
          <a className="flex items-center gap-3 p-3 rounded-lg hover:bg-slate-700 transition-colors">
            <Settings className="w-5 h-5" />
            Settings
          </a>
        </li>
      </ul>
    </nav>

    {/* Logout */}
    <button className="flex items-center gap-3 p-3 rounded-lg hover:bg-slate-700 transition-colors mt-auto">
      <LogOut className="w-5 h-5" />
      Logout
    </button>
  </aside>

  {/* Main Content */}
  <main className="p-8 bg-slate-50">
    <div className="max-w-4xl mx-auto">
      <header className="mb-8">
        <h2 className="text-3xl font-bold text-slate-900">
          Welcome Back, Student!
        </h2>
        <p className="text-slate-600 mt-2">
          Continue your learning journey
        </p>
      </header>

      <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded-xl shadow-sm">
          <h3 className="text-lg font-semibold mb-4">Current Course</h3>
          <div className="bg-slate-100 rounded-lg p-4">
            <h4 className="font-medium">Web Development Fundamentals</h4>
            <p className="text-sm text-slate-600 mt-2">Progress: 75%</p>
            <div className="mt-2 bg-slate-200 rounded-full h-2">
              <div className="bg-blue-500 w-3/4 h-full rounded-full"></div>
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-sm">
          <h3 className="text-lg font-semibold mb-4">Next Lesson</h3>
          <div className="bg-slate-100 rounded-lg p-4">
            <h4 className="font-medium">CSS Grid Layout</h4>
            <p className="text-sm text-slate-600 mt-2">
              Duration: 45 minutes
            </p>
            <button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors">
              Continue Learning
            </button>
          </div>
        </div>
      </section>

      <section className="mt-8">
        <h3 className="text-lg font-semibold mb-4">Recent Achievements</h3>
        <div className="bg-white p-6 rounded-xl shadow-sm">
          <div className="flex items-center gap-4">
            <Award className="w-8 h-8 text-yellow-400" />
            <div>
              <h4 className="font-medium">CSS Master</h4>
              <p className="text-sm text-slate-600">
                Completed all CSS modules
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  </main>
</div>
);
}
render(<CourseLayout />, document.getElementById("root"));
" let's make this index.tsx course site to work
