"use client";

import withAuth from "../appComponents/withAuth";

function UserAuthLayout({ children }) {
  return <div>{children}</div>;
}

export default withAuth(UserAuthLayout);
