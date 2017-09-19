/// <reference path="./_helpers.d.ts" />
/// <reference path="./android.animation.AnimatorSet.d.ts" />
/// <reference path="./android.view.View.d.ts" />
/// <reference path="./android.view.animation.Interpolator.d.ts" />
/// <reference path="./com.github.florent37.viewanimator.AnimationBuilder.d.ts" />
/// <reference path="./java.lang.Class.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
declare module com {
	export module github {
		export module florent37 {
			export module viewanimator {
				export class ViewAnimator extends java.lang.Object {
					public duration(param0: number): com.github.florent37.viewanimator.ViewAnimator;
					public repeatCount(param0: number): com.github.florent37.viewanimator.ViewAnimator;
					public thenAnimate(param0: native.Array<android.view.View>): com.github.florent37.viewanimator.AnimationBuilder;
					public onStop(param0: com.github.florent37.viewanimator.AnimationListener.Stop): com.github.florent37.viewanimator.ViewAnimator;
					public cancel(): void;
					public repeatMode(param0: number): com.github.florent37.viewanimator.ViewAnimator;
					public start(): com.github.florent37.viewanimator.ViewAnimator;
					public interpolator(param0: android.view.animation.Interpolator): com.github.florent37.viewanimator.ViewAnimator;
					public constructor();
					public static animate(param0: native.Array<android.view.View>): com.github.florent37.viewanimator.AnimationBuilder;
					public startDelay(param0: number): com.github.florent37.viewanimator.ViewAnimator;
					public createAnimatorSet(): android.animation.AnimatorSet;
					public onStart(param0: com.github.florent37.viewanimator.AnimationListener.Start): com.github.florent37.viewanimator.ViewAnimator;
					public addAnimationBuilder(param0: native.Array<android.view.View>): com.github.florent37.viewanimator.AnimationBuilder;
				}
				export module ViewAnimator {
					export class RepeatMode extends java.lang.Object implements java.lang.annotation.Annotation {
						/**
						 * Constructs a new instance of the com.github.florent37.viewanimator.ViewAnimator$RepeatMode interface with the provided implementation.
						 */
						public constructor(implementation: {
							equals(param0: java.lang.Object): boolean;
							hashCode(): number;
							toString(): string;
							annotationType(): java.lang.Class;
						});
						public equals(param0: java.lang.Object): boolean;
						public annotationType(): java.lang.Class;
						public hashCode(): number;
						public toString(): string;
					}
				}
			}
		}
	}
}
