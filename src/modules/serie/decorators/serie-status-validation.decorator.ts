/* eslint-disable @typescript-eslint/ban-types */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { registerDecorator, ValidationOptions, ValidationArguments } from "class-validator";
import { SerieStatus } from "../serie-status.enum";
 
export function ValidateStatus(validationOptions?: ValidationOptions): any {
	const allowedStatus = [
		SerieStatus.TO_WATCH,
		SerieStatus.WATCHING,
		SerieStatus.WATCHED
	];
	return function (object: Object, propertyName: string): void {
		registerDecorator({
			name: "validateStatus",
			target: object.constructor,
			propertyName: propertyName,
			options: validationOptions,
			validator: {
				validate(value: any, args: ValidationArguments): any {
					return allowedStatus.indexOf(value) > -1;
				}
			}
		});
	};
}