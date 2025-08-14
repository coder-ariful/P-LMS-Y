import { useEffect, useState } from "react";
import { AppContext } from "./AppContext"
import { dummyCourses } from "../assets/asset/assets";
import { useNavigate } from "react-router";
import humanizeDuration from "humanize-duration";


export const AppContextProvider = ({ children }) => {
    const currency = import.meta.env.VITE_CURRENCY;
    const [allCourses, setAllCourses] = useState([]);
    const [isEducator, setIsEducator] = useState(true);
    const navigate = useNavigate();


    // fetch all Courses
    const fetchAllCourses = async () => {
        setAllCourses(dummyCourses)
    }
    useEffect(() => {
        fetchAllCourses()
    }, [])

    // Function to calculate average rating of course
    const calculateRating = (course) => {
        if (course.courseRatings.length === 0) {
            return 0;
        }
        let totalRating = 0
        course.courseRatings.forEach(rating => {
            totalRating += rating.rating
        })
        return totalRating / course.courseRatings.length
    }

    // Function to Calculate Course Chapter Time.
    const calculateChapterTime = (chapter) => {
        let time = 0;
        chapter.chapterContent.map((lecture)=> time += lecture.lectureDuration);
        return humanizeDuration(time * 60 * 1000, {units : ["h", "m"]})
    }
    // Function to Calculate Course Duration
    const calculateCourseDuration = (course) => {
        let time = 0;
        course.courseContent.map((chapter) => chapter.chapterContent.map((lecture) => time += lecture.lectureDuration))
        return humanizeDuration(time * 60 * 1000, {units : ["h", "m"]})
    }
    // Function to Calculate to number of lectures in the course.
    const calculateNumberOfLectures = (course) => {
        let totalLectures = 0;
        course.courseContent.forEach(chapter => {
            if(Array.isArray(chapter.chapterContent)) {
                totalLectures += chapter.chapterContent.length;
            }
        });
        return totalLectures; 
    }
    const userInfo = {
        currency,
        allCourses,
        navigate,
        calculateRating,
        isEducator,
        setIsEducator,
        calculateChapterTime,
        calculateCourseDuration,
        calculateNumberOfLectures
    }
    return (
        <AppContext.Provider value={userInfo}>
            {children}
        </AppContext.Provider>
    )
}