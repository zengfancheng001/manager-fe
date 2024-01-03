export interface IUser {
  id: number
  username: string
  realname: string
  cellphone: number
  enable: number
  departmentId: number
  roleId: number
  createAt: string
  updateAt: string
}

export interface ISystemState {
  usersList: IUser[]
  usersTotalCount: number
}
