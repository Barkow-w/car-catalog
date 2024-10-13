export interface carItemsType {
    id: number,
    brand_name: string,
    image: string,
}

export interface carImageType {
    id: number,
    url: string,
}

export interface carType {
    id: number,
    brand_id?: number,
    brand_name?: string,
    model_name?: string,
    name: string,
    image: carImageType,
}

export interface avatarType {
    url: string,
}

export interface userType {
    id: number,
    username: string,
    main_auto_name: string,
    avatar: avatarType,
    email?: string
}

export interface postItemType {
    id: number
    car: carType,
    user: userType,
}

//

export interface authorType {
    id: number,
    avtar: avatarType,
    main_auto_name: string,
    username: string,

}

export interface postListType {
    id: number,
    author: authorType,
    comment_count: number,
    created_at: string,
    img: string,
    like_count: number,
    text: string,
}

export interface commentUserType {
    id: number,
    created_at: string,
    text: string,
    user: userType,
}



