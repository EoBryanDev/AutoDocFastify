import { fastify } from 'fastify';
import { fastifyCors } from '@fastify/cors';
import { validatorCompiler, serializerCompiler, ZodTypeProvider, jsonSchemaTransform } from 'fastify-type-provider-zod';
import fastifySwagger from '@fastify/swagger';
import fastifySwaggerUi from '@fastify/swagger-ui';
import { open_routes } from './routes/publicRoutes/open.routes';
import { users } from './routes/privateRoutes/user.routes';
import metricsPlugin from 'fastify-metrics';

const app = fastify().withTypeProvider<ZodTypeProvider>();
app.register(metricsPlugin, { endpoint: '/metrics' });

app.setValidatorCompiler(validatorCompiler);
app.setSerializerCompiler(serializerCompiler);

app.register(fastifyCors, {
  origin: '*',
});

app.register(fastifySwagger, {
  openapi: {
    info: {
      title: 'Users API',
      description: 'This is a simple API for managing users. You can create, read, update and delete users.',
      version: '1.0.0',
    },
  },
  transform: jsonSchemaTransform,
});


app.register(open_routes);
app.register(users);

app.register(fastifySwaggerUi, {
  routePrefix: '/docs',
});

app.listen({ port: 3000 }).then(() => {
  console.log('Server is running on http://127.0.0.1:3000');
});
