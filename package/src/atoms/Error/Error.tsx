import { StyledWrapper } from './Error.styled.ts';
import type { ErrorProps } from './Error.types.ts';

export const Error = (props: ErrorProps) => {
    const { heading, subheading, message } = props;

    return (
        <StyledWrapper>
            <strong>{heading}</strong><br />
            {subheading}<br />
            {message}
        </StyledWrapper>
    );
};
