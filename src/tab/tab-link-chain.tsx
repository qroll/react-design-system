import clsx from "clsx";
import { useContext, useEffect, useRef } from "react";

import { FadeWrapper, type ResizeCallbackParams } from "../shared/fade-wrapper";
import { useDesignToken, useSafeMaxWidthMediaQuery } from "../theme";
import { Breakpoint } from "../theme/tokens";
import { TabContext } from "./tab-context";
import * as styles from "./tab-link-chain.styles";
import type { TabProps } from "./types";

interface Props
    extends Pick<
        TabProps,
        "fullWidthIndicatorLine" | "onTabClick" | "data-testid" | "fadeColor"
    > {
    controlledMode?: boolean;
}

export const TabLinkChain = ({
    controlledMode,
    "data-testid": testId,
    onTabClick,
    fullWidthIndicatorLine,
    fadeColor,
}: Props) => {
    // =========================================================================
    // CONST, STATE, REFS
    // =========================================================================
    const { setCurrentActiveIndex, currentActiveIndex, tabLinks } =
        useContext(TabContext);

    const mobileBreakpoint = useDesignToken(Breakpoint["md-max"]);
    const isMobile = useSafeMaxWidthMediaQuery(mobileBreakpoint);
    const tabletBreakpoint = useDesignToken(Breakpoint["lg-max"]);
    const isTablet = useSafeMaxWidthMediaQuery(tabletBreakpoint);

    const activeLinkRef = useRef<HTMLLIElement | null>(null);
    const chainLinkRefs = useRef<(HTMLButtonElement | null)[]>([]);
    const chainItemRefs = useRef<(HTMLLIElement | null)[]>([]);

    useEffect(() => {
        chainItemRefs.current.forEach((itemRef, index) => {
            if (!itemRef) {
                return;
            }

            const width = tabLinks[index]?.width;

            if (width) {
                itemRef.style.setProperty(styles.tokens.chainItem.width, width);
            } else {
                itemRef.style.removeProperty(styles.tokens.chainItem.width);
            }
        });
    }, [tabLinks]);

    // =========================================================================
    // EVENT HANDLERS
    // =========================================================================
    const handleChainLinkClick =
        (index: number) =>
        (event: React.MouseEvent<HTMLButtonElement | HTMLDivElement>) => {
            event.preventDefault();
            event.stopPropagation();
            if (!controlledMode) {
                setCurrentActiveIndex(index);
            }

            if (onTabClick) {
                onTabClick(tabLinks[index].title, index);
            }
        };

    const handleResize = ({ content, wrapper }: ResizeCallbackParams) => {
        if (content && wrapper && isTablet && activeLinkRef.current) {
            content.scrollLeft =
                activeLinkRef.current.getBoundingClientRect().left;
        }
    };

    const handleKeyDown = (e: React.KeyboardEvent, index: number) => {
        let nextIndex = index;
        if (e.key === "ArrowRight") {
            nextIndex = (index + 1) % tabLinks.length;
            e.preventDefault();
        } else if (e.key === "ArrowLeft") {
            nextIndex = (index - 1 + tabLinks.length) % tabLinks.length;
            e.preventDefault();
        }

        chainLinkRefs.current[nextIndex]?.focus();
    };

    // =========================================================================
    // HELPER FUNCTIONS
    // =========================================================================
    const truncateText = (value: string) => {
        if (isMobile) {
            return value.length > 20 ? `${value.substring(0, 20)}...` : value;
        }

        return value;
    };

    // =========================================================================
    // RENDER FUNCTIONS
    // =========================================================================
    return (
        <FadeWrapper
            onResize={handleResize}
            data-testid={testId}
            fadeColor={fadeColor}
            className={styles.customFadeWrapper}
        >
            <ul
                role="tablist"
                className={clsx(
                    styles.chain,
                    fullWidthIndicatorLine && styles.chainFullWidthIndicator
                )}
            >
                {tabLinks.map(({ title, width, titleAddon }, index) => {
                    const isActive = currentActiveIndex === index;
                    const chainItemRef = (el: HTMLLIElement | null) => {
                        chainItemRefs.current[index] = el;
                        if (isActive) {
                            activeLinkRef.current = el;
                        }
                    };

                    return (
                        <li
                            key={`${title}-${width ?? ""}-${
                                titleAddon?.position ?? "none"
                            }`}
                            role="none"
                            className={clsx(
                                styles.chainItem,
                                isActive && styles.chainItemActive
                            )}
                            ref={chainItemRef}
                        >
                            <div
                                role="none"
                                onClick={handleChainLinkClick(index)}
                                data-testid={`${testId}-link-${index}`}
                                className={clsx(
                                    styles.flexRow,
                                    styles.chainLink,
                                    titleAddon?.position === "left" &&
                                        styles.chainLinkReversed
                                )}
                            >
                                <div
                                    className={styles.labelContainer}
                                    role="none"
                                >
                                    <div
                                        className={clsx(
                                            styles.flexRow,
                                            styles.buttonBase,
                                            styles.label,
                                            isActive && styles.labelActive
                                        )}
                                        onClick={handleChainLinkClick(index)}
                                        aria-hidden="true"
                                    >
                                        {truncateText(title)}
                                    </div>
                                    <button
                                        role="tab"
                                        type="button"
                                        aria-selected={isActive}
                                        tabIndex={isActive ? 0 : -1}
                                        onKeyDown={(e) =>
                                            handleKeyDown(e, index)
                                        }
                                        ref={(el) =>
                                            (chainLinkRefs.current[index] = el)
                                        }
                                        className={clsx(
                                            styles.flexRow,
                                            styles.buttonBase,
                                            styles.boldLabel,
                                            isActive && styles.boldLabelActive
                                        )}
                                    >
                                        {truncateText(title)}
                                    </button>
                                </div>
                                {titleAddon?.content}
                            </div>
                        </li>
                    );
                })}
            </ul>
        </FadeWrapper>
    );
};
