export interface Comments {
    id?: number;
    createdAt?: Date;
    postId: number;
    commentedBy?: string;
    comment?: string;
}