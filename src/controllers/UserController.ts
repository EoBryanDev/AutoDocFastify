import { FastifyReply, FastifyRequest } from "fastify";
import { randomUUID } from "node:crypto";
import { CreateUserBody, UserResponse } from "../schemas/users.post.schema";

interface User {
    id: string;
    name: string;
    email: string;
}

const usersList: User[] = []

export class UsersController  {
    static getUsers = async (_request: FastifyRequest, reply: FastifyReply) => {
        
        reply.status(200).send(usersList);
    }

    static createUser = async (request: FastifyRequest<{Body: CreateUserBody}>, reply: FastifyReply) => {
        const { name, email } = request.body;

        const user = {
            id: randomUUID(),
            name,
            email,
        };

        usersList.push(user);

        reply.status(201).send(user);
    }

}