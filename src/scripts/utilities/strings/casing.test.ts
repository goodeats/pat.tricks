import { describe, it, expect } from 'vitest';
import { toCamelCase, toSnakeCase, toKebabCase, toTitleCase } from './casing';

describe('String Casing Utilities', () => {
  it('converts string to camel case correctly', () => {
    // obviously some of these are undesireble results,
    // but the function is working as intended
    // consider chaining string manipulations to get the desired result IRL
    expect(toCamelCase('hello world')).toBe('helloWorld');
    expect(toCamelCase('Hello world')).toBe('helloWorld');
    expect(toCamelCase('Hello World')).toBe('helloWorld');
    expect(toCamelCase('HELLO WORLD')).toBe('hELLOWORLD');
    expect(toCamelCase('hello-world')).toBe('hello-World');
    expect(toCamelCase('Hello-World')).toBe('hello-World');
    expect(toCamelCase('hello_world')).toBe('hello_world');
    expect(toCamelCase('Hello_World')).toBe('hello_World');
  });

  it('converts string to snake case correctly', () => {
    expect(toSnakeCase('hello world')).toBe('hello_world');
    expect(toSnakeCase('Hello World')).toBe('hello_world');
    expect(toSnakeCase('helloWorld')).toBe('hello_world');
    expect(toSnakeCase('HelloWorld')).toBe('hello_world');
  });

  it('converts string to kebab case correctly', () => {
    expect(toKebabCase('hello world')).toBe('hello-world');
    expect(toKebabCase('Hello World')).toBe('hello-world');
    expect(toKebabCase('helloWorld')).toBe('hello-world');
    expect(toKebabCase('HelloWorld')).toBe('hello-world');
  });

  it('converts string to title case correctly', () => {
    expect(toTitleCase('hello world')).toBe('Hello World');
    expect(toTitleCase('hello-world')).toBe('Hello-world');
    expect(toTitleCase('hello_world')).toBe('Hello_world');
    expect(toTitleCase('helloworld')).toBe('Helloworld');
  });
});
