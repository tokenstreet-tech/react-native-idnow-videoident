/**
 * DeepRequired is exactly what the name suggest
 * It takes the TypeScript Required type and makes the given object required at all levels
 * @param The nested object which should be make deep required
 */
// eslint-disable-next-line @typescript-eslint/no-type-alias
export type DeepRequired<NestedObject> = Required<{ [Key in keyof NestedObject]: DeepRequired<NestedObject[Key]> }>;
