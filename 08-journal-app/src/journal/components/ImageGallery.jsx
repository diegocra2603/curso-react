import { ImageList, ImageListItem } from "@mui/material"

export const ImageGallery = ({imageUrls = [], title}) => {
    return (
        <ImageList sx={{ width: '100%', height: 500 }} cols={4} rowHeight={200}>
            {imageUrls.map((item) => (
                <ImageListItem key={item}>
                    <img
                        srcSet={`${item}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                        src={`${item}?w=164&h=164&fit=crop&auto=format`}
                        alt={`Imagen nota ${title}`}
                        loading="lazy"
                    />
                </ImageListItem>
            ))}
        </ImageList>
    )
}