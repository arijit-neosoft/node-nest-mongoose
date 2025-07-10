import { HttpException, HttpStatus } from '@nestjs/common';

interface _ {
  message: string;
  error: unknown;
}

export class AppException extends HttpException {
  constructor(response: _, status: HttpStatus, options?: { cause?: unknown; description?: string }) {
    super(response, status, options);
  }
}
