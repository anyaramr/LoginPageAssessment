import * as dotenv from 'dotenv';
import * as path from 'path';

dotenv.config({
  path: path.resolve(__dirname, '../.env'),
  override: true,
});

function getEnvVar(name: string): string {
  const value = process.env[name];

  if (!value || value.trim() === '') {
    throw new Error(`Missing environment variable: ${name}`);
  }

  return value;
}

export class Env {
  static readonly baseURL = getEnvVar('BASE_URL');
  static readonly validUsername = getEnvVar('VALID_USERNAME');
  static readonly validPassword = getEnvVar('VALID_PASSWORD');
  static readonly invalidUsername = getEnvVar('INVALID_USERNAME');
  static readonly invalidPassword = getEnvVar('INVALID_PASSWORD');
}