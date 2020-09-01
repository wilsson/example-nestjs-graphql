import { Resolver, Query, Args, Mutation } from '@nestjs/graphql';

@Resolver('Author')
export class AuthorResolvers {
    #authors: any[] = []
    constructor() {
        this.#authors = [{
            id: 1,
            firstName: 'wilson',
            lastName: 'flores'
        }];
    }

    @Query()
    getall() {
        return this.#authors;
    }

    @Mutation('createAuthor')
    create(@Args('input') args: any): any {
        this.#authors.push(args);
        return args;
    }
}