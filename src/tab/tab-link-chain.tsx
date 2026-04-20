import clsx from "clsx";
import { useContext, useEffect, useRef } from "react";

import type { ResizeCallbackParams } from "../shared/fade-wrapper";
import { useDesignToken, useSafeMaxWidthMediaQuery } from "../theme";
import { Breakpoint } from "../theme/tokens";
import { TabContext } from "./tab-context";
import {
    BoldLabel,
    Chain,
    ChainItem,
    ChainLink,
    CustomFadeWrapper,
    Label,
    LabelContainer,
    tokens,
} from "./tab-link-chain.style";
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

    const mobileBreakpoint = useDesignToken(Breakpoint["sm-max"]);
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
                itemRef.style.setProperty(tokens.chainItem.width, width);
            } else {
                itemRef.style.removeProperty(tokens.chainItem.width);
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
        <CustomFadeWrapper
            onResize={handleResize}
            data-testid={testId}
            fadeColor={fadeColor}
        >
            <Chain
                role="tablist"
                className={clsx(fullWidthIndicatorLine && "fullWidthIndicator")}
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
                        <ChainItem
                            key={`${title}-${width ?? ""}-${
                                titleAddon?.position ?? "none"
                            }`}
                            role="none"
                            className={clsx(isActive && "active")}
                            ref={chainItemRef}
                        >
                            <ChainLink
                                role="none"
                                onClick={handleChainLinkClick(index)}
                                data-testid={`${testId}-link-${index}`}
                                className={clsx(
                                    titleAddon?.position === "left" &&
                                        "reversed"
                                )}
                            >
                                <LabelContainer role="none">
                                    <Label
                                        className={clsx(isActive && "active")}
                                        onClick={handleChainLinkClick(index)}
                                        aria-hidden="true"
                                    >
                                        {truncateText(title)}
                                    </Label>
                                    <BoldLabel
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
                                        className={clsx(isActive && "active")}
                                    >
                                        {truncateText(title)}
                                    </BoldLabel>
                                </LabelContainer>
                                {titleAddon?.content}
                            </ChainLink>
                        </ChainItem>
                    );
                })}
            </Chain>
        </CustomFadeWrapper>
    );
};
