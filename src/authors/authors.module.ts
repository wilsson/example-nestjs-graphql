import { Module } from '@nestjs/common';
import { AuthorResolvers } from './author.resolvers';

@Module({
    providers: [AuthorResolvers]
})
export class AuthorModule {}