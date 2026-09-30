import React, { use } from "react";
import OverViewContainer from "../../../../../../ui/OverViewContainer/OverViewContainer";
import users from "../../../../../../../data/users";
import UserCard from "./UserCard";

function LastUsers() {
  return (
    <div className="col-span-2 max-h-max">
      <OverViewContainer
        title="آخرین کاربران"
        buttonLabel="نمایش کامل لیست"
        itemLength={users.length}
        navigate={"/users"}
      >
        {users.slice(-5).map((user) => (
          <UserCard
            email={user.email}
            fullName={user.fullName}
            profile={user.profile}
            key={user.id}
          />
        ))}
      </OverViewContainer>
    </div>
  );
}

export default LastUsers;
