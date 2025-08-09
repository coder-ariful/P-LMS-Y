import { useEffect, useState } from "react";
import { AppContext } from "./AppContext"
import { dummyCourses } from "../assets/asset/assets";
import { useNavigate } from "react-router";


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
    const userInfo = {
        currency,
        allCourses,
        navigate,
        calculateRating,
        isEducator,
        setIsEducator
    }
    return (
        <AppContext.Provider value={userInfo}>
            {children}
        </AppContext.Provider>
    )
}