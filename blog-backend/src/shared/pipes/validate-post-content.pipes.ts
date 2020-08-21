import { PipeTransform, Injectable, ArgumentMetadata } from '@nestjs/common';

@Injectable()
export class ValidatePostContent implements PipeTransform<string> {
  async transform(value: string, metadata: ArgumentMetadata) {
    return `<p>${value.replace(/\r\n/i, '\n').split('\n').join('</p><p>')}</p>`;
  }
}
