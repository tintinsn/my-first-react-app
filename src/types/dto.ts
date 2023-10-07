export interface PostDTO {
  id: number
  userId: number
  title: string
  body: string
}
export interface CreatePostDTO {
  userId: number
  id: number
  title: string
  body: string
}
