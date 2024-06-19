import styled from 'styled-components';

export const StyledTooltip = styled.div`
  position: relative;
  display: inline-flex;

  &::before,
  &::after {
    --scale: 0;
    --tooltip-color: rgba(0, 0, 0, 0.7);
    --arrow-size: 6px;

    position: absolute;
    bottom: -0.25rem;
    left: 50%;
    transform: translateX(-50%) translateY(var(--translate-y, 0))
      scale(var(--scale));
    transition: 150ms transform;
    transform-origin: top center;
    z-index: 900;
    max-width: 25rem;
  }

  &::before {
    --translate-y: calc(100% + var(--arrow-size));

    content: '${(props) => props.tooltip}';
    color: white;
    padding: 0.5rem;
    width: max-content;
    background: var(--tooltip-color);
    border-radius: 0.3rem;
    text-align: center;
  }

  &:hover::before,
  &:hover::after {
    --scale: 1;
  }

  &::after {
    --translate-y: var(--arrow-size);

    content: '';
    border: var(--arrow-size) solid transparent;
    border-bottom-color: var(--tooltip-color);
    transform-origin: bottom center;
  }
`;
