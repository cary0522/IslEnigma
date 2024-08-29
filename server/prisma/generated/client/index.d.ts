
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model member
 * 
 */
export type member = $Result.DefaultSelection<Prisma.$memberPayload>
/**
 * Model credit_card
 * 
 */
export type credit_card = $Result.DefaultSelection<Prisma.$credit_cardPayload>
/**
 * Model customer_order
 * This table contains check constraints and requires additional setup for migrations. Visit https://pris.ly/d/check-constraints for more info.
 */
export type customer_order = $Result.DefaultSelection<Prisma.$customer_orderPayload>
/**
 * Model facility
 * 
 */
export type facility = $Result.DefaultSelection<Prisma.$facilityPayload>
/**
 * Model facility_rule
 * 
 */
export type facility_rule = $Result.DefaultSelection<Prisma.$facility_rulePayload>
/**
 * Model order_info
 * This table contains check constraints and requires additional setup for migrations. Visit https://pris.ly/d/check-constraints for more info.
 */
export type order_info = $Result.DefaultSelection<Prisma.$order_infoPayload>
/**
 * Model order_item
 * 
 */
export type order_item = $Result.DefaultSelection<Prisma.$order_itemPayload>
/**
 * Model room
 * 
 */
export type room = $Result.DefaultSelection<Prisma.$roomPayload>
/**
 * Model ticket
 * 
 */
export type ticket = $Result.DefaultSelection<Prisma.$ticketPayload>
/**
 * Model more_about
 * 
 */
export type more_about = $Result.DefaultSelection<Prisma.$more_aboutPayload>

/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Members
 * const members = await prisma.member.findMany()
 * ```
 *
 * 
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   * 
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Members
   * const members = await prisma.member.findMany()
   * ```
   *
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): void;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb, ExtArgs>

      /**
   * `prisma.member`: Exposes CRUD operations for the **member** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Members
    * const members = await prisma.member.findMany()
    * ```
    */
  get member(): Prisma.memberDelegate<ExtArgs>;

  /**
   * `prisma.credit_card`: Exposes CRUD operations for the **credit_card** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Credit_cards
    * const credit_cards = await prisma.credit_card.findMany()
    * ```
    */
  get credit_card(): Prisma.credit_cardDelegate<ExtArgs>;

  /**
   * `prisma.customer_order`: Exposes CRUD operations for the **customer_order** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Customer_orders
    * const customer_orders = await prisma.customer_order.findMany()
    * ```
    */
  get customer_order(): Prisma.customer_orderDelegate<ExtArgs>;

  /**
   * `prisma.facility`: Exposes CRUD operations for the **facility** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Facilities
    * const facilities = await prisma.facility.findMany()
    * ```
    */
  get facility(): Prisma.facilityDelegate<ExtArgs>;

  /**
   * `prisma.facility_rule`: Exposes CRUD operations for the **facility_rule** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Facility_rules
    * const facility_rules = await prisma.facility_rule.findMany()
    * ```
    */
  get facility_rule(): Prisma.facility_ruleDelegate<ExtArgs>;

  /**
   * `prisma.order_info`: Exposes CRUD operations for the **order_info** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Order_infos
    * const order_infos = await prisma.order_info.findMany()
    * ```
    */
  get order_info(): Prisma.order_infoDelegate<ExtArgs>;

  /**
   * `prisma.order_item`: Exposes CRUD operations for the **order_item** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Order_items
    * const order_items = await prisma.order_item.findMany()
    * ```
    */
  get order_item(): Prisma.order_itemDelegate<ExtArgs>;

  /**
   * `prisma.room`: Exposes CRUD operations for the **room** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Rooms
    * const rooms = await prisma.room.findMany()
    * ```
    */
  get room(): Prisma.roomDelegate<ExtArgs>;

  /**
   * `prisma.ticket`: Exposes CRUD operations for the **ticket** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Tickets
    * const tickets = await prisma.ticket.findMany()
    * ```
    */
  get ticket(): Prisma.ticketDelegate<ExtArgs>;

  /**
   * `prisma.more_about`: Exposes CRUD operations for the **more_about** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more More_abouts
    * const more_abouts = await prisma.more_about.findMany()
    * ```
    */
  get more_about(): Prisma.more_aboutDelegate<ExtArgs>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError
  export import NotFoundError = runtime.NotFoundError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql

  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics 
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 5.18.0
   * Query Engine version: 4c784e32044a8a016d99474bd02a3b6123742169
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion 

  /**
   * Utility Types
   */

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON object.
   * This type can be useful to enforce some input to be JSON-compatible or as a super-type to be extended from. 
   */
  export type JsonObject = {[Key in string]?: JsonValue}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON array.
   */
  export interface JsonArray extends Array<JsonValue> {}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches any valid JSON value.
   */
  export type JsonValue = string | number | boolean | JsonObject | JsonArray | null

  /**
   * Matches a JSON object.
   * Unlike `JsonObject`, this type allows undefined and read-only properties.
   */
  export type InputJsonObject = {readonly [Key in string]?: InputJsonValue | null}

  /**
   * Matches a JSON array.
   * Unlike `JsonArray`, readonly arrays are assignable to this type.
   */
  export interface InputJsonArray extends ReadonlyArray<InputJsonValue | null> {}

  /**
   * Matches any valid value that can be used as an input for operations like
   * create and update as the value of a JSON field. Unlike `JsonValue`, this
   * type allows read-only arrays and read-only object properties and disallows
   * `null` at the top level.
   *
   * `null` cannot be used as the value of a JSON field because its meaning
   * would be ambiguous. Use `Prisma.JsonNull` to store the JSON null value or
   * `Prisma.DbNull` to clear the JSON value and set the field to the database
   * NULL value instead.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-by-null-values
   */
  export type InputJsonValue = string | number | boolean | InputJsonObject | InputJsonArray | { toJSON(): unknown }

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? K : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    member: 'member',
    credit_card: 'credit_card',
    customer_order: 'customer_order',
    facility: 'facility',
    facility_rule: 'facility_rule',
    order_info: 'order_info',
    order_item: 'order_item',
    room: 'room',
    ticket: 'ticket',
    more_about: 'more_about'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb extends $Utils.Fn<{extArgs: $Extensions.InternalArgs, clientOptions: PrismaClientOptions }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], this['params']['clientOptions']>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> = {
    meta: {
      modelProps: "member" | "credit_card" | "customer_order" | "facility" | "facility_rule" | "order_info" | "order_item" | "room" | "ticket" | "more_about"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      member: {
        payload: Prisma.$memberPayload<ExtArgs>
        fields: Prisma.memberFieldRefs
        operations: {
          findUnique: {
            args: Prisma.memberFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$memberPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.memberFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$memberPayload>
          }
          findFirst: {
            args: Prisma.memberFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$memberPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.memberFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$memberPayload>
          }
          findMany: {
            args: Prisma.memberFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$memberPayload>[]
          }
          create: {
            args: Prisma.memberCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$memberPayload>
          }
          createMany: {
            args: Prisma.memberCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.memberCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$memberPayload>[]
          }
          delete: {
            args: Prisma.memberDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$memberPayload>
          }
          update: {
            args: Prisma.memberUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$memberPayload>
          }
          deleteMany: {
            args: Prisma.memberDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.memberUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.memberUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$memberPayload>
          }
          aggregate: {
            args: Prisma.MemberAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMember>
          }
          groupBy: {
            args: Prisma.memberGroupByArgs<ExtArgs>
            result: $Utils.Optional<MemberGroupByOutputType>[]
          }
          count: {
            args: Prisma.memberCountArgs<ExtArgs>
            result: $Utils.Optional<MemberCountAggregateOutputType> | number
          }
        }
      }
      credit_card: {
        payload: Prisma.$credit_cardPayload<ExtArgs>
        fields: Prisma.credit_cardFieldRefs
        operations: {
          findUnique: {
            args: Prisma.credit_cardFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$credit_cardPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.credit_cardFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$credit_cardPayload>
          }
          findFirst: {
            args: Prisma.credit_cardFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$credit_cardPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.credit_cardFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$credit_cardPayload>
          }
          findMany: {
            args: Prisma.credit_cardFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$credit_cardPayload>[]
          }
          create: {
            args: Prisma.credit_cardCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$credit_cardPayload>
          }
          createMany: {
            args: Prisma.credit_cardCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.credit_cardCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$credit_cardPayload>[]
          }
          delete: {
            args: Prisma.credit_cardDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$credit_cardPayload>
          }
          update: {
            args: Prisma.credit_cardUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$credit_cardPayload>
          }
          deleteMany: {
            args: Prisma.credit_cardDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.credit_cardUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.credit_cardUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$credit_cardPayload>
          }
          aggregate: {
            args: Prisma.Credit_cardAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCredit_card>
          }
          groupBy: {
            args: Prisma.credit_cardGroupByArgs<ExtArgs>
            result: $Utils.Optional<Credit_cardGroupByOutputType>[]
          }
          count: {
            args: Prisma.credit_cardCountArgs<ExtArgs>
            result: $Utils.Optional<Credit_cardCountAggregateOutputType> | number
          }
        }
      }
      customer_order: {
        payload: Prisma.$customer_orderPayload<ExtArgs>
        fields: Prisma.customer_orderFieldRefs
        operations: {
          findUnique: {
            args: Prisma.customer_orderFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$customer_orderPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.customer_orderFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$customer_orderPayload>
          }
          findFirst: {
            args: Prisma.customer_orderFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$customer_orderPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.customer_orderFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$customer_orderPayload>
          }
          findMany: {
            args: Prisma.customer_orderFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$customer_orderPayload>[]
          }
          create: {
            args: Prisma.customer_orderCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$customer_orderPayload>
          }
          createMany: {
            args: Prisma.customer_orderCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.customer_orderCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$customer_orderPayload>[]
          }
          delete: {
            args: Prisma.customer_orderDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$customer_orderPayload>
          }
          update: {
            args: Prisma.customer_orderUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$customer_orderPayload>
          }
          deleteMany: {
            args: Prisma.customer_orderDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.customer_orderUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.customer_orderUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$customer_orderPayload>
          }
          aggregate: {
            args: Prisma.Customer_orderAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCustomer_order>
          }
          groupBy: {
            args: Prisma.customer_orderGroupByArgs<ExtArgs>
            result: $Utils.Optional<Customer_orderGroupByOutputType>[]
          }
          count: {
            args: Prisma.customer_orderCountArgs<ExtArgs>
            result: $Utils.Optional<Customer_orderCountAggregateOutputType> | number
          }
        }
      }
      facility: {
        payload: Prisma.$facilityPayload<ExtArgs>
        fields: Prisma.facilityFieldRefs
        operations: {
          findUnique: {
            args: Prisma.facilityFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$facilityPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.facilityFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$facilityPayload>
          }
          findFirst: {
            args: Prisma.facilityFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$facilityPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.facilityFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$facilityPayload>
          }
          findMany: {
            args: Prisma.facilityFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$facilityPayload>[]
          }
          create: {
            args: Prisma.facilityCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$facilityPayload>
          }
          createMany: {
            args: Prisma.facilityCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.facilityCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$facilityPayload>[]
          }
          delete: {
            args: Prisma.facilityDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$facilityPayload>
          }
          update: {
            args: Prisma.facilityUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$facilityPayload>
          }
          deleteMany: {
            args: Prisma.facilityDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.facilityUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.facilityUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$facilityPayload>
          }
          aggregate: {
            args: Prisma.FacilityAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateFacility>
          }
          groupBy: {
            args: Prisma.facilityGroupByArgs<ExtArgs>
            result: $Utils.Optional<FacilityGroupByOutputType>[]
          }
          count: {
            args: Prisma.facilityCountArgs<ExtArgs>
            result: $Utils.Optional<FacilityCountAggregateOutputType> | number
          }
        }
      }
      facility_rule: {
        payload: Prisma.$facility_rulePayload<ExtArgs>
        fields: Prisma.facility_ruleFieldRefs
        operations: {
          findUnique: {
            args: Prisma.facility_ruleFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$facility_rulePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.facility_ruleFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$facility_rulePayload>
          }
          findFirst: {
            args: Prisma.facility_ruleFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$facility_rulePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.facility_ruleFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$facility_rulePayload>
          }
          findMany: {
            args: Prisma.facility_ruleFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$facility_rulePayload>[]
          }
          create: {
            args: Prisma.facility_ruleCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$facility_rulePayload>
          }
          createMany: {
            args: Prisma.facility_ruleCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.facility_ruleCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$facility_rulePayload>[]
          }
          delete: {
            args: Prisma.facility_ruleDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$facility_rulePayload>
          }
          update: {
            args: Prisma.facility_ruleUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$facility_rulePayload>
          }
          deleteMany: {
            args: Prisma.facility_ruleDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.facility_ruleUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.facility_ruleUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$facility_rulePayload>
          }
          aggregate: {
            args: Prisma.Facility_ruleAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateFacility_rule>
          }
          groupBy: {
            args: Prisma.facility_ruleGroupByArgs<ExtArgs>
            result: $Utils.Optional<Facility_ruleGroupByOutputType>[]
          }
          count: {
            args: Prisma.facility_ruleCountArgs<ExtArgs>
            result: $Utils.Optional<Facility_ruleCountAggregateOutputType> | number
          }
        }
      }
      order_info: {
        payload: Prisma.$order_infoPayload<ExtArgs>
        fields: Prisma.order_infoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.order_infoFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$order_infoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.order_infoFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$order_infoPayload>
          }
          findFirst: {
            args: Prisma.order_infoFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$order_infoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.order_infoFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$order_infoPayload>
          }
          findMany: {
            args: Prisma.order_infoFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$order_infoPayload>[]
          }
          create: {
            args: Prisma.order_infoCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$order_infoPayload>
          }
          createMany: {
            args: Prisma.order_infoCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.order_infoCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$order_infoPayload>[]
          }
          delete: {
            args: Prisma.order_infoDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$order_infoPayload>
          }
          update: {
            args: Prisma.order_infoUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$order_infoPayload>
          }
          deleteMany: {
            args: Prisma.order_infoDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.order_infoUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.order_infoUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$order_infoPayload>
          }
          aggregate: {
            args: Prisma.Order_infoAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateOrder_info>
          }
          groupBy: {
            args: Prisma.order_infoGroupByArgs<ExtArgs>
            result: $Utils.Optional<Order_infoGroupByOutputType>[]
          }
          count: {
            args: Prisma.order_infoCountArgs<ExtArgs>
            result: $Utils.Optional<Order_infoCountAggregateOutputType> | number
          }
        }
      }
      order_item: {
        payload: Prisma.$order_itemPayload<ExtArgs>
        fields: Prisma.order_itemFieldRefs
        operations: {
          findUnique: {
            args: Prisma.order_itemFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$order_itemPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.order_itemFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$order_itemPayload>
          }
          findFirst: {
            args: Prisma.order_itemFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$order_itemPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.order_itemFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$order_itemPayload>
          }
          findMany: {
            args: Prisma.order_itemFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$order_itemPayload>[]
          }
          create: {
            args: Prisma.order_itemCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$order_itemPayload>
          }
          createMany: {
            args: Prisma.order_itemCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.order_itemCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$order_itemPayload>[]
          }
          delete: {
            args: Prisma.order_itemDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$order_itemPayload>
          }
          update: {
            args: Prisma.order_itemUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$order_itemPayload>
          }
          deleteMany: {
            args: Prisma.order_itemDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.order_itemUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.order_itemUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$order_itemPayload>
          }
          aggregate: {
            args: Prisma.Order_itemAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateOrder_item>
          }
          groupBy: {
            args: Prisma.order_itemGroupByArgs<ExtArgs>
            result: $Utils.Optional<Order_itemGroupByOutputType>[]
          }
          count: {
            args: Prisma.order_itemCountArgs<ExtArgs>
            result: $Utils.Optional<Order_itemCountAggregateOutputType> | number
          }
        }
      }
      room: {
        payload: Prisma.$roomPayload<ExtArgs>
        fields: Prisma.roomFieldRefs
        operations: {
          findUnique: {
            args: Prisma.roomFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$roomPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.roomFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$roomPayload>
          }
          findFirst: {
            args: Prisma.roomFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$roomPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.roomFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$roomPayload>
          }
          findMany: {
            args: Prisma.roomFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$roomPayload>[]
          }
          create: {
            args: Prisma.roomCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$roomPayload>
          }
          createMany: {
            args: Prisma.roomCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.roomCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$roomPayload>[]
          }
          delete: {
            args: Prisma.roomDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$roomPayload>
          }
          update: {
            args: Prisma.roomUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$roomPayload>
          }
          deleteMany: {
            args: Prisma.roomDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.roomUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.roomUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$roomPayload>
          }
          aggregate: {
            args: Prisma.RoomAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRoom>
          }
          groupBy: {
            args: Prisma.roomGroupByArgs<ExtArgs>
            result: $Utils.Optional<RoomGroupByOutputType>[]
          }
          count: {
            args: Prisma.roomCountArgs<ExtArgs>
            result: $Utils.Optional<RoomCountAggregateOutputType> | number
          }
        }
      }
      ticket: {
        payload: Prisma.$ticketPayload<ExtArgs>
        fields: Prisma.ticketFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ticketFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ticketPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ticketFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ticketPayload>
          }
          findFirst: {
            args: Prisma.ticketFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ticketPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ticketFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ticketPayload>
          }
          findMany: {
            args: Prisma.ticketFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ticketPayload>[]
          }
          create: {
            args: Prisma.ticketCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ticketPayload>
          }
          createMany: {
            args: Prisma.ticketCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ticketCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ticketPayload>[]
          }
          delete: {
            args: Prisma.ticketDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ticketPayload>
          }
          update: {
            args: Prisma.ticketUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ticketPayload>
          }
          deleteMany: {
            args: Prisma.ticketDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ticketUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ticketUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ticketPayload>
          }
          aggregate: {
            args: Prisma.TicketAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTicket>
          }
          groupBy: {
            args: Prisma.ticketGroupByArgs<ExtArgs>
            result: $Utils.Optional<TicketGroupByOutputType>[]
          }
          count: {
            args: Prisma.ticketCountArgs<ExtArgs>
            result: $Utils.Optional<TicketCountAggregateOutputType> | number
          }
        }
      }
      more_about: {
        payload: Prisma.$more_aboutPayload<ExtArgs>
        fields: Prisma.more_aboutFieldRefs
        operations: {
          findUnique: {
            args: Prisma.more_aboutFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$more_aboutPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.more_aboutFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$more_aboutPayload>
          }
          findFirst: {
            args: Prisma.more_aboutFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$more_aboutPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.more_aboutFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$more_aboutPayload>
          }
          findMany: {
            args: Prisma.more_aboutFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$more_aboutPayload>[]
          }
          create: {
            args: Prisma.more_aboutCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$more_aboutPayload>
          }
          createMany: {
            args: Prisma.more_aboutCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.more_aboutCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$more_aboutPayload>[]
          }
          delete: {
            args: Prisma.more_aboutDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$more_aboutPayload>
          }
          update: {
            args: Prisma.more_aboutUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$more_aboutPayload>
          }
          deleteMany: {
            args: Prisma.more_aboutDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.more_aboutUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.more_aboutUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$more_aboutPayload>
          }
          aggregate: {
            args: Prisma.More_aboutAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMore_about>
          }
          groupBy: {
            args: Prisma.more_aboutGroupByArgs<ExtArgs>
            result: $Utils.Optional<More_aboutGroupByOutputType>[]
          }
          count: {
            args: Prisma.more_aboutCountArgs<ExtArgs>
            result: $Utils.Optional<More_aboutCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
  }


  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type MemberCountOutputType
   */

  export type MemberCountOutputType = {
    credit_card: number
    customer_order: number
  }

  export type MemberCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    credit_card?: boolean | MemberCountOutputTypeCountCredit_cardArgs
    customer_order?: boolean | MemberCountOutputTypeCountCustomer_orderArgs
  }

  // Custom InputTypes
  /**
   * MemberCountOutputType without action
   */
  export type MemberCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MemberCountOutputType
     */
    select?: MemberCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * MemberCountOutputType without action
   */
  export type MemberCountOutputTypeCountCredit_cardArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: credit_cardWhereInput
  }

  /**
   * MemberCountOutputType without action
   */
  export type MemberCountOutputTypeCountCustomer_orderArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: customer_orderWhereInput
  }


  /**
   * Count Type Customer_orderCountOutputType
   */

  export type Customer_orderCountOutputType = {
    order_info: number
    order_item: number
  }

  export type Customer_orderCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    order_info?: boolean | Customer_orderCountOutputTypeCountOrder_infoArgs
    order_item?: boolean | Customer_orderCountOutputTypeCountOrder_itemArgs
  }

  // Custom InputTypes
  /**
   * Customer_orderCountOutputType without action
   */
  export type Customer_orderCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer_orderCountOutputType
     */
    select?: Customer_orderCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * Customer_orderCountOutputType without action
   */
  export type Customer_orderCountOutputTypeCountOrder_infoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: order_infoWhereInput
  }

  /**
   * Customer_orderCountOutputType without action
   */
  export type Customer_orderCountOutputTypeCountOrder_itemArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: order_itemWhereInput
  }


  /**
   * Count Type FacilityCountOutputType
   */

  export type FacilityCountOutputType = {
    facility_rule: number
    more_about: number
  }

  export type FacilityCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    facility_rule?: boolean | FacilityCountOutputTypeCountFacility_ruleArgs
    more_about?: boolean | FacilityCountOutputTypeCountMore_aboutArgs
  }

  // Custom InputTypes
  /**
   * FacilityCountOutputType without action
   */
  export type FacilityCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FacilityCountOutputType
     */
    select?: FacilityCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * FacilityCountOutputType without action
   */
  export type FacilityCountOutputTypeCountFacility_ruleArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: facility_ruleWhereInput
  }

  /**
   * FacilityCountOutputType without action
   */
  export type FacilityCountOutputTypeCountMore_aboutArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: more_aboutWhereInput
  }


  /**
   * Count Type RoomCountOutputType
   */

  export type RoomCountOutputType = {
    order_item: number
  }

  export type RoomCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    order_item?: boolean | RoomCountOutputTypeCountOrder_itemArgs
  }

  // Custom InputTypes
  /**
   * RoomCountOutputType without action
   */
  export type RoomCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RoomCountOutputType
     */
    select?: RoomCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * RoomCountOutputType without action
   */
  export type RoomCountOutputTypeCountOrder_itemArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: order_itemWhereInput
  }


  /**
   * Count Type TicketCountOutputType
   */

  export type TicketCountOutputType = {
    order_item: number
  }

  export type TicketCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    order_item?: boolean | TicketCountOutputTypeCountOrder_itemArgs
  }

  // Custom InputTypes
  /**
   * TicketCountOutputType without action
   */
  export type TicketCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TicketCountOutputType
     */
    select?: TicketCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * TicketCountOutputType without action
   */
  export type TicketCountOutputTypeCountOrder_itemArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: order_itemWhereInput
  }


  /**
   * Models
   */

  /**
   * Model member
   */

  export type AggregateMember = {
    _count: MemberCountAggregateOutputType | null
    _avg: MemberAvgAggregateOutputType | null
    _sum: MemberSumAggregateOutputType | null
    _min: MemberMinAggregateOutputType | null
    _max: MemberMaxAggregateOutputType | null
  }

  export type MemberAvgAggregateOutputType = {
    member_id: number | null
  }

  export type MemberSumAggregateOutputType = {
    member_id: number | null
  }

  export type MemberMinAggregateOutputType = {
    member_id: number | null
    name: string | null
    address: string | null
    birth: Date | null
    account: string | null
    password: string | null
    phone: string | null
    photo: string | null
  }

  export type MemberMaxAggregateOutputType = {
    member_id: number | null
    name: string | null
    address: string | null
    birth: Date | null
    account: string | null
    password: string | null
    phone: string | null
    photo: string | null
  }

  export type MemberCountAggregateOutputType = {
    member_id: number
    name: number
    address: number
    birth: number
    account: number
    password: number
    phone: number
    photo: number
    _all: number
  }


  export type MemberAvgAggregateInputType = {
    member_id?: true
  }

  export type MemberSumAggregateInputType = {
    member_id?: true
  }

  export type MemberMinAggregateInputType = {
    member_id?: true
    name?: true
    address?: true
    birth?: true
    account?: true
    password?: true
    phone?: true
    photo?: true
  }

  export type MemberMaxAggregateInputType = {
    member_id?: true
    name?: true
    address?: true
    birth?: true
    account?: true
    password?: true
    phone?: true
    photo?: true
  }

  export type MemberCountAggregateInputType = {
    member_id?: true
    name?: true
    address?: true
    birth?: true
    account?: true
    password?: true
    phone?: true
    photo?: true
    _all?: true
  }

  export type MemberAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which member to aggregate.
     */
    where?: memberWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of members to fetch.
     */
    orderBy?: memberOrderByWithRelationInput | memberOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: memberWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` members from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` members.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned members
    **/
    _count?: true | MemberCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: MemberAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: MemberSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MemberMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MemberMaxAggregateInputType
  }

  export type GetMemberAggregateType<T extends MemberAggregateArgs> = {
        [P in keyof T & keyof AggregateMember]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMember[P]>
      : GetScalarType<T[P], AggregateMember[P]>
  }




  export type memberGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: memberWhereInput
    orderBy?: memberOrderByWithAggregationInput | memberOrderByWithAggregationInput[]
    by: MemberScalarFieldEnum[] | MemberScalarFieldEnum
    having?: memberScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MemberCountAggregateInputType | true
    _avg?: MemberAvgAggregateInputType
    _sum?: MemberSumAggregateInputType
    _min?: MemberMinAggregateInputType
    _max?: MemberMaxAggregateInputType
  }

  export type MemberGroupByOutputType = {
    member_id: number
    name: string
    address: string | null
    birth: Date | null
    account: string
    password: string
    phone: string | null
    photo: string | null
    _count: MemberCountAggregateOutputType | null
    _avg: MemberAvgAggregateOutputType | null
    _sum: MemberSumAggregateOutputType | null
    _min: MemberMinAggregateOutputType | null
    _max: MemberMaxAggregateOutputType | null
  }

  type GetMemberGroupByPayload<T extends memberGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MemberGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MemberGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MemberGroupByOutputType[P]>
            : GetScalarType<T[P], MemberGroupByOutputType[P]>
        }
      >
    >


  export type memberSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    member_id?: boolean
    name?: boolean
    address?: boolean
    birth?: boolean
    account?: boolean
    password?: boolean
    phone?: boolean
    photo?: boolean
    credit_card?: boolean | member$credit_cardArgs<ExtArgs>
    customer_order?: boolean | member$customer_orderArgs<ExtArgs>
    _count?: boolean | MemberCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["member"]>

  export type memberSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    member_id?: boolean
    name?: boolean
    address?: boolean
    birth?: boolean
    account?: boolean
    password?: boolean
    phone?: boolean
    photo?: boolean
  }, ExtArgs["result"]["member"]>

  export type memberSelectScalar = {
    member_id?: boolean
    name?: boolean
    address?: boolean
    birth?: boolean
    account?: boolean
    password?: boolean
    phone?: boolean
    photo?: boolean
  }

  export type memberInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    credit_card?: boolean | member$credit_cardArgs<ExtArgs>
    customer_order?: boolean | member$customer_orderArgs<ExtArgs>
    _count?: boolean | MemberCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type memberIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $memberPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "member"
    objects: {
      credit_card: Prisma.$credit_cardPayload<ExtArgs>[]
      customer_order: Prisma.$customer_orderPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      member_id: number
      name: string
      address: string | null
      birth: Date | null
      account: string
      password: string
      phone: string | null
      photo: string | null
    }, ExtArgs["result"]["member"]>
    composites: {}
  }

  type memberGetPayload<S extends boolean | null | undefined | memberDefaultArgs> = $Result.GetResult<Prisma.$memberPayload, S>

  type memberCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<memberFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: MemberCountAggregateInputType | true
    }

  export interface memberDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['member'], meta: { name: 'member' } }
    /**
     * Find zero or one Member that matches the filter.
     * @param {memberFindUniqueArgs} args - Arguments to find a Member
     * @example
     * // Get one Member
     * const member = await prisma.member.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends memberFindUniqueArgs>(args: SelectSubset<T, memberFindUniqueArgs<ExtArgs>>): Prisma__memberClient<$Result.GetResult<Prisma.$memberPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Member that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {memberFindUniqueOrThrowArgs} args - Arguments to find a Member
     * @example
     * // Get one Member
     * const member = await prisma.member.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends memberFindUniqueOrThrowArgs>(args: SelectSubset<T, memberFindUniqueOrThrowArgs<ExtArgs>>): Prisma__memberClient<$Result.GetResult<Prisma.$memberPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Member that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {memberFindFirstArgs} args - Arguments to find a Member
     * @example
     * // Get one Member
     * const member = await prisma.member.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends memberFindFirstArgs>(args?: SelectSubset<T, memberFindFirstArgs<ExtArgs>>): Prisma__memberClient<$Result.GetResult<Prisma.$memberPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Member that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {memberFindFirstOrThrowArgs} args - Arguments to find a Member
     * @example
     * // Get one Member
     * const member = await prisma.member.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends memberFindFirstOrThrowArgs>(args?: SelectSubset<T, memberFindFirstOrThrowArgs<ExtArgs>>): Prisma__memberClient<$Result.GetResult<Prisma.$memberPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Members that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {memberFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Members
     * const members = await prisma.member.findMany()
     * 
     * // Get first 10 Members
     * const members = await prisma.member.findMany({ take: 10 })
     * 
     * // Only select the `member_id`
     * const memberWithMember_idOnly = await prisma.member.findMany({ select: { member_id: true } })
     * 
     */
    findMany<T extends memberFindManyArgs>(args?: SelectSubset<T, memberFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$memberPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Member.
     * @param {memberCreateArgs} args - Arguments to create a Member.
     * @example
     * // Create one Member
     * const Member = await prisma.member.create({
     *   data: {
     *     // ... data to create a Member
     *   }
     * })
     * 
     */
    create<T extends memberCreateArgs>(args: SelectSubset<T, memberCreateArgs<ExtArgs>>): Prisma__memberClient<$Result.GetResult<Prisma.$memberPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Members.
     * @param {memberCreateManyArgs} args - Arguments to create many Members.
     * @example
     * // Create many Members
     * const member = await prisma.member.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends memberCreateManyArgs>(args?: SelectSubset<T, memberCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Members and returns the data saved in the database.
     * @param {memberCreateManyAndReturnArgs} args - Arguments to create many Members.
     * @example
     * // Create many Members
     * const member = await prisma.member.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Members and only return the `member_id`
     * const memberWithMember_idOnly = await prisma.member.createManyAndReturn({ 
     *   select: { member_id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends memberCreateManyAndReturnArgs>(args?: SelectSubset<T, memberCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$memberPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Member.
     * @param {memberDeleteArgs} args - Arguments to delete one Member.
     * @example
     * // Delete one Member
     * const Member = await prisma.member.delete({
     *   where: {
     *     // ... filter to delete one Member
     *   }
     * })
     * 
     */
    delete<T extends memberDeleteArgs>(args: SelectSubset<T, memberDeleteArgs<ExtArgs>>): Prisma__memberClient<$Result.GetResult<Prisma.$memberPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Member.
     * @param {memberUpdateArgs} args - Arguments to update one Member.
     * @example
     * // Update one Member
     * const member = await prisma.member.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends memberUpdateArgs>(args: SelectSubset<T, memberUpdateArgs<ExtArgs>>): Prisma__memberClient<$Result.GetResult<Prisma.$memberPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Members.
     * @param {memberDeleteManyArgs} args - Arguments to filter Members to delete.
     * @example
     * // Delete a few Members
     * const { count } = await prisma.member.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends memberDeleteManyArgs>(args?: SelectSubset<T, memberDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Members.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {memberUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Members
     * const member = await prisma.member.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends memberUpdateManyArgs>(args: SelectSubset<T, memberUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Member.
     * @param {memberUpsertArgs} args - Arguments to update or create a Member.
     * @example
     * // Update or create a Member
     * const member = await prisma.member.upsert({
     *   create: {
     *     // ... data to create a Member
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Member we want to update
     *   }
     * })
     */
    upsert<T extends memberUpsertArgs>(args: SelectSubset<T, memberUpsertArgs<ExtArgs>>): Prisma__memberClient<$Result.GetResult<Prisma.$memberPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Members.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {memberCountArgs} args - Arguments to filter Members to count.
     * @example
     * // Count the number of Members
     * const count = await prisma.member.count({
     *   where: {
     *     // ... the filter for the Members we want to count
     *   }
     * })
    **/
    count<T extends memberCountArgs>(
      args?: Subset<T, memberCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MemberCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Member.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MemberAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends MemberAggregateArgs>(args: Subset<T, MemberAggregateArgs>): Prisma.PrismaPromise<GetMemberAggregateType<T>>

    /**
     * Group by Member.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {memberGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends memberGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: memberGroupByArgs['orderBy'] }
        : { orderBy?: memberGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, memberGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMemberGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the member model
   */
  readonly fields: memberFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for member.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__memberClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    credit_card<T extends member$credit_cardArgs<ExtArgs> = {}>(args?: Subset<T, member$credit_cardArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$credit_cardPayload<ExtArgs>, T, "findMany"> | Null>
    customer_order<T extends member$customer_orderArgs<ExtArgs> = {}>(args?: Subset<T, member$customer_orderArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$customer_orderPayload<ExtArgs>, T, "findMany"> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the member model
   */ 
  interface memberFieldRefs {
    readonly member_id: FieldRef<"member", 'Int'>
    readonly name: FieldRef<"member", 'String'>
    readonly address: FieldRef<"member", 'String'>
    readonly birth: FieldRef<"member", 'DateTime'>
    readonly account: FieldRef<"member", 'String'>
    readonly password: FieldRef<"member", 'String'>
    readonly phone: FieldRef<"member", 'String'>
    readonly photo: FieldRef<"member", 'String'>
  }
    

  // Custom InputTypes
  /**
   * member findUnique
   */
  export type memberFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the member
     */
    select?: memberSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: memberInclude<ExtArgs> | null
    /**
     * Filter, which member to fetch.
     */
    where: memberWhereUniqueInput
  }

  /**
   * member findUniqueOrThrow
   */
  export type memberFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the member
     */
    select?: memberSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: memberInclude<ExtArgs> | null
    /**
     * Filter, which member to fetch.
     */
    where: memberWhereUniqueInput
  }

  /**
   * member findFirst
   */
  export type memberFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the member
     */
    select?: memberSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: memberInclude<ExtArgs> | null
    /**
     * Filter, which member to fetch.
     */
    where?: memberWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of members to fetch.
     */
    orderBy?: memberOrderByWithRelationInput | memberOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for members.
     */
    cursor?: memberWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` members from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` members.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of members.
     */
    distinct?: MemberScalarFieldEnum | MemberScalarFieldEnum[]
  }

  /**
   * member findFirstOrThrow
   */
  export type memberFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the member
     */
    select?: memberSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: memberInclude<ExtArgs> | null
    /**
     * Filter, which member to fetch.
     */
    where?: memberWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of members to fetch.
     */
    orderBy?: memberOrderByWithRelationInput | memberOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for members.
     */
    cursor?: memberWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` members from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` members.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of members.
     */
    distinct?: MemberScalarFieldEnum | MemberScalarFieldEnum[]
  }

  /**
   * member findMany
   */
  export type memberFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the member
     */
    select?: memberSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: memberInclude<ExtArgs> | null
    /**
     * Filter, which members to fetch.
     */
    where?: memberWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of members to fetch.
     */
    orderBy?: memberOrderByWithRelationInput | memberOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing members.
     */
    cursor?: memberWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` members from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` members.
     */
    skip?: number
    distinct?: MemberScalarFieldEnum | MemberScalarFieldEnum[]
  }

  /**
   * member create
   */
  export type memberCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the member
     */
    select?: memberSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: memberInclude<ExtArgs> | null
    /**
     * The data needed to create a member.
     */
    data: XOR<memberCreateInput, memberUncheckedCreateInput>
  }

  /**
   * member createMany
   */
  export type memberCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many members.
     */
    data: memberCreateManyInput | memberCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * member createManyAndReturn
   */
  export type memberCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the member
     */
    select?: memberSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many members.
     */
    data: memberCreateManyInput | memberCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * member update
   */
  export type memberUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the member
     */
    select?: memberSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: memberInclude<ExtArgs> | null
    /**
     * The data needed to update a member.
     */
    data: XOR<memberUpdateInput, memberUncheckedUpdateInput>
    /**
     * Choose, which member to update.
     */
    where: memberWhereUniqueInput
  }

  /**
   * member updateMany
   */
  export type memberUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update members.
     */
    data: XOR<memberUpdateManyMutationInput, memberUncheckedUpdateManyInput>
    /**
     * Filter which members to update
     */
    where?: memberWhereInput
  }

  /**
   * member upsert
   */
  export type memberUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the member
     */
    select?: memberSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: memberInclude<ExtArgs> | null
    /**
     * The filter to search for the member to update in case it exists.
     */
    where: memberWhereUniqueInput
    /**
     * In case the member found by the `where` argument doesn't exist, create a new member with this data.
     */
    create: XOR<memberCreateInput, memberUncheckedCreateInput>
    /**
     * In case the member was found with the provided `where` argument, update it with this data.
     */
    update: XOR<memberUpdateInput, memberUncheckedUpdateInput>
  }

  /**
   * member delete
   */
  export type memberDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the member
     */
    select?: memberSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: memberInclude<ExtArgs> | null
    /**
     * Filter which member to delete.
     */
    where: memberWhereUniqueInput
  }

  /**
   * member deleteMany
   */
  export type memberDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which members to delete
     */
    where?: memberWhereInput
  }

  /**
   * member.credit_card
   */
  export type member$credit_cardArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the credit_card
     */
    select?: credit_cardSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: credit_cardInclude<ExtArgs> | null
    where?: credit_cardWhereInput
    orderBy?: credit_cardOrderByWithRelationInput | credit_cardOrderByWithRelationInput[]
    cursor?: credit_cardWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Credit_cardScalarFieldEnum | Credit_cardScalarFieldEnum[]
  }

  /**
   * member.customer_order
   */
  export type member$customer_orderArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the customer_order
     */
    select?: customer_orderSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: customer_orderInclude<ExtArgs> | null
    where?: customer_orderWhereInput
    orderBy?: customer_orderOrderByWithRelationInput | customer_orderOrderByWithRelationInput[]
    cursor?: customer_orderWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Customer_orderScalarFieldEnum | Customer_orderScalarFieldEnum[]
  }

  /**
   * member without action
   */
  export type memberDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the member
     */
    select?: memberSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: memberInclude<ExtArgs> | null
  }


  /**
   * Model credit_card
   */

  export type AggregateCredit_card = {
    _count: Credit_cardCountAggregateOutputType | null
    _avg: Credit_cardAvgAggregateOutputType | null
    _sum: Credit_cardSumAggregateOutputType | null
    _min: Credit_cardMinAggregateOutputType | null
    _max: Credit_cardMaxAggregateOutputType | null
  }

  export type Credit_cardAvgAggregateOutputType = {
    credit_card_id: number | null
    member_id: number | null
  }

  export type Credit_cardSumAggregateOutputType = {
    credit_card_id: number | null
    member_id: number | null
  }

  export type Credit_cardMinAggregateOutputType = {
    credit_card_id: number | null
    member_id: number | null
    number: string | null
    expiry: Date | null
    cvv: string | null
  }

  export type Credit_cardMaxAggregateOutputType = {
    credit_card_id: number | null
    member_id: number | null
    number: string | null
    expiry: Date | null
    cvv: string | null
  }

  export type Credit_cardCountAggregateOutputType = {
    credit_card_id: number
    member_id: number
    number: number
    expiry: number
    cvv: number
    _all: number
  }


  export type Credit_cardAvgAggregateInputType = {
    credit_card_id?: true
    member_id?: true
  }

  export type Credit_cardSumAggregateInputType = {
    credit_card_id?: true
    member_id?: true
  }

  export type Credit_cardMinAggregateInputType = {
    credit_card_id?: true
    member_id?: true
    number?: true
    expiry?: true
    cvv?: true
  }

  export type Credit_cardMaxAggregateInputType = {
    credit_card_id?: true
    member_id?: true
    number?: true
    expiry?: true
    cvv?: true
  }

  export type Credit_cardCountAggregateInputType = {
    credit_card_id?: true
    member_id?: true
    number?: true
    expiry?: true
    cvv?: true
    _all?: true
  }

  export type Credit_cardAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which credit_card to aggregate.
     */
    where?: credit_cardWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of credit_cards to fetch.
     */
    orderBy?: credit_cardOrderByWithRelationInput | credit_cardOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: credit_cardWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` credit_cards from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` credit_cards.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned credit_cards
    **/
    _count?: true | Credit_cardCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Credit_cardAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Credit_cardSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Credit_cardMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Credit_cardMaxAggregateInputType
  }

  export type GetCredit_cardAggregateType<T extends Credit_cardAggregateArgs> = {
        [P in keyof T & keyof AggregateCredit_card]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCredit_card[P]>
      : GetScalarType<T[P], AggregateCredit_card[P]>
  }




  export type credit_cardGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: credit_cardWhereInput
    orderBy?: credit_cardOrderByWithAggregationInput | credit_cardOrderByWithAggregationInput[]
    by: Credit_cardScalarFieldEnum[] | Credit_cardScalarFieldEnum
    having?: credit_cardScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Credit_cardCountAggregateInputType | true
    _avg?: Credit_cardAvgAggregateInputType
    _sum?: Credit_cardSumAggregateInputType
    _min?: Credit_cardMinAggregateInputType
    _max?: Credit_cardMaxAggregateInputType
  }

  export type Credit_cardGroupByOutputType = {
    credit_card_id: number
    member_id: number | null
    number: string
    expiry: Date
    cvv: string
    _count: Credit_cardCountAggregateOutputType | null
    _avg: Credit_cardAvgAggregateOutputType | null
    _sum: Credit_cardSumAggregateOutputType | null
    _min: Credit_cardMinAggregateOutputType | null
    _max: Credit_cardMaxAggregateOutputType | null
  }

  type GetCredit_cardGroupByPayload<T extends credit_cardGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Credit_cardGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Credit_cardGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Credit_cardGroupByOutputType[P]>
            : GetScalarType<T[P], Credit_cardGroupByOutputType[P]>
        }
      >
    >


  export type credit_cardSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    credit_card_id?: boolean
    member_id?: boolean
    number?: boolean
    expiry?: boolean
    cvv?: boolean
    member?: boolean | credit_card$memberArgs<ExtArgs>
  }, ExtArgs["result"]["credit_card"]>

  export type credit_cardSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    credit_card_id?: boolean
    member_id?: boolean
    number?: boolean
    expiry?: boolean
    cvv?: boolean
    member?: boolean | credit_card$memberArgs<ExtArgs>
  }, ExtArgs["result"]["credit_card"]>

  export type credit_cardSelectScalar = {
    credit_card_id?: boolean
    member_id?: boolean
    number?: boolean
    expiry?: boolean
    cvv?: boolean
  }

  export type credit_cardInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    member?: boolean | credit_card$memberArgs<ExtArgs>
  }
  export type credit_cardIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    member?: boolean | credit_card$memberArgs<ExtArgs>
  }

  export type $credit_cardPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "credit_card"
    objects: {
      member: Prisma.$memberPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      credit_card_id: number
      member_id: number | null
      number: string
      expiry: Date
      cvv: string
    }, ExtArgs["result"]["credit_card"]>
    composites: {}
  }

  type credit_cardGetPayload<S extends boolean | null | undefined | credit_cardDefaultArgs> = $Result.GetResult<Prisma.$credit_cardPayload, S>

  type credit_cardCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<credit_cardFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: Credit_cardCountAggregateInputType | true
    }

  export interface credit_cardDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['credit_card'], meta: { name: 'credit_card' } }
    /**
     * Find zero or one Credit_card that matches the filter.
     * @param {credit_cardFindUniqueArgs} args - Arguments to find a Credit_card
     * @example
     * // Get one Credit_card
     * const credit_card = await prisma.credit_card.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends credit_cardFindUniqueArgs>(args: SelectSubset<T, credit_cardFindUniqueArgs<ExtArgs>>): Prisma__credit_cardClient<$Result.GetResult<Prisma.$credit_cardPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Credit_card that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {credit_cardFindUniqueOrThrowArgs} args - Arguments to find a Credit_card
     * @example
     * // Get one Credit_card
     * const credit_card = await prisma.credit_card.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends credit_cardFindUniqueOrThrowArgs>(args: SelectSubset<T, credit_cardFindUniqueOrThrowArgs<ExtArgs>>): Prisma__credit_cardClient<$Result.GetResult<Prisma.$credit_cardPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Credit_card that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {credit_cardFindFirstArgs} args - Arguments to find a Credit_card
     * @example
     * // Get one Credit_card
     * const credit_card = await prisma.credit_card.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends credit_cardFindFirstArgs>(args?: SelectSubset<T, credit_cardFindFirstArgs<ExtArgs>>): Prisma__credit_cardClient<$Result.GetResult<Prisma.$credit_cardPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Credit_card that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {credit_cardFindFirstOrThrowArgs} args - Arguments to find a Credit_card
     * @example
     * // Get one Credit_card
     * const credit_card = await prisma.credit_card.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends credit_cardFindFirstOrThrowArgs>(args?: SelectSubset<T, credit_cardFindFirstOrThrowArgs<ExtArgs>>): Prisma__credit_cardClient<$Result.GetResult<Prisma.$credit_cardPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Credit_cards that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {credit_cardFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Credit_cards
     * const credit_cards = await prisma.credit_card.findMany()
     * 
     * // Get first 10 Credit_cards
     * const credit_cards = await prisma.credit_card.findMany({ take: 10 })
     * 
     * // Only select the `credit_card_id`
     * const credit_cardWithCredit_card_idOnly = await prisma.credit_card.findMany({ select: { credit_card_id: true } })
     * 
     */
    findMany<T extends credit_cardFindManyArgs>(args?: SelectSubset<T, credit_cardFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$credit_cardPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Credit_card.
     * @param {credit_cardCreateArgs} args - Arguments to create a Credit_card.
     * @example
     * // Create one Credit_card
     * const Credit_card = await prisma.credit_card.create({
     *   data: {
     *     // ... data to create a Credit_card
     *   }
     * })
     * 
     */
    create<T extends credit_cardCreateArgs>(args: SelectSubset<T, credit_cardCreateArgs<ExtArgs>>): Prisma__credit_cardClient<$Result.GetResult<Prisma.$credit_cardPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Credit_cards.
     * @param {credit_cardCreateManyArgs} args - Arguments to create many Credit_cards.
     * @example
     * // Create many Credit_cards
     * const credit_card = await prisma.credit_card.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends credit_cardCreateManyArgs>(args?: SelectSubset<T, credit_cardCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Credit_cards and returns the data saved in the database.
     * @param {credit_cardCreateManyAndReturnArgs} args - Arguments to create many Credit_cards.
     * @example
     * // Create many Credit_cards
     * const credit_card = await prisma.credit_card.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Credit_cards and only return the `credit_card_id`
     * const credit_cardWithCredit_card_idOnly = await prisma.credit_card.createManyAndReturn({ 
     *   select: { credit_card_id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends credit_cardCreateManyAndReturnArgs>(args?: SelectSubset<T, credit_cardCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$credit_cardPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Credit_card.
     * @param {credit_cardDeleteArgs} args - Arguments to delete one Credit_card.
     * @example
     * // Delete one Credit_card
     * const Credit_card = await prisma.credit_card.delete({
     *   where: {
     *     // ... filter to delete one Credit_card
     *   }
     * })
     * 
     */
    delete<T extends credit_cardDeleteArgs>(args: SelectSubset<T, credit_cardDeleteArgs<ExtArgs>>): Prisma__credit_cardClient<$Result.GetResult<Prisma.$credit_cardPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Credit_card.
     * @param {credit_cardUpdateArgs} args - Arguments to update one Credit_card.
     * @example
     * // Update one Credit_card
     * const credit_card = await prisma.credit_card.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends credit_cardUpdateArgs>(args: SelectSubset<T, credit_cardUpdateArgs<ExtArgs>>): Prisma__credit_cardClient<$Result.GetResult<Prisma.$credit_cardPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Credit_cards.
     * @param {credit_cardDeleteManyArgs} args - Arguments to filter Credit_cards to delete.
     * @example
     * // Delete a few Credit_cards
     * const { count } = await prisma.credit_card.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends credit_cardDeleteManyArgs>(args?: SelectSubset<T, credit_cardDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Credit_cards.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {credit_cardUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Credit_cards
     * const credit_card = await prisma.credit_card.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends credit_cardUpdateManyArgs>(args: SelectSubset<T, credit_cardUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Credit_card.
     * @param {credit_cardUpsertArgs} args - Arguments to update or create a Credit_card.
     * @example
     * // Update or create a Credit_card
     * const credit_card = await prisma.credit_card.upsert({
     *   create: {
     *     // ... data to create a Credit_card
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Credit_card we want to update
     *   }
     * })
     */
    upsert<T extends credit_cardUpsertArgs>(args: SelectSubset<T, credit_cardUpsertArgs<ExtArgs>>): Prisma__credit_cardClient<$Result.GetResult<Prisma.$credit_cardPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Credit_cards.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {credit_cardCountArgs} args - Arguments to filter Credit_cards to count.
     * @example
     * // Count the number of Credit_cards
     * const count = await prisma.credit_card.count({
     *   where: {
     *     // ... the filter for the Credit_cards we want to count
     *   }
     * })
    **/
    count<T extends credit_cardCountArgs>(
      args?: Subset<T, credit_cardCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Credit_cardCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Credit_card.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Credit_cardAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Credit_cardAggregateArgs>(args: Subset<T, Credit_cardAggregateArgs>): Prisma.PrismaPromise<GetCredit_cardAggregateType<T>>

    /**
     * Group by Credit_card.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {credit_cardGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends credit_cardGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: credit_cardGroupByArgs['orderBy'] }
        : { orderBy?: credit_cardGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, credit_cardGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCredit_cardGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the credit_card model
   */
  readonly fields: credit_cardFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for credit_card.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__credit_cardClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    member<T extends credit_card$memberArgs<ExtArgs> = {}>(args?: Subset<T, credit_card$memberArgs<ExtArgs>>): Prisma__memberClient<$Result.GetResult<Prisma.$memberPayload<ExtArgs>, T, "findUniqueOrThrow"> | null, null, ExtArgs>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the credit_card model
   */ 
  interface credit_cardFieldRefs {
    readonly credit_card_id: FieldRef<"credit_card", 'Int'>
    readonly member_id: FieldRef<"credit_card", 'Int'>
    readonly number: FieldRef<"credit_card", 'String'>
    readonly expiry: FieldRef<"credit_card", 'DateTime'>
    readonly cvv: FieldRef<"credit_card", 'String'>
  }
    

  // Custom InputTypes
  /**
   * credit_card findUnique
   */
  export type credit_cardFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the credit_card
     */
    select?: credit_cardSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: credit_cardInclude<ExtArgs> | null
    /**
     * Filter, which credit_card to fetch.
     */
    where: credit_cardWhereUniqueInput
  }

  /**
   * credit_card findUniqueOrThrow
   */
  export type credit_cardFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the credit_card
     */
    select?: credit_cardSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: credit_cardInclude<ExtArgs> | null
    /**
     * Filter, which credit_card to fetch.
     */
    where: credit_cardWhereUniqueInput
  }

  /**
   * credit_card findFirst
   */
  export type credit_cardFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the credit_card
     */
    select?: credit_cardSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: credit_cardInclude<ExtArgs> | null
    /**
     * Filter, which credit_card to fetch.
     */
    where?: credit_cardWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of credit_cards to fetch.
     */
    orderBy?: credit_cardOrderByWithRelationInput | credit_cardOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for credit_cards.
     */
    cursor?: credit_cardWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` credit_cards from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` credit_cards.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of credit_cards.
     */
    distinct?: Credit_cardScalarFieldEnum | Credit_cardScalarFieldEnum[]
  }

  /**
   * credit_card findFirstOrThrow
   */
  export type credit_cardFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the credit_card
     */
    select?: credit_cardSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: credit_cardInclude<ExtArgs> | null
    /**
     * Filter, which credit_card to fetch.
     */
    where?: credit_cardWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of credit_cards to fetch.
     */
    orderBy?: credit_cardOrderByWithRelationInput | credit_cardOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for credit_cards.
     */
    cursor?: credit_cardWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` credit_cards from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` credit_cards.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of credit_cards.
     */
    distinct?: Credit_cardScalarFieldEnum | Credit_cardScalarFieldEnum[]
  }

  /**
   * credit_card findMany
   */
  export type credit_cardFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the credit_card
     */
    select?: credit_cardSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: credit_cardInclude<ExtArgs> | null
    /**
     * Filter, which credit_cards to fetch.
     */
    where?: credit_cardWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of credit_cards to fetch.
     */
    orderBy?: credit_cardOrderByWithRelationInput | credit_cardOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing credit_cards.
     */
    cursor?: credit_cardWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` credit_cards from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` credit_cards.
     */
    skip?: number
    distinct?: Credit_cardScalarFieldEnum | Credit_cardScalarFieldEnum[]
  }

  /**
   * credit_card create
   */
  export type credit_cardCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the credit_card
     */
    select?: credit_cardSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: credit_cardInclude<ExtArgs> | null
    /**
     * The data needed to create a credit_card.
     */
    data: XOR<credit_cardCreateInput, credit_cardUncheckedCreateInput>
  }

  /**
   * credit_card createMany
   */
  export type credit_cardCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many credit_cards.
     */
    data: credit_cardCreateManyInput | credit_cardCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * credit_card createManyAndReturn
   */
  export type credit_cardCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the credit_card
     */
    select?: credit_cardSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many credit_cards.
     */
    data: credit_cardCreateManyInput | credit_cardCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: credit_cardIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * credit_card update
   */
  export type credit_cardUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the credit_card
     */
    select?: credit_cardSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: credit_cardInclude<ExtArgs> | null
    /**
     * The data needed to update a credit_card.
     */
    data: XOR<credit_cardUpdateInput, credit_cardUncheckedUpdateInput>
    /**
     * Choose, which credit_card to update.
     */
    where: credit_cardWhereUniqueInput
  }

  /**
   * credit_card updateMany
   */
  export type credit_cardUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update credit_cards.
     */
    data: XOR<credit_cardUpdateManyMutationInput, credit_cardUncheckedUpdateManyInput>
    /**
     * Filter which credit_cards to update
     */
    where?: credit_cardWhereInput
  }

  /**
   * credit_card upsert
   */
  export type credit_cardUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the credit_card
     */
    select?: credit_cardSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: credit_cardInclude<ExtArgs> | null
    /**
     * The filter to search for the credit_card to update in case it exists.
     */
    where: credit_cardWhereUniqueInput
    /**
     * In case the credit_card found by the `where` argument doesn't exist, create a new credit_card with this data.
     */
    create: XOR<credit_cardCreateInput, credit_cardUncheckedCreateInput>
    /**
     * In case the credit_card was found with the provided `where` argument, update it with this data.
     */
    update: XOR<credit_cardUpdateInput, credit_cardUncheckedUpdateInput>
  }

  /**
   * credit_card delete
   */
  export type credit_cardDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the credit_card
     */
    select?: credit_cardSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: credit_cardInclude<ExtArgs> | null
    /**
     * Filter which credit_card to delete.
     */
    where: credit_cardWhereUniqueInput
  }

  /**
   * credit_card deleteMany
   */
  export type credit_cardDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which credit_cards to delete
     */
    where?: credit_cardWhereInput
  }

  /**
   * credit_card.member
   */
  export type credit_card$memberArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the member
     */
    select?: memberSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: memberInclude<ExtArgs> | null
    where?: memberWhereInput
  }

  /**
   * credit_card without action
   */
  export type credit_cardDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the credit_card
     */
    select?: credit_cardSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: credit_cardInclude<ExtArgs> | null
  }


  /**
   * Model customer_order
   */

  export type AggregateCustomer_order = {
    _count: Customer_orderCountAggregateOutputType | null
    _avg: Customer_orderAvgAggregateOutputType | null
    _sum: Customer_orderSumAggregateOutputType | null
    _min: Customer_orderMinAggregateOutputType | null
    _max: Customer_orderMaxAggregateOutputType | null
  }

  export type Customer_orderAvgAggregateOutputType = {
    order_id: number | null
    member_id: number | null
    total_amount: number | null
  }

  export type Customer_orderSumAggregateOutputType = {
    order_id: number | null
    member_id: number | null
    total_amount: number | null
  }

  export type Customer_orderMinAggregateOutputType = {
    order_id: number | null
    member_id: number | null
    total_amount: number | null
    status: string | null
    order_date: Date | null
  }

  export type Customer_orderMaxAggregateOutputType = {
    order_id: number | null
    member_id: number | null
    total_amount: number | null
    status: string | null
    order_date: Date | null
  }

  export type Customer_orderCountAggregateOutputType = {
    order_id: number
    member_id: number
    total_amount: number
    status: number
    order_date: number
    _all: number
  }


  export type Customer_orderAvgAggregateInputType = {
    order_id?: true
    member_id?: true
    total_amount?: true
  }

  export type Customer_orderSumAggregateInputType = {
    order_id?: true
    member_id?: true
    total_amount?: true
  }

  export type Customer_orderMinAggregateInputType = {
    order_id?: true
    member_id?: true
    total_amount?: true
    status?: true
    order_date?: true
  }

  export type Customer_orderMaxAggregateInputType = {
    order_id?: true
    member_id?: true
    total_amount?: true
    status?: true
    order_date?: true
  }

  export type Customer_orderCountAggregateInputType = {
    order_id?: true
    member_id?: true
    total_amount?: true
    status?: true
    order_date?: true
    _all?: true
  }

  export type Customer_orderAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which customer_order to aggregate.
     */
    where?: customer_orderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of customer_orders to fetch.
     */
    orderBy?: customer_orderOrderByWithRelationInput | customer_orderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: customer_orderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` customer_orders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` customer_orders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned customer_orders
    **/
    _count?: true | Customer_orderCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Customer_orderAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Customer_orderSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Customer_orderMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Customer_orderMaxAggregateInputType
  }

  export type GetCustomer_orderAggregateType<T extends Customer_orderAggregateArgs> = {
        [P in keyof T & keyof AggregateCustomer_order]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCustomer_order[P]>
      : GetScalarType<T[P], AggregateCustomer_order[P]>
  }




  export type customer_orderGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: customer_orderWhereInput
    orderBy?: customer_orderOrderByWithAggregationInput | customer_orderOrderByWithAggregationInput[]
    by: Customer_orderScalarFieldEnum[] | Customer_orderScalarFieldEnum
    having?: customer_orderScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Customer_orderCountAggregateInputType | true
    _avg?: Customer_orderAvgAggregateInputType
    _sum?: Customer_orderSumAggregateInputType
    _min?: Customer_orderMinAggregateInputType
    _max?: Customer_orderMaxAggregateInputType
  }

  export type Customer_orderGroupByOutputType = {
    order_id: number
    member_id: number
    total_amount: number
    status: string
    order_date: Date | null
    _count: Customer_orderCountAggregateOutputType | null
    _avg: Customer_orderAvgAggregateOutputType | null
    _sum: Customer_orderSumAggregateOutputType | null
    _min: Customer_orderMinAggregateOutputType | null
    _max: Customer_orderMaxAggregateOutputType | null
  }

  type GetCustomer_orderGroupByPayload<T extends customer_orderGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Customer_orderGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Customer_orderGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Customer_orderGroupByOutputType[P]>
            : GetScalarType<T[P], Customer_orderGroupByOutputType[P]>
        }
      >
    >


  export type customer_orderSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    order_id?: boolean
    member_id?: boolean
    total_amount?: boolean
    status?: boolean
    order_date?: boolean
    member?: boolean | memberDefaultArgs<ExtArgs>
    order_info?: boolean | customer_order$order_infoArgs<ExtArgs>
    order_item?: boolean | customer_order$order_itemArgs<ExtArgs>
    _count?: boolean | Customer_orderCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["customer_order"]>

  export type customer_orderSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    order_id?: boolean
    member_id?: boolean
    total_amount?: boolean
    status?: boolean
    order_date?: boolean
    member?: boolean | memberDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["customer_order"]>

  export type customer_orderSelectScalar = {
    order_id?: boolean
    member_id?: boolean
    total_amount?: boolean
    status?: boolean
    order_date?: boolean
  }

  export type customer_orderInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    member?: boolean | memberDefaultArgs<ExtArgs>
    order_info?: boolean | customer_order$order_infoArgs<ExtArgs>
    order_item?: boolean | customer_order$order_itemArgs<ExtArgs>
    _count?: boolean | Customer_orderCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type customer_orderIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    member?: boolean | memberDefaultArgs<ExtArgs>
  }

  export type $customer_orderPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "customer_order"
    objects: {
      member: Prisma.$memberPayload<ExtArgs>
      order_info: Prisma.$order_infoPayload<ExtArgs>[]
      order_item: Prisma.$order_itemPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      order_id: number
      member_id: number
      total_amount: number
      status: string
      order_date: Date | null
    }, ExtArgs["result"]["customer_order"]>
    composites: {}
  }

  type customer_orderGetPayload<S extends boolean | null | undefined | customer_orderDefaultArgs> = $Result.GetResult<Prisma.$customer_orderPayload, S>

  type customer_orderCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<customer_orderFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: Customer_orderCountAggregateInputType | true
    }

  export interface customer_orderDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['customer_order'], meta: { name: 'customer_order' } }
    /**
     * Find zero or one Customer_order that matches the filter.
     * @param {customer_orderFindUniqueArgs} args - Arguments to find a Customer_order
     * @example
     * // Get one Customer_order
     * const customer_order = await prisma.customer_order.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends customer_orderFindUniqueArgs>(args: SelectSubset<T, customer_orderFindUniqueArgs<ExtArgs>>): Prisma__customer_orderClient<$Result.GetResult<Prisma.$customer_orderPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Customer_order that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {customer_orderFindUniqueOrThrowArgs} args - Arguments to find a Customer_order
     * @example
     * // Get one Customer_order
     * const customer_order = await prisma.customer_order.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends customer_orderFindUniqueOrThrowArgs>(args: SelectSubset<T, customer_orderFindUniqueOrThrowArgs<ExtArgs>>): Prisma__customer_orderClient<$Result.GetResult<Prisma.$customer_orderPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Customer_order that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {customer_orderFindFirstArgs} args - Arguments to find a Customer_order
     * @example
     * // Get one Customer_order
     * const customer_order = await prisma.customer_order.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends customer_orderFindFirstArgs>(args?: SelectSubset<T, customer_orderFindFirstArgs<ExtArgs>>): Prisma__customer_orderClient<$Result.GetResult<Prisma.$customer_orderPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Customer_order that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {customer_orderFindFirstOrThrowArgs} args - Arguments to find a Customer_order
     * @example
     * // Get one Customer_order
     * const customer_order = await prisma.customer_order.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends customer_orderFindFirstOrThrowArgs>(args?: SelectSubset<T, customer_orderFindFirstOrThrowArgs<ExtArgs>>): Prisma__customer_orderClient<$Result.GetResult<Prisma.$customer_orderPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Customer_orders that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {customer_orderFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Customer_orders
     * const customer_orders = await prisma.customer_order.findMany()
     * 
     * // Get first 10 Customer_orders
     * const customer_orders = await prisma.customer_order.findMany({ take: 10 })
     * 
     * // Only select the `order_id`
     * const customer_orderWithOrder_idOnly = await prisma.customer_order.findMany({ select: { order_id: true } })
     * 
     */
    findMany<T extends customer_orderFindManyArgs>(args?: SelectSubset<T, customer_orderFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$customer_orderPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Customer_order.
     * @param {customer_orderCreateArgs} args - Arguments to create a Customer_order.
     * @example
     * // Create one Customer_order
     * const Customer_order = await prisma.customer_order.create({
     *   data: {
     *     // ... data to create a Customer_order
     *   }
     * })
     * 
     */
    create<T extends customer_orderCreateArgs>(args: SelectSubset<T, customer_orderCreateArgs<ExtArgs>>): Prisma__customer_orderClient<$Result.GetResult<Prisma.$customer_orderPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Customer_orders.
     * @param {customer_orderCreateManyArgs} args - Arguments to create many Customer_orders.
     * @example
     * // Create many Customer_orders
     * const customer_order = await prisma.customer_order.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends customer_orderCreateManyArgs>(args?: SelectSubset<T, customer_orderCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Customer_orders and returns the data saved in the database.
     * @param {customer_orderCreateManyAndReturnArgs} args - Arguments to create many Customer_orders.
     * @example
     * // Create many Customer_orders
     * const customer_order = await prisma.customer_order.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Customer_orders and only return the `order_id`
     * const customer_orderWithOrder_idOnly = await prisma.customer_order.createManyAndReturn({ 
     *   select: { order_id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends customer_orderCreateManyAndReturnArgs>(args?: SelectSubset<T, customer_orderCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$customer_orderPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Customer_order.
     * @param {customer_orderDeleteArgs} args - Arguments to delete one Customer_order.
     * @example
     * // Delete one Customer_order
     * const Customer_order = await prisma.customer_order.delete({
     *   where: {
     *     // ... filter to delete one Customer_order
     *   }
     * })
     * 
     */
    delete<T extends customer_orderDeleteArgs>(args: SelectSubset<T, customer_orderDeleteArgs<ExtArgs>>): Prisma__customer_orderClient<$Result.GetResult<Prisma.$customer_orderPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Customer_order.
     * @param {customer_orderUpdateArgs} args - Arguments to update one Customer_order.
     * @example
     * // Update one Customer_order
     * const customer_order = await prisma.customer_order.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends customer_orderUpdateArgs>(args: SelectSubset<T, customer_orderUpdateArgs<ExtArgs>>): Prisma__customer_orderClient<$Result.GetResult<Prisma.$customer_orderPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Customer_orders.
     * @param {customer_orderDeleteManyArgs} args - Arguments to filter Customer_orders to delete.
     * @example
     * // Delete a few Customer_orders
     * const { count } = await prisma.customer_order.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends customer_orderDeleteManyArgs>(args?: SelectSubset<T, customer_orderDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Customer_orders.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {customer_orderUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Customer_orders
     * const customer_order = await prisma.customer_order.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends customer_orderUpdateManyArgs>(args: SelectSubset<T, customer_orderUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Customer_order.
     * @param {customer_orderUpsertArgs} args - Arguments to update or create a Customer_order.
     * @example
     * // Update or create a Customer_order
     * const customer_order = await prisma.customer_order.upsert({
     *   create: {
     *     // ... data to create a Customer_order
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Customer_order we want to update
     *   }
     * })
     */
    upsert<T extends customer_orderUpsertArgs>(args: SelectSubset<T, customer_orderUpsertArgs<ExtArgs>>): Prisma__customer_orderClient<$Result.GetResult<Prisma.$customer_orderPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Customer_orders.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {customer_orderCountArgs} args - Arguments to filter Customer_orders to count.
     * @example
     * // Count the number of Customer_orders
     * const count = await prisma.customer_order.count({
     *   where: {
     *     // ... the filter for the Customer_orders we want to count
     *   }
     * })
    **/
    count<T extends customer_orderCountArgs>(
      args?: Subset<T, customer_orderCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Customer_orderCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Customer_order.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Customer_orderAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Customer_orderAggregateArgs>(args: Subset<T, Customer_orderAggregateArgs>): Prisma.PrismaPromise<GetCustomer_orderAggregateType<T>>

    /**
     * Group by Customer_order.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {customer_orderGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends customer_orderGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: customer_orderGroupByArgs['orderBy'] }
        : { orderBy?: customer_orderGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, customer_orderGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCustomer_orderGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the customer_order model
   */
  readonly fields: customer_orderFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for customer_order.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__customer_orderClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    member<T extends memberDefaultArgs<ExtArgs> = {}>(args?: Subset<T, memberDefaultArgs<ExtArgs>>): Prisma__memberClient<$Result.GetResult<Prisma.$memberPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    order_info<T extends customer_order$order_infoArgs<ExtArgs> = {}>(args?: Subset<T, customer_order$order_infoArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$order_infoPayload<ExtArgs>, T, "findMany"> | Null>
    order_item<T extends customer_order$order_itemArgs<ExtArgs> = {}>(args?: Subset<T, customer_order$order_itemArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$order_itemPayload<ExtArgs>, T, "findMany"> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the customer_order model
   */ 
  interface customer_orderFieldRefs {
    readonly order_id: FieldRef<"customer_order", 'Int'>
    readonly member_id: FieldRef<"customer_order", 'Int'>
    readonly total_amount: FieldRef<"customer_order", 'Int'>
    readonly status: FieldRef<"customer_order", 'String'>
    readonly order_date: FieldRef<"customer_order", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * customer_order findUnique
   */
  export type customer_orderFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the customer_order
     */
    select?: customer_orderSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: customer_orderInclude<ExtArgs> | null
    /**
     * Filter, which customer_order to fetch.
     */
    where: customer_orderWhereUniqueInput
  }

  /**
   * customer_order findUniqueOrThrow
   */
  export type customer_orderFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the customer_order
     */
    select?: customer_orderSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: customer_orderInclude<ExtArgs> | null
    /**
     * Filter, which customer_order to fetch.
     */
    where: customer_orderWhereUniqueInput
  }

  /**
   * customer_order findFirst
   */
  export type customer_orderFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the customer_order
     */
    select?: customer_orderSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: customer_orderInclude<ExtArgs> | null
    /**
     * Filter, which customer_order to fetch.
     */
    where?: customer_orderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of customer_orders to fetch.
     */
    orderBy?: customer_orderOrderByWithRelationInput | customer_orderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for customer_orders.
     */
    cursor?: customer_orderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` customer_orders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` customer_orders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of customer_orders.
     */
    distinct?: Customer_orderScalarFieldEnum | Customer_orderScalarFieldEnum[]
  }

  /**
   * customer_order findFirstOrThrow
   */
  export type customer_orderFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the customer_order
     */
    select?: customer_orderSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: customer_orderInclude<ExtArgs> | null
    /**
     * Filter, which customer_order to fetch.
     */
    where?: customer_orderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of customer_orders to fetch.
     */
    orderBy?: customer_orderOrderByWithRelationInput | customer_orderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for customer_orders.
     */
    cursor?: customer_orderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` customer_orders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` customer_orders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of customer_orders.
     */
    distinct?: Customer_orderScalarFieldEnum | Customer_orderScalarFieldEnum[]
  }

  /**
   * customer_order findMany
   */
  export type customer_orderFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the customer_order
     */
    select?: customer_orderSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: customer_orderInclude<ExtArgs> | null
    /**
     * Filter, which customer_orders to fetch.
     */
    where?: customer_orderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of customer_orders to fetch.
     */
    orderBy?: customer_orderOrderByWithRelationInput | customer_orderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing customer_orders.
     */
    cursor?: customer_orderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` customer_orders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` customer_orders.
     */
    skip?: number
    distinct?: Customer_orderScalarFieldEnum | Customer_orderScalarFieldEnum[]
  }

  /**
   * customer_order create
   */
  export type customer_orderCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the customer_order
     */
    select?: customer_orderSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: customer_orderInclude<ExtArgs> | null
    /**
     * The data needed to create a customer_order.
     */
    data: XOR<customer_orderCreateInput, customer_orderUncheckedCreateInput>
  }

  /**
   * customer_order createMany
   */
  export type customer_orderCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many customer_orders.
     */
    data: customer_orderCreateManyInput | customer_orderCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * customer_order createManyAndReturn
   */
  export type customer_orderCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the customer_order
     */
    select?: customer_orderSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many customer_orders.
     */
    data: customer_orderCreateManyInput | customer_orderCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: customer_orderIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * customer_order update
   */
  export type customer_orderUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the customer_order
     */
    select?: customer_orderSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: customer_orderInclude<ExtArgs> | null
    /**
     * The data needed to update a customer_order.
     */
    data: XOR<customer_orderUpdateInput, customer_orderUncheckedUpdateInput>
    /**
     * Choose, which customer_order to update.
     */
    where: customer_orderWhereUniqueInput
  }

  /**
   * customer_order updateMany
   */
  export type customer_orderUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update customer_orders.
     */
    data: XOR<customer_orderUpdateManyMutationInput, customer_orderUncheckedUpdateManyInput>
    /**
     * Filter which customer_orders to update
     */
    where?: customer_orderWhereInput
  }

  /**
   * customer_order upsert
   */
  export type customer_orderUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the customer_order
     */
    select?: customer_orderSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: customer_orderInclude<ExtArgs> | null
    /**
     * The filter to search for the customer_order to update in case it exists.
     */
    where: customer_orderWhereUniqueInput
    /**
     * In case the customer_order found by the `where` argument doesn't exist, create a new customer_order with this data.
     */
    create: XOR<customer_orderCreateInput, customer_orderUncheckedCreateInput>
    /**
     * In case the customer_order was found with the provided `where` argument, update it with this data.
     */
    update: XOR<customer_orderUpdateInput, customer_orderUncheckedUpdateInput>
  }

  /**
   * customer_order delete
   */
  export type customer_orderDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the customer_order
     */
    select?: customer_orderSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: customer_orderInclude<ExtArgs> | null
    /**
     * Filter which customer_order to delete.
     */
    where: customer_orderWhereUniqueInput
  }

  /**
   * customer_order deleteMany
   */
  export type customer_orderDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which customer_orders to delete
     */
    where?: customer_orderWhereInput
  }

  /**
   * customer_order.order_info
   */
  export type customer_order$order_infoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the order_info
     */
    select?: order_infoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: order_infoInclude<ExtArgs> | null
    where?: order_infoWhereInput
    orderBy?: order_infoOrderByWithRelationInput | order_infoOrderByWithRelationInput[]
    cursor?: order_infoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Order_infoScalarFieldEnum | Order_infoScalarFieldEnum[]
  }

  /**
   * customer_order.order_item
   */
  export type customer_order$order_itemArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the order_item
     */
    select?: order_itemSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: order_itemInclude<ExtArgs> | null
    where?: order_itemWhereInput
    orderBy?: order_itemOrderByWithRelationInput | order_itemOrderByWithRelationInput[]
    cursor?: order_itemWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Order_itemScalarFieldEnum | Order_itemScalarFieldEnum[]
  }

  /**
   * customer_order without action
   */
  export type customer_orderDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the customer_order
     */
    select?: customer_orderSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: customer_orderInclude<ExtArgs> | null
  }


  /**
   * Model facility
   */

  export type AggregateFacility = {
    _count: FacilityCountAggregateOutputType | null
    _avg: FacilityAvgAggregateOutputType | null
    _sum: FacilitySumAggregateOutputType | null
    _min: FacilityMinAggregateOutputType | null
    _max: FacilityMaxAggregateOutputType | null
  }

  export type FacilityAvgAggregateOutputType = {
    facility_id: number | null
    area: number | null
  }

  export type FacilitySumAggregateOutputType = {
    facility_id: number | null
    area: number | null
  }

  export type FacilityMinAggregateOutputType = {
    facility_id: number | null
    title: string | null
    category: string | null
    des: string | null
    content: string | null
    area: number | null
    location: string | null
    open_time: string | null
    data_maintain: string | null
    facility_id_name: string | null
    facility_class_name: string | null
    rule_others: string | null
    remarks: string | null
  }

  export type FacilityMaxAggregateOutputType = {
    facility_id: number | null
    title: string | null
    category: string | null
    des: string | null
    content: string | null
    area: number | null
    location: string | null
    open_time: string | null
    data_maintain: string | null
    facility_id_name: string | null
    facility_class_name: string | null
    rule_others: string | null
    remarks: string | null
  }

  export type FacilityCountAggregateOutputType = {
    facility_id: number
    title: number
    image: number
    category: number
    des: number
    content: number
    area: number
    location: number
    open_time: number
    data_maintain: number
    facility_id_name: number
    facility_class_name: number
    rule_others: number
    remarks: number
    _all: number
  }


  export type FacilityAvgAggregateInputType = {
    facility_id?: true
    area?: true
  }

  export type FacilitySumAggregateInputType = {
    facility_id?: true
    area?: true
  }

  export type FacilityMinAggregateInputType = {
    facility_id?: true
    title?: true
    category?: true
    des?: true
    content?: true
    area?: true
    location?: true
    open_time?: true
    data_maintain?: true
    facility_id_name?: true
    facility_class_name?: true
    rule_others?: true
    remarks?: true
  }

  export type FacilityMaxAggregateInputType = {
    facility_id?: true
    title?: true
    category?: true
    des?: true
    content?: true
    area?: true
    location?: true
    open_time?: true
    data_maintain?: true
    facility_id_name?: true
    facility_class_name?: true
    rule_others?: true
    remarks?: true
  }

  export type FacilityCountAggregateInputType = {
    facility_id?: true
    title?: true
    image?: true
    category?: true
    des?: true
    content?: true
    area?: true
    location?: true
    open_time?: true
    data_maintain?: true
    facility_id_name?: true
    facility_class_name?: true
    rule_others?: true
    remarks?: true
    _all?: true
  }

  export type FacilityAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which facility to aggregate.
     */
    where?: facilityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of facilities to fetch.
     */
    orderBy?: facilityOrderByWithRelationInput | facilityOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: facilityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` facilities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` facilities.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned facilities
    **/
    _count?: true | FacilityCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: FacilityAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: FacilitySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: FacilityMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: FacilityMaxAggregateInputType
  }

  export type GetFacilityAggregateType<T extends FacilityAggregateArgs> = {
        [P in keyof T & keyof AggregateFacility]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateFacility[P]>
      : GetScalarType<T[P], AggregateFacility[P]>
  }




  export type facilityGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: facilityWhereInput
    orderBy?: facilityOrderByWithAggregationInput | facilityOrderByWithAggregationInput[]
    by: FacilityScalarFieldEnum[] | FacilityScalarFieldEnum
    having?: facilityScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: FacilityCountAggregateInputType | true
    _avg?: FacilityAvgAggregateInputType
    _sum?: FacilitySumAggregateInputType
    _min?: FacilityMinAggregateInputType
    _max?: FacilityMaxAggregateInputType
  }

  export type FacilityGroupByOutputType = {
    facility_id: number
    title: string
    image: JsonValue | null
    category: string
    des: string | null
    content: string | null
    area: number
    location: string
    open_time: string | null
    data_maintain: string | null
    facility_id_name: string
    facility_class_name: string
    rule_others: string
    remarks: string | null
    _count: FacilityCountAggregateOutputType | null
    _avg: FacilityAvgAggregateOutputType | null
    _sum: FacilitySumAggregateOutputType | null
    _min: FacilityMinAggregateOutputType | null
    _max: FacilityMaxAggregateOutputType | null
  }

  type GetFacilityGroupByPayload<T extends facilityGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<FacilityGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof FacilityGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], FacilityGroupByOutputType[P]>
            : GetScalarType<T[P], FacilityGroupByOutputType[P]>
        }
      >
    >


  export type facilitySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    facility_id?: boolean
    title?: boolean
    image?: boolean
    category?: boolean
    des?: boolean
    content?: boolean
    area?: boolean
    location?: boolean
    open_time?: boolean
    data_maintain?: boolean
    facility_id_name?: boolean
    facility_class_name?: boolean
    rule_others?: boolean
    remarks?: boolean
    facility_rule?: boolean | facility$facility_ruleArgs<ExtArgs>
    more_about?: boolean | facility$more_aboutArgs<ExtArgs>
    _count?: boolean | FacilityCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["facility"]>

  export type facilitySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    facility_id?: boolean
    title?: boolean
    image?: boolean
    category?: boolean
    des?: boolean
    content?: boolean
    area?: boolean
    location?: boolean
    open_time?: boolean
    data_maintain?: boolean
    facility_id_name?: boolean
    facility_class_name?: boolean
    rule_others?: boolean
    remarks?: boolean
  }, ExtArgs["result"]["facility"]>

  export type facilitySelectScalar = {
    facility_id?: boolean
    title?: boolean
    image?: boolean
    category?: boolean
    des?: boolean
    content?: boolean
    area?: boolean
    location?: boolean
    open_time?: boolean
    data_maintain?: boolean
    facility_id_name?: boolean
    facility_class_name?: boolean
    rule_others?: boolean
    remarks?: boolean
  }

  export type facilityInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    facility_rule?: boolean | facility$facility_ruleArgs<ExtArgs>
    more_about?: boolean | facility$more_aboutArgs<ExtArgs>
    _count?: boolean | FacilityCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type facilityIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $facilityPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "facility"
    objects: {
      facility_rule: Prisma.$facility_rulePayload<ExtArgs>[]
      more_about: Prisma.$more_aboutPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      facility_id: number
      title: string
      image: Prisma.JsonValue | null
      category: string
      des: string | null
      content: string | null
      area: number
      location: string
      open_time: string | null
      data_maintain: string | null
      facility_id_name: string
      facility_class_name: string
      rule_others: string
      remarks: string | null
    }, ExtArgs["result"]["facility"]>
    composites: {}
  }

  type facilityGetPayload<S extends boolean | null | undefined | facilityDefaultArgs> = $Result.GetResult<Prisma.$facilityPayload, S>

  type facilityCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<facilityFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: FacilityCountAggregateInputType | true
    }

  export interface facilityDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['facility'], meta: { name: 'facility' } }
    /**
     * Find zero or one Facility that matches the filter.
     * @param {facilityFindUniqueArgs} args - Arguments to find a Facility
     * @example
     * // Get one Facility
     * const facility = await prisma.facility.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends facilityFindUniqueArgs>(args: SelectSubset<T, facilityFindUniqueArgs<ExtArgs>>): Prisma__facilityClient<$Result.GetResult<Prisma.$facilityPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Facility that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {facilityFindUniqueOrThrowArgs} args - Arguments to find a Facility
     * @example
     * // Get one Facility
     * const facility = await prisma.facility.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends facilityFindUniqueOrThrowArgs>(args: SelectSubset<T, facilityFindUniqueOrThrowArgs<ExtArgs>>): Prisma__facilityClient<$Result.GetResult<Prisma.$facilityPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Facility that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {facilityFindFirstArgs} args - Arguments to find a Facility
     * @example
     * // Get one Facility
     * const facility = await prisma.facility.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends facilityFindFirstArgs>(args?: SelectSubset<T, facilityFindFirstArgs<ExtArgs>>): Prisma__facilityClient<$Result.GetResult<Prisma.$facilityPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Facility that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {facilityFindFirstOrThrowArgs} args - Arguments to find a Facility
     * @example
     * // Get one Facility
     * const facility = await prisma.facility.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends facilityFindFirstOrThrowArgs>(args?: SelectSubset<T, facilityFindFirstOrThrowArgs<ExtArgs>>): Prisma__facilityClient<$Result.GetResult<Prisma.$facilityPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Facilities that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {facilityFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Facilities
     * const facilities = await prisma.facility.findMany()
     * 
     * // Get first 10 Facilities
     * const facilities = await prisma.facility.findMany({ take: 10 })
     * 
     * // Only select the `facility_id`
     * const facilityWithFacility_idOnly = await prisma.facility.findMany({ select: { facility_id: true } })
     * 
     */
    findMany<T extends facilityFindManyArgs>(args?: SelectSubset<T, facilityFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$facilityPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Facility.
     * @param {facilityCreateArgs} args - Arguments to create a Facility.
     * @example
     * // Create one Facility
     * const Facility = await prisma.facility.create({
     *   data: {
     *     // ... data to create a Facility
     *   }
     * })
     * 
     */
    create<T extends facilityCreateArgs>(args: SelectSubset<T, facilityCreateArgs<ExtArgs>>): Prisma__facilityClient<$Result.GetResult<Prisma.$facilityPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Facilities.
     * @param {facilityCreateManyArgs} args - Arguments to create many Facilities.
     * @example
     * // Create many Facilities
     * const facility = await prisma.facility.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends facilityCreateManyArgs>(args?: SelectSubset<T, facilityCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Facilities and returns the data saved in the database.
     * @param {facilityCreateManyAndReturnArgs} args - Arguments to create many Facilities.
     * @example
     * // Create many Facilities
     * const facility = await prisma.facility.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Facilities and only return the `facility_id`
     * const facilityWithFacility_idOnly = await prisma.facility.createManyAndReturn({ 
     *   select: { facility_id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends facilityCreateManyAndReturnArgs>(args?: SelectSubset<T, facilityCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$facilityPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Facility.
     * @param {facilityDeleteArgs} args - Arguments to delete one Facility.
     * @example
     * // Delete one Facility
     * const Facility = await prisma.facility.delete({
     *   where: {
     *     // ... filter to delete one Facility
     *   }
     * })
     * 
     */
    delete<T extends facilityDeleteArgs>(args: SelectSubset<T, facilityDeleteArgs<ExtArgs>>): Prisma__facilityClient<$Result.GetResult<Prisma.$facilityPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Facility.
     * @param {facilityUpdateArgs} args - Arguments to update one Facility.
     * @example
     * // Update one Facility
     * const facility = await prisma.facility.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends facilityUpdateArgs>(args: SelectSubset<T, facilityUpdateArgs<ExtArgs>>): Prisma__facilityClient<$Result.GetResult<Prisma.$facilityPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Facilities.
     * @param {facilityDeleteManyArgs} args - Arguments to filter Facilities to delete.
     * @example
     * // Delete a few Facilities
     * const { count } = await prisma.facility.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends facilityDeleteManyArgs>(args?: SelectSubset<T, facilityDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Facilities.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {facilityUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Facilities
     * const facility = await prisma.facility.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends facilityUpdateManyArgs>(args: SelectSubset<T, facilityUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Facility.
     * @param {facilityUpsertArgs} args - Arguments to update or create a Facility.
     * @example
     * // Update or create a Facility
     * const facility = await prisma.facility.upsert({
     *   create: {
     *     // ... data to create a Facility
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Facility we want to update
     *   }
     * })
     */
    upsert<T extends facilityUpsertArgs>(args: SelectSubset<T, facilityUpsertArgs<ExtArgs>>): Prisma__facilityClient<$Result.GetResult<Prisma.$facilityPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Facilities.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {facilityCountArgs} args - Arguments to filter Facilities to count.
     * @example
     * // Count the number of Facilities
     * const count = await prisma.facility.count({
     *   where: {
     *     // ... the filter for the Facilities we want to count
     *   }
     * })
    **/
    count<T extends facilityCountArgs>(
      args?: Subset<T, facilityCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], FacilityCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Facility.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FacilityAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends FacilityAggregateArgs>(args: Subset<T, FacilityAggregateArgs>): Prisma.PrismaPromise<GetFacilityAggregateType<T>>

    /**
     * Group by Facility.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {facilityGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends facilityGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: facilityGroupByArgs['orderBy'] }
        : { orderBy?: facilityGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, facilityGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFacilityGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the facility model
   */
  readonly fields: facilityFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for facility.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__facilityClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    facility_rule<T extends facility$facility_ruleArgs<ExtArgs> = {}>(args?: Subset<T, facility$facility_ruleArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$facility_rulePayload<ExtArgs>, T, "findMany"> | Null>
    more_about<T extends facility$more_aboutArgs<ExtArgs> = {}>(args?: Subset<T, facility$more_aboutArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$more_aboutPayload<ExtArgs>, T, "findMany"> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the facility model
   */ 
  interface facilityFieldRefs {
    readonly facility_id: FieldRef<"facility", 'Int'>
    readonly title: FieldRef<"facility", 'String'>
    readonly image: FieldRef<"facility", 'Json'>
    readonly category: FieldRef<"facility", 'String'>
    readonly des: FieldRef<"facility", 'String'>
    readonly content: FieldRef<"facility", 'String'>
    readonly area: FieldRef<"facility", 'Int'>
    readonly location: FieldRef<"facility", 'String'>
    readonly open_time: FieldRef<"facility", 'String'>
    readonly data_maintain: FieldRef<"facility", 'String'>
    readonly facility_id_name: FieldRef<"facility", 'String'>
    readonly facility_class_name: FieldRef<"facility", 'String'>
    readonly rule_others: FieldRef<"facility", 'String'>
    readonly remarks: FieldRef<"facility", 'String'>
  }
    

  // Custom InputTypes
  /**
   * facility findUnique
   */
  export type facilityFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the facility
     */
    select?: facilitySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: facilityInclude<ExtArgs> | null
    /**
     * Filter, which facility to fetch.
     */
    where: facilityWhereUniqueInput
  }

  /**
   * facility findUniqueOrThrow
   */
  export type facilityFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the facility
     */
    select?: facilitySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: facilityInclude<ExtArgs> | null
    /**
     * Filter, which facility to fetch.
     */
    where: facilityWhereUniqueInput
  }

  /**
   * facility findFirst
   */
  export type facilityFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the facility
     */
    select?: facilitySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: facilityInclude<ExtArgs> | null
    /**
     * Filter, which facility to fetch.
     */
    where?: facilityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of facilities to fetch.
     */
    orderBy?: facilityOrderByWithRelationInput | facilityOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for facilities.
     */
    cursor?: facilityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` facilities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` facilities.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of facilities.
     */
    distinct?: FacilityScalarFieldEnum | FacilityScalarFieldEnum[]
  }

  /**
   * facility findFirstOrThrow
   */
  export type facilityFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the facility
     */
    select?: facilitySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: facilityInclude<ExtArgs> | null
    /**
     * Filter, which facility to fetch.
     */
    where?: facilityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of facilities to fetch.
     */
    orderBy?: facilityOrderByWithRelationInput | facilityOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for facilities.
     */
    cursor?: facilityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` facilities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` facilities.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of facilities.
     */
    distinct?: FacilityScalarFieldEnum | FacilityScalarFieldEnum[]
  }

  /**
   * facility findMany
   */
  export type facilityFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the facility
     */
    select?: facilitySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: facilityInclude<ExtArgs> | null
    /**
     * Filter, which facilities to fetch.
     */
    where?: facilityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of facilities to fetch.
     */
    orderBy?: facilityOrderByWithRelationInput | facilityOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing facilities.
     */
    cursor?: facilityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` facilities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` facilities.
     */
    skip?: number
    distinct?: FacilityScalarFieldEnum | FacilityScalarFieldEnum[]
  }

  /**
   * facility create
   */
  export type facilityCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the facility
     */
    select?: facilitySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: facilityInclude<ExtArgs> | null
    /**
     * The data needed to create a facility.
     */
    data: XOR<facilityCreateInput, facilityUncheckedCreateInput>
  }

  /**
   * facility createMany
   */
  export type facilityCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many facilities.
     */
    data: facilityCreateManyInput | facilityCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * facility createManyAndReturn
   */
  export type facilityCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the facility
     */
    select?: facilitySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many facilities.
     */
    data: facilityCreateManyInput | facilityCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * facility update
   */
  export type facilityUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the facility
     */
    select?: facilitySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: facilityInclude<ExtArgs> | null
    /**
     * The data needed to update a facility.
     */
    data: XOR<facilityUpdateInput, facilityUncheckedUpdateInput>
    /**
     * Choose, which facility to update.
     */
    where: facilityWhereUniqueInput
  }

  /**
   * facility updateMany
   */
  export type facilityUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update facilities.
     */
    data: XOR<facilityUpdateManyMutationInput, facilityUncheckedUpdateManyInput>
    /**
     * Filter which facilities to update
     */
    where?: facilityWhereInput
  }

  /**
   * facility upsert
   */
  export type facilityUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the facility
     */
    select?: facilitySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: facilityInclude<ExtArgs> | null
    /**
     * The filter to search for the facility to update in case it exists.
     */
    where: facilityWhereUniqueInput
    /**
     * In case the facility found by the `where` argument doesn't exist, create a new facility with this data.
     */
    create: XOR<facilityCreateInput, facilityUncheckedCreateInput>
    /**
     * In case the facility was found with the provided `where` argument, update it with this data.
     */
    update: XOR<facilityUpdateInput, facilityUncheckedUpdateInput>
  }

  /**
   * facility delete
   */
  export type facilityDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the facility
     */
    select?: facilitySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: facilityInclude<ExtArgs> | null
    /**
     * Filter which facility to delete.
     */
    where: facilityWhereUniqueInput
  }

  /**
   * facility deleteMany
   */
  export type facilityDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which facilities to delete
     */
    where?: facilityWhereInput
  }

  /**
   * facility.facility_rule
   */
  export type facility$facility_ruleArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the facility_rule
     */
    select?: facility_ruleSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: facility_ruleInclude<ExtArgs> | null
    where?: facility_ruleWhereInput
    orderBy?: facility_ruleOrderByWithRelationInput | facility_ruleOrderByWithRelationInput[]
    cursor?: facility_ruleWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Facility_ruleScalarFieldEnum | Facility_ruleScalarFieldEnum[]
  }

  /**
   * facility.more_about
   */
  export type facility$more_aboutArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the more_about
     */
    select?: more_aboutSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: more_aboutInclude<ExtArgs> | null
    where?: more_aboutWhereInput
    orderBy?: more_aboutOrderByWithRelationInput | more_aboutOrderByWithRelationInput[]
    cursor?: more_aboutWhereUniqueInput
    take?: number
    skip?: number
    distinct?: More_aboutScalarFieldEnum | More_aboutScalarFieldEnum[]
  }

  /**
   * facility without action
   */
  export type facilityDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the facility
     */
    select?: facilitySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: facilityInclude<ExtArgs> | null
  }


  /**
   * Model facility_rule
   */

  export type AggregateFacility_rule = {
    _count: Facility_ruleCountAggregateOutputType | null
    _avg: Facility_ruleAvgAggregateOutputType | null
    _sum: Facility_ruleSumAggregateOutputType | null
    _min: Facility_ruleMinAggregateOutputType | null
    _max: Facility_ruleMaxAggregateOutputType | null
  }

  export type Facility_ruleAvgAggregateOutputType = {
    facility_rule_id: number | null
    facility_id: number | null
  }

  export type Facility_ruleSumAggregateOutputType = {
    facility_rule_id: number | null
    facility_id: number | null
  }

  export type Facility_ruleMinAggregateOutputType = {
    facility_rule_id: number | null
    facility_id: number | null
    rule_type: string | null
    rule_value: string | null
  }

  export type Facility_ruleMaxAggregateOutputType = {
    facility_rule_id: number | null
    facility_id: number | null
    rule_type: string | null
    rule_value: string | null
  }

  export type Facility_ruleCountAggregateOutputType = {
    facility_rule_id: number
    facility_id: number
    rule_type: number
    rule_value: number
    _all: number
  }


  export type Facility_ruleAvgAggregateInputType = {
    facility_rule_id?: true
    facility_id?: true
  }

  export type Facility_ruleSumAggregateInputType = {
    facility_rule_id?: true
    facility_id?: true
  }

  export type Facility_ruleMinAggregateInputType = {
    facility_rule_id?: true
    facility_id?: true
    rule_type?: true
    rule_value?: true
  }

  export type Facility_ruleMaxAggregateInputType = {
    facility_rule_id?: true
    facility_id?: true
    rule_type?: true
    rule_value?: true
  }

  export type Facility_ruleCountAggregateInputType = {
    facility_rule_id?: true
    facility_id?: true
    rule_type?: true
    rule_value?: true
    _all?: true
  }

  export type Facility_ruleAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which facility_rule to aggregate.
     */
    where?: facility_ruleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of facility_rules to fetch.
     */
    orderBy?: facility_ruleOrderByWithRelationInput | facility_ruleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: facility_ruleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` facility_rules from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` facility_rules.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned facility_rules
    **/
    _count?: true | Facility_ruleCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Facility_ruleAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Facility_ruleSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Facility_ruleMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Facility_ruleMaxAggregateInputType
  }

  export type GetFacility_ruleAggregateType<T extends Facility_ruleAggregateArgs> = {
        [P in keyof T & keyof AggregateFacility_rule]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateFacility_rule[P]>
      : GetScalarType<T[P], AggregateFacility_rule[P]>
  }




  export type facility_ruleGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: facility_ruleWhereInput
    orderBy?: facility_ruleOrderByWithAggregationInput | facility_ruleOrderByWithAggregationInput[]
    by: Facility_ruleScalarFieldEnum[] | Facility_ruleScalarFieldEnum
    having?: facility_ruleScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Facility_ruleCountAggregateInputType | true
    _avg?: Facility_ruleAvgAggregateInputType
    _sum?: Facility_ruleSumAggregateInputType
    _min?: Facility_ruleMinAggregateInputType
    _max?: Facility_ruleMaxAggregateInputType
  }

  export type Facility_ruleGroupByOutputType = {
    facility_rule_id: number
    facility_id: number | null
    rule_type: string | null
    rule_value: string | null
    _count: Facility_ruleCountAggregateOutputType | null
    _avg: Facility_ruleAvgAggregateOutputType | null
    _sum: Facility_ruleSumAggregateOutputType | null
    _min: Facility_ruleMinAggregateOutputType | null
    _max: Facility_ruleMaxAggregateOutputType | null
  }

  type GetFacility_ruleGroupByPayload<T extends facility_ruleGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Facility_ruleGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Facility_ruleGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Facility_ruleGroupByOutputType[P]>
            : GetScalarType<T[P], Facility_ruleGroupByOutputType[P]>
        }
      >
    >


  export type facility_ruleSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    facility_rule_id?: boolean
    facility_id?: boolean
    rule_type?: boolean
    rule_value?: boolean
    facility?: boolean | facility_rule$facilityArgs<ExtArgs>
  }, ExtArgs["result"]["facility_rule"]>

  export type facility_ruleSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    facility_rule_id?: boolean
    facility_id?: boolean
    rule_type?: boolean
    rule_value?: boolean
    facility?: boolean | facility_rule$facilityArgs<ExtArgs>
  }, ExtArgs["result"]["facility_rule"]>

  export type facility_ruleSelectScalar = {
    facility_rule_id?: boolean
    facility_id?: boolean
    rule_type?: boolean
    rule_value?: boolean
  }

  export type facility_ruleInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    facility?: boolean | facility_rule$facilityArgs<ExtArgs>
  }
  export type facility_ruleIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    facility?: boolean | facility_rule$facilityArgs<ExtArgs>
  }

  export type $facility_rulePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "facility_rule"
    objects: {
      facility: Prisma.$facilityPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      facility_rule_id: number
      facility_id: number | null
      rule_type: string | null
      rule_value: string | null
    }, ExtArgs["result"]["facility_rule"]>
    composites: {}
  }

  type facility_ruleGetPayload<S extends boolean | null | undefined | facility_ruleDefaultArgs> = $Result.GetResult<Prisma.$facility_rulePayload, S>

  type facility_ruleCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<facility_ruleFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: Facility_ruleCountAggregateInputType | true
    }

  export interface facility_ruleDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['facility_rule'], meta: { name: 'facility_rule' } }
    /**
     * Find zero or one Facility_rule that matches the filter.
     * @param {facility_ruleFindUniqueArgs} args - Arguments to find a Facility_rule
     * @example
     * // Get one Facility_rule
     * const facility_rule = await prisma.facility_rule.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends facility_ruleFindUniqueArgs>(args: SelectSubset<T, facility_ruleFindUniqueArgs<ExtArgs>>): Prisma__facility_ruleClient<$Result.GetResult<Prisma.$facility_rulePayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Facility_rule that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {facility_ruleFindUniqueOrThrowArgs} args - Arguments to find a Facility_rule
     * @example
     * // Get one Facility_rule
     * const facility_rule = await prisma.facility_rule.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends facility_ruleFindUniqueOrThrowArgs>(args: SelectSubset<T, facility_ruleFindUniqueOrThrowArgs<ExtArgs>>): Prisma__facility_ruleClient<$Result.GetResult<Prisma.$facility_rulePayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Facility_rule that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {facility_ruleFindFirstArgs} args - Arguments to find a Facility_rule
     * @example
     * // Get one Facility_rule
     * const facility_rule = await prisma.facility_rule.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends facility_ruleFindFirstArgs>(args?: SelectSubset<T, facility_ruleFindFirstArgs<ExtArgs>>): Prisma__facility_ruleClient<$Result.GetResult<Prisma.$facility_rulePayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Facility_rule that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {facility_ruleFindFirstOrThrowArgs} args - Arguments to find a Facility_rule
     * @example
     * // Get one Facility_rule
     * const facility_rule = await prisma.facility_rule.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends facility_ruleFindFirstOrThrowArgs>(args?: SelectSubset<T, facility_ruleFindFirstOrThrowArgs<ExtArgs>>): Prisma__facility_ruleClient<$Result.GetResult<Prisma.$facility_rulePayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Facility_rules that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {facility_ruleFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Facility_rules
     * const facility_rules = await prisma.facility_rule.findMany()
     * 
     * // Get first 10 Facility_rules
     * const facility_rules = await prisma.facility_rule.findMany({ take: 10 })
     * 
     * // Only select the `facility_rule_id`
     * const facility_ruleWithFacility_rule_idOnly = await prisma.facility_rule.findMany({ select: { facility_rule_id: true } })
     * 
     */
    findMany<T extends facility_ruleFindManyArgs>(args?: SelectSubset<T, facility_ruleFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$facility_rulePayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Facility_rule.
     * @param {facility_ruleCreateArgs} args - Arguments to create a Facility_rule.
     * @example
     * // Create one Facility_rule
     * const Facility_rule = await prisma.facility_rule.create({
     *   data: {
     *     // ... data to create a Facility_rule
     *   }
     * })
     * 
     */
    create<T extends facility_ruleCreateArgs>(args: SelectSubset<T, facility_ruleCreateArgs<ExtArgs>>): Prisma__facility_ruleClient<$Result.GetResult<Prisma.$facility_rulePayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Facility_rules.
     * @param {facility_ruleCreateManyArgs} args - Arguments to create many Facility_rules.
     * @example
     * // Create many Facility_rules
     * const facility_rule = await prisma.facility_rule.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends facility_ruleCreateManyArgs>(args?: SelectSubset<T, facility_ruleCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Facility_rules and returns the data saved in the database.
     * @param {facility_ruleCreateManyAndReturnArgs} args - Arguments to create many Facility_rules.
     * @example
     * // Create many Facility_rules
     * const facility_rule = await prisma.facility_rule.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Facility_rules and only return the `facility_rule_id`
     * const facility_ruleWithFacility_rule_idOnly = await prisma.facility_rule.createManyAndReturn({ 
     *   select: { facility_rule_id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends facility_ruleCreateManyAndReturnArgs>(args?: SelectSubset<T, facility_ruleCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$facility_rulePayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Facility_rule.
     * @param {facility_ruleDeleteArgs} args - Arguments to delete one Facility_rule.
     * @example
     * // Delete one Facility_rule
     * const Facility_rule = await prisma.facility_rule.delete({
     *   where: {
     *     // ... filter to delete one Facility_rule
     *   }
     * })
     * 
     */
    delete<T extends facility_ruleDeleteArgs>(args: SelectSubset<T, facility_ruleDeleteArgs<ExtArgs>>): Prisma__facility_ruleClient<$Result.GetResult<Prisma.$facility_rulePayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Facility_rule.
     * @param {facility_ruleUpdateArgs} args - Arguments to update one Facility_rule.
     * @example
     * // Update one Facility_rule
     * const facility_rule = await prisma.facility_rule.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends facility_ruleUpdateArgs>(args: SelectSubset<T, facility_ruleUpdateArgs<ExtArgs>>): Prisma__facility_ruleClient<$Result.GetResult<Prisma.$facility_rulePayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Facility_rules.
     * @param {facility_ruleDeleteManyArgs} args - Arguments to filter Facility_rules to delete.
     * @example
     * // Delete a few Facility_rules
     * const { count } = await prisma.facility_rule.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends facility_ruleDeleteManyArgs>(args?: SelectSubset<T, facility_ruleDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Facility_rules.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {facility_ruleUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Facility_rules
     * const facility_rule = await prisma.facility_rule.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends facility_ruleUpdateManyArgs>(args: SelectSubset<T, facility_ruleUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Facility_rule.
     * @param {facility_ruleUpsertArgs} args - Arguments to update or create a Facility_rule.
     * @example
     * // Update or create a Facility_rule
     * const facility_rule = await prisma.facility_rule.upsert({
     *   create: {
     *     // ... data to create a Facility_rule
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Facility_rule we want to update
     *   }
     * })
     */
    upsert<T extends facility_ruleUpsertArgs>(args: SelectSubset<T, facility_ruleUpsertArgs<ExtArgs>>): Prisma__facility_ruleClient<$Result.GetResult<Prisma.$facility_rulePayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Facility_rules.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {facility_ruleCountArgs} args - Arguments to filter Facility_rules to count.
     * @example
     * // Count the number of Facility_rules
     * const count = await prisma.facility_rule.count({
     *   where: {
     *     // ... the filter for the Facility_rules we want to count
     *   }
     * })
    **/
    count<T extends facility_ruleCountArgs>(
      args?: Subset<T, facility_ruleCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Facility_ruleCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Facility_rule.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Facility_ruleAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Facility_ruleAggregateArgs>(args: Subset<T, Facility_ruleAggregateArgs>): Prisma.PrismaPromise<GetFacility_ruleAggregateType<T>>

    /**
     * Group by Facility_rule.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {facility_ruleGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends facility_ruleGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: facility_ruleGroupByArgs['orderBy'] }
        : { orderBy?: facility_ruleGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, facility_ruleGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFacility_ruleGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the facility_rule model
   */
  readonly fields: facility_ruleFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for facility_rule.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__facility_ruleClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    facility<T extends facility_rule$facilityArgs<ExtArgs> = {}>(args?: Subset<T, facility_rule$facilityArgs<ExtArgs>>): Prisma__facilityClient<$Result.GetResult<Prisma.$facilityPayload<ExtArgs>, T, "findUniqueOrThrow"> | null, null, ExtArgs>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the facility_rule model
   */ 
  interface facility_ruleFieldRefs {
    readonly facility_rule_id: FieldRef<"facility_rule", 'Int'>
    readonly facility_id: FieldRef<"facility_rule", 'Int'>
    readonly rule_type: FieldRef<"facility_rule", 'String'>
    readonly rule_value: FieldRef<"facility_rule", 'String'>
  }
    

  // Custom InputTypes
  /**
   * facility_rule findUnique
   */
  export type facility_ruleFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the facility_rule
     */
    select?: facility_ruleSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: facility_ruleInclude<ExtArgs> | null
    /**
     * Filter, which facility_rule to fetch.
     */
    where: facility_ruleWhereUniqueInput
  }

  /**
   * facility_rule findUniqueOrThrow
   */
  export type facility_ruleFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the facility_rule
     */
    select?: facility_ruleSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: facility_ruleInclude<ExtArgs> | null
    /**
     * Filter, which facility_rule to fetch.
     */
    where: facility_ruleWhereUniqueInput
  }

  /**
   * facility_rule findFirst
   */
  export type facility_ruleFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the facility_rule
     */
    select?: facility_ruleSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: facility_ruleInclude<ExtArgs> | null
    /**
     * Filter, which facility_rule to fetch.
     */
    where?: facility_ruleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of facility_rules to fetch.
     */
    orderBy?: facility_ruleOrderByWithRelationInput | facility_ruleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for facility_rules.
     */
    cursor?: facility_ruleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` facility_rules from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` facility_rules.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of facility_rules.
     */
    distinct?: Facility_ruleScalarFieldEnum | Facility_ruleScalarFieldEnum[]
  }

  /**
   * facility_rule findFirstOrThrow
   */
  export type facility_ruleFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the facility_rule
     */
    select?: facility_ruleSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: facility_ruleInclude<ExtArgs> | null
    /**
     * Filter, which facility_rule to fetch.
     */
    where?: facility_ruleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of facility_rules to fetch.
     */
    orderBy?: facility_ruleOrderByWithRelationInput | facility_ruleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for facility_rules.
     */
    cursor?: facility_ruleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` facility_rules from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` facility_rules.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of facility_rules.
     */
    distinct?: Facility_ruleScalarFieldEnum | Facility_ruleScalarFieldEnum[]
  }

  /**
   * facility_rule findMany
   */
  export type facility_ruleFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the facility_rule
     */
    select?: facility_ruleSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: facility_ruleInclude<ExtArgs> | null
    /**
     * Filter, which facility_rules to fetch.
     */
    where?: facility_ruleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of facility_rules to fetch.
     */
    orderBy?: facility_ruleOrderByWithRelationInput | facility_ruleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing facility_rules.
     */
    cursor?: facility_ruleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` facility_rules from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` facility_rules.
     */
    skip?: number
    distinct?: Facility_ruleScalarFieldEnum | Facility_ruleScalarFieldEnum[]
  }

  /**
   * facility_rule create
   */
  export type facility_ruleCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the facility_rule
     */
    select?: facility_ruleSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: facility_ruleInclude<ExtArgs> | null
    /**
     * The data needed to create a facility_rule.
     */
    data?: XOR<facility_ruleCreateInput, facility_ruleUncheckedCreateInput>
  }

  /**
   * facility_rule createMany
   */
  export type facility_ruleCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many facility_rules.
     */
    data: facility_ruleCreateManyInput | facility_ruleCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * facility_rule createManyAndReturn
   */
  export type facility_ruleCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the facility_rule
     */
    select?: facility_ruleSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many facility_rules.
     */
    data: facility_ruleCreateManyInput | facility_ruleCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: facility_ruleIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * facility_rule update
   */
  export type facility_ruleUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the facility_rule
     */
    select?: facility_ruleSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: facility_ruleInclude<ExtArgs> | null
    /**
     * The data needed to update a facility_rule.
     */
    data: XOR<facility_ruleUpdateInput, facility_ruleUncheckedUpdateInput>
    /**
     * Choose, which facility_rule to update.
     */
    where: facility_ruleWhereUniqueInput
  }

  /**
   * facility_rule updateMany
   */
  export type facility_ruleUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update facility_rules.
     */
    data: XOR<facility_ruleUpdateManyMutationInput, facility_ruleUncheckedUpdateManyInput>
    /**
     * Filter which facility_rules to update
     */
    where?: facility_ruleWhereInput
  }

  /**
   * facility_rule upsert
   */
  export type facility_ruleUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the facility_rule
     */
    select?: facility_ruleSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: facility_ruleInclude<ExtArgs> | null
    /**
     * The filter to search for the facility_rule to update in case it exists.
     */
    where: facility_ruleWhereUniqueInput
    /**
     * In case the facility_rule found by the `where` argument doesn't exist, create a new facility_rule with this data.
     */
    create: XOR<facility_ruleCreateInput, facility_ruleUncheckedCreateInput>
    /**
     * In case the facility_rule was found with the provided `where` argument, update it with this data.
     */
    update: XOR<facility_ruleUpdateInput, facility_ruleUncheckedUpdateInput>
  }

  /**
   * facility_rule delete
   */
  export type facility_ruleDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the facility_rule
     */
    select?: facility_ruleSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: facility_ruleInclude<ExtArgs> | null
    /**
     * Filter which facility_rule to delete.
     */
    where: facility_ruleWhereUniqueInput
  }

  /**
   * facility_rule deleteMany
   */
  export type facility_ruleDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which facility_rules to delete
     */
    where?: facility_ruleWhereInput
  }

  /**
   * facility_rule.facility
   */
  export type facility_rule$facilityArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the facility
     */
    select?: facilitySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: facilityInclude<ExtArgs> | null
    where?: facilityWhereInput
  }

  /**
   * facility_rule without action
   */
  export type facility_ruleDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the facility_rule
     */
    select?: facility_ruleSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: facility_ruleInclude<ExtArgs> | null
  }


  /**
   * Model order_info
   */

  export type AggregateOrder_info = {
    _count: Order_infoCountAggregateOutputType | null
    _avg: Order_infoAvgAggregateOutputType | null
    _sum: Order_infoSumAggregateOutputType | null
    _min: Order_infoMinAggregateOutputType | null
    _max: Order_infoMaxAggregateOutputType | null
  }

  export type Order_infoAvgAggregateOutputType = {
    order_info_id: number | null
    order_id: number | null
  }

  export type Order_infoSumAggregateOutputType = {
    order_info_id: number | null
    order_id: number | null
  }

  export type Order_infoMinAggregateOutputType = {
    order_info_id: number | null
    order_id: number | null
    customer: string | null
    phone_number: string | null
    address: string | null
    payment_method: string | null
  }

  export type Order_infoMaxAggregateOutputType = {
    order_info_id: number | null
    order_id: number | null
    customer: string | null
    phone_number: string | null
    address: string | null
    payment_method: string | null
  }

  export type Order_infoCountAggregateOutputType = {
    order_info_id: number
    order_id: number
    customer: number
    phone_number: number
    address: number
    payment_method: number
    _all: number
  }


  export type Order_infoAvgAggregateInputType = {
    order_info_id?: true
    order_id?: true
  }

  export type Order_infoSumAggregateInputType = {
    order_info_id?: true
    order_id?: true
  }

  export type Order_infoMinAggregateInputType = {
    order_info_id?: true
    order_id?: true
    customer?: true
    phone_number?: true
    address?: true
    payment_method?: true
  }

  export type Order_infoMaxAggregateInputType = {
    order_info_id?: true
    order_id?: true
    customer?: true
    phone_number?: true
    address?: true
    payment_method?: true
  }

  export type Order_infoCountAggregateInputType = {
    order_info_id?: true
    order_id?: true
    customer?: true
    phone_number?: true
    address?: true
    payment_method?: true
    _all?: true
  }

  export type Order_infoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which order_info to aggregate.
     */
    where?: order_infoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of order_infos to fetch.
     */
    orderBy?: order_infoOrderByWithRelationInput | order_infoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: order_infoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` order_infos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` order_infos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned order_infos
    **/
    _count?: true | Order_infoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Order_infoAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Order_infoSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Order_infoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Order_infoMaxAggregateInputType
  }

  export type GetOrder_infoAggregateType<T extends Order_infoAggregateArgs> = {
        [P in keyof T & keyof AggregateOrder_info]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateOrder_info[P]>
      : GetScalarType<T[P], AggregateOrder_info[P]>
  }




  export type order_infoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: order_infoWhereInput
    orderBy?: order_infoOrderByWithAggregationInput | order_infoOrderByWithAggregationInput[]
    by: Order_infoScalarFieldEnum[] | Order_infoScalarFieldEnum
    having?: order_infoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Order_infoCountAggregateInputType | true
    _avg?: Order_infoAvgAggregateInputType
    _sum?: Order_infoSumAggregateInputType
    _min?: Order_infoMinAggregateInputType
    _max?: Order_infoMaxAggregateInputType
  }

  export type Order_infoGroupByOutputType = {
    order_info_id: number
    order_id: number
    customer: string
    phone_number: string
    address: string
    payment_method: string
    _count: Order_infoCountAggregateOutputType | null
    _avg: Order_infoAvgAggregateOutputType | null
    _sum: Order_infoSumAggregateOutputType | null
    _min: Order_infoMinAggregateOutputType | null
    _max: Order_infoMaxAggregateOutputType | null
  }

  type GetOrder_infoGroupByPayload<T extends order_infoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Order_infoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Order_infoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Order_infoGroupByOutputType[P]>
            : GetScalarType<T[P], Order_infoGroupByOutputType[P]>
        }
      >
    >


  export type order_infoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    order_info_id?: boolean
    order_id?: boolean
    customer?: boolean
    phone_number?: boolean
    address?: boolean
    payment_method?: boolean
    customer_order?: boolean | customer_orderDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["order_info"]>

  export type order_infoSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    order_info_id?: boolean
    order_id?: boolean
    customer?: boolean
    phone_number?: boolean
    address?: boolean
    payment_method?: boolean
    customer_order?: boolean | customer_orderDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["order_info"]>

  export type order_infoSelectScalar = {
    order_info_id?: boolean
    order_id?: boolean
    customer?: boolean
    phone_number?: boolean
    address?: boolean
    payment_method?: boolean
  }

  export type order_infoInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    customer_order?: boolean | customer_orderDefaultArgs<ExtArgs>
  }
  export type order_infoIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    customer_order?: boolean | customer_orderDefaultArgs<ExtArgs>
  }

  export type $order_infoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "order_info"
    objects: {
      customer_order: Prisma.$customer_orderPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      order_info_id: number
      order_id: number
      customer: string
      phone_number: string
      address: string
      payment_method: string
    }, ExtArgs["result"]["order_info"]>
    composites: {}
  }

  type order_infoGetPayload<S extends boolean | null | undefined | order_infoDefaultArgs> = $Result.GetResult<Prisma.$order_infoPayload, S>

  type order_infoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<order_infoFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: Order_infoCountAggregateInputType | true
    }

  export interface order_infoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['order_info'], meta: { name: 'order_info' } }
    /**
     * Find zero or one Order_info that matches the filter.
     * @param {order_infoFindUniqueArgs} args - Arguments to find a Order_info
     * @example
     * // Get one Order_info
     * const order_info = await prisma.order_info.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends order_infoFindUniqueArgs>(args: SelectSubset<T, order_infoFindUniqueArgs<ExtArgs>>): Prisma__order_infoClient<$Result.GetResult<Prisma.$order_infoPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Order_info that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {order_infoFindUniqueOrThrowArgs} args - Arguments to find a Order_info
     * @example
     * // Get one Order_info
     * const order_info = await prisma.order_info.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends order_infoFindUniqueOrThrowArgs>(args: SelectSubset<T, order_infoFindUniqueOrThrowArgs<ExtArgs>>): Prisma__order_infoClient<$Result.GetResult<Prisma.$order_infoPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Order_info that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {order_infoFindFirstArgs} args - Arguments to find a Order_info
     * @example
     * // Get one Order_info
     * const order_info = await prisma.order_info.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends order_infoFindFirstArgs>(args?: SelectSubset<T, order_infoFindFirstArgs<ExtArgs>>): Prisma__order_infoClient<$Result.GetResult<Prisma.$order_infoPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Order_info that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {order_infoFindFirstOrThrowArgs} args - Arguments to find a Order_info
     * @example
     * // Get one Order_info
     * const order_info = await prisma.order_info.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends order_infoFindFirstOrThrowArgs>(args?: SelectSubset<T, order_infoFindFirstOrThrowArgs<ExtArgs>>): Prisma__order_infoClient<$Result.GetResult<Prisma.$order_infoPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Order_infos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {order_infoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Order_infos
     * const order_infos = await prisma.order_info.findMany()
     * 
     * // Get first 10 Order_infos
     * const order_infos = await prisma.order_info.findMany({ take: 10 })
     * 
     * // Only select the `order_info_id`
     * const order_infoWithOrder_info_idOnly = await prisma.order_info.findMany({ select: { order_info_id: true } })
     * 
     */
    findMany<T extends order_infoFindManyArgs>(args?: SelectSubset<T, order_infoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$order_infoPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Order_info.
     * @param {order_infoCreateArgs} args - Arguments to create a Order_info.
     * @example
     * // Create one Order_info
     * const Order_info = await prisma.order_info.create({
     *   data: {
     *     // ... data to create a Order_info
     *   }
     * })
     * 
     */
    create<T extends order_infoCreateArgs>(args: SelectSubset<T, order_infoCreateArgs<ExtArgs>>): Prisma__order_infoClient<$Result.GetResult<Prisma.$order_infoPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Order_infos.
     * @param {order_infoCreateManyArgs} args - Arguments to create many Order_infos.
     * @example
     * // Create many Order_infos
     * const order_info = await prisma.order_info.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends order_infoCreateManyArgs>(args?: SelectSubset<T, order_infoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Order_infos and returns the data saved in the database.
     * @param {order_infoCreateManyAndReturnArgs} args - Arguments to create many Order_infos.
     * @example
     * // Create many Order_infos
     * const order_info = await prisma.order_info.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Order_infos and only return the `order_info_id`
     * const order_infoWithOrder_info_idOnly = await prisma.order_info.createManyAndReturn({ 
     *   select: { order_info_id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends order_infoCreateManyAndReturnArgs>(args?: SelectSubset<T, order_infoCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$order_infoPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Order_info.
     * @param {order_infoDeleteArgs} args - Arguments to delete one Order_info.
     * @example
     * // Delete one Order_info
     * const Order_info = await prisma.order_info.delete({
     *   where: {
     *     // ... filter to delete one Order_info
     *   }
     * })
     * 
     */
    delete<T extends order_infoDeleteArgs>(args: SelectSubset<T, order_infoDeleteArgs<ExtArgs>>): Prisma__order_infoClient<$Result.GetResult<Prisma.$order_infoPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Order_info.
     * @param {order_infoUpdateArgs} args - Arguments to update one Order_info.
     * @example
     * // Update one Order_info
     * const order_info = await prisma.order_info.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends order_infoUpdateArgs>(args: SelectSubset<T, order_infoUpdateArgs<ExtArgs>>): Prisma__order_infoClient<$Result.GetResult<Prisma.$order_infoPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Order_infos.
     * @param {order_infoDeleteManyArgs} args - Arguments to filter Order_infos to delete.
     * @example
     * // Delete a few Order_infos
     * const { count } = await prisma.order_info.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends order_infoDeleteManyArgs>(args?: SelectSubset<T, order_infoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Order_infos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {order_infoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Order_infos
     * const order_info = await prisma.order_info.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends order_infoUpdateManyArgs>(args: SelectSubset<T, order_infoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Order_info.
     * @param {order_infoUpsertArgs} args - Arguments to update or create a Order_info.
     * @example
     * // Update or create a Order_info
     * const order_info = await prisma.order_info.upsert({
     *   create: {
     *     // ... data to create a Order_info
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Order_info we want to update
     *   }
     * })
     */
    upsert<T extends order_infoUpsertArgs>(args: SelectSubset<T, order_infoUpsertArgs<ExtArgs>>): Prisma__order_infoClient<$Result.GetResult<Prisma.$order_infoPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Order_infos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {order_infoCountArgs} args - Arguments to filter Order_infos to count.
     * @example
     * // Count the number of Order_infos
     * const count = await prisma.order_info.count({
     *   where: {
     *     // ... the filter for the Order_infos we want to count
     *   }
     * })
    **/
    count<T extends order_infoCountArgs>(
      args?: Subset<T, order_infoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Order_infoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Order_info.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Order_infoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Order_infoAggregateArgs>(args: Subset<T, Order_infoAggregateArgs>): Prisma.PrismaPromise<GetOrder_infoAggregateType<T>>

    /**
     * Group by Order_info.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {order_infoGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends order_infoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: order_infoGroupByArgs['orderBy'] }
        : { orderBy?: order_infoGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, order_infoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetOrder_infoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the order_info model
   */
  readonly fields: order_infoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for order_info.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__order_infoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    customer_order<T extends customer_orderDefaultArgs<ExtArgs> = {}>(args?: Subset<T, customer_orderDefaultArgs<ExtArgs>>): Prisma__customer_orderClient<$Result.GetResult<Prisma.$customer_orderPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the order_info model
   */ 
  interface order_infoFieldRefs {
    readonly order_info_id: FieldRef<"order_info", 'Int'>
    readonly order_id: FieldRef<"order_info", 'Int'>
    readonly customer: FieldRef<"order_info", 'String'>
    readonly phone_number: FieldRef<"order_info", 'String'>
    readonly address: FieldRef<"order_info", 'String'>
    readonly payment_method: FieldRef<"order_info", 'String'>
  }
    

  // Custom InputTypes
  /**
   * order_info findUnique
   */
  export type order_infoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the order_info
     */
    select?: order_infoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: order_infoInclude<ExtArgs> | null
    /**
     * Filter, which order_info to fetch.
     */
    where: order_infoWhereUniqueInput
  }

  /**
   * order_info findUniqueOrThrow
   */
  export type order_infoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the order_info
     */
    select?: order_infoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: order_infoInclude<ExtArgs> | null
    /**
     * Filter, which order_info to fetch.
     */
    where: order_infoWhereUniqueInput
  }

  /**
   * order_info findFirst
   */
  export type order_infoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the order_info
     */
    select?: order_infoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: order_infoInclude<ExtArgs> | null
    /**
     * Filter, which order_info to fetch.
     */
    where?: order_infoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of order_infos to fetch.
     */
    orderBy?: order_infoOrderByWithRelationInput | order_infoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for order_infos.
     */
    cursor?: order_infoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` order_infos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` order_infos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of order_infos.
     */
    distinct?: Order_infoScalarFieldEnum | Order_infoScalarFieldEnum[]
  }

  /**
   * order_info findFirstOrThrow
   */
  export type order_infoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the order_info
     */
    select?: order_infoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: order_infoInclude<ExtArgs> | null
    /**
     * Filter, which order_info to fetch.
     */
    where?: order_infoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of order_infos to fetch.
     */
    orderBy?: order_infoOrderByWithRelationInput | order_infoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for order_infos.
     */
    cursor?: order_infoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` order_infos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` order_infos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of order_infos.
     */
    distinct?: Order_infoScalarFieldEnum | Order_infoScalarFieldEnum[]
  }

  /**
   * order_info findMany
   */
  export type order_infoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the order_info
     */
    select?: order_infoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: order_infoInclude<ExtArgs> | null
    /**
     * Filter, which order_infos to fetch.
     */
    where?: order_infoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of order_infos to fetch.
     */
    orderBy?: order_infoOrderByWithRelationInput | order_infoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing order_infos.
     */
    cursor?: order_infoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` order_infos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` order_infos.
     */
    skip?: number
    distinct?: Order_infoScalarFieldEnum | Order_infoScalarFieldEnum[]
  }

  /**
   * order_info create
   */
  export type order_infoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the order_info
     */
    select?: order_infoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: order_infoInclude<ExtArgs> | null
    /**
     * The data needed to create a order_info.
     */
    data: XOR<order_infoCreateInput, order_infoUncheckedCreateInput>
  }

  /**
   * order_info createMany
   */
  export type order_infoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many order_infos.
     */
    data: order_infoCreateManyInput | order_infoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * order_info createManyAndReturn
   */
  export type order_infoCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the order_info
     */
    select?: order_infoSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many order_infos.
     */
    data: order_infoCreateManyInput | order_infoCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: order_infoIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * order_info update
   */
  export type order_infoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the order_info
     */
    select?: order_infoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: order_infoInclude<ExtArgs> | null
    /**
     * The data needed to update a order_info.
     */
    data: XOR<order_infoUpdateInput, order_infoUncheckedUpdateInput>
    /**
     * Choose, which order_info to update.
     */
    where: order_infoWhereUniqueInput
  }

  /**
   * order_info updateMany
   */
  export type order_infoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update order_infos.
     */
    data: XOR<order_infoUpdateManyMutationInput, order_infoUncheckedUpdateManyInput>
    /**
     * Filter which order_infos to update
     */
    where?: order_infoWhereInput
  }

  /**
   * order_info upsert
   */
  export type order_infoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the order_info
     */
    select?: order_infoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: order_infoInclude<ExtArgs> | null
    /**
     * The filter to search for the order_info to update in case it exists.
     */
    where: order_infoWhereUniqueInput
    /**
     * In case the order_info found by the `where` argument doesn't exist, create a new order_info with this data.
     */
    create: XOR<order_infoCreateInput, order_infoUncheckedCreateInput>
    /**
     * In case the order_info was found with the provided `where` argument, update it with this data.
     */
    update: XOR<order_infoUpdateInput, order_infoUncheckedUpdateInput>
  }

  /**
   * order_info delete
   */
  export type order_infoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the order_info
     */
    select?: order_infoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: order_infoInclude<ExtArgs> | null
    /**
     * Filter which order_info to delete.
     */
    where: order_infoWhereUniqueInput
  }

  /**
   * order_info deleteMany
   */
  export type order_infoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which order_infos to delete
     */
    where?: order_infoWhereInput
  }

  /**
   * order_info without action
   */
  export type order_infoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the order_info
     */
    select?: order_infoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: order_infoInclude<ExtArgs> | null
  }


  /**
   * Model order_item
   */

  export type AggregateOrder_item = {
    _count: Order_itemCountAggregateOutputType | null
    _avg: Order_itemAvgAggregateOutputType | null
    _sum: Order_itemSumAggregateOutputType | null
    _min: Order_itemMinAggregateOutputType | null
    _max: Order_itemMaxAggregateOutputType | null
  }

  export type Order_itemAvgAggregateOutputType = {
    order_id: number | null
    room_id: number | null
    ticket_id: number | null
    people_count: number | null
    room_count: number | null
    quantity: number | null
  }

  export type Order_itemSumAggregateOutputType = {
    order_id: number | null
    room_id: number | null
    ticket_id: number | null
    people_count: number | null
    room_count: number | null
    quantity: number | null
  }

  export type Order_itemMinAggregateOutputType = {
    order_item_id: string | null
    order_id: number | null
    room_id: number | null
    ticket_id: number | null
    check_in_date: Date | null
    check_out_date: Date | null
    people_count: number | null
    room_count: number | null
    quantity: number | null
    booked_date: Date | null
    valid_date: Date | null
  }

  export type Order_itemMaxAggregateOutputType = {
    order_item_id: string | null
    order_id: number | null
    room_id: number | null
    ticket_id: number | null
    check_in_date: Date | null
    check_out_date: Date | null
    people_count: number | null
    room_count: number | null
    quantity: number | null
    booked_date: Date | null
    valid_date: Date | null
  }

  export type Order_itemCountAggregateOutputType = {
    order_item_id: number
    order_id: number
    room_id: number
    ticket_id: number
    check_in_date: number
    check_out_date: number
    people_count: number
    room_count: number
    quantity: number
    booked_date: number
    valid_date: number
    _all: number
  }


  export type Order_itemAvgAggregateInputType = {
    order_id?: true
    room_id?: true
    ticket_id?: true
    people_count?: true
    room_count?: true
    quantity?: true
  }

  export type Order_itemSumAggregateInputType = {
    order_id?: true
    room_id?: true
    ticket_id?: true
    people_count?: true
    room_count?: true
    quantity?: true
  }

  export type Order_itemMinAggregateInputType = {
    order_item_id?: true
    order_id?: true
    room_id?: true
    ticket_id?: true
    check_in_date?: true
    check_out_date?: true
    people_count?: true
    room_count?: true
    quantity?: true
    booked_date?: true
    valid_date?: true
  }

  export type Order_itemMaxAggregateInputType = {
    order_item_id?: true
    order_id?: true
    room_id?: true
    ticket_id?: true
    check_in_date?: true
    check_out_date?: true
    people_count?: true
    room_count?: true
    quantity?: true
    booked_date?: true
    valid_date?: true
  }

  export type Order_itemCountAggregateInputType = {
    order_item_id?: true
    order_id?: true
    room_id?: true
    ticket_id?: true
    check_in_date?: true
    check_out_date?: true
    people_count?: true
    room_count?: true
    quantity?: true
    booked_date?: true
    valid_date?: true
    _all?: true
  }

  export type Order_itemAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which order_item to aggregate.
     */
    where?: order_itemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of order_items to fetch.
     */
    orderBy?: order_itemOrderByWithRelationInput | order_itemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: order_itemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` order_items from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` order_items.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned order_items
    **/
    _count?: true | Order_itemCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Order_itemAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Order_itemSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Order_itemMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Order_itemMaxAggregateInputType
  }

  export type GetOrder_itemAggregateType<T extends Order_itemAggregateArgs> = {
        [P in keyof T & keyof AggregateOrder_item]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateOrder_item[P]>
      : GetScalarType<T[P], AggregateOrder_item[P]>
  }




  export type order_itemGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: order_itemWhereInput
    orderBy?: order_itemOrderByWithAggregationInput | order_itemOrderByWithAggregationInput[]
    by: Order_itemScalarFieldEnum[] | Order_itemScalarFieldEnum
    having?: order_itemScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Order_itemCountAggregateInputType | true
    _avg?: Order_itemAvgAggregateInputType
    _sum?: Order_itemSumAggregateInputType
    _min?: Order_itemMinAggregateInputType
    _max?: Order_itemMaxAggregateInputType
  }

  export type Order_itemGroupByOutputType = {
    order_item_id: string
    order_id: number
    room_id: number | null
    ticket_id: number | null
    check_in_date: Date | null
    check_out_date: Date | null
    people_count: number | null
    room_count: number | null
    quantity: number
    booked_date: Date | null
    valid_date: Date | null
    _count: Order_itemCountAggregateOutputType | null
    _avg: Order_itemAvgAggregateOutputType | null
    _sum: Order_itemSumAggregateOutputType | null
    _min: Order_itemMinAggregateOutputType | null
    _max: Order_itemMaxAggregateOutputType | null
  }

  type GetOrder_itemGroupByPayload<T extends order_itemGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Order_itemGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Order_itemGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Order_itemGroupByOutputType[P]>
            : GetScalarType<T[P], Order_itemGroupByOutputType[P]>
        }
      >
    >


  export type order_itemSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    order_item_id?: boolean
    order_id?: boolean
    room_id?: boolean
    ticket_id?: boolean
    check_in_date?: boolean
    check_out_date?: boolean
    people_count?: boolean
    room_count?: boolean
    quantity?: boolean
    booked_date?: boolean
    valid_date?: boolean
    customer_order?: boolean | customer_orderDefaultArgs<ExtArgs>
    room?: boolean | order_item$roomArgs<ExtArgs>
    ticket?: boolean | order_item$ticketArgs<ExtArgs>
  }, ExtArgs["result"]["order_item"]>

  export type order_itemSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    order_item_id?: boolean
    order_id?: boolean
    room_id?: boolean
    ticket_id?: boolean
    check_in_date?: boolean
    check_out_date?: boolean
    people_count?: boolean
    room_count?: boolean
    quantity?: boolean
    booked_date?: boolean
    valid_date?: boolean
    customer_order?: boolean | customer_orderDefaultArgs<ExtArgs>
    room?: boolean | order_item$roomArgs<ExtArgs>
    ticket?: boolean | order_item$ticketArgs<ExtArgs>
  }, ExtArgs["result"]["order_item"]>

  export type order_itemSelectScalar = {
    order_item_id?: boolean
    order_id?: boolean
    room_id?: boolean
    ticket_id?: boolean
    check_in_date?: boolean
    check_out_date?: boolean
    people_count?: boolean
    room_count?: boolean
    quantity?: boolean
    booked_date?: boolean
    valid_date?: boolean
  }

  export type order_itemInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    customer_order?: boolean | customer_orderDefaultArgs<ExtArgs>
    room?: boolean | order_item$roomArgs<ExtArgs>
    ticket?: boolean | order_item$ticketArgs<ExtArgs>
  }
  export type order_itemIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    customer_order?: boolean | customer_orderDefaultArgs<ExtArgs>
    room?: boolean | order_item$roomArgs<ExtArgs>
    ticket?: boolean | order_item$ticketArgs<ExtArgs>
  }

  export type $order_itemPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "order_item"
    objects: {
      customer_order: Prisma.$customer_orderPayload<ExtArgs>
      room: Prisma.$roomPayload<ExtArgs> | null
      ticket: Prisma.$ticketPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      order_item_id: string
      order_id: number
      room_id: number | null
      ticket_id: number | null
      check_in_date: Date | null
      check_out_date: Date | null
      people_count: number | null
      room_count: number | null
      quantity: number
      booked_date: Date | null
      valid_date: Date | null
    }, ExtArgs["result"]["order_item"]>
    composites: {}
  }

  type order_itemGetPayload<S extends boolean | null | undefined | order_itemDefaultArgs> = $Result.GetResult<Prisma.$order_itemPayload, S>

  type order_itemCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<order_itemFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: Order_itemCountAggregateInputType | true
    }

  export interface order_itemDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['order_item'], meta: { name: 'order_item' } }
    /**
     * Find zero or one Order_item that matches the filter.
     * @param {order_itemFindUniqueArgs} args - Arguments to find a Order_item
     * @example
     * // Get one Order_item
     * const order_item = await prisma.order_item.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends order_itemFindUniqueArgs>(args: SelectSubset<T, order_itemFindUniqueArgs<ExtArgs>>): Prisma__order_itemClient<$Result.GetResult<Prisma.$order_itemPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Order_item that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {order_itemFindUniqueOrThrowArgs} args - Arguments to find a Order_item
     * @example
     * // Get one Order_item
     * const order_item = await prisma.order_item.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends order_itemFindUniqueOrThrowArgs>(args: SelectSubset<T, order_itemFindUniqueOrThrowArgs<ExtArgs>>): Prisma__order_itemClient<$Result.GetResult<Prisma.$order_itemPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Order_item that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {order_itemFindFirstArgs} args - Arguments to find a Order_item
     * @example
     * // Get one Order_item
     * const order_item = await prisma.order_item.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends order_itemFindFirstArgs>(args?: SelectSubset<T, order_itemFindFirstArgs<ExtArgs>>): Prisma__order_itemClient<$Result.GetResult<Prisma.$order_itemPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Order_item that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {order_itemFindFirstOrThrowArgs} args - Arguments to find a Order_item
     * @example
     * // Get one Order_item
     * const order_item = await prisma.order_item.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends order_itemFindFirstOrThrowArgs>(args?: SelectSubset<T, order_itemFindFirstOrThrowArgs<ExtArgs>>): Prisma__order_itemClient<$Result.GetResult<Prisma.$order_itemPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Order_items that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {order_itemFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Order_items
     * const order_items = await prisma.order_item.findMany()
     * 
     * // Get first 10 Order_items
     * const order_items = await prisma.order_item.findMany({ take: 10 })
     * 
     * // Only select the `order_item_id`
     * const order_itemWithOrder_item_idOnly = await prisma.order_item.findMany({ select: { order_item_id: true } })
     * 
     */
    findMany<T extends order_itemFindManyArgs>(args?: SelectSubset<T, order_itemFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$order_itemPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Order_item.
     * @param {order_itemCreateArgs} args - Arguments to create a Order_item.
     * @example
     * // Create one Order_item
     * const Order_item = await prisma.order_item.create({
     *   data: {
     *     // ... data to create a Order_item
     *   }
     * })
     * 
     */
    create<T extends order_itemCreateArgs>(args: SelectSubset<T, order_itemCreateArgs<ExtArgs>>): Prisma__order_itemClient<$Result.GetResult<Prisma.$order_itemPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Order_items.
     * @param {order_itemCreateManyArgs} args - Arguments to create many Order_items.
     * @example
     * // Create many Order_items
     * const order_item = await prisma.order_item.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends order_itemCreateManyArgs>(args?: SelectSubset<T, order_itemCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Order_items and returns the data saved in the database.
     * @param {order_itemCreateManyAndReturnArgs} args - Arguments to create many Order_items.
     * @example
     * // Create many Order_items
     * const order_item = await prisma.order_item.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Order_items and only return the `order_item_id`
     * const order_itemWithOrder_item_idOnly = await prisma.order_item.createManyAndReturn({ 
     *   select: { order_item_id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends order_itemCreateManyAndReturnArgs>(args?: SelectSubset<T, order_itemCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$order_itemPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Order_item.
     * @param {order_itemDeleteArgs} args - Arguments to delete one Order_item.
     * @example
     * // Delete one Order_item
     * const Order_item = await prisma.order_item.delete({
     *   where: {
     *     // ... filter to delete one Order_item
     *   }
     * })
     * 
     */
    delete<T extends order_itemDeleteArgs>(args: SelectSubset<T, order_itemDeleteArgs<ExtArgs>>): Prisma__order_itemClient<$Result.GetResult<Prisma.$order_itemPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Order_item.
     * @param {order_itemUpdateArgs} args - Arguments to update one Order_item.
     * @example
     * // Update one Order_item
     * const order_item = await prisma.order_item.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends order_itemUpdateArgs>(args: SelectSubset<T, order_itemUpdateArgs<ExtArgs>>): Prisma__order_itemClient<$Result.GetResult<Prisma.$order_itemPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Order_items.
     * @param {order_itemDeleteManyArgs} args - Arguments to filter Order_items to delete.
     * @example
     * // Delete a few Order_items
     * const { count } = await prisma.order_item.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends order_itemDeleteManyArgs>(args?: SelectSubset<T, order_itemDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Order_items.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {order_itemUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Order_items
     * const order_item = await prisma.order_item.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends order_itemUpdateManyArgs>(args: SelectSubset<T, order_itemUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Order_item.
     * @param {order_itemUpsertArgs} args - Arguments to update or create a Order_item.
     * @example
     * // Update or create a Order_item
     * const order_item = await prisma.order_item.upsert({
     *   create: {
     *     // ... data to create a Order_item
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Order_item we want to update
     *   }
     * })
     */
    upsert<T extends order_itemUpsertArgs>(args: SelectSubset<T, order_itemUpsertArgs<ExtArgs>>): Prisma__order_itemClient<$Result.GetResult<Prisma.$order_itemPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Order_items.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {order_itemCountArgs} args - Arguments to filter Order_items to count.
     * @example
     * // Count the number of Order_items
     * const count = await prisma.order_item.count({
     *   where: {
     *     // ... the filter for the Order_items we want to count
     *   }
     * })
    **/
    count<T extends order_itemCountArgs>(
      args?: Subset<T, order_itemCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Order_itemCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Order_item.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Order_itemAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Order_itemAggregateArgs>(args: Subset<T, Order_itemAggregateArgs>): Prisma.PrismaPromise<GetOrder_itemAggregateType<T>>

    /**
     * Group by Order_item.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {order_itemGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends order_itemGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: order_itemGroupByArgs['orderBy'] }
        : { orderBy?: order_itemGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, order_itemGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetOrder_itemGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the order_item model
   */
  readonly fields: order_itemFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for order_item.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__order_itemClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    customer_order<T extends customer_orderDefaultArgs<ExtArgs> = {}>(args?: Subset<T, customer_orderDefaultArgs<ExtArgs>>): Prisma__customer_orderClient<$Result.GetResult<Prisma.$customer_orderPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    room<T extends order_item$roomArgs<ExtArgs> = {}>(args?: Subset<T, order_item$roomArgs<ExtArgs>>): Prisma__roomClient<$Result.GetResult<Prisma.$roomPayload<ExtArgs>, T, "findUniqueOrThrow"> | null, null, ExtArgs>
    ticket<T extends order_item$ticketArgs<ExtArgs> = {}>(args?: Subset<T, order_item$ticketArgs<ExtArgs>>): Prisma__ticketClient<$Result.GetResult<Prisma.$ticketPayload<ExtArgs>, T, "findUniqueOrThrow"> | null, null, ExtArgs>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the order_item model
   */ 
  interface order_itemFieldRefs {
    readonly order_item_id: FieldRef<"order_item", 'String'>
    readonly order_id: FieldRef<"order_item", 'Int'>
    readonly room_id: FieldRef<"order_item", 'Int'>
    readonly ticket_id: FieldRef<"order_item", 'Int'>
    readonly check_in_date: FieldRef<"order_item", 'DateTime'>
    readonly check_out_date: FieldRef<"order_item", 'DateTime'>
    readonly people_count: FieldRef<"order_item", 'Int'>
    readonly room_count: FieldRef<"order_item", 'Int'>
    readonly quantity: FieldRef<"order_item", 'Int'>
    readonly booked_date: FieldRef<"order_item", 'DateTime'>
    readonly valid_date: FieldRef<"order_item", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * order_item findUnique
   */
  export type order_itemFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the order_item
     */
    select?: order_itemSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: order_itemInclude<ExtArgs> | null
    /**
     * Filter, which order_item to fetch.
     */
    where: order_itemWhereUniqueInput
  }

  /**
   * order_item findUniqueOrThrow
   */
  export type order_itemFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the order_item
     */
    select?: order_itemSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: order_itemInclude<ExtArgs> | null
    /**
     * Filter, which order_item to fetch.
     */
    where: order_itemWhereUniqueInput
  }

  /**
   * order_item findFirst
   */
  export type order_itemFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the order_item
     */
    select?: order_itemSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: order_itemInclude<ExtArgs> | null
    /**
     * Filter, which order_item to fetch.
     */
    where?: order_itemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of order_items to fetch.
     */
    orderBy?: order_itemOrderByWithRelationInput | order_itemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for order_items.
     */
    cursor?: order_itemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` order_items from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` order_items.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of order_items.
     */
    distinct?: Order_itemScalarFieldEnum | Order_itemScalarFieldEnum[]
  }

  /**
   * order_item findFirstOrThrow
   */
  export type order_itemFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the order_item
     */
    select?: order_itemSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: order_itemInclude<ExtArgs> | null
    /**
     * Filter, which order_item to fetch.
     */
    where?: order_itemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of order_items to fetch.
     */
    orderBy?: order_itemOrderByWithRelationInput | order_itemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for order_items.
     */
    cursor?: order_itemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` order_items from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` order_items.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of order_items.
     */
    distinct?: Order_itemScalarFieldEnum | Order_itemScalarFieldEnum[]
  }

  /**
   * order_item findMany
   */
  export type order_itemFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the order_item
     */
    select?: order_itemSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: order_itemInclude<ExtArgs> | null
    /**
     * Filter, which order_items to fetch.
     */
    where?: order_itemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of order_items to fetch.
     */
    orderBy?: order_itemOrderByWithRelationInput | order_itemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing order_items.
     */
    cursor?: order_itemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` order_items from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` order_items.
     */
    skip?: number
    distinct?: Order_itemScalarFieldEnum | Order_itemScalarFieldEnum[]
  }

  /**
   * order_item create
   */
  export type order_itemCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the order_item
     */
    select?: order_itemSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: order_itemInclude<ExtArgs> | null
    /**
     * The data needed to create a order_item.
     */
    data: XOR<order_itemCreateInput, order_itemUncheckedCreateInput>
  }

  /**
   * order_item createMany
   */
  export type order_itemCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many order_items.
     */
    data: order_itemCreateManyInput | order_itemCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * order_item createManyAndReturn
   */
  export type order_itemCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the order_item
     */
    select?: order_itemSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many order_items.
     */
    data: order_itemCreateManyInput | order_itemCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: order_itemIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * order_item update
   */
  export type order_itemUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the order_item
     */
    select?: order_itemSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: order_itemInclude<ExtArgs> | null
    /**
     * The data needed to update a order_item.
     */
    data: XOR<order_itemUpdateInput, order_itemUncheckedUpdateInput>
    /**
     * Choose, which order_item to update.
     */
    where: order_itemWhereUniqueInput
  }

  /**
   * order_item updateMany
   */
  export type order_itemUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update order_items.
     */
    data: XOR<order_itemUpdateManyMutationInput, order_itemUncheckedUpdateManyInput>
    /**
     * Filter which order_items to update
     */
    where?: order_itemWhereInput
  }

  /**
   * order_item upsert
   */
  export type order_itemUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the order_item
     */
    select?: order_itemSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: order_itemInclude<ExtArgs> | null
    /**
     * The filter to search for the order_item to update in case it exists.
     */
    where: order_itemWhereUniqueInput
    /**
     * In case the order_item found by the `where` argument doesn't exist, create a new order_item with this data.
     */
    create: XOR<order_itemCreateInput, order_itemUncheckedCreateInput>
    /**
     * In case the order_item was found with the provided `where` argument, update it with this data.
     */
    update: XOR<order_itemUpdateInput, order_itemUncheckedUpdateInput>
  }

  /**
   * order_item delete
   */
  export type order_itemDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the order_item
     */
    select?: order_itemSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: order_itemInclude<ExtArgs> | null
    /**
     * Filter which order_item to delete.
     */
    where: order_itemWhereUniqueInput
  }

  /**
   * order_item deleteMany
   */
  export type order_itemDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which order_items to delete
     */
    where?: order_itemWhereInput
  }

  /**
   * order_item.room
   */
  export type order_item$roomArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the room
     */
    select?: roomSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: roomInclude<ExtArgs> | null
    where?: roomWhereInput
  }

  /**
   * order_item.ticket
   */
  export type order_item$ticketArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ticket
     */
    select?: ticketSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ticketInclude<ExtArgs> | null
    where?: ticketWhereInput
  }

  /**
   * order_item without action
   */
  export type order_itemDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the order_item
     */
    select?: order_itemSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: order_itemInclude<ExtArgs> | null
  }


  /**
   * Model room
   */

  export type AggregateRoom = {
    _count: RoomCountAggregateOutputType | null
    _avg: RoomAvgAggregateOutputType | null
    _sum: RoomSumAggregateOutputType | null
    _min: RoomMinAggregateOutputType | null
    _max: RoomMaxAggregateOutputType | null
  }

  export type RoomAvgAggregateOutputType = {
    room_id: number | null
    room_count: number | null
    price: number | null
    capacity: number | null
  }

  export type RoomSumAggregateOutputType = {
    room_id: number | null
    room_count: number | null
    price: number | null
    capacity: number | null
  }

  export type RoomMinAggregateOutputType = {
    room_id: number | null
    room_type: string | null
    room_count: number | null
    description: string | null
    price: number | null
    capacity: number | null
  }

  export type RoomMaxAggregateOutputType = {
    room_id: number | null
    room_type: string | null
    room_count: number | null
    description: string | null
    price: number | null
    capacity: number | null
  }

  export type RoomCountAggregateOutputType = {
    room_id: number
    room_type: number
    room_count: number
    description: number
    price: number
    capacity: number
    img: number
    _all: number
  }


  export type RoomAvgAggregateInputType = {
    room_id?: true
    room_count?: true
    price?: true
    capacity?: true
  }

  export type RoomSumAggregateInputType = {
    room_id?: true
    room_count?: true
    price?: true
    capacity?: true
  }

  export type RoomMinAggregateInputType = {
    room_id?: true
    room_type?: true
    room_count?: true
    description?: true
    price?: true
    capacity?: true
  }

  export type RoomMaxAggregateInputType = {
    room_id?: true
    room_type?: true
    room_count?: true
    description?: true
    price?: true
    capacity?: true
  }

  export type RoomCountAggregateInputType = {
    room_id?: true
    room_type?: true
    room_count?: true
    description?: true
    price?: true
    capacity?: true
    img?: true
    _all?: true
  }

  export type RoomAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which room to aggregate.
     */
    where?: roomWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of rooms to fetch.
     */
    orderBy?: roomOrderByWithRelationInput | roomOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: roomWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` rooms from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` rooms.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned rooms
    **/
    _count?: true | RoomCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: RoomAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: RoomSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RoomMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RoomMaxAggregateInputType
  }

  export type GetRoomAggregateType<T extends RoomAggregateArgs> = {
        [P in keyof T & keyof AggregateRoom]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRoom[P]>
      : GetScalarType<T[P], AggregateRoom[P]>
  }




  export type roomGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: roomWhereInput
    orderBy?: roomOrderByWithAggregationInput | roomOrderByWithAggregationInput[]
    by: RoomScalarFieldEnum[] | RoomScalarFieldEnum
    having?: roomScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RoomCountAggregateInputType | true
    _avg?: RoomAvgAggregateInputType
    _sum?: RoomSumAggregateInputType
    _min?: RoomMinAggregateInputType
    _max?: RoomMaxAggregateInputType
  }

  export type RoomGroupByOutputType = {
    room_id: number
    room_type: string
    room_count: number
    description: string | null
    price: number
    capacity: number
    img: JsonValue | null
    _count: RoomCountAggregateOutputType | null
    _avg: RoomAvgAggregateOutputType | null
    _sum: RoomSumAggregateOutputType | null
    _min: RoomMinAggregateOutputType | null
    _max: RoomMaxAggregateOutputType | null
  }

  type GetRoomGroupByPayload<T extends roomGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RoomGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RoomGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RoomGroupByOutputType[P]>
            : GetScalarType<T[P], RoomGroupByOutputType[P]>
        }
      >
    >


  export type roomSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    room_id?: boolean
    room_type?: boolean
    room_count?: boolean
    description?: boolean
    price?: boolean
    capacity?: boolean
    img?: boolean
    order_item?: boolean | room$order_itemArgs<ExtArgs>
    _count?: boolean | RoomCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["room"]>

  export type roomSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    room_id?: boolean
    room_type?: boolean
    room_count?: boolean
    description?: boolean
    price?: boolean
    capacity?: boolean
    img?: boolean
  }, ExtArgs["result"]["room"]>

  export type roomSelectScalar = {
    room_id?: boolean
    room_type?: boolean
    room_count?: boolean
    description?: boolean
    price?: boolean
    capacity?: boolean
    img?: boolean
  }

  export type roomInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    order_item?: boolean | room$order_itemArgs<ExtArgs>
    _count?: boolean | RoomCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type roomIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $roomPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "room"
    objects: {
      order_item: Prisma.$order_itemPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      room_id: number
      room_type: string
      room_count: number
      description: string | null
      price: number
      capacity: number
      img: Prisma.JsonValue | null
    }, ExtArgs["result"]["room"]>
    composites: {}
  }

  type roomGetPayload<S extends boolean | null | undefined | roomDefaultArgs> = $Result.GetResult<Prisma.$roomPayload, S>

  type roomCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<roomFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: RoomCountAggregateInputType | true
    }

  export interface roomDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['room'], meta: { name: 'room' } }
    /**
     * Find zero or one Room that matches the filter.
     * @param {roomFindUniqueArgs} args - Arguments to find a Room
     * @example
     * // Get one Room
     * const room = await prisma.room.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends roomFindUniqueArgs>(args: SelectSubset<T, roomFindUniqueArgs<ExtArgs>>): Prisma__roomClient<$Result.GetResult<Prisma.$roomPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Room that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {roomFindUniqueOrThrowArgs} args - Arguments to find a Room
     * @example
     * // Get one Room
     * const room = await prisma.room.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends roomFindUniqueOrThrowArgs>(args: SelectSubset<T, roomFindUniqueOrThrowArgs<ExtArgs>>): Prisma__roomClient<$Result.GetResult<Prisma.$roomPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Room that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {roomFindFirstArgs} args - Arguments to find a Room
     * @example
     * // Get one Room
     * const room = await prisma.room.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends roomFindFirstArgs>(args?: SelectSubset<T, roomFindFirstArgs<ExtArgs>>): Prisma__roomClient<$Result.GetResult<Prisma.$roomPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Room that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {roomFindFirstOrThrowArgs} args - Arguments to find a Room
     * @example
     * // Get one Room
     * const room = await prisma.room.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends roomFindFirstOrThrowArgs>(args?: SelectSubset<T, roomFindFirstOrThrowArgs<ExtArgs>>): Prisma__roomClient<$Result.GetResult<Prisma.$roomPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Rooms that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {roomFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Rooms
     * const rooms = await prisma.room.findMany()
     * 
     * // Get first 10 Rooms
     * const rooms = await prisma.room.findMany({ take: 10 })
     * 
     * // Only select the `room_id`
     * const roomWithRoom_idOnly = await prisma.room.findMany({ select: { room_id: true } })
     * 
     */
    findMany<T extends roomFindManyArgs>(args?: SelectSubset<T, roomFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$roomPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Room.
     * @param {roomCreateArgs} args - Arguments to create a Room.
     * @example
     * // Create one Room
     * const Room = await prisma.room.create({
     *   data: {
     *     // ... data to create a Room
     *   }
     * })
     * 
     */
    create<T extends roomCreateArgs>(args: SelectSubset<T, roomCreateArgs<ExtArgs>>): Prisma__roomClient<$Result.GetResult<Prisma.$roomPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Rooms.
     * @param {roomCreateManyArgs} args - Arguments to create many Rooms.
     * @example
     * // Create many Rooms
     * const room = await prisma.room.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends roomCreateManyArgs>(args?: SelectSubset<T, roomCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Rooms and returns the data saved in the database.
     * @param {roomCreateManyAndReturnArgs} args - Arguments to create many Rooms.
     * @example
     * // Create many Rooms
     * const room = await prisma.room.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Rooms and only return the `room_id`
     * const roomWithRoom_idOnly = await prisma.room.createManyAndReturn({ 
     *   select: { room_id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends roomCreateManyAndReturnArgs>(args?: SelectSubset<T, roomCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$roomPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Room.
     * @param {roomDeleteArgs} args - Arguments to delete one Room.
     * @example
     * // Delete one Room
     * const Room = await prisma.room.delete({
     *   where: {
     *     // ... filter to delete one Room
     *   }
     * })
     * 
     */
    delete<T extends roomDeleteArgs>(args: SelectSubset<T, roomDeleteArgs<ExtArgs>>): Prisma__roomClient<$Result.GetResult<Prisma.$roomPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Room.
     * @param {roomUpdateArgs} args - Arguments to update one Room.
     * @example
     * // Update one Room
     * const room = await prisma.room.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends roomUpdateArgs>(args: SelectSubset<T, roomUpdateArgs<ExtArgs>>): Prisma__roomClient<$Result.GetResult<Prisma.$roomPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Rooms.
     * @param {roomDeleteManyArgs} args - Arguments to filter Rooms to delete.
     * @example
     * // Delete a few Rooms
     * const { count } = await prisma.room.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends roomDeleteManyArgs>(args?: SelectSubset<T, roomDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Rooms.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {roomUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Rooms
     * const room = await prisma.room.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends roomUpdateManyArgs>(args: SelectSubset<T, roomUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Room.
     * @param {roomUpsertArgs} args - Arguments to update or create a Room.
     * @example
     * // Update or create a Room
     * const room = await prisma.room.upsert({
     *   create: {
     *     // ... data to create a Room
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Room we want to update
     *   }
     * })
     */
    upsert<T extends roomUpsertArgs>(args: SelectSubset<T, roomUpsertArgs<ExtArgs>>): Prisma__roomClient<$Result.GetResult<Prisma.$roomPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Rooms.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {roomCountArgs} args - Arguments to filter Rooms to count.
     * @example
     * // Count the number of Rooms
     * const count = await prisma.room.count({
     *   where: {
     *     // ... the filter for the Rooms we want to count
     *   }
     * })
    **/
    count<T extends roomCountArgs>(
      args?: Subset<T, roomCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RoomCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Room.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoomAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends RoomAggregateArgs>(args: Subset<T, RoomAggregateArgs>): Prisma.PrismaPromise<GetRoomAggregateType<T>>

    /**
     * Group by Room.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {roomGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends roomGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: roomGroupByArgs['orderBy'] }
        : { orderBy?: roomGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, roomGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRoomGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the room model
   */
  readonly fields: roomFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for room.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__roomClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    order_item<T extends room$order_itemArgs<ExtArgs> = {}>(args?: Subset<T, room$order_itemArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$order_itemPayload<ExtArgs>, T, "findMany"> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the room model
   */ 
  interface roomFieldRefs {
    readonly room_id: FieldRef<"room", 'Int'>
    readonly room_type: FieldRef<"room", 'String'>
    readonly room_count: FieldRef<"room", 'Int'>
    readonly description: FieldRef<"room", 'String'>
    readonly price: FieldRef<"room", 'Int'>
    readonly capacity: FieldRef<"room", 'Int'>
    readonly img: FieldRef<"room", 'Json'>
  }
    

  // Custom InputTypes
  /**
   * room findUnique
   */
  export type roomFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the room
     */
    select?: roomSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: roomInclude<ExtArgs> | null
    /**
     * Filter, which room to fetch.
     */
    where: roomWhereUniqueInput
  }

  /**
   * room findUniqueOrThrow
   */
  export type roomFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the room
     */
    select?: roomSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: roomInclude<ExtArgs> | null
    /**
     * Filter, which room to fetch.
     */
    where: roomWhereUniqueInput
  }

  /**
   * room findFirst
   */
  export type roomFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the room
     */
    select?: roomSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: roomInclude<ExtArgs> | null
    /**
     * Filter, which room to fetch.
     */
    where?: roomWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of rooms to fetch.
     */
    orderBy?: roomOrderByWithRelationInput | roomOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for rooms.
     */
    cursor?: roomWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` rooms from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` rooms.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of rooms.
     */
    distinct?: RoomScalarFieldEnum | RoomScalarFieldEnum[]
  }

  /**
   * room findFirstOrThrow
   */
  export type roomFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the room
     */
    select?: roomSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: roomInclude<ExtArgs> | null
    /**
     * Filter, which room to fetch.
     */
    where?: roomWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of rooms to fetch.
     */
    orderBy?: roomOrderByWithRelationInput | roomOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for rooms.
     */
    cursor?: roomWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` rooms from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` rooms.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of rooms.
     */
    distinct?: RoomScalarFieldEnum | RoomScalarFieldEnum[]
  }

  /**
   * room findMany
   */
  export type roomFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the room
     */
    select?: roomSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: roomInclude<ExtArgs> | null
    /**
     * Filter, which rooms to fetch.
     */
    where?: roomWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of rooms to fetch.
     */
    orderBy?: roomOrderByWithRelationInput | roomOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing rooms.
     */
    cursor?: roomWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` rooms from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` rooms.
     */
    skip?: number
    distinct?: RoomScalarFieldEnum | RoomScalarFieldEnum[]
  }

  /**
   * room create
   */
  export type roomCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the room
     */
    select?: roomSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: roomInclude<ExtArgs> | null
    /**
     * The data needed to create a room.
     */
    data: XOR<roomCreateInput, roomUncheckedCreateInput>
  }

  /**
   * room createMany
   */
  export type roomCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many rooms.
     */
    data: roomCreateManyInput | roomCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * room createManyAndReturn
   */
  export type roomCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the room
     */
    select?: roomSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many rooms.
     */
    data: roomCreateManyInput | roomCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * room update
   */
  export type roomUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the room
     */
    select?: roomSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: roomInclude<ExtArgs> | null
    /**
     * The data needed to update a room.
     */
    data: XOR<roomUpdateInput, roomUncheckedUpdateInput>
    /**
     * Choose, which room to update.
     */
    where: roomWhereUniqueInput
  }

  /**
   * room updateMany
   */
  export type roomUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update rooms.
     */
    data: XOR<roomUpdateManyMutationInput, roomUncheckedUpdateManyInput>
    /**
     * Filter which rooms to update
     */
    where?: roomWhereInput
  }

  /**
   * room upsert
   */
  export type roomUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the room
     */
    select?: roomSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: roomInclude<ExtArgs> | null
    /**
     * The filter to search for the room to update in case it exists.
     */
    where: roomWhereUniqueInput
    /**
     * In case the room found by the `where` argument doesn't exist, create a new room with this data.
     */
    create: XOR<roomCreateInput, roomUncheckedCreateInput>
    /**
     * In case the room was found with the provided `where` argument, update it with this data.
     */
    update: XOR<roomUpdateInput, roomUncheckedUpdateInput>
  }

  /**
   * room delete
   */
  export type roomDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the room
     */
    select?: roomSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: roomInclude<ExtArgs> | null
    /**
     * Filter which room to delete.
     */
    where: roomWhereUniqueInput
  }

  /**
   * room deleteMany
   */
  export type roomDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which rooms to delete
     */
    where?: roomWhereInput
  }

  /**
   * room.order_item
   */
  export type room$order_itemArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the order_item
     */
    select?: order_itemSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: order_itemInclude<ExtArgs> | null
    where?: order_itemWhereInput
    orderBy?: order_itemOrderByWithRelationInput | order_itemOrderByWithRelationInput[]
    cursor?: order_itemWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Order_itemScalarFieldEnum | Order_itemScalarFieldEnum[]
  }

  /**
   * room without action
   */
  export type roomDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the room
     */
    select?: roomSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: roomInclude<ExtArgs> | null
  }


  /**
   * Model ticket
   */

  export type AggregateTicket = {
    _count: TicketCountAggregateOutputType | null
    _avg: TicketAvgAggregateOutputType | null
    _sum: TicketSumAggregateOutputType | null
    _min: TicketMinAggregateOutputType | null
    _max: TicketMaxAggregateOutputType | null
  }

  export type TicketAvgAggregateOutputType = {
    ticket_id: number | null
    price: number | null
  }

  export type TicketSumAggregateOutputType = {
    ticket_id: number | null
    price: number | null
  }

  export type TicketMinAggregateOutputType = {
    ticket_id: number | null
    type: string | null
    price: number | null
  }

  export type TicketMaxAggregateOutputType = {
    ticket_id: number | null
    type: string | null
    price: number | null
  }

  export type TicketCountAggregateOutputType = {
    ticket_id: number
    type: number
    price: number
    img: number
    _all: number
  }


  export type TicketAvgAggregateInputType = {
    ticket_id?: true
    price?: true
  }

  export type TicketSumAggregateInputType = {
    ticket_id?: true
    price?: true
  }

  export type TicketMinAggregateInputType = {
    ticket_id?: true
    type?: true
    price?: true
  }

  export type TicketMaxAggregateInputType = {
    ticket_id?: true
    type?: true
    price?: true
  }

  export type TicketCountAggregateInputType = {
    ticket_id?: true
    type?: true
    price?: true
    img?: true
    _all?: true
  }

  export type TicketAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ticket to aggregate.
     */
    where?: ticketWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tickets to fetch.
     */
    orderBy?: ticketOrderByWithRelationInput | ticketOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ticketWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tickets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tickets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned tickets
    **/
    _count?: true | TicketCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TicketAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TicketSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TicketMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TicketMaxAggregateInputType
  }

  export type GetTicketAggregateType<T extends TicketAggregateArgs> = {
        [P in keyof T & keyof AggregateTicket]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTicket[P]>
      : GetScalarType<T[P], AggregateTicket[P]>
  }




  export type ticketGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ticketWhereInput
    orderBy?: ticketOrderByWithAggregationInput | ticketOrderByWithAggregationInput[]
    by: TicketScalarFieldEnum[] | TicketScalarFieldEnum
    having?: ticketScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TicketCountAggregateInputType | true
    _avg?: TicketAvgAggregateInputType
    _sum?: TicketSumAggregateInputType
    _min?: TicketMinAggregateInputType
    _max?: TicketMaxAggregateInputType
  }

  export type TicketGroupByOutputType = {
    ticket_id: number
    type: string
    price: number
    img: JsonValue | null
    _count: TicketCountAggregateOutputType | null
    _avg: TicketAvgAggregateOutputType | null
    _sum: TicketSumAggregateOutputType | null
    _min: TicketMinAggregateOutputType | null
    _max: TicketMaxAggregateOutputType | null
  }

  type GetTicketGroupByPayload<T extends ticketGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TicketGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TicketGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TicketGroupByOutputType[P]>
            : GetScalarType<T[P], TicketGroupByOutputType[P]>
        }
      >
    >


  export type ticketSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    ticket_id?: boolean
    type?: boolean
    price?: boolean
    img?: boolean
    order_item?: boolean | ticket$order_itemArgs<ExtArgs>
    _count?: boolean | TicketCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["ticket"]>

  export type ticketSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    ticket_id?: boolean
    type?: boolean
    price?: boolean
    img?: boolean
  }, ExtArgs["result"]["ticket"]>

  export type ticketSelectScalar = {
    ticket_id?: boolean
    type?: boolean
    price?: boolean
    img?: boolean
  }

  export type ticketInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    order_item?: boolean | ticket$order_itemArgs<ExtArgs>
    _count?: boolean | TicketCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ticketIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $ticketPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ticket"
    objects: {
      order_item: Prisma.$order_itemPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      ticket_id: number
      type: string
      price: number
      img: Prisma.JsonValue | null
    }, ExtArgs["result"]["ticket"]>
    composites: {}
  }

  type ticketGetPayload<S extends boolean | null | undefined | ticketDefaultArgs> = $Result.GetResult<Prisma.$ticketPayload, S>

  type ticketCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<ticketFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: TicketCountAggregateInputType | true
    }

  export interface ticketDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ticket'], meta: { name: 'ticket' } }
    /**
     * Find zero or one Ticket that matches the filter.
     * @param {ticketFindUniqueArgs} args - Arguments to find a Ticket
     * @example
     * // Get one Ticket
     * const ticket = await prisma.ticket.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ticketFindUniqueArgs>(args: SelectSubset<T, ticketFindUniqueArgs<ExtArgs>>): Prisma__ticketClient<$Result.GetResult<Prisma.$ticketPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Ticket that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {ticketFindUniqueOrThrowArgs} args - Arguments to find a Ticket
     * @example
     * // Get one Ticket
     * const ticket = await prisma.ticket.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ticketFindUniqueOrThrowArgs>(args: SelectSubset<T, ticketFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ticketClient<$Result.GetResult<Prisma.$ticketPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Ticket that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ticketFindFirstArgs} args - Arguments to find a Ticket
     * @example
     * // Get one Ticket
     * const ticket = await prisma.ticket.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ticketFindFirstArgs>(args?: SelectSubset<T, ticketFindFirstArgs<ExtArgs>>): Prisma__ticketClient<$Result.GetResult<Prisma.$ticketPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Ticket that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ticketFindFirstOrThrowArgs} args - Arguments to find a Ticket
     * @example
     * // Get one Ticket
     * const ticket = await prisma.ticket.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ticketFindFirstOrThrowArgs>(args?: SelectSubset<T, ticketFindFirstOrThrowArgs<ExtArgs>>): Prisma__ticketClient<$Result.GetResult<Prisma.$ticketPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Tickets that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ticketFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Tickets
     * const tickets = await prisma.ticket.findMany()
     * 
     * // Get first 10 Tickets
     * const tickets = await prisma.ticket.findMany({ take: 10 })
     * 
     * // Only select the `ticket_id`
     * const ticketWithTicket_idOnly = await prisma.ticket.findMany({ select: { ticket_id: true } })
     * 
     */
    findMany<T extends ticketFindManyArgs>(args?: SelectSubset<T, ticketFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ticketPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Ticket.
     * @param {ticketCreateArgs} args - Arguments to create a Ticket.
     * @example
     * // Create one Ticket
     * const Ticket = await prisma.ticket.create({
     *   data: {
     *     // ... data to create a Ticket
     *   }
     * })
     * 
     */
    create<T extends ticketCreateArgs>(args: SelectSubset<T, ticketCreateArgs<ExtArgs>>): Prisma__ticketClient<$Result.GetResult<Prisma.$ticketPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Tickets.
     * @param {ticketCreateManyArgs} args - Arguments to create many Tickets.
     * @example
     * // Create many Tickets
     * const ticket = await prisma.ticket.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ticketCreateManyArgs>(args?: SelectSubset<T, ticketCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Tickets and returns the data saved in the database.
     * @param {ticketCreateManyAndReturnArgs} args - Arguments to create many Tickets.
     * @example
     * // Create many Tickets
     * const ticket = await prisma.ticket.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Tickets and only return the `ticket_id`
     * const ticketWithTicket_idOnly = await prisma.ticket.createManyAndReturn({ 
     *   select: { ticket_id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ticketCreateManyAndReturnArgs>(args?: SelectSubset<T, ticketCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ticketPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Ticket.
     * @param {ticketDeleteArgs} args - Arguments to delete one Ticket.
     * @example
     * // Delete one Ticket
     * const Ticket = await prisma.ticket.delete({
     *   where: {
     *     // ... filter to delete one Ticket
     *   }
     * })
     * 
     */
    delete<T extends ticketDeleteArgs>(args: SelectSubset<T, ticketDeleteArgs<ExtArgs>>): Prisma__ticketClient<$Result.GetResult<Prisma.$ticketPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Ticket.
     * @param {ticketUpdateArgs} args - Arguments to update one Ticket.
     * @example
     * // Update one Ticket
     * const ticket = await prisma.ticket.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ticketUpdateArgs>(args: SelectSubset<T, ticketUpdateArgs<ExtArgs>>): Prisma__ticketClient<$Result.GetResult<Prisma.$ticketPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Tickets.
     * @param {ticketDeleteManyArgs} args - Arguments to filter Tickets to delete.
     * @example
     * // Delete a few Tickets
     * const { count } = await prisma.ticket.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ticketDeleteManyArgs>(args?: SelectSubset<T, ticketDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Tickets.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ticketUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Tickets
     * const ticket = await prisma.ticket.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ticketUpdateManyArgs>(args: SelectSubset<T, ticketUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Ticket.
     * @param {ticketUpsertArgs} args - Arguments to update or create a Ticket.
     * @example
     * // Update or create a Ticket
     * const ticket = await prisma.ticket.upsert({
     *   create: {
     *     // ... data to create a Ticket
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Ticket we want to update
     *   }
     * })
     */
    upsert<T extends ticketUpsertArgs>(args: SelectSubset<T, ticketUpsertArgs<ExtArgs>>): Prisma__ticketClient<$Result.GetResult<Prisma.$ticketPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Tickets.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ticketCountArgs} args - Arguments to filter Tickets to count.
     * @example
     * // Count the number of Tickets
     * const count = await prisma.ticket.count({
     *   where: {
     *     // ... the filter for the Tickets we want to count
     *   }
     * })
    **/
    count<T extends ticketCountArgs>(
      args?: Subset<T, ticketCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TicketCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Ticket.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TicketAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends TicketAggregateArgs>(args: Subset<T, TicketAggregateArgs>): Prisma.PrismaPromise<GetTicketAggregateType<T>>

    /**
     * Group by Ticket.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ticketGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ticketGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ticketGroupByArgs['orderBy'] }
        : { orderBy?: ticketGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ticketGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTicketGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ticket model
   */
  readonly fields: ticketFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ticket.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ticketClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    order_item<T extends ticket$order_itemArgs<ExtArgs> = {}>(args?: Subset<T, ticket$order_itemArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$order_itemPayload<ExtArgs>, T, "findMany"> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the ticket model
   */ 
  interface ticketFieldRefs {
    readonly ticket_id: FieldRef<"ticket", 'Int'>
    readonly type: FieldRef<"ticket", 'String'>
    readonly price: FieldRef<"ticket", 'Int'>
    readonly img: FieldRef<"ticket", 'Json'>
  }
    

  // Custom InputTypes
  /**
   * ticket findUnique
   */
  export type ticketFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ticket
     */
    select?: ticketSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ticketInclude<ExtArgs> | null
    /**
     * Filter, which ticket to fetch.
     */
    where: ticketWhereUniqueInput
  }

  /**
   * ticket findUniqueOrThrow
   */
  export type ticketFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ticket
     */
    select?: ticketSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ticketInclude<ExtArgs> | null
    /**
     * Filter, which ticket to fetch.
     */
    where: ticketWhereUniqueInput
  }

  /**
   * ticket findFirst
   */
  export type ticketFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ticket
     */
    select?: ticketSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ticketInclude<ExtArgs> | null
    /**
     * Filter, which ticket to fetch.
     */
    where?: ticketWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tickets to fetch.
     */
    orderBy?: ticketOrderByWithRelationInput | ticketOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for tickets.
     */
    cursor?: ticketWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tickets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tickets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of tickets.
     */
    distinct?: TicketScalarFieldEnum | TicketScalarFieldEnum[]
  }

  /**
   * ticket findFirstOrThrow
   */
  export type ticketFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ticket
     */
    select?: ticketSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ticketInclude<ExtArgs> | null
    /**
     * Filter, which ticket to fetch.
     */
    where?: ticketWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tickets to fetch.
     */
    orderBy?: ticketOrderByWithRelationInput | ticketOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for tickets.
     */
    cursor?: ticketWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tickets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tickets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of tickets.
     */
    distinct?: TicketScalarFieldEnum | TicketScalarFieldEnum[]
  }

  /**
   * ticket findMany
   */
  export type ticketFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ticket
     */
    select?: ticketSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ticketInclude<ExtArgs> | null
    /**
     * Filter, which tickets to fetch.
     */
    where?: ticketWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tickets to fetch.
     */
    orderBy?: ticketOrderByWithRelationInput | ticketOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing tickets.
     */
    cursor?: ticketWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tickets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tickets.
     */
    skip?: number
    distinct?: TicketScalarFieldEnum | TicketScalarFieldEnum[]
  }

  /**
   * ticket create
   */
  export type ticketCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ticket
     */
    select?: ticketSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ticketInclude<ExtArgs> | null
    /**
     * The data needed to create a ticket.
     */
    data: XOR<ticketCreateInput, ticketUncheckedCreateInput>
  }

  /**
   * ticket createMany
   */
  export type ticketCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many tickets.
     */
    data: ticketCreateManyInput | ticketCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ticket createManyAndReturn
   */
  export type ticketCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ticket
     */
    select?: ticketSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many tickets.
     */
    data: ticketCreateManyInput | ticketCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ticket update
   */
  export type ticketUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ticket
     */
    select?: ticketSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ticketInclude<ExtArgs> | null
    /**
     * The data needed to update a ticket.
     */
    data: XOR<ticketUpdateInput, ticketUncheckedUpdateInput>
    /**
     * Choose, which ticket to update.
     */
    where: ticketWhereUniqueInput
  }

  /**
   * ticket updateMany
   */
  export type ticketUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update tickets.
     */
    data: XOR<ticketUpdateManyMutationInput, ticketUncheckedUpdateManyInput>
    /**
     * Filter which tickets to update
     */
    where?: ticketWhereInput
  }

  /**
   * ticket upsert
   */
  export type ticketUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ticket
     */
    select?: ticketSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ticketInclude<ExtArgs> | null
    /**
     * The filter to search for the ticket to update in case it exists.
     */
    where: ticketWhereUniqueInput
    /**
     * In case the ticket found by the `where` argument doesn't exist, create a new ticket with this data.
     */
    create: XOR<ticketCreateInput, ticketUncheckedCreateInput>
    /**
     * In case the ticket was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ticketUpdateInput, ticketUncheckedUpdateInput>
  }

  /**
   * ticket delete
   */
  export type ticketDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ticket
     */
    select?: ticketSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ticketInclude<ExtArgs> | null
    /**
     * Filter which ticket to delete.
     */
    where: ticketWhereUniqueInput
  }

  /**
   * ticket deleteMany
   */
  export type ticketDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which tickets to delete
     */
    where?: ticketWhereInput
  }

  /**
   * ticket.order_item
   */
  export type ticket$order_itemArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the order_item
     */
    select?: order_itemSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: order_itemInclude<ExtArgs> | null
    where?: order_itemWhereInput
    orderBy?: order_itemOrderByWithRelationInput | order_itemOrderByWithRelationInput[]
    cursor?: order_itemWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Order_itemScalarFieldEnum | Order_itemScalarFieldEnum[]
  }

  /**
   * ticket without action
   */
  export type ticketDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ticket
     */
    select?: ticketSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ticketInclude<ExtArgs> | null
  }


  /**
   * Model more_about
   */

  export type AggregateMore_about = {
    _count: More_aboutCountAggregateOutputType | null
    _avg: More_aboutAvgAggregateOutputType | null
    _sum: More_aboutSumAggregateOutputType | null
    _min: More_aboutMinAggregateOutputType | null
    _max: More_aboutMaxAggregateOutputType | null
  }

  export type More_aboutAvgAggregateOutputType = {
    more_about_id: number | null
    facility_id: number | null
  }

  export type More_aboutSumAggregateOutputType = {
    more_about_id: number | null
    facility_id: number | null
  }

  export type More_aboutMinAggregateOutputType = {
    more_about_id: number | null
    more_link: string | null
    facility_id: number | null
  }

  export type More_aboutMaxAggregateOutputType = {
    more_about_id: number | null
    more_link: string | null
    facility_id: number | null
  }

  export type More_aboutCountAggregateOutputType = {
    more_about_id: number
    more_link: number
    facility_id: number
    img: number
    _all: number
  }


  export type More_aboutAvgAggregateInputType = {
    more_about_id?: true
    facility_id?: true
  }

  export type More_aboutSumAggregateInputType = {
    more_about_id?: true
    facility_id?: true
  }

  export type More_aboutMinAggregateInputType = {
    more_about_id?: true
    more_link?: true
    facility_id?: true
  }

  export type More_aboutMaxAggregateInputType = {
    more_about_id?: true
    more_link?: true
    facility_id?: true
  }

  export type More_aboutCountAggregateInputType = {
    more_about_id?: true
    more_link?: true
    facility_id?: true
    img?: true
    _all?: true
  }

  export type More_aboutAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which more_about to aggregate.
     */
    where?: more_aboutWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of more_abouts to fetch.
     */
    orderBy?: more_aboutOrderByWithRelationInput | more_aboutOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: more_aboutWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` more_abouts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` more_abouts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned more_abouts
    **/
    _count?: true | More_aboutCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: More_aboutAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: More_aboutSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: More_aboutMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: More_aboutMaxAggregateInputType
  }

  export type GetMore_aboutAggregateType<T extends More_aboutAggregateArgs> = {
        [P in keyof T & keyof AggregateMore_about]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMore_about[P]>
      : GetScalarType<T[P], AggregateMore_about[P]>
  }




  export type more_aboutGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: more_aboutWhereInput
    orderBy?: more_aboutOrderByWithAggregationInput | more_aboutOrderByWithAggregationInput[]
    by: More_aboutScalarFieldEnum[] | More_aboutScalarFieldEnum
    having?: more_aboutScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: More_aboutCountAggregateInputType | true
    _avg?: More_aboutAvgAggregateInputType
    _sum?: More_aboutSumAggregateInputType
    _min?: More_aboutMinAggregateInputType
    _max?: More_aboutMaxAggregateInputType
  }

  export type More_aboutGroupByOutputType = {
    more_about_id: number
    more_link: string
    facility_id: number
    img: JsonValue | null
    _count: More_aboutCountAggregateOutputType | null
    _avg: More_aboutAvgAggregateOutputType | null
    _sum: More_aboutSumAggregateOutputType | null
    _min: More_aboutMinAggregateOutputType | null
    _max: More_aboutMaxAggregateOutputType | null
  }

  type GetMore_aboutGroupByPayload<T extends more_aboutGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<More_aboutGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof More_aboutGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], More_aboutGroupByOutputType[P]>
            : GetScalarType<T[P], More_aboutGroupByOutputType[P]>
        }
      >
    >


  export type more_aboutSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    more_about_id?: boolean
    more_link?: boolean
    facility_id?: boolean
    img?: boolean
    facility?: boolean | facilityDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["more_about"]>

  export type more_aboutSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    more_about_id?: boolean
    more_link?: boolean
    facility_id?: boolean
    img?: boolean
    facility?: boolean | facilityDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["more_about"]>

  export type more_aboutSelectScalar = {
    more_about_id?: boolean
    more_link?: boolean
    facility_id?: boolean
    img?: boolean
  }

  export type more_aboutInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    facility?: boolean | facilityDefaultArgs<ExtArgs>
  }
  export type more_aboutIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    facility?: boolean | facilityDefaultArgs<ExtArgs>
  }

  export type $more_aboutPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "more_about"
    objects: {
      facility: Prisma.$facilityPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      more_about_id: number
      more_link: string
      facility_id: number
      img: Prisma.JsonValue | null
    }, ExtArgs["result"]["more_about"]>
    composites: {}
  }

  type more_aboutGetPayload<S extends boolean | null | undefined | more_aboutDefaultArgs> = $Result.GetResult<Prisma.$more_aboutPayload, S>

  type more_aboutCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<more_aboutFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: More_aboutCountAggregateInputType | true
    }

  export interface more_aboutDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['more_about'], meta: { name: 'more_about' } }
    /**
     * Find zero or one More_about that matches the filter.
     * @param {more_aboutFindUniqueArgs} args - Arguments to find a More_about
     * @example
     * // Get one More_about
     * const more_about = await prisma.more_about.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends more_aboutFindUniqueArgs>(args: SelectSubset<T, more_aboutFindUniqueArgs<ExtArgs>>): Prisma__more_aboutClient<$Result.GetResult<Prisma.$more_aboutPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one More_about that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {more_aboutFindUniqueOrThrowArgs} args - Arguments to find a More_about
     * @example
     * // Get one More_about
     * const more_about = await prisma.more_about.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends more_aboutFindUniqueOrThrowArgs>(args: SelectSubset<T, more_aboutFindUniqueOrThrowArgs<ExtArgs>>): Prisma__more_aboutClient<$Result.GetResult<Prisma.$more_aboutPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first More_about that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {more_aboutFindFirstArgs} args - Arguments to find a More_about
     * @example
     * // Get one More_about
     * const more_about = await prisma.more_about.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends more_aboutFindFirstArgs>(args?: SelectSubset<T, more_aboutFindFirstArgs<ExtArgs>>): Prisma__more_aboutClient<$Result.GetResult<Prisma.$more_aboutPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first More_about that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {more_aboutFindFirstOrThrowArgs} args - Arguments to find a More_about
     * @example
     * // Get one More_about
     * const more_about = await prisma.more_about.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends more_aboutFindFirstOrThrowArgs>(args?: SelectSubset<T, more_aboutFindFirstOrThrowArgs<ExtArgs>>): Prisma__more_aboutClient<$Result.GetResult<Prisma.$more_aboutPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more More_abouts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {more_aboutFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all More_abouts
     * const more_abouts = await prisma.more_about.findMany()
     * 
     * // Get first 10 More_abouts
     * const more_abouts = await prisma.more_about.findMany({ take: 10 })
     * 
     * // Only select the `more_about_id`
     * const more_aboutWithMore_about_idOnly = await prisma.more_about.findMany({ select: { more_about_id: true } })
     * 
     */
    findMany<T extends more_aboutFindManyArgs>(args?: SelectSubset<T, more_aboutFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$more_aboutPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a More_about.
     * @param {more_aboutCreateArgs} args - Arguments to create a More_about.
     * @example
     * // Create one More_about
     * const More_about = await prisma.more_about.create({
     *   data: {
     *     // ... data to create a More_about
     *   }
     * })
     * 
     */
    create<T extends more_aboutCreateArgs>(args: SelectSubset<T, more_aboutCreateArgs<ExtArgs>>): Prisma__more_aboutClient<$Result.GetResult<Prisma.$more_aboutPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many More_abouts.
     * @param {more_aboutCreateManyArgs} args - Arguments to create many More_abouts.
     * @example
     * // Create many More_abouts
     * const more_about = await prisma.more_about.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends more_aboutCreateManyArgs>(args?: SelectSubset<T, more_aboutCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many More_abouts and returns the data saved in the database.
     * @param {more_aboutCreateManyAndReturnArgs} args - Arguments to create many More_abouts.
     * @example
     * // Create many More_abouts
     * const more_about = await prisma.more_about.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many More_abouts and only return the `more_about_id`
     * const more_aboutWithMore_about_idOnly = await prisma.more_about.createManyAndReturn({ 
     *   select: { more_about_id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends more_aboutCreateManyAndReturnArgs>(args?: SelectSubset<T, more_aboutCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$more_aboutPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a More_about.
     * @param {more_aboutDeleteArgs} args - Arguments to delete one More_about.
     * @example
     * // Delete one More_about
     * const More_about = await prisma.more_about.delete({
     *   where: {
     *     // ... filter to delete one More_about
     *   }
     * })
     * 
     */
    delete<T extends more_aboutDeleteArgs>(args: SelectSubset<T, more_aboutDeleteArgs<ExtArgs>>): Prisma__more_aboutClient<$Result.GetResult<Prisma.$more_aboutPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one More_about.
     * @param {more_aboutUpdateArgs} args - Arguments to update one More_about.
     * @example
     * // Update one More_about
     * const more_about = await prisma.more_about.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends more_aboutUpdateArgs>(args: SelectSubset<T, more_aboutUpdateArgs<ExtArgs>>): Prisma__more_aboutClient<$Result.GetResult<Prisma.$more_aboutPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more More_abouts.
     * @param {more_aboutDeleteManyArgs} args - Arguments to filter More_abouts to delete.
     * @example
     * // Delete a few More_abouts
     * const { count } = await prisma.more_about.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends more_aboutDeleteManyArgs>(args?: SelectSubset<T, more_aboutDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more More_abouts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {more_aboutUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many More_abouts
     * const more_about = await prisma.more_about.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends more_aboutUpdateManyArgs>(args: SelectSubset<T, more_aboutUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one More_about.
     * @param {more_aboutUpsertArgs} args - Arguments to update or create a More_about.
     * @example
     * // Update or create a More_about
     * const more_about = await prisma.more_about.upsert({
     *   create: {
     *     // ... data to create a More_about
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the More_about we want to update
     *   }
     * })
     */
    upsert<T extends more_aboutUpsertArgs>(args: SelectSubset<T, more_aboutUpsertArgs<ExtArgs>>): Prisma__more_aboutClient<$Result.GetResult<Prisma.$more_aboutPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of More_abouts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {more_aboutCountArgs} args - Arguments to filter More_abouts to count.
     * @example
     * // Count the number of More_abouts
     * const count = await prisma.more_about.count({
     *   where: {
     *     // ... the filter for the More_abouts we want to count
     *   }
     * })
    **/
    count<T extends more_aboutCountArgs>(
      args?: Subset<T, more_aboutCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], More_aboutCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a More_about.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {More_aboutAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends More_aboutAggregateArgs>(args: Subset<T, More_aboutAggregateArgs>): Prisma.PrismaPromise<GetMore_aboutAggregateType<T>>

    /**
     * Group by More_about.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {more_aboutGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends more_aboutGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: more_aboutGroupByArgs['orderBy'] }
        : { orderBy?: more_aboutGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, more_aboutGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMore_aboutGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the more_about model
   */
  readonly fields: more_aboutFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for more_about.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__more_aboutClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    facility<T extends facilityDefaultArgs<ExtArgs> = {}>(args?: Subset<T, facilityDefaultArgs<ExtArgs>>): Prisma__facilityClient<$Result.GetResult<Prisma.$facilityPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the more_about model
   */ 
  interface more_aboutFieldRefs {
    readonly more_about_id: FieldRef<"more_about", 'Int'>
    readonly more_link: FieldRef<"more_about", 'String'>
    readonly facility_id: FieldRef<"more_about", 'Int'>
    readonly img: FieldRef<"more_about", 'Json'>
  }
    

  // Custom InputTypes
  /**
   * more_about findUnique
   */
  export type more_aboutFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the more_about
     */
    select?: more_aboutSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: more_aboutInclude<ExtArgs> | null
    /**
     * Filter, which more_about to fetch.
     */
    where: more_aboutWhereUniqueInput
  }

  /**
   * more_about findUniqueOrThrow
   */
  export type more_aboutFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the more_about
     */
    select?: more_aboutSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: more_aboutInclude<ExtArgs> | null
    /**
     * Filter, which more_about to fetch.
     */
    where: more_aboutWhereUniqueInput
  }

  /**
   * more_about findFirst
   */
  export type more_aboutFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the more_about
     */
    select?: more_aboutSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: more_aboutInclude<ExtArgs> | null
    /**
     * Filter, which more_about to fetch.
     */
    where?: more_aboutWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of more_abouts to fetch.
     */
    orderBy?: more_aboutOrderByWithRelationInput | more_aboutOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for more_abouts.
     */
    cursor?: more_aboutWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` more_abouts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` more_abouts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of more_abouts.
     */
    distinct?: More_aboutScalarFieldEnum | More_aboutScalarFieldEnum[]
  }

  /**
   * more_about findFirstOrThrow
   */
  export type more_aboutFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the more_about
     */
    select?: more_aboutSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: more_aboutInclude<ExtArgs> | null
    /**
     * Filter, which more_about to fetch.
     */
    where?: more_aboutWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of more_abouts to fetch.
     */
    orderBy?: more_aboutOrderByWithRelationInput | more_aboutOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for more_abouts.
     */
    cursor?: more_aboutWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` more_abouts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` more_abouts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of more_abouts.
     */
    distinct?: More_aboutScalarFieldEnum | More_aboutScalarFieldEnum[]
  }

  /**
   * more_about findMany
   */
  export type more_aboutFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the more_about
     */
    select?: more_aboutSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: more_aboutInclude<ExtArgs> | null
    /**
     * Filter, which more_abouts to fetch.
     */
    where?: more_aboutWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of more_abouts to fetch.
     */
    orderBy?: more_aboutOrderByWithRelationInput | more_aboutOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing more_abouts.
     */
    cursor?: more_aboutWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` more_abouts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` more_abouts.
     */
    skip?: number
    distinct?: More_aboutScalarFieldEnum | More_aboutScalarFieldEnum[]
  }

  /**
   * more_about create
   */
  export type more_aboutCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the more_about
     */
    select?: more_aboutSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: more_aboutInclude<ExtArgs> | null
    /**
     * The data needed to create a more_about.
     */
    data: XOR<more_aboutCreateInput, more_aboutUncheckedCreateInput>
  }

  /**
   * more_about createMany
   */
  export type more_aboutCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many more_abouts.
     */
    data: more_aboutCreateManyInput | more_aboutCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * more_about createManyAndReturn
   */
  export type more_aboutCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the more_about
     */
    select?: more_aboutSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many more_abouts.
     */
    data: more_aboutCreateManyInput | more_aboutCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: more_aboutIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * more_about update
   */
  export type more_aboutUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the more_about
     */
    select?: more_aboutSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: more_aboutInclude<ExtArgs> | null
    /**
     * The data needed to update a more_about.
     */
    data: XOR<more_aboutUpdateInput, more_aboutUncheckedUpdateInput>
    /**
     * Choose, which more_about to update.
     */
    where: more_aboutWhereUniqueInput
  }

  /**
   * more_about updateMany
   */
  export type more_aboutUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update more_abouts.
     */
    data: XOR<more_aboutUpdateManyMutationInput, more_aboutUncheckedUpdateManyInput>
    /**
     * Filter which more_abouts to update
     */
    where?: more_aboutWhereInput
  }

  /**
   * more_about upsert
   */
  export type more_aboutUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the more_about
     */
    select?: more_aboutSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: more_aboutInclude<ExtArgs> | null
    /**
     * The filter to search for the more_about to update in case it exists.
     */
    where: more_aboutWhereUniqueInput
    /**
     * In case the more_about found by the `where` argument doesn't exist, create a new more_about with this data.
     */
    create: XOR<more_aboutCreateInput, more_aboutUncheckedCreateInput>
    /**
     * In case the more_about was found with the provided `where` argument, update it with this data.
     */
    update: XOR<more_aboutUpdateInput, more_aboutUncheckedUpdateInput>
  }

  /**
   * more_about delete
   */
  export type more_aboutDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the more_about
     */
    select?: more_aboutSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: more_aboutInclude<ExtArgs> | null
    /**
     * Filter which more_about to delete.
     */
    where: more_aboutWhereUniqueInput
  }

  /**
   * more_about deleteMany
   */
  export type more_aboutDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which more_abouts to delete
     */
    where?: more_aboutWhereInput
  }

  /**
   * more_about without action
   */
  export type more_aboutDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the more_about
     */
    select?: more_aboutSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: more_aboutInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const MemberScalarFieldEnum: {
    member_id: 'member_id',
    name: 'name',
    address: 'address',
    birth: 'birth',
    account: 'account',
    password: 'password',
    phone: 'phone',
    photo: 'photo'
  };

  export type MemberScalarFieldEnum = (typeof MemberScalarFieldEnum)[keyof typeof MemberScalarFieldEnum]


  export const Credit_cardScalarFieldEnum: {
    credit_card_id: 'credit_card_id',
    member_id: 'member_id',
    number: 'number',
    expiry: 'expiry',
    cvv: 'cvv'
  };

  export type Credit_cardScalarFieldEnum = (typeof Credit_cardScalarFieldEnum)[keyof typeof Credit_cardScalarFieldEnum]


  export const Customer_orderScalarFieldEnum: {
    order_id: 'order_id',
    member_id: 'member_id',
    total_amount: 'total_amount',
    status: 'status',
    order_date: 'order_date'
  };

  export type Customer_orderScalarFieldEnum = (typeof Customer_orderScalarFieldEnum)[keyof typeof Customer_orderScalarFieldEnum]


  export const FacilityScalarFieldEnum: {
    facility_id: 'facility_id',
    title: 'title',
    image: 'image',
    category: 'category',
    des: 'des',
    content: 'content',
    area: 'area',
    location: 'location',
    open_time: 'open_time',
    data_maintain: 'data_maintain',
    facility_id_name: 'facility_id_name',
    facility_class_name: 'facility_class_name',
    rule_others: 'rule_others',
    remarks: 'remarks'
  };

  export type FacilityScalarFieldEnum = (typeof FacilityScalarFieldEnum)[keyof typeof FacilityScalarFieldEnum]


  export const Facility_ruleScalarFieldEnum: {
    facility_rule_id: 'facility_rule_id',
    facility_id: 'facility_id',
    rule_type: 'rule_type',
    rule_value: 'rule_value'
  };

  export type Facility_ruleScalarFieldEnum = (typeof Facility_ruleScalarFieldEnum)[keyof typeof Facility_ruleScalarFieldEnum]


  export const Order_infoScalarFieldEnum: {
    order_info_id: 'order_info_id',
    order_id: 'order_id',
    customer: 'customer',
    phone_number: 'phone_number',
    address: 'address',
    payment_method: 'payment_method'
  };

  export type Order_infoScalarFieldEnum = (typeof Order_infoScalarFieldEnum)[keyof typeof Order_infoScalarFieldEnum]


  export const Order_itemScalarFieldEnum: {
    order_item_id: 'order_item_id',
    order_id: 'order_id',
    room_id: 'room_id',
    ticket_id: 'ticket_id',
    check_in_date: 'check_in_date',
    check_out_date: 'check_out_date',
    people_count: 'people_count',
    room_count: 'room_count',
    quantity: 'quantity',
    booked_date: 'booked_date',
    valid_date: 'valid_date'
  };

  export type Order_itemScalarFieldEnum = (typeof Order_itemScalarFieldEnum)[keyof typeof Order_itemScalarFieldEnum]


  export const RoomScalarFieldEnum: {
    room_id: 'room_id',
    room_type: 'room_type',
    room_count: 'room_count',
    description: 'description',
    price: 'price',
    capacity: 'capacity',
    img: 'img'
  };

  export type RoomScalarFieldEnum = (typeof RoomScalarFieldEnum)[keyof typeof RoomScalarFieldEnum]


  export const TicketScalarFieldEnum: {
    ticket_id: 'ticket_id',
    type: 'type',
    price: 'price',
    img: 'img'
  };

  export type TicketScalarFieldEnum = (typeof TicketScalarFieldEnum)[keyof typeof TicketScalarFieldEnum]


  export const More_aboutScalarFieldEnum: {
    more_about_id: 'more_about_id',
    more_link: 'more_link',
    facility_id: 'facility_id',
    img: 'img'
  };

  export type More_aboutScalarFieldEnum = (typeof More_aboutScalarFieldEnum)[keyof typeof More_aboutScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const NullableJsonNullValueInput: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull
  };

  export type NullableJsonNullValueInput = (typeof NullableJsonNullValueInput)[keyof typeof NullableJsonNullValueInput]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  export const JsonNullValueFilter: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull,
    AnyNull: typeof AnyNull
  };

  export type JsonNullValueFilter = (typeof JsonNullValueFilter)[keyof typeof JsonNullValueFilter]


  /**
   * Field references 
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Json'
   */
  export type JsonFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Json'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type memberWhereInput = {
    AND?: memberWhereInput | memberWhereInput[]
    OR?: memberWhereInput[]
    NOT?: memberWhereInput | memberWhereInput[]
    member_id?: IntFilter<"member"> | number
    name?: StringFilter<"member"> | string
    address?: StringNullableFilter<"member"> | string | null
    birth?: DateTimeNullableFilter<"member"> | Date | string | null
    account?: StringFilter<"member"> | string
    password?: StringFilter<"member"> | string
    phone?: StringNullableFilter<"member"> | string | null
    photo?: StringNullableFilter<"member"> | string | null
    credit_card?: Credit_cardListRelationFilter
    customer_order?: Customer_orderListRelationFilter
  }

  export type memberOrderByWithRelationInput = {
    member_id?: SortOrder
    name?: SortOrder
    address?: SortOrderInput | SortOrder
    birth?: SortOrderInput | SortOrder
    account?: SortOrder
    password?: SortOrder
    phone?: SortOrderInput | SortOrder
    photo?: SortOrderInput | SortOrder
    credit_card?: credit_cardOrderByRelationAggregateInput
    customer_order?: customer_orderOrderByRelationAggregateInput
  }

  export type memberWhereUniqueInput = Prisma.AtLeast<{
    member_id?: number
    account?: string
    AND?: memberWhereInput | memberWhereInput[]
    OR?: memberWhereInput[]
    NOT?: memberWhereInput | memberWhereInput[]
    name?: StringFilter<"member"> | string
    address?: StringNullableFilter<"member"> | string | null
    birth?: DateTimeNullableFilter<"member"> | Date | string | null
    password?: StringFilter<"member"> | string
    phone?: StringNullableFilter<"member"> | string | null
    photo?: StringNullableFilter<"member"> | string | null
    credit_card?: Credit_cardListRelationFilter
    customer_order?: Customer_orderListRelationFilter
  }, "member_id" | "account">

  export type memberOrderByWithAggregationInput = {
    member_id?: SortOrder
    name?: SortOrder
    address?: SortOrderInput | SortOrder
    birth?: SortOrderInput | SortOrder
    account?: SortOrder
    password?: SortOrder
    phone?: SortOrderInput | SortOrder
    photo?: SortOrderInput | SortOrder
    _count?: memberCountOrderByAggregateInput
    _avg?: memberAvgOrderByAggregateInput
    _max?: memberMaxOrderByAggregateInput
    _min?: memberMinOrderByAggregateInput
    _sum?: memberSumOrderByAggregateInput
  }

  export type memberScalarWhereWithAggregatesInput = {
    AND?: memberScalarWhereWithAggregatesInput | memberScalarWhereWithAggregatesInput[]
    OR?: memberScalarWhereWithAggregatesInput[]
    NOT?: memberScalarWhereWithAggregatesInput | memberScalarWhereWithAggregatesInput[]
    member_id?: IntWithAggregatesFilter<"member"> | number
    name?: StringWithAggregatesFilter<"member"> | string
    address?: StringNullableWithAggregatesFilter<"member"> | string | null
    birth?: DateTimeNullableWithAggregatesFilter<"member"> | Date | string | null
    account?: StringWithAggregatesFilter<"member"> | string
    password?: StringWithAggregatesFilter<"member"> | string
    phone?: StringNullableWithAggregatesFilter<"member"> | string | null
    photo?: StringNullableWithAggregatesFilter<"member"> | string | null
  }

  export type credit_cardWhereInput = {
    AND?: credit_cardWhereInput | credit_cardWhereInput[]
    OR?: credit_cardWhereInput[]
    NOT?: credit_cardWhereInput | credit_cardWhereInput[]
    credit_card_id?: IntFilter<"credit_card"> | number
    member_id?: IntNullableFilter<"credit_card"> | number | null
    number?: StringFilter<"credit_card"> | string
    expiry?: DateTimeFilter<"credit_card"> | Date | string
    cvv?: StringFilter<"credit_card"> | string
    member?: XOR<MemberNullableRelationFilter, memberWhereInput> | null
  }

  export type credit_cardOrderByWithRelationInput = {
    credit_card_id?: SortOrder
    member_id?: SortOrderInput | SortOrder
    number?: SortOrder
    expiry?: SortOrder
    cvv?: SortOrder
    member?: memberOrderByWithRelationInput
  }

  export type credit_cardWhereUniqueInput = Prisma.AtLeast<{
    credit_card_id?: number
    AND?: credit_cardWhereInput | credit_cardWhereInput[]
    OR?: credit_cardWhereInput[]
    NOT?: credit_cardWhereInput | credit_cardWhereInput[]
    member_id?: IntNullableFilter<"credit_card"> | number | null
    number?: StringFilter<"credit_card"> | string
    expiry?: DateTimeFilter<"credit_card"> | Date | string
    cvv?: StringFilter<"credit_card"> | string
    member?: XOR<MemberNullableRelationFilter, memberWhereInput> | null
  }, "credit_card_id">

  export type credit_cardOrderByWithAggregationInput = {
    credit_card_id?: SortOrder
    member_id?: SortOrderInput | SortOrder
    number?: SortOrder
    expiry?: SortOrder
    cvv?: SortOrder
    _count?: credit_cardCountOrderByAggregateInput
    _avg?: credit_cardAvgOrderByAggregateInput
    _max?: credit_cardMaxOrderByAggregateInput
    _min?: credit_cardMinOrderByAggregateInput
    _sum?: credit_cardSumOrderByAggregateInput
  }

  export type credit_cardScalarWhereWithAggregatesInput = {
    AND?: credit_cardScalarWhereWithAggregatesInput | credit_cardScalarWhereWithAggregatesInput[]
    OR?: credit_cardScalarWhereWithAggregatesInput[]
    NOT?: credit_cardScalarWhereWithAggregatesInput | credit_cardScalarWhereWithAggregatesInput[]
    credit_card_id?: IntWithAggregatesFilter<"credit_card"> | number
    member_id?: IntNullableWithAggregatesFilter<"credit_card"> | number | null
    number?: StringWithAggregatesFilter<"credit_card"> | string
    expiry?: DateTimeWithAggregatesFilter<"credit_card"> | Date | string
    cvv?: StringWithAggregatesFilter<"credit_card"> | string
  }

  export type customer_orderWhereInput = {
    AND?: customer_orderWhereInput | customer_orderWhereInput[]
    OR?: customer_orderWhereInput[]
    NOT?: customer_orderWhereInput | customer_orderWhereInput[]
    order_id?: IntFilter<"customer_order"> | number
    member_id?: IntFilter<"customer_order"> | number
    total_amount?: IntFilter<"customer_order"> | number
    status?: StringFilter<"customer_order"> | string
    order_date?: DateTimeNullableFilter<"customer_order"> | Date | string | null
    member?: XOR<MemberRelationFilter, memberWhereInput>
    order_info?: Order_infoListRelationFilter
    order_item?: Order_itemListRelationFilter
  }

  export type customer_orderOrderByWithRelationInput = {
    order_id?: SortOrder
    member_id?: SortOrder
    total_amount?: SortOrder
    status?: SortOrder
    order_date?: SortOrderInput | SortOrder
    member?: memberOrderByWithRelationInput
    order_info?: order_infoOrderByRelationAggregateInput
    order_item?: order_itemOrderByRelationAggregateInput
  }

  export type customer_orderWhereUniqueInput = Prisma.AtLeast<{
    order_id?: number
    AND?: customer_orderWhereInput | customer_orderWhereInput[]
    OR?: customer_orderWhereInput[]
    NOT?: customer_orderWhereInput | customer_orderWhereInput[]
    member_id?: IntFilter<"customer_order"> | number
    total_amount?: IntFilter<"customer_order"> | number
    status?: StringFilter<"customer_order"> | string
    order_date?: DateTimeNullableFilter<"customer_order"> | Date | string | null
    member?: XOR<MemberRelationFilter, memberWhereInput>
    order_info?: Order_infoListRelationFilter
    order_item?: Order_itemListRelationFilter
  }, "order_id">

  export type customer_orderOrderByWithAggregationInput = {
    order_id?: SortOrder
    member_id?: SortOrder
    total_amount?: SortOrder
    status?: SortOrder
    order_date?: SortOrderInput | SortOrder
    _count?: customer_orderCountOrderByAggregateInput
    _avg?: customer_orderAvgOrderByAggregateInput
    _max?: customer_orderMaxOrderByAggregateInput
    _min?: customer_orderMinOrderByAggregateInput
    _sum?: customer_orderSumOrderByAggregateInput
  }

  export type customer_orderScalarWhereWithAggregatesInput = {
    AND?: customer_orderScalarWhereWithAggregatesInput | customer_orderScalarWhereWithAggregatesInput[]
    OR?: customer_orderScalarWhereWithAggregatesInput[]
    NOT?: customer_orderScalarWhereWithAggregatesInput | customer_orderScalarWhereWithAggregatesInput[]
    order_id?: IntWithAggregatesFilter<"customer_order"> | number
    member_id?: IntWithAggregatesFilter<"customer_order"> | number
    total_amount?: IntWithAggregatesFilter<"customer_order"> | number
    status?: StringWithAggregatesFilter<"customer_order"> | string
    order_date?: DateTimeNullableWithAggregatesFilter<"customer_order"> | Date | string | null
  }

  export type facilityWhereInput = {
    AND?: facilityWhereInput | facilityWhereInput[]
    OR?: facilityWhereInput[]
    NOT?: facilityWhereInput | facilityWhereInput[]
    facility_id?: IntFilter<"facility"> | number
    title?: StringFilter<"facility"> | string
    image?: JsonNullableFilter<"facility">
    category?: StringFilter<"facility"> | string
    des?: StringNullableFilter<"facility"> | string | null
    content?: StringNullableFilter<"facility"> | string | null
    area?: IntFilter<"facility"> | number
    location?: StringFilter<"facility"> | string
    open_time?: StringNullableFilter<"facility"> | string | null
    data_maintain?: StringNullableFilter<"facility"> | string | null
    facility_id_name?: StringFilter<"facility"> | string
    facility_class_name?: StringFilter<"facility"> | string
    rule_others?: StringFilter<"facility"> | string
    remarks?: StringNullableFilter<"facility"> | string | null
    facility_rule?: Facility_ruleListRelationFilter
    more_about?: More_aboutListRelationFilter
  }

  export type facilityOrderByWithRelationInput = {
    facility_id?: SortOrder
    title?: SortOrder
    image?: SortOrderInput | SortOrder
    category?: SortOrder
    des?: SortOrderInput | SortOrder
    content?: SortOrderInput | SortOrder
    area?: SortOrder
    location?: SortOrder
    open_time?: SortOrderInput | SortOrder
    data_maintain?: SortOrderInput | SortOrder
    facility_id_name?: SortOrder
    facility_class_name?: SortOrder
    rule_others?: SortOrder
    remarks?: SortOrderInput | SortOrder
    facility_rule?: facility_ruleOrderByRelationAggregateInput
    more_about?: more_aboutOrderByRelationAggregateInput
  }

  export type facilityWhereUniqueInput = Prisma.AtLeast<{
    facility_id?: number
    AND?: facilityWhereInput | facilityWhereInput[]
    OR?: facilityWhereInput[]
    NOT?: facilityWhereInput | facilityWhereInput[]
    title?: StringFilter<"facility"> | string
    image?: JsonNullableFilter<"facility">
    category?: StringFilter<"facility"> | string
    des?: StringNullableFilter<"facility"> | string | null
    content?: StringNullableFilter<"facility"> | string | null
    area?: IntFilter<"facility"> | number
    location?: StringFilter<"facility"> | string
    open_time?: StringNullableFilter<"facility"> | string | null
    data_maintain?: StringNullableFilter<"facility"> | string | null
    facility_id_name?: StringFilter<"facility"> | string
    facility_class_name?: StringFilter<"facility"> | string
    rule_others?: StringFilter<"facility"> | string
    remarks?: StringNullableFilter<"facility"> | string | null
    facility_rule?: Facility_ruleListRelationFilter
    more_about?: More_aboutListRelationFilter
  }, "facility_id">

  export type facilityOrderByWithAggregationInput = {
    facility_id?: SortOrder
    title?: SortOrder
    image?: SortOrderInput | SortOrder
    category?: SortOrder
    des?: SortOrderInput | SortOrder
    content?: SortOrderInput | SortOrder
    area?: SortOrder
    location?: SortOrder
    open_time?: SortOrderInput | SortOrder
    data_maintain?: SortOrderInput | SortOrder
    facility_id_name?: SortOrder
    facility_class_name?: SortOrder
    rule_others?: SortOrder
    remarks?: SortOrderInput | SortOrder
    _count?: facilityCountOrderByAggregateInput
    _avg?: facilityAvgOrderByAggregateInput
    _max?: facilityMaxOrderByAggregateInput
    _min?: facilityMinOrderByAggregateInput
    _sum?: facilitySumOrderByAggregateInput
  }

  export type facilityScalarWhereWithAggregatesInput = {
    AND?: facilityScalarWhereWithAggregatesInput | facilityScalarWhereWithAggregatesInput[]
    OR?: facilityScalarWhereWithAggregatesInput[]
    NOT?: facilityScalarWhereWithAggregatesInput | facilityScalarWhereWithAggregatesInput[]
    facility_id?: IntWithAggregatesFilter<"facility"> | number
    title?: StringWithAggregatesFilter<"facility"> | string
    image?: JsonNullableWithAggregatesFilter<"facility">
    category?: StringWithAggregatesFilter<"facility"> | string
    des?: StringNullableWithAggregatesFilter<"facility"> | string | null
    content?: StringNullableWithAggregatesFilter<"facility"> | string | null
    area?: IntWithAggregatesFilter<"facility"> | number
    location?: StringWithAggregatesFilter<"facility"> | string
    open_time?: StringNullableWithAggregatesFilter<"facility"> | string | null
    data_maintain?: StringNullableWithAggregatesFilter<"facility"> | string | null
    facility_id_name?: StringWithAggregatesFilter<"facility"> | string
    facility_class_name?: StringWithAggregatesFilter<"facility"> | string
    rule_others?: StringWithAggregatesFilter<"facility"> | string
    remarks?: StringNullableWithAggregatesFilter<"facility"> | string | null
  }

  export type facility_ruleWhereInput = {
    AND?: facility_ruleWhereInput | facility_ruleWhereInput[]
    OR?: facility_ruleWhereInput[]
    NOT?: facility_ruleWhereInput | facility_ruleWhereInput[]
    facility_rule_id?: IntFilter<"facility_rule"> | number
    facility_id?: IntNullableFilter<"facility_rule"> | number | null
    rule_type?: StringNullableFilter<"facility_rule"> | string | null
    rule_value?: StringNullableFilter<"facility_rule"> | string | null
    facility?: XOR<FacilityNullableRelationFilter, facilityWhereInput> | null
  }

  export type facility_ruleOrderByWithRelationInput = {
    facility_rule_id?: SortOrder
    facility_id?: SortOrderInput | SortOrder
    rule_type?: SortOrderInput | SortOrder
    rule_value?: SortOrderInput | SortOrder
    facility?: facilityOrderByWithRelationInput
  }

  export type facility_ruleWhereUniqueInput = Prisma.AtLeast<{
    facility_rule_id?: number
    AND?: facility_ruleWhereInput | facility_ruleWhereInput[]
    OR?: facility_ruleWhereInput[]
    NOT?: facility_ruleWhereInput | facility_ruleWhereInput[]
    facility_id?: IntNullableFilter<"facility_rule"> | number | null
    rule_type?: StringNullableFilter<"facility_rule"> | string | null
    rule_value?: StringNullableFilter<"facility_rule"> | string | null
    facility?: XOR<FacilityNullableRelationFilter, facilityWhereInput> | null
  }, "facility_rule_id">

  export type facility_ruleOrderByWithAggregationInput = {
    facility_rule_id?: SortOrder
    facility_id?: SortOrderInput | SortOrder
    rule_type?: SortOrderInput | SortOrder
    rule_value?: SortOrderInput | SortOrder
    _count?: facility_ruleCountOrderByAggregateInput
    _avg?: facility_ruleAvgOrderByAggregateInput
    _max?: facility_ruleMaxOrderByAggregateInput
    _min?: facility_ruleMinOrderByAggregateInput
    _sum?: facility_ruleSumOrderByAggregateInput
  }

  export type facility_ruleScalarWhereWithAggregatesInput = {
    AND?: facility_ruleScalarWhereWithAggregatesInput | facility_ruleScalarWhereWithAggregatesInput[]
    OR?: facility_ruleScalarWhereWithAggregatesInput[]
    NOT?: facility_ruleScalarWhereWithAggregatesInput | facility_ruleScalarWhereWithAggregatesInput[]
    facility_rule_id?: IntWithAggregatesFilter<"facility_rule"> | number
    facility_id?: IntNullableWithAggregatesFilter<"facility_rule"> | number | null
    rule_type?: StringNullableWithAggregatesFilter<"facility_rule"> | string | null
    rule_value?: StringNullableWithAggregatesFilter<"facility_rule"> | string | null
  }

  export type order_infoWhereInput = {
    AND?: order_infoWhereInput | order_infoWhereInput[]
    OR?: order_infoWhereInput[]
    NOT?: order_infoWhereInput | order_infoWhereInput[]
    order_info_id?: IntFilter<"order_info"> | number
    order_id?: IntFilter<"order_info"> | number
    customer?: StringFilter<"order_info"> | string
    phone_number?: StringFilter<"order_info"> | string
    address?: StringFilter<"order_info"> | string
    payment_method?: StringFilter<"order_info"> | string
    customer_order?: XOR<Customer_orderRelationFilter, customer_orderWhereInput>
  }

  export type order_infoOrderByWithRelationInput = {
    order_info_id?: SortOrder
    order_id?: SortOrder
    customer?: SortOrder
    phone_number?: SortOrder
    address?: SortOrder
    payment_method?: SortOrder
    customer_order?: customer_orderOrderByWithRelationInput
  }

  export type order_infoWhereUniqueInput = Prisma.AtLeast<{
    order_info_id?: number
    AND?: order_infoWhereInput | order_infoWhereInput[]
    OR?: order_infoWhereInput[]
    NOT?: order_infoWhereInput | order_infoWhereInput[]
    order_id?: IntFilter<"order_info"> | number
    customer?: StringFilter<"order_info"> | string
    phone_number?: StringFilter<"order_info"> | string
    address?: StringFilter<"order_info"> | string
    payment_method?: StringFilter<"order_info"> | string
    customer_order?: XOR<Customer_orderRelationFilter, customer_orderWhereInput>
  }, "order_info_id">

  export type order_infoOrderByWithAggregationInput = {
    order_info_id?: SortOrder
    order_id?: SortOrder
    customer?: SortOrder
    phone_number?: SortOrder
    address?: SortOrder
    payment_method?: SortOrder
    _count?: order_infoCountOrderByAggregateInput
    _avg?: order_infoAvgOrderByAggregateInput
    _max?: order_infoMaxOrderByAggregateInput
    _min?: order_infoMinOrderByAggregateInput
    _sum?: order_infoSumOrderByAggregateInput
  }

  export type order_infoScalarWhereWithAggregatesInput = {
    AND?: order_infoScalarWhereWithAggregatesInput | order_infoScalarWhereWithAggregatesInput[]
    OR?: order_infoScalarWhereWithAggregatesInput[]
    NOT?: order_infoScalarWhereWithAggregatesInput | order_infoScalarWhereWithAggregatesInput[]
    order_info_id?: IntWithAggregatesFilter<"order_info"> | number
    order_id?: IntWithAggregatesFilter<"order_info"> | number
    customer?: StringWithAggregatesFilter<"order_info"> | string
    phone_number?: StringWithAggregatesFilter<"order_info"> | string
    address?: StringWithAggregatesFilter<"order_info"> | string
    payment_method?: StringWithAggregatesFilter<"order_info"> | string
  }

  export type order_itemWhereInput = {
    AND?: order_itemWhereInput | order_itemWhereInput[]
    OR?: order_itemWhereInput[]
    NOT?: order_itemWhereInput | order_itemWhereInput[]
    order_item_id?: StringFilter<"order_item"> | string
    order_id?: IntFilter<"order_item"> | number
    room_id?: IntNullableFilter<"order_item"> | number | null
    ticket_id?: IntNullableFilter<"order_item"> | number | null
    check_in_date?: DateTimeNullableFilter<"order_item"> | Date | string | null
    check_out_date?: DateTimeNullableFilter<"order_item"> | Date | string | null
    people_count?: IntNullableFilter<"order_item"> | number | null
    room_count?: IntNullableFilter<"order_item"> | number | null
    quantity?: IntFilter<"order_item"> | number
    booked_date?: DateTimeNullableFilter<"order_item"> | Date | string | null
    valid_date?: DateTimeNullableFilter<"order_item"> | Date | string | null
    customer_order?: XOR<Customer_orderRelationFilter, customer_orderWhereInput>
    room?: XOR<RoomNullableRelationFilter, roomWhereInput> | null
    ticket?: XOR<TicketNullableRelationFilter, ticketWhereInput> | null
  }

  export type order_itemOrderByWithRelationInput = {
    order_item_id?: SortOrder
    order_id?: SortOrder
    room_id?: SortOrderInput | SortOrder
    ticket_id?: SortOrderInput | SortOrder
    check_in_date?: SortOrderInput | SortOrder
    check_out_date?: SortOrderInput | SortOrder
    people_count?: SortOrderInput | SortOrder
    room_count?: SortOrderInput | SortOrder
    quantity?: SortOrder
    booked_date?: SortOrderInput | SortOrder
    valid_date?: SortOrderInput | SortOrder
    customer_order?: customer_orderOrderByWithRelationInput
    room?: roomOrderByWithRelationInput
    ticket?: ticketOrderByWithRelationInput
  }

  export type order_itemWhereUniqueInput = Prisma.AtLeast<{
    order_item_id?: string
    AND?: order_itemWhereInput | order_itemWhereInput[]
    OR?: order_itemWhereInput[]
    NOT?: order_itemWhereInput | order_itemWhereInput[]
    order_id?: IntFilter<"order_item"> | number
    room_id?: IntNullableFilter<"order_item"> | number | null
    ticket_id?: IntNullableFilter<"order_item"> | number | null
    check_in_date?: DateTimeNullableFilter<"order_item"> | Date | string | null
    check_out_date?: DateTimeNullableFilter<"order_item"> | Date | string | null
    people_count?: IntNullableFilter<"order_item"> | number | null
    room_count?: IntNullableFilter<"order_item"> | number | null
    quantity?: IntFilter<"order_item"> | number
    booked_date?: DateTimeNullableFilter<"order_item"> | Date | string | null
    valid_date?: DateTimeNullableFilter<"order_item"> | Date | string | null
    customer_order?: XOR<Customer_orderRelationFilter, customer_orderWhereInput>
    room?: XOR<RoomNullableRelationFilter, roomWhereInput> | null
    ticket?: XOR<TicketNullableRelationFilter, ticketWhereInput> | null
  }, "order_item_id">

  export type order_itemOrderByWithAggregationInput = {
    order_item_id?: SortOrder
    order_id?: SortOrder
    room_id?: SortOrderInput | SortOrder
    ticket_id?: SortOrderInput | SortOrder
    check_in_date?: SortOrderInput | SortOrder
    check_out_date?: SortOrderInput | SortOrder
    people_count?: SortOrderInput | SortOrder
    room_count?: SortOrderInput | SortOrder
    quantity?: SortOrder
    booked_date?: SortOrderInput | SortOrder
    valid_date?: SortOrderInput | SortOrder
    _count?: order_itemCountOrderByAggregateInput
    _avg?: order_itemAvgOrderByAggregateInput
    _max?: order_itemMaxOrderByAggregateInput
    _min?: order_itemMinOrderByAggregateInput
    _sum?: order_itemSumOrderByAggregateInput
  }

  export type order_itemScalarWhereWithAggregatesInput = {
    AND?: order_itemScalarWhereWithAggregatesInput | order_itemScalarWhereWithAggregatesInput[]
    OR?: order_itemScalarWhereWithAggregatesInput[]
    NOT?: order_itemScalarWhereWithAggregatesInput | order_itemScalarWhereWithAggregatesInput[]
    order_item_id?: StringWithAggregatesFilter<"order_item"> | string
    order_id?: IntWithAggregatesFilter<"order_item"> | number
    room_id?: IntNullableWithAggregatesFilter<"order_item"> | number | null
    ticket_id?: IntNullableWithAggregatesFilter<"order_item"> | number | null
    check_in_date?: DateTimeNullableWithAggregatesFilter<"order_item"> | Date | string | null
    check_out_date?: DateTimeNullableWithAggregatesFilter<"order_item"> | Date | string | null
    people_count?: IntNullableWithAggregatesFilter<"order_item"> | number | null
    room_count?: IntNullableWithAggregatesFilter<"order_item"> | number | null
    quantity?: IntWithAggregatesFilter<"order_item"> | number
    booked_date?: DateTimeNullableWithAggregatesFilter<"order_item"> | Date | string | null
    valid_date?: DateTimeNullableWithAggregatesFilter<"order_item"> | Date | string | null
  }

  export type roomWhereInput = {
    AND?: roomWhereInput | roomWhereInput[]
    OR?: roomWhereInput[]
    NOT?: roomWhereInput | roomWhereInput[]
    room_id?: IntFilter<"room"> | number
    room_type?: StringFilter<"room"> | string
    room_count?: IntFilter<"room"> | number
    description?: StringNullableFilter<"room"> | string | null
    price?: IntFilter<"room"> | number
    capacity?: IntFilter<"room"> | number
    img?: JsonNullableFilter<"room">
    order_item?: Order_itemListRelationFilter
  }

  export type roomOrderByWithRelationInput = {
    room_id?: SortOrder
    room_type?: SortOrder
    room_count?: SortOrder
    description?: SortOrderInput | SortOrder
    price?: SortOrder
    capacity?: SortOrder
    img?: SortOrderInput | SortOrder
    order_item?: order_itemOrderByRelationAggregateInput
  }

  export type roomWhereUniqueInput = Prisma.AtLeast<{
    room_id?: number
    AND?: roomWhereInput | roomWhereInput[]
    OR?: roomWhereInput[]
    NOT?: roomWhereInput | roomWhereInput[]
    room_type?: StringFilter<"room"> | string
    room_count?: IntFilter<"room"> | number
    description?: StringNullableFilter<"room"> | string | null
    price?: IntFilter<"room"> | number
    capacity?: IntFilter<"room"> | number
    img?: JsonNullableFilter<"room">
    order_item?: Order_itemListRelationFilter
  }, "room_id">

  export type roomOrderByWithAggregationInput = {
    room_id?: SortOrder
    room_type?: SortOrder
    room_count?: SortOrder
    description?: SortOrderInput | SortOrder
    price?: SortOrder
    capacity?: SortOrder
    img?: SortOrderInput | SortOrder
    _count?: roomCountOrderByAggregateInput
    _avg?: roomAvgOrderByAggregateInput
    _max?: roomMaxOrderByAggregateInput
    _min?: roomMinOrderByAggregateInput
    _sum?: roomSumOrderByAggregateInput
  }

  export type roomScalarWhereWithAggregatesInput = {
    AND?: roomScalarWhereWithAggregatesInput | roomScalarWhereWithAggregatesInput[]
    OR?: roomScalarWhereWithAggregatesInput[]
    NOT?: roomScalarWhereWithAggregatesInput | roomScalarWhereWithAggregatesInput[]
    room_id?: IntWithAggregatesFilter<"room"> | number
    room_type?: StringWithAggregatesFilter<"room"> | string
    room_count?: IntWithAggregatesFilter<"room"> | number
    description?: StringNullableWithAggregatesFilter<"room"> | string | null
    price?: IntWithAggregatesFilter<"room"> | number
    capacity?: IntWithAggregatesFilter<"room"> | number
    img?: JsonNullableWithAggregatesFilter<"room">
  }

  export type ticketWhereInput = {
    AND?: ticketWhereInput | ticketWhereInput[]
    OR?: ticketWhereInput[]
    NOT?: ticketWhereInput | ticketWhereInput[]
    ticket_id?: IntFilter<"ticket"> | number
    type?: StringFilter<"ticket"> | string
    price?: IntFilter<"ticket"> | number
    img?: JsonNullableFilter<"ticket">
    order_item?: Order_itemListRelationFilter
  }

  export type ticketOrderByWithRelationInput = {
    ticket_id?: SortOrder
    type?: SortOrder
    price?: SortOrder
    img?: SortOrderInput | SortOrder
    order_item?: order_itemOrderByRelationAggregateInput
  }

  export type ticketWhereUniqueInput = Prisma.AtLeast<{
    ticket_id?: number
    AND?: ticketWhereInput | ticketWhereInput[]
    OR?: ticketWhereInput[]
    NOT?: ticketWhereInput | ticketWhereInput[]
    type?: StringFilter<"ticket"> | string
    price?: IntFilter<"ticket"> | number
    img?: JsonNullableFilter<"ticket">
    order_item?: Order_itemListRelationFilter
  }, "ticket_id">

  export type ticketOrderByWithAggregationInput = {
    ticket_id?: SortOrder
    type?: SortOrder
    price?: SortOrder
    img?: SortOrderInput | SortOrder
    _count?: ticketCountOrderByAggregateInput
    _avg?: ticketAvgOrderByAggregateInput
    _max?: ticketMaxOrderByAggregateInput
    _min?: ticketMinOrderByAggregateInput
    _sum?: ticketSumOrderByAggregateInput
  }

  export type ticketScalarWhereWithAggregatesInput = {
    AND?: ticketScalarWhereWithAggregatesInput | ticketScalarWhereWithAggregatesInput[]
    OR?: ticketScalarWhereWithAggregatesInput[]
    NOT?: ticketScalarWhereWithAggregatesInput | ticketScalarWhereWithAggregatesInput[]
    ticket_id?: IntWithAggregatesFilter<"ticket"> | number
    type?: StringWithAggregatesFilter<"ticket"> | string
    price?: IntWithAggregatesFilter<"ticket"> | number
    img?: JsonNullableWithAggregatesFilter<"ticket">
  }

  export type more_aboutWhereInput = {
    AND?: more_aboutWhereInput | more_aboutWhereInput[]
    OR?: more_aboutWhereInput[]
    NOT?: more_aboutWhereInput | more_aboutWhereInput[]
    more_about_id?: IntFilter<"more_about"> | number
    more_link?: StringFilter<"more_about"> | string
    facility_id?: IntFilter<"more_about"> | number
    img?: JsonNullableFilter<"more_about">
    facility?: XOR<FacilityRelationFilter, facilityWhereInput>
  }

  export type more_aboutOrderByWithRelationInput = {
    more_about_id?: SortOrder
    more_link?: SortOrder
    facility_id?: SortOrder
    img?: SortOrderInput | SortOrder
    facility?: facilityOrderByWithRelationInput
  }

  export type more_aboutWhereUniqueInput = Prisma.AtLeast<{
    more_about_id?: number
    AND?: more_aboutWhereInput | more_aboutWhereInput[]
    OR?: more_aboutWhereInput[]
    NOT?: more_aboutWhereInput | more_aboutWhereInput[]
    more_link?: StringFilter<"more_about"> | string
    facility_id?: IntFilter<"more_about"> | number
    img?: JsonNullableFilter<"more_about">
    facility?: XOR<FacilityRelationFilter, facilityWhereInput>
  }, "more_about_id">

  export type more_aboutOrderByWithAggregationInput = {
    more_about_id?: SortOrder
    more_link?: SortOrder
    facility_id?: SortOrder
    img?: SortOrderInput | SortOrder
    _count?: more_aboutCountOrderByAggregateInput
    _avg?: more_aboutAvgOrderByAggregateInput
    _max?: more_aboutMaxOrderByAggregateInput
    _min?: more_aboutMinOrderByAggregateInput
    _sum?: more_aboutSumOrderByAggregateInput
  }

  export type more_aboutScalarWhereWithAggregatesInput = {
    AND?: more_aboutScalarWhereWithAggregatesInput | more_aboutScalarWhereWithAggregatesInput[]
    OR?: more_aboutScalarWhereWithAggregatesInput[]
    NOT?: more_aboutScalarWhereWithAggregatesInput | more_aboutScalarWhereWithAggregatesInput[]
    more_about_id?: IntWithAggregatesFilter<"more_about"> | number
    more_link?: StringWithAggregatesFilter<"more_about"> | string
    facility_id?: IntWithAggregatesFilter<"more_about"> | number
    img?: JsonNullableWithAggregatesFilter<"more_about">
  }

  export type memberCreateInput = {
    name: string
    address?: string | null
    birth?: Date | string | null
    account: string
    password: string
    phone?: string | null
    photo?: string | null
    credit_card?: credit_cardCreateNestedManyWithoutMemberInput
    customer_order?: customer_orderCreateNestedManyWithoutMemberInput
  }

  export type memberUncheckedCreateInput = {
    member_id?: number
    name: string
    address?: string | null
    birth?: Date | string | null
    account: string
    password: string
    phone?: string | null
    photo?: string | null
    credit_card?: credit_cardUncheckedCreateNestedManyWithoutMemberInput
    customer_order?: customer_orderUncheckedCreateNestedManyWithoutMemberInput
  }

  export type memberUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    birth?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    account?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    photo?: NullableStringFieldUpdateOperationsInput | string | null
    credit_card?: credit_cardUpdateManyWithoutMemberNestedInput
    customer_order?: customer_orderUpdateManyWithoutMemberNestedInput
  }

  export type memberUncheckedUpdateInput = {
    member_id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    birth?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    account?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    photo?: NullableStringFieldUpdateOperationsInput | string | null
    credit_card?: credit_cardUncheckedUpdateManyWithoutMemberNestedInput
    customer_order?: customer_orderUncheckedUpdateManyWithoutMemberNestedInput
  }

  export type memberCreateManyInput = {
    member_id?: number
    name: string
    address?: string | null
    birth?: Date | string | null
    account: string
    password: string
    phone?: string | null
    photo?: string | null
  }

  export type memberUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    birth?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    account?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    photo?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type memberUncheckedUpdateManyInput = {
    member_id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    birth?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    account?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    photo?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type credit_cardCreateInput = {
    number: string
    expiry: Date | string
    cvv: string
    member?: memberCreateNestedOneWithoutCredit_cardInput
  }

  export type credit_cardUncheckedCreateInput = {
    credit_card_id?: number
    member_id?: number | null
    number: string
    expiry: Date | string
    cvv: string
  }

  export type credit_cardUpdateInput = {
    number?: StringFieldUpdateOperationsInput | string
    expiry?: DateTimeFieldUpdateOperationsInput | Date | string
    cvv?: StringFieldUpdateOperationsInput | string
    member?: memberUpdateOneWithoutCredit_cardNestedInput
  }

  export type credit_cardUncheckedUpdateInput = {
    credit_card_id?: IntFieldUpdateOperationsInput | number
    member_id?: NullableIntFieldUpdateOperationsInput | number | null
    number?: StringFieldUpdateOperationsInput | string
    expiry?: DateTimeFieldUpdateOperationsInput | Date | string
    cvv?: StringFieldUpdateOperationsInput | string
  }

  export type credit_cardCreateManyInput = {
    credit_card_id?: number
    member_id?: number | null
    number: string
    expiry: Date | string
    cvv: string
  }

  export type credit_cardUpdateManyMutationInput = {
    number?: StringFieldUpdateOperationsInput | string
    expiry?: DateTimeFieldUpdateOperationsInput | Date | string
    cvv?: StringFieldUpdateOperationsInput | string
  }

  export type credit_cardUncheckedUpdateManyInput = {
    credit_card_id?: IntFieldUpdateOperationsInput | number
    member_id?: NullableIntFieldUpdateOperationsInput | number | null
    number?: StringFieldUpdateOperationsInput | string
    expiry?: DateTimeFieldUpdateOperationsInput | Date | string
    cvv?: StringFieldUpdateOperationsInput | string
  }

  export type customer_orderCreateInput = {
    total_amount: number
    status: string
    order_date?: Date | string | null
    member: memberCreateNestedOneWithoutCustomer_orderInput
    order_info?: order_infoCreateNestedManyWithoutCustomer_orderInput
    order_item?: order_itemCreateNestedManyWithoutCustomer_orderInput
  }

  export type customer_orderUncheckedCreateInput = {
    order_id?: number
    member_id: number
    total_amount: number
    status: string
    order_date?: Date | string | null
    order_info?: order_infoUncheckedCreateNestedManyWithoutCustomer_orderInput
    order_item?: order_itemUncheckedCreateNestedManyWithoutCustomer_orderInput
  }

  export type customer_orderUpdateInput = {
    total_amount?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    order_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    member?: memberUpdateOneRequiredWithoutCustomer_orderNestedInput
    order_info?: order_infoUpdateManyWithoutCustomer_orderNestedInput
    order_item?: order_itemUpdateManyWithoutCustomer_orderNestedInput
  }

  export type customer_orderUncheckedUpdateInput = {
    order_id?: IntFieldUpdateOperationsInput | number
    member_id?: IntFieldUpdateOperationsInput | number
    total_amount?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    order_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    order_info?: order_infoUncheckedUpdateManyWithoutCustomer_orderNestedInput
    order_item?: order_itemUncheckedUpdateManyWithoutCustomer_orderNestedInput
  }

  export type customer_orderCreateManyInput = {
    order_id?: number
    member_id: number
    total_amount: number
    status: string
    order_date?: Date | string | null
  }

  export type customer_orderUpdateManyMutationInput = {
    total_amount?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    order_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type customer_orderUncheckedUpdateManyInput = {
    order_id?: IntFieldUpdateOperationsInput | number
    member_id?: IntFieldUpdateOperationsInput | number
    total_amount?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    order_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type facilityCreateInput = {
    title: string
    image?: NullableJsonNullValueInput | InputJsonValue
    category: string
    des?: string | null
    content?: string | null
    area: number
    location: string
    open_time?: string | null
    data_maintain?: string | null
    facility_id_name: string
    facility_class_name: string
    rule_others: string
    remarks?: string | null
    facility_rule?: facility_ruleCreateNestedManyWithoutFacilityInput
    more_about?: more_aboutCreateNestedManyWithoutFacilityInput
  }

  export type facilityUncheckedCreateInput = {
    facility_id?: number
    title: string
    image?: NullableJsonNullValueInput | InputJsonValue
    category: string
    des?: string | null
    content?: string | null
    area: number
    location: string
    open_time?: string | null
    data_maintain?: string | null
    facility_id_name: string
    facility_class_name: string
    rule_others: string
    remarks?: string | null
    facility_rule?: facility_ruleUncheckedCreateNestedManyWithoutFacilityInput
    more_about?: more_aboutUncheckedCreateNestedManyWithoutFacilityInput
  }

  export type facilityUpdateInput = {
    title?: StringFieldUpdateOperationsInput | string
    image?: NullableJsonNullValueInput | InputJsonValue
    category?: StringFieldUpdateOperationsInput | string
    des?: NullableStringFieldUpdateOperationsInput | string | null
    content?: NullableStringFieldUpdateOperationsInput | string | null
    area?: IntFieldUpdateOperationsInput | number
    location?: StringFieldUpdateOperationsInput | string
    open_time?: NullableStringFieldUpdateOperationsInput | string | null
    data_maintain?: NullableStringFieldUpdateOperationsInput | string | null
    facility_id_name?: StringFieldUpdateOperationsInput | string
    facility_class_name?: StringFieldUpdateOperationsInput | string
    rule_others?: StringFieldUpdateOperationsInput | string
    remarks?: NullableStringFieldUpdateOperationsInput | string | null
    facility_rule?: facility_ruleUpdateManyWithoutFacilityNestedInput
    more_about?: more_aboutUpdateManyWithoutFacilityNestedInput
  }

  export type facilityUncheckedUpdateInput = {
    facility_id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    image?: NullableJsonNullValueInput | InputJsonValue
    category?: StringFieldUpdateOperationsInput | string
    des?: NullableStringFieldUpdateOperationsInput | string | null
    content?: NullableStringFieldUpdateOperationsInput | string | null
    area?: IntFieldUpdateOperationsInput | number
    location?: StringFieldUpdateOperationsInput | string
    open_time?: NullableStringFieldUpdateOperationsInput | string | null
    data_maintain?: NullableStringFieldUpdateOperationsInput | string | null
    facility_id_name?: StringFieldUpdateOperationsInput | string
    facility_class_name?: StringFieldUpdateOperationsInput | string
    rule_others?: StringFieldUpdateOperationsInput | string
    remarks?: NullableStringFieldUpdateOperationsInput | string | null
    facility_rule?: facility_ruleUncheckedUpdateManyWithoutFacilityNestedInput
    more_about?: more_aboutUncheckedUpdateManyWithoutFacilityNestedInput
  }

  export type facilityCreateManyInput = {
    facility_id?: number
    title: string
    image?: NullableJsonNullValueInput | InputJsonValue
    category: string
    des?: string | null
    content?: string | null
    area: number
    location: string
    open_time?: string | null
    data_maintain?: string | null
    facility_id_name: string
    facility_class_name: string
    rule_others: string
    remarks?: string | null
  }

  export type facilityUpdateManyMutationInput = {
    title?: StringFieldUpdateOperationsInput | string
    image?: NullableJsonNullValueInput | InputJsonValue
    category?: StringFieldUpdateOperationsInput | string
    des?: NullableStringFieldUpdateOperationsInput | string | null
    content?: NullableStringFieldUpdateOperationsInput | string | null
    area?: IntFieldUpdateOperationsInput | number
    location?: StringFieldUpdateOperationsInput | string
    open_time?: NullableStringFieldUpdateOperationsInput | string | null
    data_maintain?: NullableStringFieldUpdateOperationsInput | string | null
    facility_id_name?: StringFieldUpdateOperationsInput | string
    facility_class_name?: StringFieldUpdateOperationsInput | string
    rule_others?: StringFieldUpdateOperationsInput | string
    remarks?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type facilityUncheckedUpdateManyInput = {
    facility_id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    image?: NullableJsonNullValueInput | InputJsonValue
    category?: StringFieldUpdateOperationsInput | string
    des?: NullableStringFieldUpdateOperationsInput | string | null
    content?: NullableStringFieldUpdateOperationsInput | string | null
    area?: IntFieldUpdateOperationsInput | number
    location?: StringFieldUpdateOperationsInput | string
    open_time?: NullableStringFieldUpdateOperationsInput | string | null
    data_maintain?: NullableStringFieldUpdateOperationsInput | string | null
    facility_id_name?: StringFieldUpdateOperationsInput | string
    facility_class_name?: StringFieldUpdateOperationsInput | string
    rule_others?: StringFieldUpdateOperationsInput | string
    remarks?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type facility_ruleCreateInput = {
    rule_type?: string | null
    rule_value?: string | null
    facility?: facilityCreateNestedOneWithoutFacility_ruleInput
  }

  export type facility_ruleUncheckedCreateInput = {
    facility_rule_id?: number
    facility_id?: number | null
    rule_type?: string | null
    rule_value?: string | null
  }

  export type facility_ruleUpdateInput = {
    rule_type?: NullableStringFieldUpdateOperationsInput | string | null
    rule_value?: NullableStringFieldUpdateOperationsInput | string | null
    facility?: facilityUpdateOneWithoutFacility_ruleNestedInput
  }

  export type facility_ruleUncheckedUpdateInput = {
    facility_rule_id?: IntFieldUpdateOperationsInput | number
    facility_id?: NullableIntFieldUpdateOperationsInput | number | null
    rule_type?: NullableStringFieldUpdateOperationsInput | string | null
    rule_value?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type facility_ruleCreateManyInput = {
    facility_rule_id?: number
    facility_id?: number | null
    rule_type?: string | null
    rule_value?: string | null
  }

  export type facility_ruleUpdateManyMutationInput = {
    rule_type?: NullableStringFieldUpdateOperationsInput | string | null
    rule_value?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type facility_ruleUncheckedUpdateManyInput = {
    facility_rule_id?: IntFieldUpdateOperationsInput | number
    facility_id?: NullableIntFieldUpdateOperationsInput | number | null
    rule_type?: NullableStringFieldUpdateOperationsInput | string | null
    rule_value?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type order_infoCreateInput = {
    customer: string
    phone_number: string
    address: string
    payment_method: string
    customer_order: customer_orderCreateNestedOneWithoutOrder_infoInput
  }

  export type order_infoUncheckedCreateInput = {
    order_info_id?: number
    order_id: number
    customer: string
    phone_number: string
    address: string
    payment_method: string
  }

  export type order_infoUpdateInput = {
    customer?: StringFieldUpdateOperationsInput | string
    phone_number?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    payment_method?: StringFieldUpdateOperationsInput | string
    customer_order?: customer_orderUpdateOneRequiredWithoutOrder_infoNestedInput
  }

  export type order_infoUncheckedUpdateInput = {
    order_info_id?: IntFieldUpdateOperationsInput | number
    order_id?: IntFieldUpdateOperationsInput | number
    customer?: StringFieldUpdateOperationsInput | string
    phone_number?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    payment_method?: StringFieldUpdateOperationsInput | string
  }

  export type order_infoCreateManyInput = {
    order_info_id?: number
    order_id: number
    customer: string
    phone_number: string
    address: string
    payment_method: string
  }

  export type order_infoUpdateManyMutationInput = {
    customer?: StringFieldUpdateOperationsInput | string
    phone_number?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    payment_method?: StringFieldUpdateOperationsInput | string
  }

  export type order_infoUncheckedUpdateManyInput = {
    order_info_id?: IntFieldUpdateOperationsInput | number
    order_id?: IntFieldUpdateOperationsInput | number
    customer?: StringFieldUpdateOperationsInput | string
    phone_number?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    payment_method?: StringFieldUpdateOperationsInput | string
  }

  export type order_itemCreateInput = {
    order_item_id: string
    check_in_date?: Date | string | null
    check_out_date?: Date | string | null
    people_count?: number | null
    room_count?: number | null
    quantity: number
    booked_date?: Date | string | null
    valid_date?: Date | string | null
    customer_order: customer_orderCreateNestedOneWithoutOrder_itemInput
    room?: roomCreateNestedOneWithoutOrder_itemInput
    ticket?: ticketCreateNestedOneWithoutOrder_itemInput
  }

  export type order_itemUncheckedCreateInput = {
    order_item_id: string
    order_id: number
    room_id?: number | null
    ticket_id?: number | null
    check_in_date?: Date | string | null
    check_out_date?: Date | string | null
    people_count?: number | null
    room_count?: number | null
    quantity: number
    booked_date?: Date | string | null
    valid_date?: Date | string | null
  }

  export type order_itemUpdateInput = {
    order_item_id?: StringFieldUpdateOperationsInput | string
    check_in_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    check_out_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    people_count?: NullableIntFieldUpdateOperationsInput | number | null
    room_count?: NullableIntFieldUpdateOperationsInput | number | null
    quantity?: IntFieldUpdateOperationsInput | number
    booked_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    valid_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    customer_order?: customer_orderUpdateOneRequiredWithoutOrder_itemNestedInput
    room?: roomUpdateOneWithoutOrder_itemNestedInput
    ticket?: ticketUpdateOneWithoutOrder_itemNestedInput
  }

  export type order_itemUncheckedUpdateInput = {
    order_item_id?: StringFieldUpdateOperationsInput | string
    order_id?: IntFieldUpdateOperationsInput | number
    room_id?: NullableIntFieldUpdateOperationsInput | number | null
    ticket_id?: NullableIntFieldUpdateOperationsInput | number | null
    check_in_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    check_out_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    people_count?: NullableIntFieldUpdateOperationsInput | number | null
    room_count?: NullableIntFieldUpdateOperationsInput | number | null
    quantity?: IntFieldUpdateOperationsInput | number
    booked_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    valid_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type order_itemCreateManyInput = {
    order_item_id: string
    order_id: number
    room_id?: number | null
    ticket_id?: number | null
    check_in_date?: Date | string | null
    check_out_date?: Date | string | null
    people_count?: number | null
    room_count?: number | null
    quantity: number
    booked_date?: Date | string | null
    valid_date?: Date | string | null
  }

  export type order_itemUpdateManyMutationInput = {
    order_item_id?: StringFieldUpdateOperationsInput | string
    check_in_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    check_out_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    people_count?: NullableIntFieldUpdateOperationsInput | number | null
    room_count?: NullableIntFieldUpdateOperationsInput | number | null
    quantity?: IntFieldUpdateOperationsInput | number
    booked_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    valid_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type order_itemUncheckedUpdateManyInput = {
    order_item_id?: StringFieldUpdateOperationsInput | string
    order_id?: IntFieldUpdateOperationsInput | number
    room_id?: NullableIntFieldUpdateOperationsInput | number | null
    ticket_id?: NullableIntFieldUpdateOperationsInput | number | null
    check_in_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    check_out_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    people_count?: NullableIntFieldUpdateOperationsInput | number | null
    room_count?: NullableIntFieldUpdateOperationsInput | number | null
    quantity?: IntFieldUpdateOperationsInput | number
    booked_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    valid_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type roomCreateInput = {
    room_type: string
    room_count?: number
    description?: string | null
    price: number
    capacity?: number
    img?: NullableJsonNullValueInput | InputJsonValue
    order_item?: order_itemCreateNestedManyWithoutRoomInput
  }

  export type roomUncheckedCreateInput = {
    room_id?: number
    room_type: string
    room_count?: number
    description?: string | null
    price: number
    capacity?: number
    img?: NullableJsonNullValueInput | InputJsonValue
    order_item?: order_itemUncheckedCreateNestedManyWithoutRoomInput
  }

  export type roomUpdateInput = {
    room_type?: StringFieldUpdateOperationsInput | string
    room_count?: IntFieldUpdateOperationsInput | number
    description?: NullableStringFieldUpdateOperationsInput | string | null
    price?: IntFieldUpdateOperationsInput | number
    capacity?: IntFieldUpdateOperationsInput | number
    img?: NullableJsonNullValueInput | InputJsonValue
    order_item?: order_itemUpdateManyWithoutRoomNestedInput
  }

  export type roomUncheckedUpdateInput = {
    room_id?: IntFieldUpdateOperationsInput | number
    room_type?: StringFieldUpdateOperationsInput | string
    room_count?: IntFieldUpdateOperationsInput | number
    description?: NullableStringFieldUpdateOperationsInput | string | null
    price?: IntFieldUpdateOperationsInput | number
    capacity?: IntFieldUpdateOperationsInput | number
    img?: NullableJsonNullValueInput | InputJsonValue
    order_item?: order_itemUncheckedUpdateManyWithoutRoomNestedInput
  }

  export type roomCreateManyInput = {
    room_id?: number
    room_type: string
    room_count?: number
    description?: string | null
    price: number
    capacity?: number
    img?: NullableJsonNullValueInput | InputJsonValue
  }

  export type roomUpdateManyMutationInput = {
    room_type?: StringFieldUpdateOperationsInput | string
    room_count?: IntFieldUpdateOperationsInput | number
    description?: NullableStringFieldUpdateOperationsInput | string | null
    price?: IntFieldUpdateOperationsInput | number
    capacity?: IntFieldUpdateOperationsInput | number
    img?: NullableJsonNullValueInput | InputJsonValue
  }

  export type roomUncheckedUpdateManyInput = {
    room_id?: IntFieldUpdateOperationsInput | number
    room_type?: StringFieldUpdateOperationsInput | string
    room_count?: IntFieldUpdateOperationsInput | number
    description?: NullableStringFieldUpdateOperationsInput | string | null
    price?: IntFieldUpdateOperationsInput | number
    capacity?: IntFieldUpdateOperationsInput | number
    img?: NullableJsonNullValueInput | InputJsonValue
  }

  export type ticketCreateInput = {
    type: string
    price: number
    img?: NullableJsonNullValueInput | InputJsonValue
    order_item?: order_itemCreateNestedManyWithoutTicketInput
  }

  export type ticketUncheckedCreateInput = {
    ticket_id?: number
    type: string
    price: number
    img?: NullableJsonNullValueInput | InputJsonValue
    order_item?: order_itemUncheckedCreateNestedManyWithoutTicketInput
  }

  export type ticketUpdateInput = {
    type?: StringFieldUpdateOperationsInput | string
    price?: IntFieldUpdateOperationsInput | number
    img?: NullableJsonNullValueInput | InputJsonValue
    order_item?: order_itemUpdateManyWithoutTicketNestedInput
  }

  export type ticketUncheckedUpdateInput = {
    ticket_id?: IntFieldUpdateOperationsInput | number
    type?: StringFieldUpdateOperationsInput | string
    price?: IntFieldUpdateOperationsInput | number
    img?: NullableJsonNullValueInput | InputJsonValue
    order_item?: order_itemUncheckedUpdateManyWithoutTicketNestedInput
  }

  export type ticketCreateManyInput = {
    ticket_id?: number
    type: string
    price: number
    img?: NullableJsonNullValueInput | InputJsonValue
  }

  export type ticketUpdateManyMutationInput = {
    type?: StringFieldUpdateOperationsInput | string
    price?: IntFieldUpdateOperationsInput | number
    img?: NullableJsonNullValueInput | InputJsonValue
  }

  export type ticketUncheckedUpdateManyInput = {
    ticket_id?: IntFieldUpdateOperationsInput | number
    type?: StringFieldUpdateOperationsInput | string
    price?: IntFieldUpdateOperationsInput | number
    img?: NullableJsonNullValueInput | InputJsonValue
  }

  export type more_aboutCreateInput = {
    more_link: string
    img?: NullableJsonNullValueInput | InputJsonValue
    facility: facilityCreateNestedOneWithoutMore_aboutInput
  }

  export type more_aboutUncheckedCreateInput = {
    more_about_id?: number
    more_link: string
    facility_id: number
    img?: NullableJsonNullValueInput | InputJsonValue
  }

  export type more_aboutUpdateInput = {
    more_link?: StringFieldUpdateOperationsInput | string
    img?: NullableJsonNullValueInput | InputJsonValue
    facility?: facilityUpdateOneRequiredWithoutMore_aboutNestedInput
  }

  export type more_aboutUncheckedUpdateInput = {
    more_about_id?: IntFieldUpdateOperationsInput | number
    more_link?: StringFieldUpdateOperationsInput | string
    facility_id?: IntFieldUpdateOperationsInput | number
    img?: NullableJsonNullValueInput | InputJsonValue
  }

  export type more_aboutCreateManyInput = {
    more_about_id?: number
    more_link: string
    facility_id: number
    img?: NullableJsonNullValueInput | InputJsonValue
  }

  export type more_aboutUpdateManyMutationInput = {
    more_link?: StringFieldUpdateOperationsInput | string
    img?: NullableJsonNullValueInput | InputJsonValue
  }

  export type more_aboutUncheckedUpdateManyInput = {
    more_about_id?: IntFieldUpdateOperationsInput | number
    more_link?: StringFieldUpdateOperationsInput | string
    facility_id?: IntFieldUpdateOperationsInput | number
    img?: NullableJsonNullValueInput | InputJsonValue
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type Credit_cardListRelationFilter = {
    every?: credit_cardWhereInput
    some?: credit_cardWhereInput
    none?: credit_cardWhereInput
  }

  export type Customer_orderListRelationFilter = {
    every?: customer_orderWhereInput
    some?: customer_orderWhereInput
    none?: customer_orderWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type credit_cardOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type customer_orderOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type memberCountOrderByAggregateInput = {
    member_id?: SortOrder
    name?: SortOrder
    address?: SortOrder
    birth?: SortOrder
    account?: SortOrder
    password?: SortOrder
    phone?: SortOrder
    photo?: SortOrder
  }

  export type memberAvgOrderByAggregateInput = {
    member_id?: SortOrder
  }

  export type memberMaxOrderByAggregateInput = {
    member_id?: SortOrder
    name?: SortOrder
    address?: SortOrder
    birth?: SortOrder
    account?: SortOrder
    password?: SortOrder
    phone?: SortOrder
    photo?: SortOrder
  }

  export type memberMinOrderByAggregateInput = {
    member_id?: SortOrder
    name?: SortOrder
    address?: SortOrder
    birth?: SortOrder
    account?: SortOrder
    password?: SortOrder
    phone?: SortOrder
    photo?: SortOrder
  }

  export type memberSumOrderByAggregateInput = {
    member_id?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type MemberNullableRelationFilter = {
    is?: memberWhereInput | null
    isNot?: memberWhereInput | null
  }

  export type credit_cardCountOrderByAggregateInput = {
    credit_card_id?: SortOrder
    member_id?: SortOrder
    number?: SortOrder
    expiry?: SortOrder
    cvv?: SortOrder
  }

  export type credit_cardAvgOrderByAggregateInput = {
    credit_card_id?: SortOrder
    member_id?: SortOrder
  }

  export type credit_cardMaxOrderByAggregateInput = {
    credit_card_id?: SortOrder
    member_id?: SortOrder
    number?: SortOrder
    expiry?: SortOrder
    cvv?: SortOrder
  }

  export type credit_cardMinOrderByAggregateInput = {
    credit_card_id?: SortOrder
    member_id?: SortOrder
    number?: SortOrder
    expiry?: SortOrder
    cvv?: SortOrder
  }

  export type credit_cardSumOrderByAggregateInput = {
    credit_card_id?: SortOrder
    member_id?: SortOrder
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type MemberRelationFilter = {
    is?: memberWhereInput
    isNot?: memberWhereInput
  }

  export type Order_infoListRelationFilter = {
    every?: order_infoWhereInput
    some?: order_infoWhereInput
    none?: order_infoWhereInput
  }

  export type Order_itemListRelationFilter = {
    every?: order_itemWhereInput
    some?: order_itemWhereInput
    none?: order_itemWhereInput
  }

  export type order_infoOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type order_itemOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type customer_orderCountOrderByAggregateInput = {
    order_id?: SortOrder
    member_id?: SortOrder
    total_amount?: SortOrder
    status?: SortOrder
    order_date?: SortOrder
  }

  export type customer_orderAvgOrderByAggregateInput = {
    order_id?: SortOrder
    member_id?: SortOrder
    total_amount?: SortOrder
  }

  export type customer_orderMaxOrderByAggregateInput = {
    order_id?: SortOrder
    member_id?: SortOrder
    total_amount?: SortOrder
    status?: SortOrder
    order_date?: SortOrder
  }

  export type customer_orderMinOrderByAggregateInput = {
    order_id?: SortOrder
    member_id?: SortOrder
    total_amount?: SortOrder
    status?: SortOrder
    order_date?: SortOrder
  }

  export type customer_orderSumOrderByAggregateInput = {
    order_id?: SortOrder
    member_id?: SortOrder
    total_amount?: SortOrder
  }
  export type JsonNullableFilter<$PrismaModel = never> = 
    | PatchUndefined<
        Either<Required<JsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type Facility_ruleListRelationFilter = {
    every?: facility_ruleWhereInput
    some?: facility_ruleWhereInput
    none?: facility_ruleWhereInput
  }

  export type More_aboutListRelationFilter = {
    every?: more_aboutWhereInput
    some?: more_aboutWhereInput
    none?: more_aboutWhereInput
  }

  export type facility_ruleOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type more_aboutOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type facilityCountOrderByAggregateInput = {
    facility_id?: SortOrder
    title?: SortOrder
    image?: SortOrder
    category?: SortOrder
    des?: SortOrder
    content?: SortOrder
    area?: SortOrder
    location?: SortOrder
    open_time?: SortOrder
    data_maintain?: SortOrder
    facility_id_name?: SortOrder
    facility_class_name?: SortOrder
    rule_others?: SortOrder
    remarks?: SortOrder
  }

  export type facilityAvgOrderByAggregateInput = {
    facility_id?: SortOrder
    area?: SortOrder
  }

  export type facilityMaxOrderByAggregateInput = {
    facility_id?: SortOrder
    title?: SortOrder
    category?: SortOrder
    des?: SortOrder
    content?: SortOrder
    area?: SortOrder
    location?: SortOrder
    open_time?: SortOrder
    data_maintain?: SortOrder
    facility_id_name?: SortOrder
    facility_class_name?: SortOrder
    rule_others?: SortOrder
    remarks?: SortOrder
  }

  export type facilityMinOrderByAggregateInput = {
    facility_id?: SortOrder
    title?: SortOrder
    category?: SortOrder
    des?: SortOrder
    content?: SortOrder
    area?: SortOrder
    location?: SortOrder
    open_time?: SortOrder
    data_maintain?: SortOrder
    facility_id_name?: SortOrder
    facility_class_name?: SortOrder
    rule_others?: SortOrder
    remarks?: SortOrder
  }

  export type facilitySumOrderByAggregateInput = {
    facility_id?: SortOrder
    area?: SortOrder
  }
  export type JsonNullableWithAggregatesFilter<$PrismaModel = never> = 
    | PatchUndefined<
        Either<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableWithAggregatesFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedJsonNullableFilter<$PrismaModel>
    _max?: NestedJsonNullableFilter<$PrismaModel>
  }

  export type FacilityNullableRelationFilter = {
    is?: facilityWhereInput | null
    isNot?: facilityWhereInput | null
  }

  export type facility_ruleCountOrderByAggregateInput = {
    facility_rule_id?: SortOrder
    facility_id?: SortOrder
    rule_type?: SortOrder
    rule_value?: SortOrder
  }

  export type facility_ruleAvgOrderByAggregateInput = {
    facility_rule_id?: SortOrder
    facility_id?: SortOrder
  }

  export type facility_ruleMaxOrderByAggregateInput = {
    facility_rule_id?: SortOrder
    facility_id?: SortOrder
    rule_type?: SortOrder
    rule_value?: SortOrder
  }

  export type facility_ruleMinOrderByAggregateInput = {
    facility_rule_id?: SortOrder
    facility_id?: SortOrder
    rule_type?: SortOrder
    rule_value?: SortOrder
  }

  export type facility_ruleSumOrderByAggregateInput = {
    facility_rule_id?: SortOrder
    facility_id?: SortOrder
  }

  export type Customer_orderRelationFilter = {
    is?: customer_orderWhereInput
    isNot?: customer_orderWhereInput
  }

  export type order_infoCountOrderByAggregateInput = {
    order_info_id?: SortOrder
    order_id?: SortOrder
    customer?: SortOrder
    phone_number?: SortOrder
    address?: SortOrder
    payment_method?: SortOrder
  }

  export type order_infoAvgOrderByAggregateInput = {
    order_info_id?: SortOrder
    order_id?: SortOrder
  }

  export type order_infoMaxOrderByAggregateInput = {
    order_info_id?: SortOrder
    order_id?: SortOrder
    customer?: SortOrder
    phone_number?: SortOrder
    address?: SortOrder
    payment_method?: SortOrder
  }

  export type order_infoMinOrderByAggregateInput = {
    order_info_id?: SortOrder
    order_id?: SortOrder
    customer?: SortOrder
    phone_number?: SortOrder
    address?: SortOrder
    payment_method?: SortOrder
  }

  export type order_infoSumOrderByAggregateInput = {
    order_info_id?: SortOrder
    order_id?: SortOrder
  }

  export type RoomNullableRelationFilter = {
    is?: roomWhereInput | null
    isNot?: roomWhereInput | null
  }

  export type TicketNullableRelationFilter = {
    is?: ticketWhereInput | null
    isNot?: ticketWhereInput | null
  }

  export type order_itemCountOrderByAggregateInput = {
    order_item_id?: SortOrder
    order_id?: SortOrder
    room_id?: SortOrder
    ticket_id?: SortOrder
    check_in_date?: SortOrder
    check_out_date?: SortOrder
    people_count?: SortOrder
    room_count?: SortOrder
    quantity?: SortOrder
    booked_date?: SortOrder
    valid_date?: SortOrder
  }

  export type order_itemAvgOrderByAggregateInput = {
    order_id?: SortOrder
    room_id?: SortOrder
    ticket_id?: SortOrder
    people_count?: SortOrder
    room_count?: SortOrder
    quantity?: SortOrder
  }

  export type order_itemMaxOrderByAggregateInput = {
    order_item_id?: SortOrder
    order_id?: SortOrder
    room_id?: SortOrder
    ticket_id?: SortOrder
    check_in_date?: SortOrder
    check_out_date?: SortOrder
    people_count?: SortOrder
    room_count?: SortOrder
    quantity?: SortOrder
    booked_date?: SortOrder
    valid_date?: SortOrder
  }

  export type order_itemMinOrderByAggregateInput = {
    order_item_id?: SortOrder
    order_id?: SortOrder
    room_id?: SortOrder
    ticket_id?: SortOrder
    check_in_date?: SortOrder
    check_out_date?: SortOrder
    people_count?: SortOrder
    room_count?: SortOrder
    quantity?: SortOrder
    booked_date?: SortOrder
    valid_date?: SortOrder
  }

  export type order_itemSumOrderByAggregateInput = {
    order_id?: SortOrder
    room_id?: SortOrder
    ticket_id?: SortOrder
    people_count?: SortOrder
    room_count?: SortOrder
    quantity?: SortOrder
  }

  export type roomCountOrderByAggregateInput = {
    room_id?: SortOrder
    room_type?: SortOrder
    room_count?: SortOrder
    description?: SortOrder
    price?: SortOrder
    capacity?: SortOrder
    img?: SortOrder
  }

  export type roomAvgOrderByAggregateInput = {
    room_id?: SortOrder
    room_count?: SortOrder
    price?: SortOrder
    capacity?: SortOrder
  }

  export type roomMaxOrderByAggregateInput = {
    room_id?: SortOrder
    room_type?: SortOrder
    room_count?: SortOrder
    description?: SortOrder
    price?: SortOrder
    capacity?: SortOrder
  }

  export type roomMinOrderByAggregateInput = {
    room_id?: SortOrder
    room_type?: SortOrder
    room_count?: SortOrder
    description?: SortOrder
    price?: SortOrder
    capacity?: SortOrder
  }

  export type roomSumOrderByAggregateInput = {
    room_id?: SortOrder
    room_count?: SortOrder
    price?: SortOrder
    capacity?: SortOrder
  }

  export type ticketCountOrderByAggregateInput = {
    ticket_id?: SortOrder
    type?: SortOrder
    price?: SortOrder
    img?: SortOrder
  }

  export type ticketAvgOrderByAggregateInput = {
    ticket_id?: SortOrder
    price?: SortOrder
  }

  export type ticketMaxOrderByAggregateInput = {
    ticket_id?: SortOrder
    type?: SortOrder
    price?: SortOrder
  }

  export type ticketMinOrderByAggregateInput = {
    ticket_id?: SortOrder
    type?: SortOrder
    price?: SortOrder
  }

  export type ticketSumOrderByAggregateInput = {
    ticket_id?: SortOrder
    price?: SortOrder
  }

  export type FacilityRelationFilter = {
    is?: facilityWhereInput
    isNot?: facilityWhereInput
  }

  export type more_aboutCountOrderByAggregateInput = {
    more_about_id?: SortOrder
    more_link?: SortOrder
    facility_id?: SortOrder
    img?: SortOrder
  }

  export type more_aboutAvgOrderByAggregateInput = {
    more_about_id?: SortOrder
    facility_id?: SortOrder
  }

  export type more_aboutMaxOrderByAggregateInput = {
    more_about_id?: SortOrder
    more_link?: SortOrder
    facility_id?: SortOrder
  }

  export type more_aboutMinOrderByAggregateInput = {
    more_about_id?: SortOrder
    more_link?: SortOrder
    facility_id?: SortOrder
  }

  export type more_aboutSumOrderByAggregateInput = {
    more_about_id?: SortOrder
    facility_id?: SortOrder
  }

  export type credit_cardCreateNestedManyWithoutMemberInput = {
    create?: XOR<credit_cardCreateWithoutMemberInput, credit_cardUncheckedCreateWithoutMemberInput> | credit_cardCreateWithoutMemberInput[] | credit_cardUncheckedCreateWithoutMemberInput[]
    connectOrCreate?: credit_cardCreateOrConnectWithoutMemberInput | credit_cardCreateOrConnectWithoutMemberInput[]
    createMany?: credit_cardCreateManyMemberInputEnvelope
    connect?: credit_cardWhereUniqueInput | credit_cardWhereUniqueInput[]
  }

  export type customer_orderCreateNestedManyWithoutMemberInput = {
    create?: XOR<customer_orderCreateWithoutMemberInput, customer_orderUncheckedCreateWithoutMemberInput> | customer_orderCreateWithoutMemberInput[] | customer_orderUncheckedCreateWithoutMemberInput[]
    connectOrCreate?: customer_orderCreateOrConnectWithoutMemberInput | customer_orderCreateOrConnectWithoutMemberInput[]
    createMany?: customer_orderCreateManyMemberInputEnvelope
    connect?: customer_orderWhereUniqueInput | customer_orderWhereUniqueInput[]
  }

  export type credit_cardUncheckedCreateNestedManyWithoutMemberInput = {
    create?: XOR<credit_cardCreateWithoutMemberInput, credit_cardUncheckedCreateWithoutMemberInput> | credit_cardCreateWithoutMemberInput[] | credit_cardUncheckedCreateWithoutMemberInput[]
    connectOrCreate?: credit_cardCreateOrConnectWithoutMemberInput | credit_cardCreateOrConnectWithoutMemberInput[]
    createMany?: credit_cardCreateManyMemberInputEnvelope
    connect?: credit_cardWhereUniqueInput | credit_cardWhereUniqueInput[]
  }

  export type customer_orderUncheckedCreateNestedManyWithoutMemberInput = {
    create?: XOR<customer_orderCreateWithoutMemberInput, customer_orderUncheckedCreateWithoutMemberInput> | customer_orderCreateWithoutMemberInput[] | customer_orderUncheckedCreateWithoutMemberInput[]
    connectOrCreate?: customer_orderCreateOrConnectWithoutMemberInput | customer_orderCreateOrConnectWithoutMemberInput[]
    createMany?: customer_orderCreateManyMemberInputEnvelope
    connect?: customer_orderWhereUniqueInput | customer_orderWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type credit_cardUpdateManyWithoutMemberNestedInput = {
    create?: XOR<credit_cardCreateWithoutMemberInput, credit_cardUncheckedCreateWithoutMemberInput> | credit_cardCreateWithoutMemberInput[] | credit_cardUncheckedCreateWithoutMemberInput[]
    connectOrCreate?: credit_cardCreateOrConnectWithoutMemberInput | credit_cardCreateOrConnectWithoutMemberInput[]
    upsert?: credit_cardUpsertWithWhereUniqueWithoutMemberInput | credit_cardUpsertWithWhereUniqueWithoutMemberInput[]
    createMany?: credit_cardCreateManyMemberInputEnvelope
    set?: credit_cardWhereUniqueInput | credit_cardWhereUniqueInput[]
    disconnect?: credit_cardWhereUniqueInput | credit_cardWhereUniqueInput[]
    delete?: credit_cardWhereUniqueInput | credit_cardWhereUniqueInput[]
    connect?: credit_cardWhereUniqueInput | credit_cardWhereUniqueInput[]
    update?: credit_cardUpdateWithWhereUniqueWithoutMemberInput | credit_cardUpdateWithWhereUniqueWithoutMemberInput[]
    updateMany?: credit_cardUpdateManyWithWhereWithoutMemberInput | credit_cardUpdateManyWithWhereWithoutMemberInput[]
    deleteMany?: credit_cardScalarWhereInput | credit_cardScalarWhereInput[]
  }

  export type customer_orderUpdateManyWithoutMemberNestedInput = {
    create?: XOR<customer_orderCreateWithoutMemberInput, customer_orderUncheckedCreateWithoutMemberInput> | customer_orderCreateWithoutMemberInput[] | customer_orderUncheckedCreateWithoutMemberInput[]
    connectOrCreate?: customer_orderCreateOrConnectWithoutMemberInput | customer_orderCreateOrConnectWithoutMemberInput[]
    upsert?: customer_orderUpsertWithWhereUniqueWithoutMemberInput | customer_orderUpsertWithWhereUniqueWithoutMemberInput[]
    createMany?: customer_orderCreateManyMemberInputEnvelope
    set?: customer_orderWhereUniqueInput | customer_orderWhereUniqueInput[]
    disconnect?: customer_orderWhereUniqueInput | customer_orderWhereUniqueInput[]
    delete?: customer_orderWhereUniqueInput | customer_orderWhereUniqueInput[]
    connect?: customer_orderWhereUniqueInput | customer_orderWhereUniqueInput[]
    update?: customer_orderUpdateWithWhereUniqueWithoutMemberInput | customer_orderUpdateWithWhereUniqueWithoutMemberInput[]
    updateMany?: customer_orderUpdateManyWithWhereWithoutMemberInput | customer_orderUpdateManyWithWhereWithoutMemberInput[]
    deleteMany?: customer_orderScalarWhereInput | customer_orderScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type credit_cardUncheckedUpdateManyWithoutMemberNestedInput = {
    create?: XOR<credit_cardCreateWithoutMemberInput, credit_cardUncheckedCreateWithoutMemberInput> | credit_cardCreateWithoutMemberInput[] | credit_cardUncheckedCreateWithoutMemberInput[]
    connectOrCreate?: credit_cardCreateOrConnectWithoutMemberInput | credit_cardCreateOrConnectWithoutMemberInput[]
    upsert?: credit_cardUpsertWithWhereUniqueWithoutMemberInput | credit_cardUpsertWithWhereUniqueWithoutMemberInput[]
    createMany?: credit_cardCreateManyMemberInputEnvelope
    set?: credit_cardWhereUniqueInput | credit_cardWhereUniqueInput[]
    disconnect?: credit_cardWhereUniqueInput | credit_cardWhereUniqueInput[]
    delete?: credit_cardWhereUniqueInput | credit_cardWhereUniqueInput[]
    connect?: credit_cardWhereUniqueInput | credit_cardWhereUniqueInput[]
    update?: credit_cardUpdateWithWhereUniqueWithoutMemberInput | credit_cardUpdateWithWhereUniqueWithoutMemberInput[]
    updateMany?: credit_cardUpdateManyWithWhereWithoutMemberInput | credit_cardUpdateManyWithWhereWithoutMemberInput[]
    deleteMany?: credit_cardScalarWhereInput | credit_cardScalarWhereInput[]
  }

  export type customer_orderUncheckedUpdateManyWithoutMemberNestedInput = {
    create?: XOR<customer_orderCreateWithoutMemberInput, customer_orderUncheckedCreateWithoutMemberInput> | customer_orderCreateWithoutMemberInput[] | customer_orderUncheckedCreateWithoutMemberInput[]
    connectOrCreate?: customer_orderCreateOrConnectWithoutMemberInput | customer_orderCreateOrConnectWithoutMemberInput[]
    upsert?: customer_orderUpsertWithWhereUniqueWithoutMemberInput | customer_orderUpsertWithWhereUniqueWithoutMemberInput[]
    createMany?: customer_orderCreateManyMemberInputEnvelope
    set?: customer_orderWhereUniqueInput | customer_orderWhereUniqueInput[]
    disconnect?: customer_orderWhereUniqueInput | customer_orderWhereUniqueInput[]
    delete?: customer_orderWhereUniqueInput | customer_orderWhereUniqueInput[]
    connect?: customer_orderWhereUniqueInput | customer_orderWhereUniqueInput[]
    update?: customer_orderUpdateWithWhereUniqueWithoutMemberInput | customer_orderUpdateWithWhereUniqueWithoutMemberInput[]
    updateMany?: customer_orderUpdateManyWithWhereWithoutMemberInput | customer_orderUpdateManyWithWhereWithoutMemberInput[]
    deleteMany?: customer_orderScalarWhereInput | customer_orderScalarWhereInput[]
  }

  export type memberCreateNestedOneWithoutCredit_cardInput = {
    create?: XOR<memberCreateWithoutCredit_cardInput, memberUncheckedCreateWithoutCredit_cardInput>
    connectOrCreate?: memberCreateOrConnectWithoutCredit_cardInput
    connect?: memberWhereUniqueInput
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type memberUpdateOneWithoutCredit_cardNestedInput = {
    create?: XOR<memberCreateWithoutCredit_cardInput, memberUncheckedCreateWithoutCredit_cardInput>
    connectOrCreate?: memberCreateOrConnectWithoutCredit_cardInput
    upsert?: memberUpsertWithoutCredit_cardInput
    disconnect?: memberWhereInput | boolean
    delete?: memberWhereInput | boolean
    connect?: memberWhereUniqueInput
    update?: XOR<XOR<memberUpdateToOneWithWhereWithoutCredit_cardInput, memberUpdateWithoutCredit_cardInput>, memberUncheckedUpdateWithoutCredit_cardInput>
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type memberCreateNestedOneWithoutCustomer_orderInput = {
    create?: XOR<memberCreateWithoutCustomer_orderInput, memberUncheckedCreateWithoutCustomer_orderInput>
    connectOrCreate?: memberCreateOrConnectWithoutCustomer_orderInput
    connect?: memberWhereUniqueInput
  }

  export type order_infoCreateNestedManyWithoutCustomer_orderInput = {
    create?: XOR<order_infoCreateWithoutCustomer_orderInput, order_infoUncheckedCreateWithoutCustomer_orderInput> | order_infoCreateWithoutCustomer_orderInput[] | order_infoUncheckedCreateWithoutCustomer_orderInput[]
    connectOrCreate?: order_infoCreateOrConnectWithoutCustomer_orderInput | order_infoCreateOrConnectWithoutCustomer_orderInput[]
    createMany?: order_infoCreateManyCustomer_orderInputEnvelope
    connect?: order_infoWhereUniqueInput | order_infoWhereUniqueInput[]
  }

  export type order_itemCreateNestedManyWithoutCustomer_orderInput = {
    create?: XOR<order_itemCreateWithoutCustomer_orderInput, order_itemUncheckedCreateWithoutCustomer_orderInput> | order_itemCreateWithoutCustomer_orderInput[] | order_itemUncheckedCreateWithoutCustomer_orderInput[]
    connectOrCreate?: order_itemCreateOrConnectWithoutCustomer_orderInput | order_itemCreateOrConnectWithoutCustomer_orderInput[]
    createMany?: order_itemCreateManyCustomer_orderInputEnvelope
    connect?: order_itemWhereUniqueInput | order_itemWhereUniqueInput[]
  }

  export type order_infoUncheckedCreateNestedManyWithoutCustomer_orderInput = {
    create?: XOR<order_infoCreateWithoutCustomer_orderInput, order_infoUncheckedCreateWithoutCustomer_orderInput> | order_infoCreateWithoutCustomer_orderInput[] | order_infoUncheckedCreateWithoutCustomer_orderInput[]
    connectOrCreate?: order_infoCreateOrConnectWithoutCustomer_orderInput | order_infoCreateOrConnectWithoutCustomer_orderInput[]
    createMany?: order_infoCreateManyCustomer_orderInputEnvelope
    connect?: order_infoWhereUniqueInput | order_infoWhereUniqueInput[]
  }

  export type order_itemUncheckedCreateNestedManyWithoutCustomer_orderInput = {
    create?: XOR<order_itemCreateWithoutCustomer_orderInput, order_itemUncheckedCreateWithoutCustomer_orderInput> | order_itemCreateWithoutCustomer_orderInput[] | order_itemUncheckedCreateWithoutCustomer_orderInput[]
    connectOrCreate?: order_itemCreateOrConnectWithoutCustomer_orderInput | order_itemCreateOrConnectWithoutCustomer_orderInput[]
    createMany?: order_itemCreateManyCustomer_orderInputEnvelope
    connect?: order_itemWhereUniqueInput | order_itemWhereUniqueInput[]
  }

  export type memberUpdateOneRequiredWithoutCustomer_orderNestedInput = {
    create?: XOR<memberCreateWithoutCustomer_orderInput, memberUncheckedCreateWithoutCustomer_orderInput>
    connectOrCreate?: memberCreateOrConnectWithoutCustomer_orderInput
    upsert?: memberUpsertWithoutCustomer_orderInput
    connect?: memberWhereUniqueInput
    update?: XOR<XOR<memberUpdateToOneWithWhereWithoutCustomer_orderInput, memberUpdateWithoutCustomer_orderInput>, memberUncheckedUpdateWithoutCustomer_orderInput>
  }

  export type order_infoUpdateManyWithoutCustomer_orderNestedInput = {
    create?: XOR<order_infoCreateWithoutCustomer_orderInput, order_infoUncheckedCreateWithoutCustomer_orderInput> | order_infoCreateWithoutCustomer_orderInput[] | order_infoUncheckedCreateWithoutCustomer_orderInput[]
    connectOrCreate?: order_infoCreateOrConnectWithoutCustomer_orderInput | order_infoCreateOrConnectWithoutCustomer_orderInput[]
    upsert?: order_infoUpsertWithWhereUniqueWithoutCustomer_orderInput | order_infoUpsertWithWhereUniqueWithoutCustomer_orderInput[]
    createMany?: order_infoCreateManyCustomer_orderInputEnvelope
    set?: order_infoWhereUniqueInput | order_infoWhereUniqueInput[]
    disconnect?: order_infoWhereUniqueInput | order_infoWhereUniqueInput[]
    delete?: order_infoWhereUniqueInput | order_infoWhereUniqueInput[]
    connect?: order_infoWhereUniqueInput | order_infoWhereUniqueInput[]
    update?: order_infoUpdateWithWhereUniqueWithoutCustomer_orderInput | order_infoUpdateWithWhereUniqueWithoutCustomer_orderInput[]
    updateMany?: order_infoUpdateManyWithWhereWithoutCustomer_orderInput | order_infoUpdateManyWithWhereWithoutCustomer_orderInput[]
    deleteMany?: order_infoScalarWhereInput | order_infoScalarWhereInput[]
  }

  export type order_itemUpdateManyWithoutCustomer_orderNestedInput = {
    create?: XOR<order_itemCreateWithoutCustomer_orderInput, order_itemUncheckedCreateWithoutCustomer_orderInput> | order_itemCreateWithoutCustomer_orderInput[] | order_itemUncheckedCreateWithoutCustomer_orderInput[]
    connectOrCreate?: order_itemCreateOrConnectWithoutCustomer_orderInput | order_itemCreateOrConnectWithoutCustomer_orderInput[]
    upsert?: order_itemUpsertWithWhereUniqueWithoutCustomer_orderInput | order_itemUpsertWithWhereUniqueWithoutCustomer_orderInput[]
    createMany?: order_itemCreateManyCustomer_orderInputEnvelope
    set?: order_itemWhereUniqueInput | order_itemWhereUniqueInput[]
    disconnect?: order_itemWhereUniqueInput | order_itemWhereUniqueInput[]
    delete?: order_itemWhereUniqueInput | order_itemWhereUniqueInput[]
    connect?: order_itemWhereUniqueInput | order_itemWhereUniqueInput[]
    update?: order_itemUpdateWithWhereUniqueWithoutCustomer_orderInput | order_itemUpdateWithWhereUniqueWithoutCustomer_orderInput[]
    updateMany?: order_itemUpdateManyWithWhereWithoutCustomer_orderInput | order_itemUpdateManyWithWhereWithoutCustomer_orderInput[]
    deleteMany?: order_itemScalarWhereInput | order_itemScalarWhereInput[]
  }

  export type order_infoUncheckedUpdateManyWithoutCustomer_orderNestedInput = {
    create?: XOR<order_infoCreateWithoutCustomer_orderInput, order_infoUncheckedCreateWithoutCustomer_orderInput> | order_infoCreateWithoutCustomer_orderInput[] | order_infoUncheckedCreateWithoutCustomer_orderInput[]
    connectOrCreate?: order_infoCreateOrConnectWithoutCustomer_orderInput | order_infoCreateOrConnectWithoutCustomer_orderInput[]
    upsert?: order_infoUpsertWithWhereUniqueWithoutCustomer_orderInput | order_infoUpsertWithWhereUniqueWithoutCustomer_orderInput[]
    createMany?: order_infoCreateManyCustomer_orderInputEnvelope
    set?: order_infoWhereUniqueInput | order_infoWhereUniqueInput[]
    disconnect?: order_infoWhereUniqueInput | order_infoWhereUniqueInput[]
    delete?: order_infoWhereUniqueInput | order_infoWhereUniqueInput[]
    connect?: order_infoWhereUniqueInput | order_infoWhereUniqueInput[]
    update?: order_infoUpdateWithWhereUniqueWithoutCustomer_orderInput | order_infoUpdateWithWhereUniqueWithoutCustomer_orderInput[]
    updateMany?: order_infoUpdateManyWithWhereWithoutCustomer_orderInput | order_infoUpdateManyWithWhereWithoutCustomer_orderInput[]
    deleteMany?: order_infoScalarWhereInput | order_infoScalarWhereInput[]
  }

  export type order_itemUncheckedUpdateManyWithoutCustomer_orderNestedInput = {
    create?: XOR<order_itemCreateWithoutCustomer_orderInput, order_itemUncheckedCreateWithoutCustomer_orderInput> | order_itemCreateWithoutCustomer_orderInput[] | order_itemUncheckedCreateWithoutCustomer_orderInput[]
    connectOrCreate?: order_itemCreateOrConnectWithoutCustomer_orderInput | order_itemCreateOrConnectWithoutCustomer_orderInput[]
    upsert?: order_itemUpsertWithWhereUniqueWithoutCustomer_orderInput | order_itemUpsertWithWhereUniqueWithoutCustomer_orderInput[]
    createMany?: order_itemCreateManyCustomer_orderInputEnvelope
    set?: order_itemWhereUniqueInput | order_itemWhereUniqueInput[]
    disconnect?: order_itemWhereUniqueInput | order_itemWhereUniqueInput[]
    delete?: order_itemWhereUniqueInput | order_itemWhereUniqueInput[]
    connect?: order_itemWhereUniqueInput | order_itemWhereUniqueInput[]
    update?: order_itemUpdateWithWhereUniqueWithoutCustomer_orderInput | order_itemUpdateWithWhereUniqueWithoutCustomer_orderInput[]
    updateMany?: order_itemUpdateManyWithWhereWithoutCustomer_orderInput | order_itemUpdateManyWithWhereWithoutCustomer_orderInput[]
    deleteMany?: order_itemScalarWhereInput | order_itemScalarWhereInput[]
  }

  export type facility_ruleCreateNestedManyWithoutFacilityInput = {
    create?: XOR<facility_ruleCreateWithoutFacilityInput, facility_ruleUncheckedCreateWithoutFacilityInput> | facility_ruleCreateWithoutFacilityInput[] | facility_ruleUncheckedCreateWithoutFacilityInput[]
    connectOrCreate?: facility_ruleCreateOrConnectWithoutFacilityInput | facility_ruleCreateOrConnectWithoutFacilityInput[]
    createMany?: facility_ruleCreateManyFacilityInputEnvelope
    connect?: facility_ruleWhereUniqueInput | facility_ruleWhereUniqueInput[]
  }

  export type more_aboutCreateNestedManyWithoutFacilityInput = {
    create?: XOR<more_aboutCreateWithoutFacilityInput, more_aboutUncheckedCreateWithoutFacilityInput> | more_aboutCreateWithoutFacilityInput[] | more_aboutUncheckedCreateWithoutFacilityInput[]
    connectOrCreate?: more_aboutCreateOrConnectWithoutFacilityInput | more_aboutCreateOrConnectWithoutFacilityInput[]
    createMany?: more_aboutCreateManyFacilityInputEnvelope
    connect?: more_aboutWhereUniqueInput | more_aboutWhereUniqueInput[]
  }

  export type facility_ruleUncheckedCreateNestedManyWithoutFacilityInput = {
    create?: XOR<facility_ruleCreateWithoutFacilityInput, facility_ruleUncheckedCreateWithoutFacilityInput> | facility_ruleCreateWithoutFacilityInput[] | facility_ruleUncheckedCreateWithoutFacilityInput[]
    connectOrCreate?: facility_ruleCreateOrConnectWithoutFacilityInput | facility_ruleCreateOrConnectWithoutFacilityInput[]
    createMany?: facility_ruleCreateManyFacilityInputEnvelope
    connect?: facility_ruleWhereUniqueInput | facility_ruleWhereUniqueInput[]
  }

  export type more_aboutUncheckedCreateNestedManyWithoutFacilityInput = {
    create?: XOR<more_aboutCreateWithoutFacilityInput, more_aboutUncheckedCreateWithoutFacilityInput> | more_aboutCreateWithoutFacilityInput[] | more_aboutUncheckedCreateWithoutFacilityInput[]
    connectOrCreate?: more_aboutCreateOrConnectWithoutFacilityInput | more_aboutCreateOrConnectWithoutFacilityInput[]
    createMany?: more_aboutCreateManyFacilityInputEnvelope
    connect?: more_aboutWhereUniqueInput | more_aboutWhereUniqueInput[]
  }

  export type facility_ruleUpdateManyWithoutFacilityNestedInput = {
    create?: XOR<facility_ruleCreateWithoutFacilityInput, facility_ruleUncheckedCreateWithoutFacilityInput> | facility_ruleCreateWithoutFacilityInput[] | facility_ruleUncheckedCreateWithoutFacilityInput[]
    connectOrCreate?: facility_ruleCreateOrConnectWithoutFacilityInput | facility_ruleCreateOrConnectWithoutFacilityInput[]
    upsert?: facility_ruleUpsertWithWhereUniqueWithoutFacilityInput | facility_ruleUpsertWithWhereUniqueWithoutFacilityInput[]
    createMany?: facility_ruleCreateManyFacilityInputEnvelope
    set?: facility_ruleWhereUniqueInput | facility_ruleWhereUniqueInput[]
    disconnect?: facility_ruleWhereUniqueInput | facility_ruleWhereUniqueInput[]
    delete?: facility_ruleWhereUniqueInput | facility_ruleWhereUniqueInput[]
    connect?: facility_ruleWhereUniqueInput | facility_ruleWhereUniqueInput[]
    update?: facility_ruleUpdateWithWhereUniqueWithoutFacilityInput | facility_ruleUpdateWithWhereUniqueWithoutFacilityInput[]
    updateMany?: facility_ruleUpdateManyWithWhereWithoutFacilityInput | facility_ruleUpdateManyWithWhereWithoutFacilityInput[]
    deleteMany?: facility_ruleScalarWhereInput | facility_ruleScalarWhereInput[]
  }

  export type more_aboutUpdateManyWithoutFacilityNestedInput = {
    create?: XOR<more_aboutCreateWithoutFacilityInput, more_aboutUncheckedCreateWithoutFacilityInput> | more_aboutCreateWithoutFacilityInput[] | more_aboutUncheckedCreateWithoutFacilityInput[]
    connectOrCreate?: more_aboutCreateOrConnectWithoutFacilityInput | more_aboutCreateOrConnectWithoutFacilityInput[]
    upsert?: more_aboutUpsertWithWhereUniqueWithoutFacilityInput | more_aboutUpsertWithWhereUniqueWithoutFacilityInput[]
    createMany?: more_aboutCreateManyFacilityInputEnvelope
    set?: more_aboutWhereUniqueInput | more_aboutWhereUniqueInput[]
    disconnect?: more_aboutWhereUniqueInput | more_aboutWhereUniqueInput[]
    delete?: more_aboutWhereUniqueInput | more_aboutWhereUniqueInput[]
    connect?: more_aboutWhereUniqueInput | more_aboutWhereUniqueInput[]
    update?: more_aboutUpdateWithWhereUniqueWithoutFacilityInput | more_aboutUpdateWithWhereUniqueWithoutFacilityInput[]
    updateMany?: more_aboutUpdateManyWithWhereWithoutFacilityInput | more_aboutUpdateManyWithWhereWithoutFacilityInput[]
    deleteMany?: more_aboutScalarWhereInput | more_aboutScalarWhereInput[]
  }

  export type facility_ruleUncheckedUpdateManyWithoutFacilityNestedInput = {
    create?: XOR<facility_ruleCreateWithoutFacilityInput, facility_ruleUncheckedCreateWithoutFacilityInput> | facility_ruleCreateWithoutFacilityInput[] | facility_ruleUncheckedCreateWithoutFacilityInput[]
    connectOrCreate?: facility_ruleCreateOrConnectWithoutFacilityInput | facility_ruleCreateOrConnectWithoutFacilityInput[]
    upsert?: facility_ruleUpsertWithWhereUniqueWithoutFacilityInput | facility_ruleUpsertWithWhereUniqueWithoutFacilityInput[]
    createMany?: facility_ruleCreateManyFacilityInputEnvelope
    set?: facility_ruleWhereUniqueInput | facility_ruleWhereUniqueInput[]
    disconnect?: facility_ruleWhereUniqueInput | facility_ruleWhereUniqueInput[]
    delete?: facility_ruleWhereUniqueInput | facility_ruleWhereUniqueInput[]
    connect?: facility_ruleWhereUniqueInput | facility_ruleWhereUniqueInput[]
    update?: facility_ruleUpdateWithWhereUniqueWithoutFacilityInput | facility_ruleUpdateWithWhereUniqueWithoutFacilityInput[]
    updateMany?: facility_ruleUpdateManyWithWhereWithoutFacilityInput | facility_ruleUpdateManyWithWhereWithoutFacilityInput[]
    deleteMany?: facility_ruleScalarWhereInput | facility_ruleScalarWhereInput[]
  }

  export type more_aboutUncheckedUpdateManyWithoutFacilityNestedInput = {
    create?: XOR<more_aboutCreateWithoutFacilityInput, more_aboutUncheckedCreateWithoutFacilityInput> | more_aboutCreateWithoutFacilityInput[] | more_aboutUncheckedCreateWithoutFacilityInput[]
    connectOrCreate?: more_aboutCreateOrConnectWithoutFacilityInput | more_aboutCreateOrConnectWithoutFacilityInput[]
    upsert?: more_aboutUpsertWithWhereUniqueWithoutFacilityInput | more_aboutUpsertWithWhereUniqueWithoutFacilityInput[]
    createMany?: more_aboutCreateManyFacilityInputEnvelope
    set?: more_aboutWhereUniqueInput | more_aboutWhereUniqueInput[]
    disconnect?: more_aboutWhereUniqueInput | more_aboutWhereUniqueInput[]
    delete?: more_aboutWhereUniqueInput | more_aboutWhereUniqueInput[]
    connect?: more_aboutWhereUniqueInput | more_aboutWhereUniqueInput[]
    update?: more_aboutUpdateWithWhereUniqueWithoutFacilityInput | more_aboutUpdateWithWhereUniqueWithoutFacilityInput[]
    updateMany?: more_aboutUpdateManyWithWhereWithoutFacilityInput | more_aboutUpdateManyWithWhereWithoutFacilityInput[]
    deleteMany?: more_aboutScalarWhereInput | more_aboutScalarWhereInput[]
  }

  export type facilityCreateNestedOneWithoutFacility_ruleInput = {
    create?: XOR<facilityCreateWithoutFacility_ruleInput, facilityUncheckedCreateWithoutFacility_ruleInput>
    connectOrCreate?: facilityCreateOrConnectWithoutFacility_ruleInput
    connect?: facilityWhereUniqueInput
  }

  export type facilityUpdateOneWithoutFacility_ruleNestedInput = {
    create?: XOR<facilityCreateWithoutFacility_ruleInput, facilityUncheckedCreateWithoutFacility_ruleInput>
    connectOrCreate?: facilityCreateOrConnectWithoutFacility_ruleInput
    upsert?: facilityUpsertWithoutFacility_ruleInput
    disconnect?: facilityWhereInput | boolean
    delete?: facilityWhereInput | boolean
    connect?: facilityWhereUniqueInput
    update?: XOR<XOR<facilityUpdateToOneWithWhereWithoutFacility_ruleInput, facilityUpdateWithoutFacility_ruleInput>, facilityUncheckedUpdateWithoutFacility_ruleInput>
  }

  export type customer_orderCreateNestedOneWithoutOrder_infoInput = {
    create?: XOR<customer_orderCreateWithoutOrder_infoInput, customer_orderUncheckedCreateWithoutOrder_infoInput>
    connectOrCreate?: customer_orderCreateOrConnectWithoutOrder_infoInput
    connect?: customer_orderWhereUniqueInput
  }

  export type customer_orderUpdateOneRequiredWithoutOrder_infoNestedInput = {
    create?: XOR<customer_orderCreateWithoutOrder_infoInput, customer_orderUncheckedCreateWithoutOrder_infoInput>
    connectOrCreate?: customer_orderCreateOrConnectWithoutOrder_infoInput
    upsert?: customer_orderUpsertWithoutOrder_infoInput
    connect?: customer_orderWhereUniqueInput
    update?: XOR<XOR<customer_orderUpdateToOneWithWhereWithoutOrder_infoInput, customer_orderUpdateWithoutOrder_infoInput>, customer_orderUncheckedUpdateWithoutOrder_infoInput>
  }

  export type customer_orderCreateNestedOneWithoutOrder_itemInput = {
    create?: XOR<customer_orderCreateWithoutOrder_itemInput, customer_orderUncheckedCreateWithoutOrder_itemInput>
    connectOrCreate?: customer_orderCreateOrConnectWithoutOrder_itemInput
    connect?: customer_orderWhereUniqueInput
  }

  export type roomCreateNestedOneWithoutOrder_itemInput = {
    create?: XOR<roomCreateWithoutOrder_itemInput, roomUncheckedCreateWithoutOrder_itemInput>
    connectOrCreate?: roomCreateOrConnectWithoutOrder_itemInput
    connect?: roomWhereUniqueInput
  }

  export type ticketCreateNestedOneWithoutOrder_itemInput = {
    create?: XOR<ticketCreateWithoutOrder_itemInput, ticketUncheckedCreateWithoutOrder_itemInput>
    connectOrCreate?: ticketCreateOrConnectWithoutOrder_itemInput
    connect?: ticketWhereUniqueInput
  }

  export type customer_orderUpdateOneRequiredWithoutOrder_itemNestedInput = {
    create?: XOR<customer_orderCreateWithoutOrder_itemInput, customer_orderUncheckedCreateWithoutOrder_itemInput>
    connectOrCreate?: customer_orderCreateOrConnectWithoutOrder_itemInput
    upsert?: customer_orderUpsertWithoutOrder_itemInput
    connect?: customer_orderWhereUniqueInput
    update?: XOR<XOR<customer_orderUpdateToOneWithWhereWithoutOrder_itemInput, customer_orderUpdateWithoutOrder_itemInput>, customer_orderUncheckedUpdateWithoutOrder_itemInput>
  }

  export type roomUpdateOneWithoutOrder_itemNestedInput = {
    create?: XOR<roomCreateWithoutOrder_itemInput, roomUncheckedCreateWithoutOrder_itemInput>
    connectOrCreate?: roomCreateOrConnectWithoutOrder_itemInput
    upsert?: roomUpsertWithoutOrder_itemInput
    disconnect?: roomWhereInput | boolean
    delete?: roomWhereInput | boolean
    connect?: roomWhereUniqueInput
    update?: XOR<XOR<roomUpdateToOneWithWhereWithoutOrder_itemInput, roomUpdateWithoutOrder_itemInput>, roomUncheckedUpdateWithoutOrder_itemInput>
  }

  export type ticketUpdateOneWithoutOrder_itemNestedInput = {
    create?: XOR<ticketCreateWithoutOrder_itemInput, ticketUncheckedCreateWithoutOrder_itemInput>
    connectOrCreate?: ticketCreateOrConnectWithoutOrder_itemInput
    upsert?: ticketUpsertWithoutOrder_itemInput
    disconnect?: ticketWhereInput | boolean
    delete?: ticketWhereInput | boolean
    connect?: ticketWhereUniqueInput
    update?: XOR<XOR<ticketUpdateToOneWithWhereWithoutOrder_itemInput, ticketUpdateWithoutOrder_itemInput>, ticketUncheckedUpdateWithoutOrder_itemInput>
  }

  export type order_itemCreateNestedManyWithoutRoomInput = {
    create?: XOR<order_itemCreateWithoutRoomInput, order_itemUncheckedCreateWithoutRoomInput> | order_itemCreateWithoutRoomInput[] | order_itemUncheckedCreateWithoutRoomInput[]
    connectOrCreate?: order_itemCreateOrConnectWithoutRoomInput | order_itemCreateOrConnectWithoutRoomInput[]
    createMany?: order_itemCreateManyRoomInputEnvelope
    connect?: order_itemWhereUniqueInput | order_itemWhereUniqueInput[]
  }

  export type order_itemUncheckedCreateNestedManyWithoutRoomInput = {
    create?: XOR<order_itemCreateWithoutRoomInput, order_itemUncheckedCreateWithoutRoomInput> | order_itemCreateWithoutRoomInput[] | order_itemUncheckedCreateWithoutRoomInput[]
    connectOrCreate?: order_itemCreateOrConnectWithoutRoomInput | order_itemCreateOrConnectWithoutRoomInput[]
    createMany?: order_itemCreateManyRoomInputEnvelope
    connect?: order_itemWhereUniqueInput | order_itemWhereUniqueInput[]
  }

  export type order_itemUpdateManyWithoutRoomNestedInput = {
    create?: XOR<order_itemCreateWithoutRoomInput, order_itemUncheckedCreateWithoutRoomInput> | order_itemCreateWithoutRoomInput[] | order_itemUncheckedCreateWithoutRoomInput[]
    connectOrCreate?: order_itemCreateOrConnectWithoutRoomInput | order_itemCreateOrConnectWithoutRoomInput[]
    upsert?: order_itemUpsertWithWhereUniqueWithoutRoomInput | order_itemUpsertWithWhereUniqueWithoutRoomInput[]
    createMany?: order_itemCreateManyRoomInputEnvelope
    set?: order_itemWhereUniqueInput | order_itemWhereUniqueInput[]
    disconnect?: order_itemWhereUniqueInput | order_itemWhereUniqueInput[]
    delete?: order_itemWhereUniqueInput | order_itemWhereUniqueInput[]
    connect?: order_itemWhereUniqueInput | order_itemWhereUniqueInput[]
    update?: order_itemUpdateWithWhereUniqueWithoutRoomInput | order_itemUpdateWithWhereUniqueWithoutRoomInput[]
    updateMany?: order_itemUpdateManyWithWhereWithoutRoomInput | order_itemUpdateManyWithWhereWithoutRoomInput[]
    deleteMany?: order_itemScalarWhereInput | order_itemScalarWhereInput[]
  }

  export type order_itemUncheckedUpdateManyWithoutRoomNestedInput = {
    create?: XOR<order_itemCreateWithoutRoomInput, order_itemUncheckedCreateWithoutRoomInput> | order_itemCreateWithoutRoomInput[] | order_itemUncheckedCreateWithoutRoomInput[]
    connectOrCreate?: order_itemCreateOrConnectWithoutRoomInput | order_itemCreateOrConnectWithoutRoomInput[]
    upsert?: order_itemUpsertWithWhereUniqueWithoutRoomInput | order_itemUpsertWithWhereUniqueWithoutRoomInput[]
    createMany?: order_itemCreateManyRoomInputEnvelope
    set?: order_itemWhereUniqueInput | order_itemWhereUniqueInput[]
    disconnect?: order_itemWhereUniqueInput | order_itemWhereUniqueInput[]
    delete?: order_itemWhereUniqueInput | order_itemWhereUniqueInput[]
    connect?: order_itemWhereUniqueInput | order_itemWhereUniqueInput[]
    update?: order_itemUpdateWithWhereUniqueWithoutRoomInput | order_itemUpdateWithWhereUniqueWithoutRoomInput[]
    updateMany?: order_itemUpdateManyWithWhereWithoutRoomInput | order_itemUpdateManyWithWhereWithoutRoomInput[]
    deleteMany?: order_itemScalarWhereInput | order_itemScalarWhereInput[]
  }

  export type order_itemCreateNestedManyWithoutTicketInput = {
    create?: XOR<order_itemCreateWithoutTicketInput, order_itemUncheckedCreateWithoutTicketInput> | order_itemCreateWithoutTicketInput[] | order_itemUncheckedCreateWithoutTicketInput[]
    connectOrCreate?: order_itemCreateOrConnectWithoutTicketInput | order_itemCreateOrConnectWithoutTicketInput[]
    createMany?: order_itemCreateManyTicketInputEnvelope
    connect?: order_itemWhereUniqueInput | order_itemWhereUniqueInput[]
  }

  export type order_itemUncheckedCreateNestedManyWithoutTicketInput = {
    create?: XOR<order_itemCreateWithoutTicketInput, order_itemUncheckedCreateWithoutTicketInput> | order_itemCreateWithoutTicketInput[] | order_itemUncheckedCreateWithoutTicketInput[]
    connectOrCreate?: order_itemCreateOrConnectWithoutTicketInput | order_itemCreateOrConnectWithoutTicketInput[]
    createMany?: order_itemCreateManyTicketInputEnvelope
    connect?: order_itemWhereUniqueInput | order_itemWhereUniqueInput[]
  }

  export type order_itemUpdateManyWithoutTicketNestedInput = {
    create?: XOR<order_itemCreateWithoutTicketInput, order_itemUncheckedCreateWithoutTicketInput> | order_itemCreateWithoutTicketInput[] | order_itemUncheckedCreateWithoutTicketInput[]
    connectOrCreate?: order_itemCreateOrConnectWithoutTicketInput | order_itemCreateOrConnectWithoutTicketInput[]
    upsert?: order_itemUpsertWithWhereUniqueWithoutTicketInput | order_itemUpsertWithWhereUniqueWithoutTicketInput[]
    createMany?: order_itemCreateManyTicketInputEnvelope
    set?: order_itemWhereUniqueInput | order_itemWhereUniqueInput[]
    disconnect?: order_itemWhereUniqueInput | order_itemWhereUniqueInput[]
    delete?: order_itemWhereUniqueInput | order_itemWhereUniqueInput[]
    connect?: order_itemWhereUniqueInput | order_itemWhereUniqueInput[]
    update?: order_itemUpdateWithWhereUniqueWithoutTicketInput | order_itemUpdateWithWhereUniqueWithoutTicketInput[]
    updateMany?: order_itemUpdateManyWithWhereWithoutTicketInput | order_itemUpdateManyWithWhereWithoutTicketInput[]
    deleteMany?: order_itemScalarWhereInput | order_itemScalarWhereInput[]
  }

  export type order_itemUncheckedUpdateManyWithoutTicketNestedInput = {
    create?: XOR<order_itemCreateWithoutTicketInput, order_itemUncheckedCreateWithoutTicketInput> | order_itemCreateWithoutTicketInput[] | order_itemUncheckedCreateWithoutTicketInput[]
    connectOrCreate?: order_itemCreateOrConnectWithoutTicketInput | order_itemCreateOrConnectWithoutTicketInput[]
    upsert?: order_itemUpsertWithWhereUniqueWithoutTicketInput | order_itemUpsertWithWhereUniqueWithoutTicketInput[]
    createMany?: order_itemCreateManyTicketInputEnvelope
    set?: order_itemWhereUniqueInput | order_itemWhereUniqueInput[]
    disconnect?: order_itemWhereUniqueInput | order_itemWhereUniqueInput[]
    delete?: order_itemWhereUniqueInput | order_itemWhereUniqueInput[]
    connect?: order_itemWhereUniqueInput | order_itemWhereUniqueInput[]
    update?: order_itemUpdateWithWhereUniqueWithoutTicketInput | order_itemUpdateWithWhereUniqueWithoutTicketInput[]
    updateMany?: order_itemUpdateManyWithWhereWithoutTicketInput | order_itemUpdateManyWithWhereWithoutTicketInput[]
    deleteMany?: order_itemScalarWhereInput | order_itemScalarWhereInput[]
  }

  export type facilityCreateNestedOneWithoutMore_aboutInput = {
    create?: XOR<facilityCreateWithoutMore_aboutInput, facilityUncheckedCreateWithoutMore_aboutInput>
    connectOrCreate?: facilityCreateOrConnectWithoutMore_aboutInput
    connect?: facilityWhereUniqueInput
  }

  export type facilityUpdateOneRequiredWithoutMore_aboutNestedInput = {
    create?: XOR<facilityCreateWithoutMore_aboutInput, facilityUncheckedCreateWithoutMore_aboutInput>
    connectOrCreate?: facilityCreateOrConnectWithoutMore_aboutInput
    upsert?: facilityUpsertWithoutMore_aboutInput
    connect?: facilityWhereUniqueInput
    update?: XOR<XOR<facilityUpdateToOneWithWhereWithoutMore_aboutInput, facilityUpdateWithoutMore_aboutInput>, facilityUncheckedUpdateWithoutMore_aboutInput>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }
  export type NestedJsonNullableFilter<$PrismaModel = never> = 
    | PatchUndefined<
        Either<Required<NestedJsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>,
        Required<NestedJsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>

  export type NestedJsonNullableFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type credit_cardCreateWithoutMemberInput = {
    number: string
    expiry: Date | string
    cvv: string
  }

  export type credit_cardUncheckedCreateWithoutMemberInput = {
    credit_card_id?: number
    number: string
    expiry: Date | string
    cvv: string
  }

  export type credit_cardCreateOrConnectWithoutMemberInput = {
    where: credit_cardWhereUniqueInput
    create: XOR<credit_cardCreateWithoutMemberInput, credit_cardUncheckedCreateWithoutMemberInput>
  }

  export type credit_cardCreateManyMemberInputEnvelope = {
    data: credit_cardCreateManyMemberInput | credit_cardCreateManyMemberInput[]
    skipDuplicates?: boolean
  }

  export type customer_orderCreateWithoutMemberInput = {
    total_amount: number
    status: string
    order_date?: Date | string | null
    order_info?: order_infoCreateNestedManyWithoutCustomer_orderInput
    order_item?: order_itemCreateNestedManyWithoutCustomer_orderInput
  }

  export type customer_orderUncheckedCreateWithoutMemberInput = {
    order_id?: number
    total_amount: number
    status: string
    order_date?: Date | string | null
    order_info?: order_infoUncheckedCreateNestedManyWithoutCustomer_orderInput
    order_item?: order_itemUncheckedCreateNestedManyWithoutCustomer_orderInput
  }

  export type customer_orderCreateOrConnectWithoutMemberInput = {
    where: customer_orderWhereUniqueInput
    create: XOR<customer_orderCreateWithoutMemberInput, customer_orderUncheckedCreateWithoutMemberInput>
  }

  export type customer_orderCreateManyMemberInputEnvelope = {
    data: customer_orderCreateManyMemberInput | customer_orderCreateManyMemberInput[]
    skipDuplicates?: boolean
  }

  export type credit_cardUpsertWithWhereUniqueWithoutMemberInput = {
    where: credit_cardWhereUniqueInput
    update: XOR<credit_cardUpdateWithoutMemberInput, credit_cardUncheckedUpdateWithoutMemberInput>
    create: XOR<credit_cardCreateWithoutMemberInput, credit_cardUncheckedCreateWithoutMemberInput>
  }

  export type credit_cardUpdateWithWhereUniqueWithoutMemberInput = {
    where: credit_cardWhereUniqueInput
    data: XOR<credit_cardUpdateWithoutMemberInput, credit_cardUncheckedUpdateWithoutMemberInput>
  }

  export type credit_cardUpdateManyWithWhereWithoutMemberInput = {
    where: credit_cardScalarWhereInput
    data: XOR<credit_cardUpdateManyMutationInput, credit_cardUncheckedUpdateManyWithoutMemberInput>
  }

  export type credit_cardScalarWhereInput = {
    AND?: credit_cardScalarWhereInput | credit_cardScalarWhereInput[]
    OR?: credit_cardScalarWhereInput[]
    NOT?: credit_cardScalarWhereInput | credit_cardScalarWhereInput[]
    credit_card_id?: IntFilter<"credit_card"> | number
    member_id?: IntNullableFilter<"credit_card"> | number | null
    number?: StringFilter<"credit_card"> | string
    expiry?: DateTimeFilter<"credit_card"> | Date | string
    cvv?: StringFilter<"credit_card"> | string
  }

  export type customer_orderUpsertWithWhereUniqueWithoutMemberInput = {
    where: customer_orderWhereUniqueInput
    update: XOR<customer_orderUpdateWithoutMemberInput, customer_orderUncheckedUpdateWithoutMemberInput>
    create: XOR<customer_orderCreateWithoutMemberInput, customer_orderUncheckedCreateWithoutMemberInput>
  }

  export type customer_orderUpdateWithWhereUniqueWithoutMemberInput = {
    where: customer_orderWhereUniqueInput
    data: XOR<customer_orderUpdateWithoutMemberInput, customer_orderUncheckedUpdateWithoutMemberInput>
  }

  export type customer_orderUpdateManyWithWhereWithoutMemberInput = {
    where: customer_orderScalarWhereInput
    data: XOR<customer_orderUpdateManyMutationInput, customer_orderUncheckedUpdateManyWithoutMemberInput>
  }

  export type customer_orderScalarWhereInput = {
    AND?: customer_orderScalarWhereInput | customer_orderScalarWhereInput[]
    OR?: customer_orderScalarWhereInput[]
    NOT?: customer_orderScalarWhereInput | customer_orderScalarWhereInput[]
    order_id?: IntFilter<"customer_order"> | number
    member_id?: IntFilter<"customer_order"> | number
    total_amount?: IntFilter<"customer_order"> | number
    status?: StringFilter<"customer_order"> | string
    order_date?: DateTimeNullableFilter<"customer_order"> | Date | string | null
  }

  export type memberCreateWithoutCredit_cardInput = {
    name: string
    address?: string | null
    birth?: Date | string | null
    account: string
    password: string
    phone?: string | null
    photo?: string | null
    customer_order?: customer_orderCreateNestedManyWithoutMemberInput
  }

  export type memberUncheckedCreateWithoutCredit_cardInput = {
    member_id?: number
    name: string
    address?: string | null
    birth?: Date | string | null
    account: string
    password: string
    phone?: string | null
    photo?: string | null
    customer_order?: customer_orderUncheckedCreateNestedManyWithoutMemberInput
  }

  export type memberCreateOrConnectWithoutCredit_cardInput = {
    where: memberWhereUniqueInput
    create: XOR<memberCreateWithoutCredit_cardInput, memberUncheckedCreateWithoutCredit_cardInput>
  }

  export type memberUpsertWithoutCredit_cardInput = {
    update: XOR<memberUpdateWithoutCredit_cardInput, memberUncheckedUpdateWithoutCredit_cardInput>
    create: XOR<memberCreateWithoutCredit_cardInput, memberUncheckedCreateWithoutCredit_cardInput>
    where?: memberWhereInput
  }

  export type memberUpdateToOneWithWhereWithoutCredit_cardInput = {
    where?: memberWhereInput
    data: XOR<memberUpdateWithoutCredit_cardInput, memberUncheckedUpdateWithoutCredit_cardInput>
  }

  export type memberUpdateWithoutCredit_cardInput = {
    name?: StringFieldUpdateOperationsInput | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    birth?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    account?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    photo?: NullableStringFieldUpdateOperationsInput | string | null
    customer_order?: customer_orderUpdateManyWithoutMemberNestedInput
  }

  export type memberUncheckedUpdateWithoutCredit_cardInput = {
    member_id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    birth?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    account?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    photo?: NullableStringFieldUpdateOperationsInput | string | null
    customer_order?: customer_orderUncheckedUpdateManyWithoutMemberNestedInput
  }

  export type memberCreateWithoutCustomer_orderInput = {
    name: string
    address?: string | null
    birth?: Date | string | null
    account: string
    password: string
    phone?: string | null
    photo?: string | null
    credit_card?: credit_cardCreateNestedManyWithoutMemberInput
  }

  export type memberUncheckedCreateWithoutCustomer_orderInput = {
    member_id?: number
    name: string
    address?: string | null
    birth?: Date | string | null
    account: string
    password: string
    phone?: string | null
    photo?: string | null
    credit_card?: credit_cardUncheckedCreateNestedManyWithoutMemberInput
  }

  export type memberCreateOrConnectWithoutCustomer_orderInput = {
    where: memberWhereUniqueInput
    create: XOR<memberCreateWithoutCustomer_orderInput, memberUncheckedCreateWithoutCustomer_orderInput>
  }

  export type order_infoCreateWithoutCustomer_orderInput = {
    customer: string
    phone_number: string
    address: string
    payment_method: string
  }

  export type order_infoUncheckedCreateWithoutCustomer_orderInput = {
    order_info_id?: number
    customer: string
    phone_number: string
    address: string
    payment_method: string
  }

  export type order_infoCreateOrConnectWithoutCustomer_orderInput = {
    where: order_infoWhereUniqueInput
    create: XOR<order_infoCreateWithoutCustomer_orderInput, order_infoUncheckedCreateWithoutCustomer_orderInput>
  }

  export type order_infoCreateManyCustomer_orderInputEnvelope = {
    data: order_infoCreateManyCustomer_orderInput | order_infoCreateManyCustomer_orderInput[]
    skipDuplicates?: boolean
  }

  export type order_itemCreateWithoutCustomer_orderInput = {
    order_item_id: string
    check_in_date?: Date | string | null
    check_out_date?: Date | string | null
    people_count?: number | null
    room_count?: number | null
    quantity: number
    booked_date?: Date | string | null
    valid_date?: Date | string | null
    room?: roomCreateNestedOneWithoutOrder_itemInput
    ticket?: ticketCreateNestedOneWithoutOrder_itemInput
  }

  export type order_itemUncheckedCreateWithoutCustomer_orderInput = {
    order_item_id: string
    room_id?: number | null
    ticket_id?: number | null
    check_in_date?: Date | string | null
    check_out_date?: Date | string | null
    people_count?: number | null
    room_count?: number | null
    quantity: number
    booked_date?: Date | string | null
    valid_date?: Date | string | null
  }

  export type order_itemCreateOrConnectWithoutCustomer_orderInput = {
    where: order_itemWhereUniqueInput
    create: XOR<order_itemCreateWithoutCustomer_orderInput, order_itemUncheckedCreateWithoutCustomer_orderInput>
  }

  export type order_itemCreateManyCustomer_orderInputEnvelope = {
    data: order_itemCreateManyCustomer_orderInput | order_itemCreateManyCustomer_orderInput[]
    skipDuplicates?: boolean
  }

  export type memberUpsertWithoutCustomer_orderInput = {
    update: XOR<memberUpdateWithoutCustomer_orderInput, memberUncheckedUpdateWithoutCustomer_orderInput>
    create: XOR<memberCreateWithoutCustomer_orderInput, memberUncheckedCreateWithoutCustomer_orderInput>
    where?: memberWhereInput
  }

  export type memberUpdateToOneWithWhereWithoutCustomer_orderInput = {
    where?: memberWhereInput
    data: XOR<memberUpdateWithoutCustomer_orderInput, memberUncheckedUpdateWithoutCustomer_orderInput>
  }

  export type memberUpdateWithoutCustomer_orderInput = {
    name?: StringFieldUpdateOperationsInput | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    birth?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    account?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    photo?: NullableStringFieldUpdateOperationsInput | string | null
    credit_card?: credit_cardUpdateManyWithoutMemberNestedInput
  }

  export type memberUncheckedUpdateWithoutCustomer_orderInput = {
    member_id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    birth?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    account?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    photo?: NullableStringFieldUpdateOperationsInput | string | null
    credit_card?: credit_cardUncheckedUpdateManyWithoutMemberNestedInput
  }

  export type order_infoUpsertWithWhereUniqueWithoutCustomer_orderInput = {
    where: order_infoWhereUniqueInput
    update: XOR<order_infoUpdateWithoutCustomer_orderInput, order_infoUncheckedUpdateWithoutCustomer_orderInput>
    create: XOR<order_infoCreateWithoutCustomer_orderInput, order_infoUncheckedCreateWithoutCustomer_orderInput>
  }

  export type order_infoUpdateWithWhereUniqueWithoutCustomer_orderInput = {
    where: order_infoWhereUniqueInput
    data: XOR<order_infoUpdateWithoutCustomer_orderInput, order_infoUncheckedUpdateWithoutCustomer_orderInput>
  }

  export type order_infoUpdateManyWithWhereWithoutCustomer_orderInput = {
    where: order_infoScalarWhereInput
    data: XOR<order_infoUpdateManyMutationInput, order_infoUncheckedUpdateManyWithoutCustomer_orderInput>
  }

  export type order_infoScalarWhereInput = {
    AND?: order_infoScalarWhereInput | order_infoScalarWhereInput[]
    OR?: order_infoScalarWhereInput[]
    NOT?: order_infoScalarWhereInput | order_infoScalarWhereInput[]
    order_info_id?: IntFilter<"order_info"> | number
    order_id?: IntFilter<"order_info"> | number
    customer?: StringFilter<"order_info"> | string
    phone_number?: StringFilter<"order_info"> | string
    address?: StringFilter<"order_info"> | string
    payment_method?: StringFilter<"order_info"> | string
  }

  export type order_itemUpsertWithWhereUniqueWithoutCustomer_orderInput = {
    where: order_itemWhereUniqueInput
    update: XOR<order_itemUpdateWithoutCustomer_orderInput, order_itemUncheckedUpdateWithoutCustomer_orderInput>
    create: XOR<order_itemCreateWithoutCustomer_orderInput, order_itemUncheckedCreateWithoutCustomer_orderInput>
  }

  export type order_itemUpdateWithWhereUniqueWithoutCustomer_orderInput = {
    where: order_itemWhereUniqueInput
    data: XOR<order_itemUpdateWithoutCustomer_orderInput, order_itemUncheckedUpdateWithoutCustomer_orderInput>
  }

  export type order_itemUpdateManyWithWhereWithoutCustomer_orderInput = {
    where: order_itemScalarWhereInput
    data: XOR<order_itemUpdateManyMutationInput, order_itemUncheckedUpdateManyWithoutCustomer_orderInput>
  }

  export type order_itemScalarWhereInput = {
    AND?: order_itemScalarWhereInput | order_itemScalarWhereInput[]
    OR?: order_itemScalarWhereInput[]
    NOT?: order_itemScalarWhereInput | order_itemScalarWhereInput[]
    order_item_id?: StringFilter<"order_item"> | string
    order_id?: IntFilter<"order_item"> | number
    room_id?: IntNullableFilter<"order_item"> | number | null
    ticket_id?: IntNullableFilter<"order_item"> | number | null
    check_in_date?: DateTimeNullableFilter<"order_item"> | Date | string | null
    check_out_date?: DateTimeNullableFilter<"order_item"> | Date | string | null
    people_count?: IntNullableFilter<"order_item"> | number | null
    room_count?: IntNullableFilter<"order_item"> | number | null
    quantity?: IntFilter<"order_item"> | number
    booked_date?: DateTimeNullableFilter<"order_item"> | Date | string | null
    valid_date?: DateTimeNullableFilter<"order_item"> | Date | string | null
  }

  export type facility_ruleCreateWithoutFacilityInput = {
    rule_type?: string | null
    rule_value?: string | null
  }

  export type facility_ruleUncheckedCreateWithoutFacilityInput = {
    facility_rule_id?: number
    rule_type?: string | null
    rule_value?: string | null
  }

  export type facility_ruleCreateOrConnectWithoutFacilityInput = {
    where: facility_ruleWhereUniqueInput
    create: XOR<facility_ruleCreateWithoutFacilityInput, facility_ruleUncheckedCreateWithoutFacilityInput>
  }

  export type facility_ruleCreateManyFacilityInputEnvelope = {
    data: facility_ruleCreateManyFacilityInput | facility_ruleCreateManyFacilityInput[]
    skipDuplicates?: boolean
  }

  export type more_aboutCreateWithoutFacilityInput = {
    more_link: string
    img?: NullableJsonNullValueInput | InputJsonValue
  }

  export type more_aboutUncheckedCreateWithoutFacilityInput = {
    more_about_id?: number
    more_link: string
    img?: NullableJsonNullValueInput | InputJsonValue
  }

  export type more_aboutCreateOrConnectWithoutFacilityInput = {
    where: more_aboutWhereUniqueInput
    create: XOR<more_aboutCreateWithoutFacilityInput, more_aboutUncheckedCreateWithoutFacilityInput>
  }

  export type more_aboutCreateManyFacilityInputEnvelope = {
    data: more_aboutCreateManyFacilityInput | more_aboutCreateManyFacilityInput[]
    skipDuplicates?: boolean
  }

  export type facility_ruleUpsertWithWhereUniqueWithoutFacilityInput = {
    where: facility_ruleWhereUniqueInput
    update: XOR<facility_ruleUpdateWithoutFacilityInput, facility_ruleUncheckedUpdateWithoutFacilityInput>
    create: XOR<facility_ruleCreateWithoutFacilityInput, facility_ruleUncheckedCreateWithoutFacilityInput>
  }

  export type facility_ruleUpdateWithWhereUniqueWithoutFacilityInput = {
    where: facility_ruleWhereUniqueInput
    data: XOR<facility_ruleUpdateWithoutFacilityInput, facility_ruleUncheckedUpdateWithoutFacilityInput>
  }

  export type facility_ruleUpdateManyWithWhereWithoutFacilityInput = {
    where: facility_ruleScalarWhereInput
    data: XOR<facility_ruleUpdateManyMutationInput, facility_ruleUncheckedUpdateManyWithoutFacilityInput>
  }

  export type facility_ruleScalarWhereInput = {
    AND?: facility_ruleScalarWhereInput | facility_ruleScalarWhereInput[]
    OR?: facility_ruleScalarWhereInput[]
    NOT?: facility_ruleScalarWhereInput | facility_ruleScalarWhereInput[]
    facility_rule_id?: IntFilter<"facility_rule"> | number
    facility_id?: IntNullableFilter<"facility_rule"> | number | null
    rule_type?: StringNullableFilter<"facility_rule"> | string | null
    rule_value?: StringNullableFilter<"facility_rule"> | string | null
  }

  export type more_aboutUpsertWithWhereUniqueWithoutFacilityInput = {
    where: more_aboutWhereUniqueInput
    update: XOR<more_aboutUpdateWithoutFacilityInput, more_aboutUncheckedUpdateWithoutFacilityInput>
    create: XOR<more_aboutCreateWithoutFacilityInput, more_aboutUncheckedCreateWithoutFacilityInput>
  }

  export type more_aboutUpdateWithWhereUniqueWithoutFacilityInput = {
    where: more_aboutWhereUniqueInput
    data: XOR<more_aboutUpdateWithoutFacilityInput, more_aboutUncheckedUpdateWithoutFacilityInput>
  }

  export type more_aboutUpdateManyWithWhereWithoutFacilityInput = {
    where: more_aboutScalarWhereInput
    data: XOR<more_aboutUpdateManyMutationInput, more_aboutUncheckedUpdateManyWithoutFacilityInput>
  }

  export type more_aboutScalarWhereInput = {
    AND?: more_aboutScalarWhereInput | more_aboutScalarWhereInput[]
    OR?: more_aboutScalarWhereInput[]
    NOT?: more_aboutScalarWhereInput | more_aboutScalarWhereInput[]
    more_about_id?: IntFilter<"more_about"> | number
    more_link?: StringFilter<"more_about"> | string
    facility_id?: IntFilter<"more_about"> | number
    img?: JsonNullableFilter<"more_about">
  }

  export type facilityCreateWithoutFacility_ruleInput = {
    title: string
    image?: NullableJsonNullValueInput | InputJsonValue
    category: string
    des?: string | null
    content?: string | null
    area: number
    location: string
    open_time?: string | null
    data_maintain?: string | null
    facility_id_name: string
    facility_class_name: string
    rule_others: string
    remarks?: string | null
    more_about?: more_aboutCreateNestedManyWithoutFacilityInput
  }

  export type facilityUncheckedCreateWithoutFacility_ruleInput = {
    facility_id?: number
    title: string
    image?: NullableJsonNullValueInput | InputJsonValue
    category: string
    des?: string | null
    content?: string | null
    area: number
    location: string
    open_time?: string | null
    data_maintain?: string | null
    facility_id_name: string
    facility_class_name: string
    rule_others: string
    remarks?: string | null
    more_about?: more_aboutUncheckedCreateNestedManyWithoutFacilityInput
  }

  export type facilityCreateOrConnectWithoutFacility_ruleInput = {
    where: facilityWhereUniqueInput
    create: XOR<facilityCreateWithoutFacility_ruleInput, facilityUncheckedCreateWithoutFacility_ruleInput>
  }

  export type facilityUpsertWithoutFacility_ruleInput = {
    update: XOR<facilityUpdateWithoutFacility_ruleInput, facilityUncheckedUpdateWithoutFacility_ruleInput>
    create: XOR<facilityCreateWithoutFacility_ruleInput, facilityUncheckedCreateWithoutFacility_ruleInput>
    where?: facilityWhereInput
  }

  export type facilityUpdateToOneWithWhereWithoutFacility_ruleInput = {
    where?: facilityWhereInput
    data: XOR<facilityUpdateWithoutFacility_ruleInput, facilityUncheckedUpdateWithoutFacility_ruleInput>
  }

  export type facilityUpdateWithoutFacility_ruleInput = {
    title?: StringFieldUpdateOperationsInput | string
    image?: NullableJsonNullValueInput | InputJsonValue
    category?: StringFieldUpdateOperationsInput | string
    des?: NullableStringFieldUpdateOperationsInput | string | null
    content?: NullableStringFieldUpdateOperationsInput | string | null
    area?: IntFieldUpdateOperationsInput | number
    location?: StringFieldUpdateOperationsInput | string
    open_time?: NullableStringFieldUpdateOperationsInput | string | null
    data_maintain?: NullableStringFieldUpdateOperationsInput | string | null
    facility_id_name?: StringFieldUpdateOperationsInput | string
    facility_class_name?: StringFieldUpdateOperationsInput | string
    rule_others?: StringFieldUpdateOperationsInput | string
    remarks?: NullableStringFieldUpdateOperationsInput | string | null
    more_about?: more_aboutUpdateManyWithoutFacilityNestedInput
  }

  export type facilityUncheckedUpdateWithoutFacility_ruleInput = {
    facility_id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    image?: NullableJsonNullValueInput | InputJsonValue
    category?: StringFieldUpdateOperationsInput | string
    des?: NullableStringFieldUpdateOperationsInput | string | null
    content?: NullableStringFieldUpdateOperationsInput | string | null
    area?: IntFieldUpdateOperationsInput | number
    location?: StringFieldUpdateOperationsInput | string
    open_time?: NullableStringFieldUpdateOperationsInput | string | null
    data_maintain?: NullableStringFieldUpdateOperationsInput | string | null
    facility_id_name?: StringFieldUpdateOperationsInput | string
    facility_class_name?: StringFieldUpdateOperationsInput | string
    rule_others?: StringFieldUpdateOperationsInput | string
    remarks?: NullableStringFieldUpdateOperationsInput | string | null
    more_about?: more_aboutUncheckedUpdateManyWithoutFacilityNestedInput
  }

  export type customer_orderCreateWithoutOrder_infoInput = {
    total_amount: number
    status: string
    order_date?: Date | string | null
    member: memberCreateNestedOneWithoutCustomer_orderInput
    order_item?: order_itemCreateNestedManyWithoutCustomer_orderInput
  }

  export type customer_orderUncheckedCreateWithoutOrder_infoInput = {
    order_id?: number
    member_id: number
    total_amount: number
    status: string
    order_date?: Date | string | null
    order_item?: order_itemUncheckedCreateNestedManyWithoutCustomer_orderInput
  }

  export type customer_orderCreateOrConnectWithoutOrder_infoInput = {
    where: customer_orderWhereUniqueInput
    create: XOR<customer_orderCreateWithoutOrder_infoInput, customer_orderUncheckedCreateWithoutOrder_infoInput>
  }

  export type customer_orderUpsertWithoutOrder_infoInput = {
    update: XOR<customer_orderUpdateWithoutOrder_infoInput, customer_orderUncheckedUpdateWithoutOrder_infoInput>
    create: XOR<customer_orderCreateWithoutOrder_infoInput, customer_orderUncheckedCreateWithoutOrder_infoInput>
    where?: customer_orderWhereInput
  }

  export type customer_orderUpdateToOneWithWhereWithoutOrder_infoInput = {
    where?: customer_orderWhereInput
    data: XOR<customer_orderUpdateWithoutOrder_infoInput, customer_orderUncheckedUpdateWithoutOrder_infoInput>
  }

  export type customer_orderUpdateWithoutOrder_infoInput = {
    total_amount?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    order_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    member?: memberUpdateOneRequiredWithoutCustomer_orderNestedInput
    order_item?: order_itemUpdateManyWithoutCustomer_orderNestedInput
  }

  export type customer_orderUncheckedUpdateWithoutOrder_infoInput = {
    order_id?: IntFieldUpdateOperationsInput | number
    member_id?: IntFieldUpdateOperationsInput | number
    total_amount?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    order_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    order_item?: order_itemUncheckedUpdateManyWithoutCustomer_orderNestedInput
  }

  export type customer_orderCreateWithoutOrder_itemInput = {
    total_amount: number
    status: string
    order_date?: Date | string | null
    member: memberCreateNestedOneWithoutCustomer_orderInput
    order_info?: order_infoCreateNestedManyWithoutCustomer_orderInput
  }

  export type customer_orderUncheckedCreateWithoutOrder_itemInput = {
    order_id?: number
    member_id: number
    total_amount: number
    status: string
    order_date?: Date | string | null
    order_info?: order_infoUncheckedCreateNestedManyWithoutCustomer_orderInput
  }

  export type customer_orderCreateOrConnectWithoutOrder_itemInput = {
    where: customer_orderWhereUniqueInput
    create: XOR<customer_orderCreateWithoutOrder_itemInput, customer_orderUncheckedCreateWithoutOrder_itemInput>
  }

  export type roomCreateWithoutOrder_itemInput = {
    room_type: string
    room_count?: number
    description?: string | null
    price: number
    capacity?: number
    img?: NullableJsonNullValueInput | InputJsonValue
  }

  export type roomUncheckedCreateWithoutOrder_itemInput = {
    room_id?: number
    room_type: string
    room_count?: number
    description?: string | null
    price: number
    capacity?: number
    img?: NullableJsonNullValueInput | InputJsonValue
  }

  export type roomCreateOrConnectWithoutOrder_itemInput = {
    where: roomWhereUniqueInput
    create: XOR<roomCreateWithoutOrder_itemInput, roomUncheckedCreateWithoutOrder_itemInput>
  }

  export type ticketCreateWithoutOrder_itemInput = {
    type: string
    price: number
    img?: NullableJsonNullValueInput | InputJsonValue
  }

  export type ticketUncheckedCreateWithoutOrder_itemInput = {
    ticket_id?: number
    type: string
    price: number
    img?: NullableJsonNullValueInput | InputJsonValue
  }

  export type ticketCreateOrConnectWithoutOrder_itemInput = {
    where: ticketWhereUniqueInput
    create: XOR<ticketCreateWithoutOrder_itemInput, ticketUncheckedCreateWithoutOrder_itemInput>
  }

  export type customer_orderUpsertWithoutOrder_itemInput = {
    update: XOR<customer_orderUpdateWithoutOrder_itemInput, customer_orderUncheckedUpdateWithoutOrder_itemInput>
    create: XOR<customer_orderCreateWithoutOrder_itemInput, customer_orderUncheckedCreateWithoutOrder_itemInput>
    where?: customer_orderWhereInput
  }

  export type customer_orderUpdateToOneWithWhereWithoutOrder_itemInput = {
    where?: customer_orderWhereInput
    data: XOR<customer_orderUpdateWithoutOrder_itemInput, customer_orderUncheckedUpdateWithoutOrder_itemInput>
  }

  export type customer_orderUpdateWithoutOrder_itemInput = {
    total_amount?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    order_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    member?: memberUpdateOneRequiredWithoutCustomer_orderNestedInput
    order_info?: order_infoUpdateManyWithoutCustomer_orderNestedInput
  }

  export type customer_orderUncheckedUpdateWithoutOrder_itemInput = {
    order_id?: IntFieldUpdateOperationsInput | number
    member_id?: IntFieldUpdateOperationsInput | number
    total_amount?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    order_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    order_info?: order_infoUncheckedUpdateManyWithoutCustomer_orderNestedInput
  }

  export type roomUpsertWithoutOrder_itemInput = {
    update: XOR<roomUpdateWithoutOrder_itemInput, roomUncheckedUpdateWithoutOrder_itemInput>
    create: XOR<roomCreateWithoutOrder_itemInput, roomUncheckedCreateWithoutOrder_itemInput>
    where?: roomWhereInput
  }

  export type roomUpdateToOneWithWhereWithoutOrder_itemInput = {
    where?: roomWhereInput
    data: XOR<roomUpdateWithoutOrder_itemInput, roomUncheckedUpdateWithoutOrder_itemInput>
  }

  export type roomUpdateWithoutOrder_itemInput = {
    room_type?: StringFieldUpdateOperationsInput | string
    room_count?: IntFieldUpdateOperationsInput | number
    description?: NullableStringFieldUpdateOperationsInput | string | null
    price?: IntFieldUpdateOperationsInput | number
    capacity?: IntFieldUpdateOperationsInput | number
    img?: NullableJsonNullValueInput | InputJsonValue
  }

  export type roomUncheckedUpdateWithoutOrder_itemInput = {
    room_id?: IntFieldUpdateOperationsInput | number
    room_type?: StringFieldUpdateOperationsInput | string
    room_count?: IntFieldUpdateOperationsInput | number
    description?: NullableStringFieldUpdateOperationsInput | string | null
    price?: IntFieldUpdateOperationsInput | number
    capacity?: IntFieldUpdateOperationsInput | number
    img?: NullableJsonNullValueInput | InputJsonValue
  }

  export type ticketUpsertWithoutOrder_itemInput = {
    update: XOR<ticketUpdateWithoutOrder_itemInput, ticketUncheckedUpdateWithoutOrder_itemInput>
    create: XOR<ticketCreateWithoutOrder_itemInput, ticketUncheckedCreateWithoutOrder_itemInput>
    where?: ticketWhereInput
  }

  export type ticketUpdateToOneWithWhereWithoutOrder_itemInput = {
    where?: ticketWhereInput
    data: XOR<ticketUpdateWithoutOrder_itemInput, ticketUncheckedUpdateWithoutOrder_itemInput>
  }

  export type ticketUpdateWithoutOrder_itemInput = {
    type?: StringFieldUpdateOperationsInput | string
    price?: IntFieldUpdateOperationsInput | number
    img?: NullableJsonNullValueInput | InputJsonValue
  }

  export type ticketUncheckedUpdateWithoutOrder_itemInput = {
    ticket_id?: IntFieldUpdateOperationsInput | number
    type?: StringFieldUpdateOperationsInput | string
    price?: IntFieldUpdateOperationsInput | number
    img?: NullableJsonNullValueInput | InputJsonValue
  }

  export type order_itemCreateWithoutRoomInput = {
    order_item_id: string
    check_in_date?: Date | string | null
    check_out_date?: Date | string | null
    people_count?: number | null
    room_count?: number | null
    quantity: number
    booked_date?: Date | string | null
    valid_date?: Date | string | null
    customer_order: customer_orderCreateNestedOneWithoutOrder_itemInput
    ticket?: ticketCreateNestedOneWithoutOrder_itemInput
  }

  export type order_itemUncheckedCreateWithoutRoomInput = {
    order_item_id: string
    order_id: number
    ticket_id?: number | null
    check_in_date?: Date | string | null
    check_out_date?: Date | string | null
    people_count?: number | null
    room_count?: number | null
    quantity: number
    booked_date?: Date | string | null
    valid_date?: Date | string | null
  }

  export type order_itemCreateOrConnectWithoutRoomInput = {
    where: order_itemWhereUniqueInput
    create: XOR<order_itemCreateWithoutRoomInput, order_itemUncheckedCreateWithoutRoomInput>
  }

  export type order_itemCreateManyRoomInputEnvelope = {
    data: order_itemCreateManyRoomInput | order_itemCreateManyRoomInput[]
    skipDuplicates?: boolean
  }

  export type order_itemUpsertWithWhereUniqueWithoutRoomInput = {
    where: order_itemWhereUniqueInput
    update: XOR<order_itemUpdateWithoutRoomInput, order_itemUncheckedUpdateWithoutRoomInput>
    create: XOR<order_itemCreateWithoutRoomInput, order_itemUncheckedCreateWithoutRoomInput>
  }

  export type order_itemUpdateWithWhereUniqueWithoutRoomInput = {
    where: order_itemWhereUniqueInput
    data: XOR<order_itemUpdateWithoutRoomInput, order_itemUncheckedUpdateWithoutRoomInput>
  }

  export type order_itemUpdateManyWithWhereWithoutRoomInput = {
    where: order_itemScalarWhereInput
    data: XOR<order_itemUpdateManyMutationInput, order_itemUncheckedUpdateManyWithoutRoomInput>
  }

  export type order_itemCreateWithoutTicketInput = {
    order_item_id: string
    check_in_date?: Date | string | null
    check_out_date?: Date | string | null
    people_count?: number | null
    room_count?: number | null
    quantity: number
    booked_date?: Date | string | null
    valid_date?: Date | string | null
    customer_order: customer_orderCreateNestedOneWithoutOrder_itemInput
    room?: roomCreateNestedOneWithoutOrder_itemInput
  }

  export type order_itemUncheckedCreateWithoutTicketInput = {
    order_item_id: string
    order_id: number
    room_id?: number | null
    check_in_date?: Date | string | null
    check_out_date?: Date | string | null
    people_count?: number | null
    room_count?: number | null
    quantity: number
    booked_date?: Date | string | null
    valid_date?: Date | string | null
  }

  export type order_itemCreateOrConnectWithoutTicketInput = {
    where: order_itemWhereUniqueInput
    create: XOR<order_itemCreateWithoutTicketInput, order_itemUncheckedCreateWithoutTicketInput>
  }

  export type order_itemCreateManyTicketInputEnvelope = {
    data: order_itemCreateManyTicketInput | order_itemCreateManyTicketInput[]
    skipDuplicates?: boolean
  }

  export type order_itemUpsertWithWhereUniqueWithoutTicketInput = {
    where: order_itemWhereUniqueInput
    update: XOR<order_itemUpdateWithoutTicketInput, order_itemUncheckedUpdateWithoutTicketInput>
    create: XOR<order_itemCreateWithoutTicketInput, order_itemUncheckedCreateWithoutTicketInput>
  }

  export type order_itemUpdateWithWhereUniqueWithoutTicketInput = {
    where: order_itemWhereUniqueInput
    data: XOR<order_itemUpdateWithoutTicketInput, order_itemUncheckedUpdateWithoutTicketInput>
  }

  export type order_itemUpdateManyWithWhereWithoutTicketInput = {
    where: order_itemScalarWhereInput
    data: XOR<order_itemUpdateManyMutationInput, order_itemUncheckedUpdateManyWithoutTicketInput>
  }

  export type facilityCreateWithoutMore_aboutInput = {
    title: string
    image?: NullableJsonNullValueInput | InputJsonValue
    category: string
    des?: string | null
    content?: string | null
    area: number
    location: string
    open_time?: string | null
    data_maintain?: string | null
    facility_id_name: string
    facility_class_name: string
    rule_others: string
    remarks?: string | null
    facility_rule?: facility_ruleCreateNestedManyWithoutFacilityInput
  }

  export type facilityUncheckedCreateWithoutMore_aboutInput = {
    facility_id?: number
    title: string
    image?: NullableJsonNullValueInput | InputJsonValue
    category: string
    des?: string | null
    content?: string | null
    area: number
    location: string
    open_time?: string | null
    data_maintain?: string | null
    facility_id_name: string
    facility_class_name: string
    rule_others: string
    remarks?: string | null
    facility_rule?: facility_ruleUncheckedCreateNestedManyWithoutFacilityInput
  }

  export type facilityCreateOrConnectWithoutMore_aboutInput = {
    where: facilityWhereUniqueInput
    create: XOR<facilityCreateWithoutMore_aboutInput, facilityUncheckedCreateWithoutMore_aboutInput>
  }

  export type facilityUpsertWithoutMore_aboutInput = {
    update: XOR<facilityUpdateWithoutMore_aboutInput, facilityUncheckedUpdateWithoutMore_aboutInput>
    create: XOR<facilityCreateWithoutMore_aboutInput, facilityUncheckedCreateWithoutMore_aboutInput>
    where?: facilityWhereInput
  }

  export type facilityUpdateToOneWithWhereWithoutMore_aboutInput = {
    where?: facilityWhereInput
    data: XOR<facilityUpdateWithoutMore_aboutInput, facilityUncheckedUpdateWithoutMore_aboutInput>
  }

  export type facilityUpdateWithoutMore_aboutInput = {
    title?: StringFieldUpdateOperationsInput | string
    image?: NullableJsonNullValueInput | InputJsonValue
    category?: StringFieldUpdateOperationsInput | string
    des?: NullableStringFieldUpdateOperationsInput | string | null
    content?: NullableStringFieldUpdateOperationsInput | string | null
    area?: IntFieldUpdateOperationsInput | number
    location?: StringFieldUpdateOperationsInput | string
    open_time?: NullableStringFieldUpdateOperationsInput | string | null
    data_maintain?: NullableStringFieldUpdateOperationsInput | string | null
    facility_id_name?: StringFieldUpdateOperationsInput | string
    facility_class_name?: StringFieldUpdateOperationsInput | string
    rule_others?: StringFieldUpdateOperationsInput | string
    remarks?: NullableStringFieldUpdateOperationsInput | string | null
    facility_rule?: facility_ruleUpdateManyWithoutFacilityNestedInput
  }

  export type facilityUncheckedUpdateWithoutMore_aboutInput = {
    facility_id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    image?: NullableJsonNullValueInput | InputJsonValue
    category?: StringFieldUpdateOperationsInput | string
    des?: NullableStringFieldUpdateOperationsInput | string | null
    content?: NullableStringFieldUpdateOperationsInput | string | null
    area?: IntFieldUpdateOperationsInput | number
    location?: StringFieldUpdateOperationsInput | string
    open_time?: NullableStringFieldUpdateOperationsInput | string | null
    data_maintain?: NullableStringFieldUpdateOperationsInput | string | null
    facility_id_name?: StringFieldUpdateOperationsInput | string
    facility_class_name?: StringFieldUpdateOperationsInput | string
    rule_others?: StringFieldUpdateOperationsInput | string
    remarks?: NullableStringFieldUpdateOperationsInput | string | null
    facility_rule?: facility_ruleUncheckedUpdateManyWithoutFacilityNestedInput
  }

  export type credit_cardCreateManyMemberInput = {
    credit_card_id?: number
    number: string
    expiry: Date | string
    cvv: string
  }

  export type customer_orderCreateManyMemberInput = {
    order_id?: number
    total_amount: number
    status: string
    order_date?: Date | string | null
  }

  export type credit_cardUpdateWithoutMemberInput = {
    number?: StringFieldUpdateOperationsInput | string
    expiry?: DateTimeFieldUpdateOperationsInput | Date | string
    cvv?: StringFieldUpdateOperationsInput | string
  }

  export type credit_cardUncheckedUpdateWithoutMemberInput = {
    credit_card_id?: IntFieldUpdateOperationsInput | number
    number?: StringFieldUpdateOperationsInput | string
    expiry?: DateTimeFieldUpdateOperationsInput | Date | string
    cvv?: StringFieldUpdateOperationsInput | string
  }

  export type credit_cardUncheckedUpdateManyWithoutMemberInput = {
    credit_card_id?: IntFieldUpdateOperationsInput | number
    number?: StringFieldUpdateOperationsInput | string
    expiry?: DateTimeFieldUpdateOperationsInput | Date | string
    cvv?: StringFieldUpdateOperationsInput | string
  }

  export type customer_orderUpdateWithoutMemberInput = {
    total_amount?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    order_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    order_info?: order_infoUpdateManyWithoutCustomer_orderNestedInput
    order_item?: order_itemUpdateManyWithoutCustomer_orderNestedInput
  }

  export type customer_orderUncheckedUpdateWithoutMemberInput = {
    order_id?: IntFieldUpdateOperationsInput | number
    total_amount?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    order_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    order_info?: order_infoUncheckedUpdateManyWithoutCustomer_orderNestedInput
    order_item?: order_itemUncheckedUpdateManyWithoutCustomer_orderNestedInput
  }

  export type customer_orderUncheckedUpdateManyWithoutMemberInput = {
    order_id?: IntFieldUpdateOperationsInput | number
    total_amount?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    order_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type order_infoCreateManyCustomer_orderInput = {
    order_info_id?: number
    customer: string
    phone_number: string
    address: string
    payment_method: string
  }

  export type order_itemCreateManyCustomer_orderInput = {
    order_item_id: string
    room_id?: number | null
    ticket_id?: number | null
    check_in_date?: Date | string | null
    check_out_date?: Date | string | null
    people_count?: number | null
    room_count?: number | null
    quantity: number
    booked_date?: Date | string | null
    valid_date?: Date | string | null
  }

  export type order_infoUpdateWithoutCustomer_orderInput = {
    customer?: StringFieldUpdateOperationsInput | string
    phone_number?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    payment_method?: StringFieldUpdateOperationsInput | string
  }

  export type order_infoUncheckedUpdateWithoutCustomer_orderInput = {
    order_info_id?: IntFieldUpdateOperationsInput | number
    customer?: StringFieldUpdateOperationsInput | string
    phone_number?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    payment_method?: StringFieldUpdateOperationsInput | string
  }

  export type order_infoUncheckedUpdateManyWithoutCustomer_orderInput = {
    order_info_id?: IntFieldUpdateOperationsInput | number
    customer?: StringFieldUpdateOperationsInput | string
    phone_number?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    payment_method?: StringFieldUpdateOperationsInput | string
  }

  export type order_itemUpdateWithoutCustomer_orderInput = {
    order_item_id?: StringFieldUpdateOperationsInput | string
    check_in_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    check_out_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    people_count?: NullableIntFieldUpdateOperationsInput | number | null
    room_count?: NullableIntFieldUpdateOperationsInput | number | null
    quantity?: IntFieldUpdateOperationsInput | number
    booked_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    valid_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    room?: roomUpdateOneWithoutOrder_itemNestedInput
    ticket?: ticketUpdateOneWithoutOrder_itemNestedInput
  }

  export type order_itemUncheckedUpdateWithoutCustomer_orderInput = {
    order_item_id?: StringFieldUpdateOperationsInput | string
    room_id?: NullableIntFieldUpdateOperationsInput | number | null
    ticket_id?: NullableIntFieldUpdateOperationsInput | number | null
    check_in_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    check_out_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    people_count?: NullableIntFieldUpdateOperationsInput | number | null
    room_count?: NullableIntFieldUpdateOperationsInput | number | null
    quantity?: IntFieldUpdateOperationsInput | number
    booked_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    valid_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type order_itemUncheckedUpdateManyWithoutCustomer_orderInput = {
    order_item_id?: StringFieldUpdateOperationsInput | string
    room_id?: NullableIntFieldUpdateOperationsInput | number | null
    ticket_id?: NullableIntFieldUpdateOperationsInput | number | null
    check_in_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    check_out_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    people_count?: NullableIntFieldUpdateOperationsInput | number | null
    room_count?: NullableIntFieldUpdateOperationsInput | number | null
    quantity?: IntFieldUpdateOperationsInput | number
    booked_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    valid_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type facility_ruleCreateManyFacilityInput = {
    facility_rule_id?: number
    rule_type?: string | null
    rule_value?: string | null
  }

  export type more_aboutCreateManyFacilityInput = {
    more_about_id?: number
    more_link: string
    img?: NullableJsonNullValueInput | InputJsonValue
  }

  export type facility_ruleUpdateWithoutFacilityInput = {
    rule_type?: NullableStringFieldUpdateOperationsInput | string | null
    rule_value?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type facility_ruleUncheckedUpdateWithoutFacilityInput = {
    facility_rule_id?: IntFieldUpdateOperationsInput | number
    rule_type?: NullableStringFieldUpdateOperationsInput | string | null
    rule_value?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type facility_ruleUncheckedUpdateManyWithoutFacilityInput = {
    facility_rule_id?: IntFieldUpdateOperationsInput | number
    rule_type?: NullableStringFieldUpdateOperationsInput | string | null
    rule_value?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type more_aboutUpdateWithoutFacilityInput = {
    more_link?: StringFieldUpdateOperationsInput | string
    img?: NullableJsonNullValueInput | InputJsonValue
  }

  export type more_aboutUncheckedUpdateWithoutFacilityInput = {
    more_about_id?: IntFieldUpdateOperationsInput | number
    more_link?: StringFieldUpdateOperationsInput | string
    img?: NullableJsonNullValueInput | InputJsonValue
  }

  export type more_aboutUncheckedUpdateManyWithoutFacilityInput = {
    more_about_id?: IntFieldUpdateOperationsInput | number
    more_link?: StringFieldUpdateOperationsInput | string
    img?: NullableJsonNullValueInput | InputJsonValue
  }

  export type order_itemCreateManyRoomInput = {
    order_item_id: string
    order_id: number
    ticket_id?: number | null
    check_in_date?: Date | string | null
    check_out_date?: Date | string | null
    people_count?: number | null
    room_count?: number | null
    quantity: number
    booked_date?: Date | string | null
    valid_date?: Date | string | null
  }

  export type order_itemUpdateWithoutRoomInput = {
    order_item_id?: StringFieldUpdateOperationsInput | string
    check_in_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    check_out_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    people_count?: NullableIntFieldUpdateOperationsInput | number | null
    room_count?: NullableIntFieldUpdateOperationsInput | number | null
    quantity?: IntFieldUpdateOperationsInput | number
    booked_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    valid_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    customer_order?: customer_orderUpdateOneRequiredWithoutOrder_itemNestedInput
    ticket?: ticketUpdateOneWithoutOrder_itemNestedInput
  }

  export type order_itemUncheckedUpdateWithoutRoomInput = {
    order_item_id?: StringFieldUpdateOperationsInput | string
    order_id?: IntFieldUpdateOperationsInput | number
    ticket_id?: NullableIntFieldUpdateOperationsInput | number | null
    check_in_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    check_out_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    people_count?: NullableIntFieldUpdateOperationsInput | number | null
    room_count?: NullableIntFieldUpdateOperationsInput | number | null
    quantity?: IntFieldUpdateOperationsInput | number
    booked_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    valid_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type order_itemUncheckedUpdateManyWithoutRoomInput = {
    order_item_id?: StringFieldUpdateOperationsInput | string
    order_id?: IntFieldUpdateOperationsInput | number
    ticket_id?: NullableIntFieldUpdateOperationsInput | number | null
    check_in_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    check_out_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    people_count?: NullableIntFieldUpdateOperationsInput | number | null
    room_count?: NullableIntFieldUpdateOperationsInput | number | null
    quantity?: IntFieldUpdateOperationsInput | number
    booked_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    valid_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type order_itemCreateManyTicketInput = {
    order_item_id: string
    order_id: number
    room_id?: number | null
    check_in_date?: Date | string | null
    check_out_date?: Date | string | null
    people_count?: number | null
    room_count?: number | null
    quantity: number
    booked_date?: Date | string | null
    valid_date?: Date | string | null
  }

  export type order_itemUpdateWithoutTicketInput = {
    order_item_id?: StringFieldUpdateOperationsInput | string
    check_in_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    check_out_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    people_count?: NullableIntFieldUpdateOperationsInput | number | null
    room_count?: NullableIntFieldUpdateOperationsInput | number | null
    quantity?: IntFieldUpdateOperationsInput | number
    booked_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    valid_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    customer_order?: customer_orderUpdateOneRequiredWithoutOrder_itemNestedInput
    room?: roomUpdateOneWithoutOrder_itemNestedInput
  }

  export type order_itemUncheckedUpdateWithoutTicketInput = {
    order_item_id?: StringFieldUpdateOperationsInput | string
    order_id?: IntFieldUpdateOperationsInput | number
    room_id?: NullableIntFieldUpdateOperationsInput | number | null
    check_in_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    check_out_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    people_count?: NullableIntFieldUpdateOperationsInput | number | null
    room_count?: NullableIntFieldUpdateOperationsInput | number | null
    quantity?: IntFieldUpdateOperationsInput | number
    booked_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    valid_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type order_itemUncheckedUpdateManyWithoutTicketInput = {
    order_item_id?: StringFieldUpdateOperationsInput | string
    order_id?: IntFieldUpdateOperationsInput | number
    room_id?: NullableIntFieldUpdateOperationsInput | number | null
    check_in_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    check_out_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    people_count?: NullableIntFieldUpdateOperationsInput | number | null
    room_count?: NullableIntFieldUpdateOperationsInput | number | null
    quantity?: IntFieldUpdateOperationsInput | number
    booked_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    valid_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }



  /**
   * Aliases for legacy arg types
   */
    /**
     * @deprecated Use MemberCountOutputTypeDefaultArgs instead
     */
    export type MemberCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = MemberCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use Customer_orderCountOutputTypeDefaultArgs instead
     */
    export type Customer_orderCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = Customer_orderCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use FacilityCountOutputTypeDefaultArgs instead
     */
    export type FacilityCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = FacilityCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use RoomCountOutputTypeDefaultArgs instead
     */
    export type RoomCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = RoomCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use TicketCountOutputTypeDefaultArgs instead
     */
    export type TicketCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = TicketCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use memberDefaultArgs instead
     */
    export type memberArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = memberDefaultArgs<ExtArgs>
    /**
     * @deprecated Use credit_cardDefaultArgs instead
     */
    export type credit_cardArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = credit_cardDefaultArgs<ExtArgs>
    /**
     * @deprecated Use customer_orderDefaultArgs instead
     */
    export type customer_orderArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = customer_orderDefaultArgs<ExtArgs>
    /**
     * @deprecated Use facilityDefaultArgs instead
     */
    export type facilityArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = facilityDefaultArgs<ExtArgs>
    /**
     * @deprecated Use facility_ruleDefaultArgs instead
     */
    export type facility_ruleArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = facility_ruleDefaultArgs<ExtArgs>
    /**
     * @deprecated Use order_infoDefaultArgs instead
     */
    export type order_infoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = order_infoDefaultArgs<ExtArgs>
    /**
     * @deprecated Use order_itemDefaultArgs instead
     */
    export type order_itemArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = order_itemDefaultArgs<ExtArgs>
    /**
     * @deprecated Use roomDefaultArgs instead
     */
    export type roomArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = roomDefaultArgs<ExtArgs>
    /**
     * @deprecated Use ticketDefaultArgs instead
     */
    export type ticketArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ticketDefaultArgs<ExtArgs>
    /**
     * @deprecated Use more_aboutDefaultArgs instead
     */
    export type more_aboutArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = more_aboutDefaultArgs<ExtArgs>

  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}