"use client";
import { switchFollow } from "@/lib/actions";
import React, { useOptimistic, useState } from "react";

const UserInfoCardInteraction = ({
  userId,
  currentUserId,
  isUserBlocked,
  isFollowing,
  isFollowingSent,
}: {
  userId: string;
  currentUserId: string;
  isUserBlocked: boolean;
  isFollowing: boolean;
  isFollowingSent: boolean;
}) => {
  const [userState, setUserState] = useState({
    following: isFollowing,
    blocked: isUserBlocked,
    followingRequestSent: isFollowingSent,
  });

  const follow = async () => {
    switchOptimisticState("");
    try {
      await switchFollow(userId);
      setUserState((prevState) => ({
        ...prevState,
        following: prevState.following && false,
        followingRequestSent:
          !prevState.following && !prevState.followingRequestSent
            ? true
            : false,
      }));
    } catch (error) {
      console.log(error);
    }
  };

  const block = async () => {

  };

  const [optimisticState, switchOptimisticState] = useOptimistic(
    userState,
    (state) => ({
      ...state,
      following: state.following && false,
      followingRequestSent:
        !state.following && !state.followingRequestSent ? true : false,
    })
  );
  return (
    <>
      <form action={follow}>
        <button className="w-full bg-green-400 text-white text-sm rounded-md p-2">
          {optimisticState.following
            ? "Following"
            : optimisticState.followingRequestSent
            ? "Friend Request Sent"
            : "Follow"}
        </button>
      </form>
      <form action="" className="self-end">
        <span className="text-red-400  text-xs cursor-pointer">
          {optimisticState.blocked ? "Unblock User" : "Block User"}
        </span>
      </form>
    </>
  );
};

export default UserInfoCardInteraction;
