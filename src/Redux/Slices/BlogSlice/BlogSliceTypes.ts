export interface initialStateType {
    status: string
    posts: blogType[]
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