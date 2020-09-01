import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { AuthorModule } from './authors/authors.module';

@Module({
  imports: [
    AuthorModule,
    GraphQLModule.forRoot({
      typePaths: ['./**/*.graphql']
    })
  ]
})
export class AppModule {}
