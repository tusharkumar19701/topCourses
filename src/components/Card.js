import React from 'react';
import {FcLike, FcLikePlaceholder} from "react-icons/fc";
import {useState} from 'react';
import {toast} from 'react-toastify';

const Card = (props) => {
    let course = props.course;
    let likedCourses = props.likedCourses;
    let setLikedCourses = props.setLikedCourses;

    function clickHandler() {
         if(likedCourses.includes(course.id)) {
            //phle se liked hai
            setLikedCourses((prev) => prev.filter((cid) => (cid !== course.id)));
            toast.warning("Like Removed");
         }
         else {
            if(likedCourses.length === 0) {
                setLikedCourses([course.id]);
            }
            else {
                setLikedCourses((prev) => [...prev, course.id]);
            }
            toast.success("Liked Successfully");
         }
    }
    
    return (
        <div className="w-[300px] bg-[rgb(34,34,57)] overflow-hidden rounded-md bg-opacity-80">
            <div className="relative">
                <img src={course.image.url} />   
                <div>
                    <button onClick={clickHandler} className="w-[40px] h-[40px] bg-white rounded-full absolute right-2 bottom-[-12px] grid place-items-center">
                        {likedCourses.includes(course.id) ? (<FcLike fontSize="1.75rem"/>) : (<FcLikePlaceholder fontSize="1.75rem"/>)}
                    </button>
                </div>
            </div> 
            
            <div className="p-4">
                <p className="text-white font-semibold text-lg leading-6">{course.title}</p>
                <p className="mt-6 text-white">
                    {
                        course.description.length > 100 ? (course.description.substr(0,100)) + '...' : (course.description)
                    }
                </p>
            </div>
        </div>
    )
}

export default Card;