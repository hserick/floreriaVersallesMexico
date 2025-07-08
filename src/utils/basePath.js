
export const resolveAssetPath = (relativePath) => {
    return `${import.meta.env.BASE_URL}${relativePath}`
}
