
/** ------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */
export class NewAuthor {
    id: number;
    firstName?: string;
    lastName?: string;
}

export class Author {
    id: number;
    firstName?: string;
    lastName?: string;
}

export abstract class IQuery {
    abstract getall(): Author[] | Promise<Author[]>;
}

export abstract class IMutation {
    abstract createAuthor(input: NewAuthor): Author | Promise<Author>;
}
