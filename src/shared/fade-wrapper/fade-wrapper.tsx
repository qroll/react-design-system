import { ChevronLeftIcon } from "@lifesg/react-icons/chevron-left";
import { ChevronRightIcon } from "@lifesg/react-icons/chevron-right";
import clsx from "clsx";
import throttle from "lodash/throttle";
import type React from "react";
import {
    forwardRef,
    useEffect,
    useImperativeHandle,
    useRef,
    useState,
} from "react";
import { useResizeDetector } from "react-resize-detector";

import { useApplyStyle } from "../../theme";
import { Colour } from "../../theme/tokens";
import {
    Content,
    Fade,
    FadeIndicatorButton,
    tokens,
    Wrapper,
} from "./fade-wrapper.style";
import type { FadeColorSet, FadeWrapperProps, FadeWrapperRef } from "./types";

const Component = (
    {
        children,
        fadeColor,
        fadePosition = "both",
        showIndicator = false,
        onResize,
        ...otherProps
    }: FadeWrapperProps,
    ref: React.Ref<FadeWrapperRef>
) => {
    // =========================================================================
    // CONST, STATE, REFS
    // =========================================================================
    const [showFadeLeft, setShowFadeLeft] = useState<boolean>(
        fadePosition === "left" || fadePosition === "both"
    );
    const [showFadeRight, setShowFadeRight] = useState<boolean>(
        fadePosition === "right" || fadePosition === "both"
    );

    const wrapperRef = useRef<HTMLDivElement>(null);
    const contentRef = useRef<HTMLDivElement>(null);
    const fadeLeftRef = useRef<HTMLDivElement>(null);
    const fadeRightRef = useRef<HTMLDivElement>(null);

    const throttledScrollHandler = throttle(handleScroll, 50);

    // To scroll left when wrapper resizes
    useResizeDetector({
        onResize: handleResize,
        targetRef: wrapperRef,
        refreshMode: "debounce",
        refreshRate: 50,
    });

    useImperativeHandle(ref, () => {
        return {
            resize() {
                handleResize();
            },
        };
    });

    // =========================================================================
    // EFFECTS
    // =========================================================================
    useEffect(() => {
        const content = contentRef.current;

        handleScroll();

        if (content) {
            content.addEventListener("scroll", throttledScrollHandler);
        }

        return () => {
            if (content) {
                content.removeEventListener("scroll", throttledScrollHandler);
            }
        };
    }, []);

    // =========================================================================
    // EVENT HANDLERS
    // =========================================================================

    function handleScroll() {
        const wrapper = wrapperRef.current;
        const content = contentRef.current;

        if (wrapper && content && content.scrollWidth > wrapper.offsetWidth) {
            /**
             * NOTE: Used Math.round because we observe a 0.5 difference
             * even when we scroll to the end. This causes the fade right
             * to not be removed
             */
            setShowFadeRight(
                Math.round(content.scrollLeft) <
                    content.scrollWidth - content.offsetWidth
            );
            setShowFadeLeft(content.scrollLeft >= 1);
        } else {
            setShowFadeRight(false);
            setShowFadeLeft(false);
        }
    }

    function handleResize() {
        handleScroll();

        if (onResize) {
            onResize({
                content: contentRef.current!,
                wrapper: wrapperRef.current!,
            });
        }

        // TODO: Will move this out to Breadcrumb when it uses this component
        // if (content && wrapper && window.innerWidth <= MediaWidths.tablet) {
        //     content.scrollLeft = content.scrollWidth - wrapper.offsetWidth;
        // }
    }

    const fadeColorSet: FadeColorSet =
        Array.isArray(fadeColor) && fadeColor.length > 0
            ? {
                  left: fadeColor,
                  right: fadeColor,
              }
            : !fadeColor
            ? {
                  left: undefined,
                  right: undefined,
              }
            : (fadeColor as FadeColorSet);

    const getFadeBackgroundColorValue = (color?: string[]) => {
        if (color && color.length > 0) {
            return color.join(", ");
        }

        if (showIndicator) {
            return `${Colour.bg}, ${Colour.bg}`;
        }

        return null;
    };

    useApplyStyle(fadeLeftRef, {
        [tokens.backgroundColor]: getFadeBackgroundColorValue(
            fadeColorSet.left
        ),
    });
    useApplyStyle(fadeRightRef, {
        [tokens.backgroundColor]: getFadeBackgroundColorValue(
            fadeColorSet.right
        ),
    });

    // =========================================================================
    // RENDER FUNCTIONS
    // =========================================================================
    const renderFade = () => {
        return (
            <>
                {showFadeLeft && (
                    <Fade
                        ref={fadeLeftRef}
                        className={clsx("fadeLeft")}
                        data-id="left-fade"
                    >
                        {showIndicator && (
                            <FadeIndicatorButton
                                className={clsx("indicatorLeft")}
                                data-id="left-fade-indicator-button"
                            >
                                <ChevronLeftIcon />
                            </FadeIndicatorButton>
                        )}
                    </Fade>
                )}
                {showFadeRight && (
                    <Fade
                        ref={fadeRightRef}
                        className={clsx("fadeRight")}
                        data-id="right-fade"
                    >
                        {showIndicator && (
                            <FadeIndicatorButton
                                className={clsx("indicatorRight")}
                                data-id="right-fade-indicator-button"
                            >
                                <ChevronRightIcon />
                            </FadeIndicatorButton>
                        )}
                    </Fade>
                )}
            </>
        );
    };

    return (
        <Wrapper ref={wrapperRef} {...otherProps}>
            <Content ref={contentRef}>{children}</Content>
            {renderFade()}
        </Wrapper>
    );
};

export const FadeWrapper = forwardRef(Component);
