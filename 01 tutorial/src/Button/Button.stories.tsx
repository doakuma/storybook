/** @jsx jsx */
import Button from './Button';
import { jsx, css } from '@emotion/core';

export default {
    title: 'components|Button',
    component: Button
};

export const button = () => {
    return <Button>BUTTON</Button>
}

button.story = {
    name: 'Default'
};

export const primaryButton = () => {
    return <Button>PRIMARY</Button>
};
export const secondaryButton = () => {
    return <Button theme="secondary">SECONDARY</Button>
};

export const tertiaryButton = () => {
    return <Button theme="tertiary">TERTIARY</Button>
};

const buttonWrapper = css`
  .description {
    margin-bottom: 0.5rem;
  }
  & > div + div {
    margin-top: 2rem;
  }
`;

export const sizes = () => {
    return (
        <div css={buttonWrapper}>
            <div>
                <div className="description">Small</div>
                <Button size="small">BUTTON</Button>
            </div>
            <div>
                <div className="description">Medium</div>
                <Button size="medium">BUTTON</Button>
            </div>
            <div>
                <div className="description">Big</div>
                <Button size="big">BUTTON</Button>
            </div>
        </div>
    );
};

export const disabled = () => {
    return (
        <div css={buttonWrapper}>
            <div>
                <Button disabled>PRIMARY</Button>
            </div>
            <div>
                <Button disabled theme="secondary">
                    SECONDARY
                </Button>
            </div>
            <div>
                <Button disabled theme="tertiary">
                    TERTIARY
                </Button>
            </div>
        </div>
    )
}

