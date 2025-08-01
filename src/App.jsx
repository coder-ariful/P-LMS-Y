// import { createBrowserRouter } from "react-router";
// import Home from "./pages/students/Home";
// import Main from "./layout/Main";
// import CoursesList from "./pages/students/CoursesList";
// import CourseDetails from "./pages/students/CourseDetails";
// import MyEnrollments from "./pages/students/MyEnrollments";
// import Player from "./pages/students/Player";
// import Loading from "./components/students/Loading";

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <Main />,
//     children: [
//       {
//         path: "/",
//         element: <Home />
//       },
//       {
//         path: "/course-list",
//         element: <CoursesList />
//       },
//       {
//         path: "/course-list/:input",
//         element: <CoursesList />
//       },
//       {
//         path: "/course/:id",
//         element: <CourseDetails />
//       },
//       {
//         path: "/course-enrollments",
//         element: <MyEnrollments />
//       },
//        {
//         path:"/player/:courseId",
//         element: <Player/>
//       },
//        {
//         path:"/loading/:path",
//         element: <Loading/>
//       }
//     ]
//   }
// ])

// export default router;

// =======================================================================================================================

import React from 'react';
import { Route, Routes, useMatch } from 'react-router';
import Home from './pages/students/Home';
import CoursesList from './pages/students/CoursesList';
import CourseDetails from './pages/students/CourseDetails';
import MyEnrollments from './pages/students/MyEnrollments';
import Player from './pages/students/Player';
import Loading from './components/students/Loading';
import Educator from './pages/educator/Educator';
import DashBroad from './pages/educator/DashBroad';
import AddCourse from './pages/educator/AddCourse';
import MyCourses from './pages/educator/MyCourses';
import StudentsEnrolled from './pages/educator/StudentsEnrolled';
import Navbar from './components/students/Navbar';

const App = () => {

  const isEducatorRoute = useMatch('/educator/*')

  return (
    <div className='text-default min-h-screen bg-white'>

      {!isEducatorRoute && <Navbar />}

      <Routes>
        <Route path='/' element={<Home></Home>} />
        <Route path='/course-list' element={<CoursesList></CoursesList>} />
        <Route path="/course-list/:input" element={<CoursesList></CoursesList>} />
        <Route path='/course/:id' element={<CourseDetails />} />
        <Route path='/my-enrollments' element={<MyEnrollments />} />
        <Route path='/player/:courseId' element={<Player />} />
        <Route path='/loading/:path' element={<Loading />} />
        {/* nested router here. */}
        <Route path='/educator' element={<Educator />}>
          <Route path='educator' element={<DashBroad />} />
          <Route path='add-course' element={<AddCourse />} />
          <Route path='my-courses' element={<MyCourses />} />
          <Route path='student-enrolled' element={<StudentsEnrolled />} />
        </Route>
      </Routes>
    </div>
  );
};

export default App;