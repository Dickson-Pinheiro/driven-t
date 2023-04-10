import { ApplicationError } from '@/protocols';

export function noContentError(): ApplicationError {
  return {
    name: 'noContentError',
    message: 'no content.',
  };
}