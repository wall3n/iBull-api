export default interface UserRepository {
	getUserById(id: number): Promise<User>
}
