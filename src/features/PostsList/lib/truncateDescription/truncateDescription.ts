export const truncateDescription = (description: string, length: number | undefined): string => {
    if(length) return ''

    if (length >= description.length) {
        return description;
    }

    const spaceIndex = description.indexOf(' ', length);

    if (spaceIndex !== -1) {
        return description.substring(0, spaceIndex);
    } else {
        // Если пробел не найден после указанной длины, обрезаем строку по указанной длине.
        return description.substring(0, length);
    }
}
