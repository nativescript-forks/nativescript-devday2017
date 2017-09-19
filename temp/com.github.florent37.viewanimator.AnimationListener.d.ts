/// <reference path="./_helpers.d.ts" />
/// <reference path="./android.view.View.d.ts" />
declare module com {
	export module github {
		export module florent37 {
			export module viewanimator {
				export class AnimationListener extends java.lang.Object {
				}
				export module AnimationListener {
					export class Start extends java.lang.Object {
						/**
						 * Constructs a new instance of the com.github.florent37.viewanimator.AnimationListener$Start interface with the provided implementation.
						 */
						public constructor(implementation: {
							onStart(): void;
						});
						public onStart(): void;
					}
					export class Stop extends java.lang.Object {
						/**
						 * Constructs a new instance of the com.github.florent37.viewanimator.AnimationListener$Stop interface with the provided implementation.
						 */
						public constructor(implementation: {
							onStop(): void;
						});
						public onStop(): void;
					}
					export class Update extends java.lang.Object {
						/**
						 * Constructs a new instance of the com.github.florent37.viewanimator.AnimationListener$Update interface with the provided implementation.
						 */
						public constructor(implementation: {
							update(param0: android.view.View, param1: number): void;
						});
						public update(param0: android.view.View, param1: number): void;
					}
				}
			}
		}
	}
}
