import { render } from '@testing-library/react';
import React from 'react';
import HomeRouteContainerComponent, { HomeProps } from './Home';

describe('Home', () => {
    const defaultProps: HomeProps = {};

    it('should render', () => {
        const props = { ...defaultProps };
        const { asFragment, queryByText } = render(<HomeRouteContainerComponent {...props} />);

        expect(asFragment()).toMatchSnapshot();
        expect(queryByText('Home')).toBeTruthy();
    });
});
