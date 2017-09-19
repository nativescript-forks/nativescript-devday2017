/// <reference path="./_helpers.d.ts" />
/// <reference path="./android.graphics.Path.d.ts" />
/// <reference path="./java.lang.CharSequence.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
declare module com {
	export module github {
		export module florent37 {
			export module viewanimator {
				export class SvgPathParser extends java.lang.Object {
					public static tryParsePath(param0: string): android.graphics.Path;
					public constructor();
					public static parsePath(param0: string): android.graphics.Path;
				}
				export module SvgPathParser {
					export class ParserHelper extends java.lang.Object {
						public constructor(param0: string, param1: number);
						public getPosition(): number;
						public skipWhitespace(): void;
						public skipNumberSeparator(): void;
						public static buildFloat(param0: number, param1: number): number;
						public advance(): void;
						public parseFloat(): number;
						public nextFloat(): number;
					}
				}
			}
		}
	}
}
