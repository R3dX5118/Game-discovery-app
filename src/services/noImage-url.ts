import placeholderImage from '../assets/Image Placeholder/no-image-placeholder-6f3882e0.webp'

const noImageUrl = (url: string) => {
    if(!url) return placeholderImage; else{
        return url
    }
}

export default noImageUrl