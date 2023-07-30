import React from "react";
import { FcLike, FcLikePlaceholder } from "react-icons/fc";
import { toast } from "react-toastify";
const Card = ({ course, likedCourses, setLikedCourses }) => {
  const clickHandler = () => {
    if (likedCourses.includes(course.id)) {
      // already liked
      setLikedCourses((prev) => prev.filter((cid) => cid !== course.id));

      toast.warning("Like removed");
    } else {
      // not liked
      // add it to likedCourses
      if (likedCourses.length === 0) {
        setLikedCourses([course.id]);
      } else {
        setLikedCourses((prev) => [...prev, course.id]);
      }

      toast.success("Liked Successfully");
    }
  };

  return (
    <div
      className="w-[300px] bg-bgDark bg-opacity-80 rounded-md overflow-hidden 
    "
    >
      <div className="relative ">
        <img src={course.image.url} alt="card-ing"></img>

        <div className="w-[40px] h-[40px] bg-bgWhite  rounded-full absolute right-2 bottom-[-12px] grid place-items-center">
          <button onClick={clickHandler}>
            {likedCourses.includes(course.id) ? (
              <FcLike fontSize="1.75rem" />
            ) : (
              <FcLikePlaceholder fontSize="1.75rem" />
            )}
          </button>
        </div>
      </div>

      <div className="p-4">
        <p className="text-bgWhite font-semibold text-lg leading-6">
          {course.title}
        </p>
        <p className="mt-2 text-bgWhite ">
          {course.description.length > 100
            ? course.description.substr(0, 100) + "..."
            : course.description}
        </p>
      </div>
    </div>
  );
};

export default Card;
