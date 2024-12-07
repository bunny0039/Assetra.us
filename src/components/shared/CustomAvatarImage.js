"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

function CustomAvatarImage({
  avatarStyle = "rounded-none",
  imgStyle = "rounded-none",
  imgPath = "",
  fallback = "",
}) {
  return (
    <Avatar className={`${avatarStyle} `}>
      <AvatarImage
        src={`${imgPath}`}
        alt={`${fallback}`}
        className={`${imgStyle} `}
      />
      <AvatarFallback>{fallback}</AvatarFallback>
    </Avatar>
  );
}

export default CustomAvatarImage;
