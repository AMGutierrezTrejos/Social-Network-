import React, { Suspense } from "react";
import FriendRequest from "./FriendRequest";
import Birthdays from "./Birthdays";
import Ad from "../Ad";

import { User } from "@prisma/client";
import UserInfoCard from "./UserInfoCard";
import UserMediaCard from "./UserMediaCard";

const RightMenu = ({ user }: { user?: User }) => {
  return (
    <div className="flex flex-col gap-6">
      {user ? (
        <>
          <Suspense fallback="Loading...">
            <UserInfoCard user={user} />
          </Suspense>
          <Suspense fallback="Loading...">
            <UserMediaCard user={user} />
          </Suspense>
        </>
      ) : null}
      <FriendRequest />
      <Birthdays />
      <Ad size="md" />
    </div>
  );
};

export default RightMenu;
