import { FastifyReply, FastifyRequest } from "fastify";
import { TFastifyTypedInstance } from "../../types/TFastifyTypedInstance";

export async function open_routes(app: TFastifyTypedInstance) {
  app.get('/', {
    schema: {
      tags: ['Home'],
      description: 'Verify if the application is running',
    }
  }, async (_request: FastifyRequest, reply: FastifyReply) => {

    reply.status(200).send('Aplicação rodando!');
  })

  app.post('/login', {
    schema: {
      tags: ['Login'],
      description: 'Verifica resposta da aplicação',
    }
  }, async (_request: FastifyRequest, reply: FastifyReply) => {

    reply.status(200).send('Aplicação rodando!');
  })

  app.post('/sign-in', {
    schema: {
      tags: ['Login'],
      description: 'Verifica resposta da aplicação',
    }
  }, async (_request: FastifyRequest, reply: FastifyReply) => {

    reply.status(200).send('Aplicação rodando!');
  })
}