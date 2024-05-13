import { styled } from '@pigment-css/react';

export const StyledWrapper = styled('div', { name: 'Error', slot: 'root' })(({ theme }) => ({
    padding: theme.spacing.md,
    backgroundColor: theme.color.secondary.main,
    borderRadius: theme.borderRadius
}));
  