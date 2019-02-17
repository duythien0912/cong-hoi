import React from "react";
import { IconWithBadge } from "./IconWithBadge";

const HomeIconWithBadge = (props: any) => {
  // You should pass down the badgeCount in some other ways like context, redux, mobx or event emitters.
  return <IconWithBadge {...props} badgeCount={3} />;
};

export { HomeIconWithBadge };
