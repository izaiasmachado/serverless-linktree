import users from './items'

export async function main() {
	return {
		statusCode: 200,
		body: JSON.stringify(users),
	}
}