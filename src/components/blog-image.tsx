import { ImageDataLike, getImage, GatsbyImage, StaticImage } from "gatsby-plugin-image";
import React from "react";

export default ({ imageData, className }: { imageData: ImageDataLike, className?: string }) => {
    const image = getImage(imageData);
    return image ? (
        <GatsbyImage
            className={className}
            image={image}
            alt="image"
        />
    ) : (
        <StaticImage
            className={className}
            src={"../static/pics/star.png"}
            alt={""} />
    )
}