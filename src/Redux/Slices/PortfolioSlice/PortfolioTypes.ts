export interface WorkType {
    id: number,
    title: string,
    cover_img: string,
    category: string,
    link: string
    author: string,
}

export interface PortfolioInitialStateType {
    status: string,
    works: WorkType[]
}

export interface newWorkType {
    title: string,
    cover_img: string,
    category: string,
    author: string
    link: string
}