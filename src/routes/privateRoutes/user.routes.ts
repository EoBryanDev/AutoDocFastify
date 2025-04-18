import { TFastifyTypedInstance } from "../../types/TFastifyTypedInstance";
import { UsersController } from "../../controllers/UserController";
import { CreateUserBodySchema } from "../../schemas/users.post.schema";

// Inferindo os tipos para o Fastify a partir dos schemas Zod
export async function users(app: TFastifyTypedInstance) {
	app.get('/users', {
		schema: {
			tags: ['Users'],
			description: 'Get all users',
		}
	}, UsersController.getUsers)


	app.post('/users', {
		schema: {
			tags: ['Users'],
			description: 'Create a new user',
			body: CreateUserBodySchema,
		}

	}, UsersController.createUser)

	app.patch('/users/:id', {
		schema: {
			tags: ['Users'],
			description: 'Create a new user',
			body: CreateUserBodySchema,
		}

	}, UsersController.createUser)

	app.delete('/users/:id', {
		schema: {
			tags: ['Users'],
			description: 'Create a new user',
			body: CreateUserBodySchema,
		}

	}, UsersController.createUser)
}