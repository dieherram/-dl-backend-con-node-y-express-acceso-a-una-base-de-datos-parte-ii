export const validateFields = ({ titulo, url, descripcion }) => {
    const errors = []
    const imageUrlRegex = /^(http(s?):)([/|.|\w|\s|-])*\.(?:jpg|gif|png|jpeg|bmp|webp|svg|ico|tiff|tif|heic|heif)$/i;

   if (!titulo || titulo.trim() === '') {
        errors.push({field: 'titulo', error: 'Campo requerido'})
    }

    if (!url || url.trim() === '') {
        errors.push({field: 'url', error: 'Campo requerido'})
    } else if (!imageUrlRegex.test(url)){
        errors.push({field: 'url', error: 'Formato de url no valido'})
    }

    if (!descripcion || descripcion.trim() === '') {
        errors.push({field: 'descripcion', error: 'Campo requerido'})
    }

    return errors
}
