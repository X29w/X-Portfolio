import { assetPrefix } from "@/next.config";
import Image, { ImageProps } from "next/image";
import type { FC } from "react";

const CustomImage: FC<ImageProps> = ({ src, alt, ...props }) => (
  <Image src={`${assetPrefix}${src}`} alt={alt} {...props} />
);

export default CustomImage;
