import { registerDecorator, type ValidationArguments, type ValidationOptions } from 'class-validator';
import { isMatch } from 'date-fns';

export function IsDate_yyyyMMdd(validationOptions?: ValidationOptions) {
  return (object: object, propertyName: string) => {
    registerDecorator({
      name: 'IsDate yyyy-MM-dd',
      target: object.constructor,
      propertyName,
      options: validationOptions,
      validator: {
        validate(value: string, args: ValidationArguments) {
          if (!value) return false;

          const test = /^\d{4}-\d{2}-\d{2}$/.test(value);
          if (!test) return false;

          const match = isMatch(value, 'yyyy-MM-dd');
          if (!match) return false;

          return true;
        },
        defaultMessage(args: ValidationArguments) {
          return 'Date format must be: yyyy-MM-dd';
        },
      },
    });
  };
}
