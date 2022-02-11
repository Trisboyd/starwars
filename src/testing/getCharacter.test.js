import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Card } from '../components/Card/card';

describe('searchCharacter', () => {
    it('should render character', async () => {

        render(<Card />);

        await userEvent.type(screen.getByRole('textbox'), 'luke')
        
        userEvent.click(screen.getByRole('button'))

        expect(screen.getByText(/luke/i)).toBeInTheDocument();
    })
})