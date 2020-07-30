

export function firstLetterCase(str) {
    return (str.charAt(0).toUpperCase() + str.slice(1));
}

export function splitTypeArray(arr) {
    return arr.join(" and ");
}


//  const [loading, setLoading] = useState(false)
//  const [image, setImage] = useState('')
export function uploadImage() {
    async e => {
        const files = e.target.files
        const data = new FormData()
        data.append('file', files[0])
        data.append('upload_preset', 'darwin')
        setLoading(true)
        const res = await fetch(
            '	https://api.cloudinary.com/v1_1/dfpncq7pk/image/upload',
            {
                method: 'POST',
                body: data
            }
        )

        const file = await res.json()

        setImage(file.secure_url)
        setLoading(false)
        return (file)
    }
}