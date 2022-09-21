import { describe, expect, it } from 'vitest';
import { render, screen } from 'solid-testing-library';
import { Router } from "@solidjs/router"

import Navbar from './Navbar';

describe('<Navbar />', () => {

    it("should assert some dummy assertion", () => {
      render(() => <Router><Navbar /></Router>);
      const homeLinkText = screen.getByText('Home');
      const aboutLinkText = screen.getByText('About');
      expect(homeLinkText).toBeInTheDocument();
      expect(aboutLinkText).toBeInTheDocument();
      
	});

    // test('it will render a link with text', () => {
    //     const { getByPlaceholderText, getByText, unmount,  } = render(() => (
    //       <Router><Navbar /></Router>
    //     ));
    //     expect(getByText('Home')).toBeInTheDocument();
    //     unmount();
    //   });

})