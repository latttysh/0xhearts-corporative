export interface initialStateType {
    status: string
    posts: blogType[]
    post: blogType
}

export interface blogType{
    id: number
    title: string
    text: string
    cover_ing: string
    category: string
    author: string
    createdAt: string
    updatedAt: string
}

export interface newPostData{
    title: string
    text: string
    author: string
    cover_img: string
    category: string
}